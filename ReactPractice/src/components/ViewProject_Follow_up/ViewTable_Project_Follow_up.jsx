import React, { useState, useEffect } from 'react';
const ViewTable_Project_Follow_up = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [attendanceData, setAttendanceData] = useState([
      { name: '', task: 'Testing', values: [0, 0, 0, 0, 0, 0] },
      { name: '', task: 'Code', values: [0, 0, 0, 0, 0, 0] },
      { name: '', task: 'Design', values: [0, 0, 0, 0, 0, 0] },
      { name: '', task: 'Presentation', values: [0, 0, 0, 0, 0, 0] },
      { name: '', task: 'Report', values: [0, 0, 0, 0, 0, 0] },
      { name: '', task: 'Github', values: [0, 0, 0, 0, 0, 0] }
    ]);
    const [committeeDecision, setCommitteeDecision] = useState('');
  const [committeeDecision1, setCommitteeDecision1] = useState('');
    useEffect(() => {
        // Restore data from localStorage
        const storedTitle = localStorage.getItem('title');
        if (storedTitle) {
          setTitle(storedTitle);
        }
    
        const storedAttendanceData = JSON.parse(localStorage.getItem('attendanceData'));
        if (storedAttendanceData) {
          setAttendanceData(storedAttendanceData);
        }
        const storedDecision = localStorage.getItem('committeeDecision');
        if (storedDecision) {
          setCommitteeDecision(storedDecision);
        }
    
        const storedDecision1 = localStorage.getItem('committeeDecision1');
        if (storedDecision1) {
          setCommitteeDecision1(storedDecision1);
        }
      }, []);
      useEffect(() => {
        localStorage.setItem('committeeDecision', committeeDecision);
      }, [committeeDecision]);
    
      useEffect(() => {
        localStorage.setItem('committeeDecision1', committeeDecision1);
      }, [committeeDecision1]);
    
  return (
    <div>
        <table className="my-table" border="">
        <thead>
          <tr>
            
            <th><input
              type="date"
              value={date}
            /></th>
            <th>العنوان:</th>
            <th colSpan='5'>
              
            </th>
          </tr>
          <tr>
            <td></td>
            {attendanceData.map((row, task1) => (
              <td key={task1}>{row.task}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((row, taskIndex) => (
            <tr key={taskIndex}>
              <td>
              </td>
              {row.values.map((col, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="number"
                    value={col}
                    min={0}
                    max={100}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <form>
      <label htmlFor="committeeDecision">الملاحظات:</label>
      <textarea
        id="committeeDecision"
        className="committee-decision"
        value={committeeDecision}
        rows="5"
        cols="50"
      />
      <label htmlFor="committeeDecision1">المهام:</label>
      <textarea
        id="committeeDecision1"
        className="committee-decision"
        value={committeeDecision1}
        rows="5"
        cols="50"
      />
    </form>
    </div>
  )
}

export default ViewTable_Project_Follow_up