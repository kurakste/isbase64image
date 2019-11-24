const { isBase64Image } =require('./src/index');

test('Test', () => {
  expect(isBase64Image('/')).toBe('jpg');
  expect(isBase64Image('i')).toBe('png');
  expect(isBase64Image('R')).toBe('gif');
  expect(isBase64Image('U')).toBe('webp');
  expect(isBase64Image('Y')).toBe('webp');

})