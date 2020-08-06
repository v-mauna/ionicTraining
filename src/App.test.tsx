import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { weather } from './util';

it('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

it('contains three tabs', () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll('ion-tab-button').length).toEqual(3);
});

it.each([
  [0, 'Current Weather'],
  [1, 'Forecast'],
  [2, 'UV Index']
])('contains the proper text for tab %i', (tab, text) => {
  const { container } = render(<App />);
  expect(container.querySelectorAll('ion-tab-button')[tab as number].textContent).toEqual(text);
});

it('renders consistently', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});


let spy: any;
beforeAll(() => {
  spy = jest.spyOn(weather, 'current').mockImplementation(() =>
      Promise.resolve({
        temperature: 280.32,
        condition: 300,
        date: new Date(1485789600 * 1000),
      } as any),
  );
});

afterAll(() => spy.mockReset());