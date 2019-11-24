module.exports = {
  isBase64Image: (input) => {
    const firstChar = input.charAt(0);
    const matrix = {
      '/': 'jpg',
      'i':'png',
      'R': 'gif',
      'U': 'webp'
    }

    // switch (input.chartAt(0)) {
    //   case '/':
    //     out = 'jpg';
    //     break;
    //   case  

    // }

    return matrix[firstChar];
  }
}