import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Decision =  ({handleSend, accept}) => {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [committeeDecision, setCommitteeDecision] = useState(() => localStorage.getItem('committeeDecision') || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log('qqqq',committeeDecision);
  const handleDateChange = (event) => {
    const value = event.target.value;
    setDate(value);
    localStorage.setItem('date', value);
  };
console.log('date',date);
  const handleCommitteeDecisionChange = (event) => {
    const value = event.target.value;
    setCommitteeDecision(value);
    localStorage.setItem('committeeDecision', value);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('URL_HERE', {
        date,
        committeeDecision
      });
      // قم بمعالجة الاستجابة هنا
    } catch (error) {
      console.error('Error submitting data:', error);
    }
    setIsSubmitting(false);
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
        onChange={handleCommitteeDecisionChange}
        rows="5"
        cols="50"
      />
      {committeeDecision===''&& accept && <p className='error'>الرجاء ملء الحقل.</p>}
      <br />
      
    </form>
  );
}

export default Decision;
