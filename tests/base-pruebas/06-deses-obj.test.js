import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {
  test('usContext debe retornar un objeto', () => {
    const testUsContext = {
      nombreClave: 'Captain',
      anios: 32,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    // console.log('testuscontext: ', testUsContext);

    const context = usContext({ clave: 'Captain', edad: 32 });
    // console.log('usContext: ', context);

    expect(testUsContext).toEqual(context);
  });
});
