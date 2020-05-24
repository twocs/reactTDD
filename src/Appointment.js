import React from "react";

export const Appointment = ({ customer }) => 
  <div>{customer.firstName}</div>;

const unixTimestampToHours = timestamp => {
  const [h, m] = new Date(timestamp).toTimeString().split(":");
  return `${h}:${m}`;
}; 

export const AppointmentsDayView = ({ appointments }) => 
  <div id="appointments-day-view">
    <ol key="appointments">
      {appointments.map((appointment) => (
        <li key={appointment.startsAt}>{unixTimestampToHours(appointment.startsAt)}</li>
      )
      )}
    </ol>
    <div>
      <p>There are no appointments scheduled for today.</p>
    </div>
  </div>; 