import React from "react";
import ReactDOM from "react-dom";

import { Appointment } from "../src/Appointment";

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