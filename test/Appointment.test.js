import React from 'react';
import ReactDOM from 'react-dom';

describe('Appointment', () => {
  it('renders the customer\'s first name', () => {
      const customer = { firstName: 'Tom' };
      const component = <Appointment customer={customer} />;
      
      const container = document.createElement('div');
      document.body.appendChild(container);
      
      ReactDOM.render(component, container);
      expect(document.body.textContent).toMatch('Tom');
  });
});