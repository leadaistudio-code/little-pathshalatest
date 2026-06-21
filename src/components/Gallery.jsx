import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export default function Gallery() {
  const { isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('All');
  const [dbImages, setDbImages] = useState([]);
  
  // Admin Upload State
  const [uploading, setUploading] = useState(false);
  const [uploadCategory, setUploadCategory] = useState('Campus');
  const [message, setMessage] = useState('');
  
  const tabs = ['All', 'Campus', 'Activities', 'Events'];

  const fallbackImages = [
    { src: '/assets/activity.jpg', category: 'Activities' },
    { src: '/assets/teacher.jpg', category: 'Campus' },
    { src: '/assets/poster1.jpg', category: 'Events' },
    { src: '/assets/poster2.jpg', category: 'Events' },
    { src: '/assets/minion.jpg', category: 'Events' }
  ];

  const fetchImages = async () => {
    if (!isSupabaseConfigured) return;
    const { data, error } = await supabase
      .from('gallery_images')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (!error && data && data.length > 0) {
      setDbImages(data);
    } else if (data && data.length === 0) {
      setDbImages([]); // Handle empty state correctly
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async (e) => {
    try {
      setUploading(true);
      setMessage('');
      if (!e.target.files || e.target.files.length === 0) return;
      
      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage.from('gallery').upload(filePath, file);
      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage.from('gallery').getPublicUrl(filePath);

      const { error: dbError } = await supabase.from('gallery_images').insert([
        { image_url: publicUrl, category: uploadCategory, file_path: filePath }
      ]);
      
      if (dbError) throw dbError;
      
      setMessage('Upload successful!');
      fetchImages();
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setUploading(false);
      e.target.value = null;
    }
  };

  const handleDelete = async (id, filePath) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;
    try {
      if (filePath) await supabase.storage.from('gallery').remove([filePath]);
      const { error } = await supabase.from('gallery_images').delete().eq('id', id);
      if (error) throw error;
      fetchImages();
    } catch (error) {
      alert(`Error deleting: ${error.message}`);
    }
  };

  // If there are db images, or if it's an admin (who needs to see the empty state to upload), use DB images. Otherwise fallback.
  const currentImages = (dbImages.length > 0 || isAdmin) ? dbImages : fallbackImages;

  const filteredImages = activeTab === 'All' 
    ? currentImages 
    : currentImages.filter(img => img.category === activeTab);

  return (
    <section id="gallery" className="gallery-section container">
      <div className="section-header text-center">
        <span className="section-tag">Campus Tour</span>
        <h2>Life at Little Pathshala</h2>
        <p>A glimpse into our vibrant, safe, and playful learning environment.</p>
      </div>

      {isAdmin && (
        <div style={{ background: '#f3f4f6', padding: '24px', borderRadius: '12px', marginBottom: '32px', border: '2px dashed #d1d5db' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Admin Controls: Upload New Image</h3>
          {message && <div style={{ padding: '8px', background: message.includes('Error') ? '#fee2e2' : '#dcfce7', color: message.includes('Error') ? '#dc2626' : '#166534', borderRadius: '6px', marginBottom: '16px', fontSize: '14px' }}>{message}</div>}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <label style={{ marginRight: '8px', fontWeight: '500', fontSize: '14px' }}>Category:</label>
              <select 
                value={uploadCategory} 
                onChange={e => setUploadCategory(e.target.value)}
                style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
              >
                <option value="Campus">Campus</option>
                <option value="Activities">Activities</option>
                <option value="Events">Events</option>
              </select>
            </div>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleUpload} 
              disabled={uploading}
              style={{ padding: '8px', background: '#fff', border: '1px solid #ccc', borderRadius: '6px' }}
            />
            {uploading && <span style={{ fontSize: '14px', color: '#6b7280' }}>Uploading...</span>}
          </div>
        </div>
      )}

      <div className="gallery-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '8px 20px',
              borderRadius: '100px',
              border: 'none',
              background: activeTab === tab ? 'var(--purple-600)' : 'var(--gray-200)',
              color: activeTab === tab ? '#fff' : 'var(--gray-700)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((img, i) => (
          <div key={img.id || i} className="gallery-item" style={{ position: 'relative' }}>
            <img src={img.image_url || img.src} alt={`Little Pathshala preschool & daycare in Faridabad — ${img.category} photo ${i + 1}`} loading="lazy" />
            
            {isAdmin && img.id && (
              <button 
                onClick={() => handleDelete(img.id, img.file_path)}
                style={{ position: 'absolute', top: '8px', right: '8px', background: '#dc2626', color: '#fff', border: 'none', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', zIndex: 10 }}
                title="Delete Image"
              >
                ×
              </button>
            )}
          </div>
        ))}
        {filteredImages.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#6b7280' }}>
            No images in this category yet. {isAdmin && "Upload some using the controls above!"}
          </div>
        )}
      </div>
    </section>
  );
}
