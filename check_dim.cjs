const Jimp = require('jimp');

Jimp.read('public/assets/minion_white.png')
  .then(img => {
    console.log(`Width: ${img.bitmap.width}, Height: ${img.bitmap.height}`);
  })
  .catch(console.error);
