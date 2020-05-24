import React from 'react';
import ReactDOM from 'react-dom';

import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  it('renders the customer\'s first name', () => {
      const customer = { firstName: 'Tom' };
      const container = document.createElement('div');
      
      ReactDOM.render(<Appointment customer={ customer } />, container);
      expect(container.textContent).toMatch('Tom');
  });
});

describe('Appointment', () => {
    it('renders the customer\'s first name', () => {
        const customer = { firstName: 'Michael' };
        const container = document.createElement('div');
      
        ReactDOM.render(<Appointment customer={ customer } />, container);
        expect(container.textContent).toMatch('Michael');
    });
  });