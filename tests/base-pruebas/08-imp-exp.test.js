import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/base-pruebas/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar heroe por id', () => {
    const id = 1;
    const hero = getHeroeById(id);

    console.log(hero);
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById debe retornar undefined si no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);
    console.log(hero);

    // ? Aqui decimos que el heroe debe de ser de tipo: undefined, NULL o false
    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar arreglo de DC: 3', () => {
    const owner = 'DC';
    const heroes1 = getHeroesByOwner(owner);
    console.log(heroes1);
    console.log(heroes1.length);

    const heroesDC = [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ];

    // ? Checando que el tamaño sea de 3
    expect(heroes1).toHaveLength(3);
    // ? que sea igual el arrray
    expect(heroes1).toEqual(heroesDC);
    // ? otra forma de checar que nuestros heroes son los indicados
    expect(heroes1).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  test('getHeroesByOwner debe retornar arreglo de Marvel: 2', () => {
    const owner = 'Marvel';
    const heroes1 = getHeroesByOwner(owner);
    console.log(heroes1);
    // ? Checamos la longitud del arreglo
    console.log(heroes1.length);

    const heroesMarvel = [
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' },
    ];

    // ? Checando que el tamaño sea de 2
    expect(heroes1).toHaveLength(2);
    // ? que sea igual el arrray
    expect(heroes1).toEqual(heroesMarvel);
    // ? otra manera de checar que si recibimos los heroes correctos
    expect(heroes1).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
