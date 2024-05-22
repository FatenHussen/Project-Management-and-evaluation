import React, { useState, useEffect } from 'react';
import axios from 'axios'; // استيراد مكتبة Axios
const ViewTableSuperviser = () => {
  const [supervisors, setSupervisors] = useState([
    { id: 1, supervisor: '', specialization: '' },
    { id: 2, supervisor: '', specialization: '' },
    { id: 3, supervisor: '', specialization: '' }
  ]);
  return (
    <div>
    <table className="my-table" border="">
      <thead>
        <tr>
          <th className='tr'>أسم المشرف:</th>
          <th>الاختصاص</th>
        </tr>
      </thead>
      <tbody>
        {supervisors.map((supervisor, index) => (
          <tr key={index}>
            <td>
              <input
                type="text"
                value={supervisor.supervisor}
              />
            </td>
            <td>
              <select
                value={supervisor.specialization}
              >
                <option value="">اختر الاختصاص</option>
                <option value="هندسة برمجيات">هندسة برمجيات</option>
                <option value="شبكات">شبكات</option>
                <option value="ذكاء صناعي">ذكاء صناعي</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default ViewTableSuperviser