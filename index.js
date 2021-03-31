const sharp = require('sharp');
const fs = require('fs')

fs.readdir('./img',async (err, files) => {
  await Promise.all(files.map(async file => {
    const name = file.split('.')[0];
    await sharp(`img/${file}`)
      .png()
      .toFile(`output/${name}.png`)
  }));
});

