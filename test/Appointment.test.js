import React from "react";
import ReactDOM from "react-dom";

import { Appointment, AppointmentsDayView } from "../src/Appointment";

let customer, container;

beforeEach(() => {
  container = document.createElement("div");
});

const render = component => ReactDOM.render(component, container);

describe("Appointment", () => {
  it("renders the customer's first name", () => {
    customer = { firstName: "Tom" };
      
    render(<Appointment customer={ customer } />);
    expect(container.textContent).toMatch("Tom");
  });
});

describe("Appointment", () => {
  it("renders the customer's first name", () => {
    customer = { firstName: "Michael" };
      
    render(<Appointment customer={ customer } />);
    expect(container.textContent).toMatch("Michael");
  });
});

describe("AppointmentsDayView", () => {
    let container;
    
    beforeEach(() => {
       container = document.createElement('div'); 
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a div with the correct id', () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
    });
});