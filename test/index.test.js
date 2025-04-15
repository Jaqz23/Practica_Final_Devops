const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Página Hola Mundo', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  test('Debe tener el título ¡Hola Mundo!', () => {
    const h1 = document.querySelector('h1');
    expect(h1.textContent).toBe('¡Hola Mundo!');
  });
});
