import React, { useState, useEffect } from 'react';

const Decision2 = () => {
  const [committeeDecision, setCommitteeDecision] = useState('');
  const [committeeDecision1, setCommitteeDecision1] = useState('');

  // استعادة القيم من LocalStorage عند التحميل الأولي للصفحة
  useEffect(() => {
    const storedDecision = localStorage.getItem('committeeDecision');
    if (storedDecision) {
      setCommitteeDecision(storedDecision);
    }

    const storedDecision1 = localStorage.getItem('committeeDecision1');
    if (storedDecision1) {
      setCommitteeDecision1(storedDecision1);
    }
  }, []);

  // حفظ القيم في LocalStorage عند كل تغيير
  useEffect(() => {
    localStorage.setItem('committeeDecision', committeeDecision);
  }, [committeeDecision]);

  useEffect(() => {
    localStorage.setItem('committeeDecision1', committeeDecision1);
  }, [committeeDecision1]);

  const handleCommitteeDecisionChange = (event) => {
    setCommitteeDecision(event.target.value);
  };

  const handleCommitteeDecisionChange2 = (event) => {
    setCommitteeDecision1(event.target.value);
  };

  return (
    <form>
      <label htmlFor="committeeDecision">الملاحظات:</label>
      <textarea
        id="committeeDecision"
        className="committee-decision"
        value={committeeDecision}
        onChange={handleCommitteeDecisionChange}
        rows="5"
        cols="50"
      />
      <label htmlFor="committeeDecision1">المهام:</label>
      <textarea
        id="committeeDecision1"
        className="committee-decision"
        value={committeeDecision1}
        onChange={handleCommitteeDecisionChange2}
        rows="5"
        cols="50"
      />
    </form>
  );
};

export default Decision2;
