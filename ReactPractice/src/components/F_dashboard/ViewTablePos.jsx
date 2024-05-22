import React, { useState, useEffect } from 'react';
import { FaEye } from "react-icons/fa6";
const ViewTablePos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // قم بجلب البيانات من الباك إند هنا
    fetchDataFromBackend();
  }, []);

  const fetchDataFromBackend = async () => {
    try {
      // اجلب البيانات من الباك إند وقم بتعيينها في الحالة المحلية
      const response = await fetch('URL_TO_YOUR_BACKEND_ENDPOINT');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='container--qt'>
      <table className="my-table" border="">
        <thead>
          <tr>
            <th>id</th>
            <th>اسم المشروع</th>
            <th className='icon-eye'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.projectName}</td>
              <td className='icon-eye'><FaEye /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTablePos;
