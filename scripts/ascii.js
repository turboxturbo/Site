async function image_to_ascii(imageurl) {
    const image = new Image()
    image.src = imageurl
    await new Promise(resolve => image.onload = resolve);
    
    const ascii_chars = ' .,:+*?%$#@';
    const width = 100;
    const aspectCorrection = 0.5;
    const height = 75;//Math.floor((image.height / image.width) * width * aspectCorrection);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, width, height);

    const { data } = ctx.getImageData(0, 0, width, height);

    let ascii = '';
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const x = (i * width + j) * 4;
            const r = data[x], g = data[x + 1], b = data[x + 2];
            const brightness = (r + g + b) / 3;
            const charindex = Math.floor((brightness / 255) * (ascii_chars.length - 1));
            ascii += ascii_chars[ascii_chars.length - 1 - charindex];
        }
        ascii += '\n';
    }

    return ascii;
}