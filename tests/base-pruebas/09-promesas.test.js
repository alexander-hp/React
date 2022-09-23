import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Prueba a 09-promesas', () => {
  // ? Si hay varias funciones asincronas entonces se ejecutaran en orden

  // ? Utilizamos done, para decirle que ya terminamos una prueba asincrona
  test('getHeroeByIdAsync debe retornar un heroe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      });
      // expect(true).toBe(false);
      // ? Aqui done le dice que se espera hasta que se realice lo anterior
      done();
    });
  });

  test('getHeroeByIdAsync debe retornar un error si heroe no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      // ? imprimimps el error
      console.log(error);
      expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
      // ? Aqui done le dice que se espera hasta que se realice lo anterior
      done();
    });
  });
});
