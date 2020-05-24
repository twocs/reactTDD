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
  let appointments;
  let today;

  beforeEach(() => {
    container = document.createElement("div"); 
    today = new Date();
    appointments = [
      { startsAt: today.setHours(12, 0) },
      { startsAt: today.setHours(13, 0) }
    ];
  });

  const render = (component) => ReactDOM.render(component, container);

  it("renders a div with the correct id", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector("div#appointments-day-view")).not.toBeNull();
  });

  it("renders multiple appointments in an ol element", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelector("ol").children).toHaveLength(2);
  });

  it("renders each appointment in an <li>", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll("li")).toHaveLength(2);
    expect(
      container.querySelectorAll("li")[0].textContent
    ).toEqual("12:00");
    expect(
      container.querySelectorAll("li")[1].textContent
    ).toEqual("13:00");
  });

  it("initially displays a message saying that there are no appointments", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.textContent).toMatch("There are no appointments scheduled for today.");
  });
});