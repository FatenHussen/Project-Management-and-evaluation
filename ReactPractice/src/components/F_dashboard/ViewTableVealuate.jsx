import React from 'react'
import { useState ,useEffect } from 'react';
import { FaEye } from "react-icons/fa6";
const ViewTableVealuate = () => {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    fetchDataFromBackend1();
  }, []);

  const fetchDataFromBackend1 = async () => {
    try {
      const response = await fetch('URL_TO_YOUR_BACKEND_ENDPOINT');
      const jsonData = await response.json();
      setData1(jsonData);
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
        {data1.map((item) => (
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

export default ViewTableVealuate