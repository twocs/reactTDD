describe('Appointment', () => {
  it('renders the customer\'s first name', () => {
      expect(document.body.textContent).toMatch('Tom');
  });
});