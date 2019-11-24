module.exports = {
  isBase64Image: (input) => {
    if (typeof(input)!=='string') throw new Error('Input has to be a string.');
    const firstChar = input.charAt(0);
    const matrix = {
      '/': 'jpg',
      'i':'png',
      'R': 'gif',
      'U': 'webp',
      'S': 'tiff',
    }
    const result = matrix[firstChar] || null;
    return result;
  }
}