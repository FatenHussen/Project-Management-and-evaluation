import React from 'react'
import './About.css'
import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    specialization: 'Software Engineering',
    academicYear: '', // سيتم تحديد السنة الدراسية هنا
    cumulativeGPA: '',
    completedHours: '',
    currentHours: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="ocontanier">
    <div className="form-container">
      <h1>معلومات الطالب</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <FontAwesomeIcon icon={faUser} /> الاسم الثلاثي:
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <label>
          <FontAwesomeIcon icon={faEnvelope} /> البريد الإلكتروني:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>الاختصاص:</label>
        <select
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
        >
          <option value="Software Engineering">هندسة برمجيات</option>
          <option value="Artificial Intelligence">ذكاء صناعي</option>
          <option value="Networking">شبكات</option>
        </select>
        <label>السنة الدراسية:</label>
        <select
          name="academicYear"
          value={formData.academicYear}
          onChange={handleChange}
        >
          <option value="السنة الرابعة">السنة الرابعة</option>
          <option value="السنة الخامسة">السنة الخامسة</option>
        </select>
        <label>المعدل التراكمي:</label>
        <input
          type="number"
          name="cumulativeGPA"
          min="0"
          max="4"
          step="0.01"
          value={formData.cumulativeGPA}
          onChange={handleChange}
        />
        <label>الساعات المنجزة:</label>
        <input
          type="number"
          name="completedHours"
          min="0"
          max="166"
          value={formData.completedHours}
          onChange={handleChange}
        />
        <label>الساعات الحالية:</label>
        <input
          type="number"
          name="currentHours"
          min="0"
          value={formData.currentHours}
          onChange={handleChange}
        />
        <button type="submit">إرسال</button>
      </form>
    </div>
    </div>
  )
}

export default About