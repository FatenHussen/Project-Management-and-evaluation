import React, { useState } from 'react';
import { FaTrashAlt, FaPlus, FaEdit, FaEye } from 'react-icons/fa';
import Fsidebar from '../Style/fsidebar';
import './StudentTable.css';
import { FaAddressBook } from "react-icons/fa";

// بيانات البداية
const initialData = [
  { id: 1, firstName: '', lastName: '', email: '', year: '', specialization: '', projectSemester: '', completedHours: '', currentSemesterHours: '', cumulativeGPA: '' }
];

function StudentTable() {
  const [data, setData] = useState(initialData); // البيانات الحالية
  const [searchTerm, setSearchTerm] = useState(''); // مصطلح البحث

  // تغيير القيمة في البيانات
  const handleInputChange = (index, event) => {
    const { name, value } = event.target; 
    let newValue = value;
    
    // التحقق من صحة معدل التراكم
    if (name === "cumulativeGPA") {
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 4) {
        newValue = parsedValue.toFixed(2); // تحديد القيم بعددين بعد الفاصلة
      } else {
        return; // تجاهل الإدخال غير الصالح
      }
    }

    // تحديث البيانات
    const newData = data.map((row, rowIndex) => {
      if (index === rowIndex) {
        return { ...row, [name]: newValue };
      }
      return row;
    });
    setData(newData);
  };

  // إضافة صف جديد
  const addRow = () => {
    setData([
      ...data,
      { id: data.length + 1, firstName: '', lastName: '', email: '', year: '', specialization: '', projectSemester: '', completedHours: '', currentSemesterHours: '', cumulativeGPA: '' }
    ]);
  };

  // حذف صف
  const deleteRow = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  return (
    <div className="table-container">
      <Fsidebar/>
      <div className='body-student'>
        <div className='header--student'>
          <div className='part-header'>
            <h2 className='h2--style2'> <FaAddressBook /> تفاصيل الطالب</h2>
            <div className='line'></div>
          </div>
          <input
            type="text"
            placeholder="ابحث..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-search"
          />
        </div>
        <table className="my-table" border="">
          <thead>
            <tr>
              <th>الرقم التسلسلي</th>
              <th>الاسم الكامل</th>
              <th>البريد الإلكتروني</th>
              <th>السنة</th>
              <th>التخصص</th>
              <th>فصل المشروع</th>
              <th>الساعات المكتملة</th>
              <th>الساعات الحالية في الفصل</th>
              <th>المعدل التراكمي</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;
