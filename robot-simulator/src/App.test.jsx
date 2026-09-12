import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './components/App';

function robotIndex(container) {
 return [...container.querySelectorAll('.cell')].findIndex(cell => cell.classList.contains('robot'));
}

test('renders original grid and logo, and turns without moving', () => {
 const {container} = render(<App />);
 expect(container.querySelectorAll('.cell')).toHaveLength(25);
 expect(container.querySelector('svg.logo')).not.toBeNull();
 expect(robotIndex(container)).toBe(0);
 fireEvent.click(screen.getByRole('button', {name: '→'}));
 expect(robotIndex(container)).toBe(0);
 expect(container.querySelector('.robot')).toHaveTextContent('→');
 fireEvent.click(screen.getByRole('button', {name: 'Move'}));
 expect(robotIndex(container)).toBe(1);
});

test('preserves movement and every grid boundary', () => {
 const {container} = render(<App />);
 for (const [direction, expected] of [['↑',0], ['→',4], ['↓',24], ['←',20], ['↑',0]]) {
  fireEvent.click(screen.getByRole('button', {name: direction}));
  for(let i=0;i<6;i++) fireEvent.click(screen.getByRole('button', {name:'Move'}));
  expect(robotIndex(container)).toBe(expected);
  expect(container.querySelectorAll('.robot')).toHaveLength(1);
 }
});
