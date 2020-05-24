import React from 'react';
import ReactDOM from 'react-dom';

import { Appointment } from '../src/Appointment';

let customer, container;

describe('Appointment', () => {
  it('renders the customer\'s first name', () => {
      customer = { firstName: 'Tom' };
      container = document.createElement('div');
      
      ReactDOM.render(<Appointment customer={ customer } />, container);
      expect(container.textContent).toMatch('Tom');
  });
});

describe('Appointment', () => {
    it('renders the customer\'s first name', () => {
        customer = { firstName: 'Michael' };
        container = document.createElement('div');
      
        ReactDOM.render(<Appointment customer={ customer } />, container);
        expect(container.textContent).toMatch('Michael');
    });
  });