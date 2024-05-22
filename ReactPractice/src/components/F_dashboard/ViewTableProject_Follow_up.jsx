import React from 'react'
import { useState ,useEffect } from 'react'
const ViewTableProject_Follow_up = () => {
    const[data3, setData3]=useState([]);
    useEffect(() => {
        fetchDataFromBackend();
      }, []);
    
      const fetchDataFromBackend = async () => {
        try {
          // اجلب البيانات من الباك إند وقم بتعيينها في الحالة المحلية
          const response = await fetch('URL_TO_YOUR_BACKEND_ENDPOINT');
          const jsonData = await response.json();
          setData3(jsonData);
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
          {data3.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.projectName}</td>
              <td className='icon-eye'><FaEye /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewTableProject_Follow_up