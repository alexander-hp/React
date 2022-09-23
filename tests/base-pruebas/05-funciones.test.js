import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();
    console.log(user);
    // ? No puede ser de forma to be porque compara los espacios de memoria
    // ? cuando es con objetos y los objetos no tienen el mismo lugar de memoria
    // expect(testUser).toBe(user);

    // *Comparando los objetos, tambien pudimos utilizar toStrictEqual
    expect(testUser).toEqual(user);
  });

  test('getUsuarioActivo debe de retornar un onjeto', () => {
    const name = 'Alexander';
    const testUsuarioActivo = {
      uid: 'ABC567',
      username: name,
    };

    // console.log('TestsUsuario', testUsuarioActivo);
    const UsuarioActivo = getUsuarioActivo(name);
    // console.log('Usuario: ', UsuarioActivo);

    expect(testUsuarioActivo).toEqual(UsuarioActivo);
  });
});
