import { screen, render } from '@testing-library/react';
import { Header } from '../../components/Header';

it ('Should render the header', () => {
  render(<Header />);
  const component = screen.getByTestId('header');
  expect(component).toBeInTheDocument();
})

it('Should render the date', () => {
  render(<Header />);
  const date = new Date().toString().split(" ").slice(0, 4).join(" ");
  const text = screen.getByTestId('date');

  expect(date).toBe(text.textContent);
})

it('Should render the house icon', () => {
  render(<Header />);
  const houseIcon = screen.getByTestId('house-icon');
  expect(houseIcon).toBeInTheDocument();
})

it('Should render the profile icon', () => {
  render(<Header />);
  const profileIcon = screen.getByTestId('profile-icon');
  expect(profileIcon).toBeInTheDocument();
})