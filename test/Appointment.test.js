import React from 'react';
import ReactDOM from 'react-dom';

import { Appointment } from '../src/Appointment';

let customer, container;

beforeEach(() => {
    container = document.createElement('div');
})

describe('Appointment', () => {
  it('renders the customer\'s first name', () => {
      customer = { firstName: 'Tom' };
      
      ReactDOM.render(<Appointment customer={ customer } />, container);
      expect(container.textContent).toMatch('Tom');
  });
});

describe('Appointment', () => {
    it('renders the customer\'s first name', () => {
        customer = { firstName: 'Michael' };
      
        ReactDOM.render(<Appointment customer={ customer } />, container);
        expect(container.textContent).toMatch('Michael');
    });
  });