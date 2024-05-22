import React, { useState } from 'react';
import { FaTrashAlt, FaPlus, FaEdit, FaEye } from 'react-icons/fa';
import Fsidebar from '../Style/fsidebar';
import { FaAddressBook } from "react-icons/fa";

const initialData = [
  { 
    id: 1, 
    firstName: '', 
    lastName: '', 
    email: '', 
    year: '', 
    specialization: '', 
    projectSemester: '', 
    completedHours: '', 
    currentSemesterHours: '', 
    cumulativeGPA: '',
    project_per_semester: '', 
    active_days: '' // New field
  }
];

const Supervisor = () => {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    let newValue = value;

    // Validate Cumulative GPA and Active days
    if (name === "cumulativeGPA") {
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 4) {
        newValue = parsedValue.toFixed(2); // Limit to 2 decimal places
      } else {
        return; // Ignore invalid input
      }
    } else if (name === "active_days") {
      const parsedValue = parseInt(value);
      if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 7) {
        newValue = parsedValue;
      } else {
        return; // Ignore invalid input
      }
    }

    const newData = data.map((row, rowIndex) => {
      if (index === rowIndex) {
        return { ...row, [name]: newValue };
      }
      return row;
    });
    setData(newData);
  };

  const addRow = () => {
    setData([
      ...data,
      { 
        id: data.length + 1, 
        firstName: '', 
        lastName: '', 
        email: '', 
        year: '', 
        specialization: '', 
        projectSemester: '', 
        completedHours: '', 
        currentSemesterHours: '', 
        cumulativeGPA: '',
        project_per_semester: '', 
        active_days: '' // New field
      }
    ]);
  };

  const deleteRow = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  return (
    <div className="table-container">
      <Fsidebar />
      <div className='body-student'>
        <div className='header--student'>
          <div className='part-header'>
            <h2 className='h2--style2'> <FaAddressBook /> معلومات المهندس</h2>
            <div className='line'></div>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-search"
          />
        </div>
        <table className="my-table" border="">
          <thead>
            <tr>
              <th>ID</th>
              <th>الاسم الثلاثي</th>
              <th>الأختصاص</th>
              <th> المشاريع المكلف بها</th>
              <th>عدد أيام النشاط</th> {/* New table header */}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td></td>
                <td></td>
                <td>
                  
                </td>
                <td>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Supervisor;
