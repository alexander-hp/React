describe('Pruebas en <DemoComponent>', () => {
  test('Demo de prueba', () => {
    // * 1.- Inicializacion
    const message1 = 'Hola Mundo';
    // * 2.- Estimulo
    // ? Trim solo quita los espacios sobrantes
    const message2 = message1.trim();
    // * 3.- Observar el comportamiento, lo esperado
    // ? toBe: debe ser, en este caso
    expect(message1).toBe(message2);
  });
});
