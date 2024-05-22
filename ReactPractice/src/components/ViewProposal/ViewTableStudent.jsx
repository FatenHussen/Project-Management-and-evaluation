import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewTableStudent = () => {
  const [students, setStudents] = useState(() => {
    const localData = localStorage.getItem('students');
    return localData ? JSON.parse(localData) : [
      { name: '', role: '' },
      { name: '', role: '' },
      { name: '', role: '' },
      { name: '', role: '' },
      { name: '', role: '' },
    ];
  });
  return (
   <div>
    <form>
    <table className="my-table" border="">
      <thead>
        <tr className='tr'>
          <th>أسم الطالب:</th>
          <th>دور الطالب في المشروع</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>
              <input
                type="text"
                value={student.name}
              />
            </td>
            <td>
              <input
                type="text"
                value={student.role}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </form>
  </div>
  )
}

export default ViewTableStudent