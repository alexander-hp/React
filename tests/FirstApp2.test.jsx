/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import FirstApp2 from '../src/FirstApp2';

describe('Pruebas en <FirstApp>', () => {
  test('Match con snapshot', () => {
    const title = 'Hola soy el titulo';
    // *Importamos y renderizamos nuestro componente
    const { container } = render(<FirstApp2 title={title} />);
    // * creando y comparando snapshot
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el titulo', () => {
    const title = 'Hola soy el titulo';
    // ? Screen es todo lo que contiene nuestro componente
    render(<FirstApp2 title={title} />);
    // ? Imprimimos lo que tiene screen, que sera nuestro html con el body y demas
    screen.debug();
    // ? checamos que exista el titulo
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('debe de mostrar el titulo en un h1', () => {
    const title = 'Hola soy el titulo';
    // ? Screen es todo lo que contiene nuestro componente
    render(<FirstApp2 title={title} />);
    // ? aqui checamos si hay un h2 que sea igual a title
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(title);
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const subtitle = 'soy el subtitulo';
    render(<FirstApp2 subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
