import { render, screen, fireEvent } from '@testing-library/react'
import Confessions from './Confessions'


test('full Confessions rendering', () => {
    render(<Confessions />)
    expect(screen.getByText(/It's very difficult /i)).toBeInTheDocument()
  })

  test('rendering the form', () => {
    render(<Confessions />)
    expect(screen.getByText(/Reason:/i)).toBeInTheDocument()
  })

  test('calls handler function and passes correct paramaters', () => {
	const mock = jest.fn();
	const component = render(<Confessions onClick={mock("hello")} />);
	fireEvent(component.getByRole('button'),new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
	  }),
	)
	expect(mock.mock.calls[0][0]).toBe("hello");
});

it('Renders with a className disabled', () => {
    const { container } = render(<Confessions/>)
    expect(container.getElementsByClassName('disabled').length).toBe(1);
});






