const { isBase64Image } = require('../src/index');
const {
  jpgBase64String,
  gifBase64String,
  pngBase64string,
  tiffBase64String,
} = require('./imageStrings');


test('Мain test suit', () => {
  expect(isBase64Image('/')).toBe('jpg');
  expect(isBase64Image('i')).toBe('png');
  expect(isBase64Image('R')).toBe('gif');
  expect(isBase64Image('U')).toBe('webp');
  expect(isBase64Image('Y')).toBe(null);
  expect(() => {
    isBase64Image({ a: 1 });
  }).toThrowError(/string/);
});


test('Test suit with files', () => {
  expect(isBase64Image(jpgBase64String)).toBe('jpg');
  expect(isBase64Image(pngBase64string)).toBe('png');
  expect(isBase64Image(gifBase64String)).toBe('gif');
  expect(isBase64Image(tiffBase64String)).toBe('tiff');
  expect(isBase64Image('tifBase64String')).toBe(null);

});
