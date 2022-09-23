import { fireEvent, getByText, render, screen } from '@testing-library/react';
import CounterApp from '../src/CounterApp';

describe('Pruebas en <CounterApp>', () => {
  test('Debe de hacer match con el snapshot', () => {
    // *Importamos y renderizamos nuestro componente
    const { container } = render(<CounterApp />);
    // * creando y comparando snapshot
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el valor inicial de 100 <CounterApp value={100}> ', () => {
    render(<CounterApp value={100} />);
    screen.debug();
    expect(screen.getByText(100)).toBeTruthy();
  });

  test('Debe de incrementar con el boton +1', () => {
    render(<CounterApp value={100} />);
    // ? FireEvent nos da acceso a todos los eventos que tenemos en el DOM, como hacer click
    fireEvent.click(screen.getByText('+1'));
    // ? ya que se dio click en la linea anterior, ahora checamos que deba de ser 101
    expect(screen.getByText('101')).toBeTruthy();
  });

  test('Debe de decrementar con el boton -1', () => {
    render(<CounterApp value={100} />);
    // ? FireEvent nos da acceso a todos los eventos que tenemos en el DOM, como hacer click
    fireEvent.click(screen.getByText('-1'));
    // ? ya que se dio click en la linea anterior, ahora checamos que deba de ser 99
    expect(screen.getByText('99')).toBeTruthy();
    // TODO podemos checar el estado de la pantalla con screen.debug()
    screen.debug();
  });

  test('Debe de funcionar el boton de reset', () => {
    render(<CounterApp value={100} />);
    // ? FireEvent nos da acceso a todos los eventos que tenemos en el DOM, como hacer click
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));

    // ? tenemos que tener cuidado pues getByText es keysentity, lo reseteamos
    // fireEvent.click(screen.getByText('Reset'));

    // ? otra manera para poder reconocer un boton, obteniendo el role y nombre que le pusimos
    // ? tiene ese name porque nosotros se lo asignamos con aria label
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    screen.debug();

    expect(screen.getByText(100)).toBeTruthy();
  });
});
