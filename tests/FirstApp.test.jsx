/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import FirstApp from '../src/FirstApp';

describe('Pruebas en <FirstApp>', () => {
  test('debe hacer match con el snapshot', () => {
    // ? estamos renderizando el componente FirstApp
    const title = 'TITULO';
    // ? render nos devolverar todo el nodo de html, como el DOM
    const { container } = render(<FirstApp title={title} />);
    // console.log(container);
    /* 
    ? si ejecutamos lo siguiente, nos creara una carpeta llamada __snapshots__
    ? el cual nos dara todo lo que nosotros retornamos en el div o fragment
    * Esto nos ayuda a saber si algo cambio en nuestro componente desde la ultima
    * vez que realizamos nuestro snapshot, si lo queremos actualizar podemos correr
    * de nuevo el test y precionar u
    */
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar un titulo en h2', () => {
    const title = 'TITULO';
    const { container, getByText } = render(<FirstApp title={title} />);

    // ? Aqui solo decimos que Props.title: TITULO debe existir en ese componente
    expect(getByText('Props.title: ' + title)).toBeTruthy();

    // ? Estamos obteniendo un h2 en el DOM
    const h2 = container.querySelector('h2');
    console.log(h2.innerHTML);

    // ? Aqui checamos que deba de contener TITULO n el h2 que obtuvimos
    expect(h2.innerHTML).toContain(title);
  });

  test('Debe de mostrar el titulo por un id', () => {
    const title = 'TITULO';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    // ? Checamos que un tag tenga como id test-title, si existe
    expect(getByTestId('test-title')).toBeTruthy();
    // ? que contenga el texto que tenemos en ese id
    expect(getByTestId('test-title').innerHTML).toContain(title);
    // ? Tambien lo podriamos hacer con toBe
  });

  test('Debe de mostrar el subtitle enviado por props', () => {
    const title = 'TITULO';
    const subtitle = 'Soy un SUBTITULO';
    const { container, getAllByText } = render(
      // ?Enviamos los props
      <FirstApp title={title} subtitle={subtitle} />
    );

    console.log(getAllByText(subtitle));

    // ? Checamos cuantos coinciden con ese texto, nos lo retorna en arreglo de htmlElement
    // ? tiene que ser de 2 en este caso
    expect(getAllByText(subtitle).length).toBe(2);
  });
});
