import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import Seo from '../seo/Seo';

export default function AdminPage() {
  const { session, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // If they are already logged in, send them straight to the gallery!
    if (session) {
      navigate('/gallery');
    }
  }, [session, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
      setLoading(false);
    }
    // On success, the AuthContext will update, session will change, and the useEffect will redirect them.
  };

  if (!isSupabaseConfigured) {
    return (
      <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center' }}>
        <h2>Setup Required</h2>
        <p>You need to configure your Supabase environment variables before accessing the admin login.</p>
      </div>
    );
  }

  if (authLoading) return <div style={{ paddingTop: '120px', textAlign: 'center' }}>Loading...</div>;

  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '400px', margin: '0 auto' }}>
      <Seo title="Admin Login" path="/admin" noindex />
      <div style={{ background: '#fff', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>Admin Login</h2>
        <p style={{ textAlign: 'center', marginBottom: '24px', color: 'var(--gray-600)' }}>Log in to edit the gallery directly on the website.</p>
        
        {message && <div style={{ padding: '12px', background: '#fee2e2', color: '#dc2626', borderRadius: '6px', marginBottom: '16px' }}>{message}</div>}
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required 
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required 
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }} disabled={loading}>
            {loading ? 'Logging in...' : 'Login & Edit Gallery'}
          </button>
        </form>
      </div>
    </div>
  );
}
