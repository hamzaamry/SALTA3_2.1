import React, { useState } from 'react';
//import './DatePicker.css'; // Create a CSS file for styling

const TimeSetter = () => {
  // Sample data for days, hours, and minutes
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  // State to hold selected values
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);

  return (
    <div className="date-picker">
      <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select value={selectedHour} onChange={(e) => setSelectedHour(e.target.value)}>
        {hours.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
      <select value={selectedMinute} onChange={(e) => setSelectedMinute(e.target.value)}>
        {minutes.map((minute) => (
          <option key={minute} value={minute}>
            {minute}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSetter;
