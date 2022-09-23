import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
  test('debe de retornar un string y un numero ', () => {
    // ? desestructuramos el contenido que nos da
    const [letters, numbers] = retornaArreglo();
    // console.log(retorno);
    // *Expect tambien detecta el tipo, por ejemplo si es string o number
    // ? Comparando si letters = ABC
    expect(letters).toBe('ABC');
    // ? Comparando si numbers = 123
    expect(numbers).toBe(123);

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');
    console.log(typeof letters);
    console.log(typeof numbers);

    // ? Aqui decimos que simplemente letters debe de ser de tipo string
    // ? sin importar que contenga el mensaje, solo el tipado
    expect(letters).toEqual(expect.any(String));
  });
});
