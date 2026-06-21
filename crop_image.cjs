const Jimp = require('jimp');

Jimp.read('public/assets/minion_white.png')
  .then(img => {
    // Crop the minion from the middle to remove the text at the top and bottom
    img.crop(200, 260, 680, 560);
    img.write('public/assets/minion_cropped.png', () => {
      console.log('Cropped successfully.');
    });
  })
  .catch(console.error);
