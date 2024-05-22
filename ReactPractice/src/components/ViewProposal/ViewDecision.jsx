import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ViewDecision = () => {
    const [date, setDate] = useState('');
    const [committeeDecision, setCommitteeDecision] = useState(() => localStorage.getItem('committeeDecision') || '');
    const handleDateChange = (event) => {
        const value = event.target.value;
        setDate(value);
      }; 
  return (
    <form>
    <label htmlFor="date">التاريخ:</label>
    <input
      type="date"
      id="date"
      value={date}
      onChange={handleDateChange}
    />
    <br />
    <label htmlFor="committeeDecision">قرار لجنة تقييم المشاريع:</label>
    <textarea
      id="committeeDecision"
      className="committee-decision"
      value={committeeDecision}
      rows="5"
      cols="50"
    />
    <br />
  </form>
  )
}

export default ViewDecision