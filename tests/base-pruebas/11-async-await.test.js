import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Prueba de 11-async-await', () => {
  test('getImagen deberia retornar url de img', async () => {
    const url = await getImagen();
    console.log(url);
  });
});
