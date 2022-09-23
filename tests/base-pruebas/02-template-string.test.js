// * importamos el componente que vamos a testear
import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-String', () => {
  test('getSaludo debe retornar Hola Alexander', () => {
    const name = 'Alexander';
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`);
  });
});
