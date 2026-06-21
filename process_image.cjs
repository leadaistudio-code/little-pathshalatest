const Jimp = require('jimp');

Jimp.read('public/assets/minion.jpg')
  .then(image => {
    // Assuming top-left pixel is the solid background color
    const bgColorInt = image.getPixelColor(0, 0);
    const bgRgba = Jimp.intToRGBA(bgColorInt);
    
    const threshold = 50; 
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      const distance = Math.sqrt(
        Math.pow(r - bgRgba.r, 2) + 
        Math.pow(g - bgRgba.g, 2) + 
        Math.pow(b - bgRgba.b, 2)
      );
      
      if (distance < threshold) {
        this.bitmap.data[idx + 0] = 255; // R
        this.bitmap.data[idx + 1] = 255; // G
        this.bitmap.data[idx + 2] = 255; // B
        this.bitmap.data[idx + 3] = 255; // Alpha
      }
    });
    
    image.write('public/assets/minion_white.png', () => {
      console.log('Image successfully updated to white background.');
    });
  })
  .catch(err => {
    console.error(err);
  });
