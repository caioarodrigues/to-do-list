import { screen, render } from '@testing-library/react';
import { Header } from '../../components/Header';

it ('Should render the header', () => {
  render(<Header />);
  const mensage = screen.getByTestId('header');
  expect(mensage).toBeInTheDocument();
})