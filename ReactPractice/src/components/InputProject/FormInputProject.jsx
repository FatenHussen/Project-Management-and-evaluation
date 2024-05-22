import React, { useState } from 'react';
import './forminputproject.css';
import axios from "axios";

const FormInputProject = () => {
  const currentYear = new Date().getFullYear();
const yearsToShow = 3;
  const [formData, setFormData] = useState({
    projectName: '',
    students: ['', '', '', '', ''],
    supervisors: ['', '', ''],
    semester: '',
    studyYear: ''
  });
  console.log('sdsd',formData);
  const years = [''].concat(Array.from({ length: yearsToShow }, (_, index) => currentYear + index));
  const [accept, setAccept] = useState(false);
  const firstThreeStudents = formData.students.slice(0, 3);
  const areFirstThreeStudentsFilled = firstThreeStudents.every(student => student.trim() !== '');
  const FirstThreeSperviser=formData.supervisors.slice(0, 1);
  const areFirstThreeSuperviserFilled = FirstThreeSperviser.every(supervisor => supervisor.trim() !== '');
  const [loading, setLoading] = useState(false);
  const handleProjectNameChange = (e) => {
    const newValue = e.target.value;
    setFormData({ ...formData, projectName: newValue });
    console.log('Project Name:', newValue);
  };

  const handleStudentNameChange = (index, value) => {
    const updatedStudents = formData.students.map((student, i) => {
      if (i === index) {
        return value;
      }
      return student;
    });
    setFormData({ ...formData, students: updatedStudents });
    console.log('Students:', updatedStudents);
  };

  const handleSupervisorNameChange = (index, value) => {
    const updatedSupervisors = formData.supervisors.map((supervisor, i) => {
      if (i === index) {
        return value;
      }
      return supervisor;
    });
    setFormData({ ...formData, supervisors: updatedSupervisors });
    console.log('Supervisors:', updatedSupervisors);
  };

  const handleSemesterChange = (e) => {
    const newValue = e.target.value;
    setFormData({ ...formData, semester: newValue });
    console.log('Semester:', newValue);
  };
  
const handleStudyYearChange = (e) => {
  const { value } = e.target;
  setFormData({
    ...formData,
    studyYear: value === '' ? '' : parseInt(value)
  });
};
  const ProjectUrl='http://127.0.0.1:8000/user/projects/create'
  async function CreateProject(){
    let flag = true;
    setAccept(true);
  
    if (
      !areFirstThreeStudentsFilled ||
      !areFirstThreeSuperviserFilled ||
      formData.projectName === '' ||
      formData.semester === ''||
      formData.studyYear===''
    ) {
      flag = false;
    } else {
      flag = true ;
    }
  
    if (flag) {
      setLoading(true);
      try {
        const token = localStorage.getItem('token'); // افترض أن الرمز مخزن في Local Storage
        
        if (!token) {
          throw new Error("Token not found");
        }
        const response = await axios.post(ProjectUrl, {
          name: formData.projectName,
          description:'test 1233 saas',
          semester_id: formData.semester,
          Students: formData.students,
          supervisors: formData.supervisors,
          year:formData.studyYear,
        });
        console.log('ss', response);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); 
      }
    }
  }
  return (
    <div>
      <div className='body-A'>
        <div className='part-A'>
          <h3 className='style-A'>أعضاء المشروع</h3>
          <div>
            {formData.students.map((student, index) => (
              <div key={index} className='student-s'>
                <input
                  type="text"
                  value={student}
                  onChange={(e) => handleStudentNameChange(index, e.target.value)}
                  placeholder='الأسم'
                  className='inputtext'
                  />
                 
              </div>
            ))}
              {!areFirstThreeStudentsFilled && accept &&
                     <p className='error1'>يجب أن تقوم بإدخال ثلاث اسماء على الأقل من أسماء الطلاب.</p>}
          </div>
        </div>
        <div className='part-B'>
          <h3 className='style-A'>المشرفين</h3>
          <div>
            {formData.supervisors.map((supervisor, index) => (
              <div key={index} className='student-s'>
                <input
                  type="text"
                  value={supervisor}
                  onChange={(e) => handleSupervisorNameChange(index, e.target.value)}
                  placeholder='الأسم'
                  className='inputtext'
                />
              </div>
            ))}
             {!areFirstThreeSuperviserFilled && accept &&
                     <p className='error1'>يجب أن تقوم بإدخال اسم على الأقل من أسماء المشرفين.</p>}
          </div>
        </div>
        <div className="part-C">
          <h3 className='style-A'>تفاصيل المشروع</h3>
          <div>
            <input
              type="text"
              value={formData.projectName}
              onChange={handleProjectNameChange}
              placeholder='اسم المشروع'
              className='inputtexta'
            />
            {formData.projectName==='' && accept && <p className='error1'>الرجاء ملاء اسم المشروع.</p>}
              <label style={{color:'white', fontSize:'20px',margin:'4%', display:'flex', alignItems:'center'}}>  السنة الدراسية الخاصة بالمشروع:</label>
            <select id="studyYear" value={formData.studyYear} onChange={handleStudyYearChange} className='inputtext'>

  {years.map(year => (
    <option key={year} value={year}>{year}</option>
  ))}
</select>
{formData.studyYear==='' && accept && <p className='error1'>الرجاء أختيار السنة الخاصة بالمشروع.</p>}
            <label style={{color:'white', fontSize:'20px',margin:'4%', display:'flex', alignItems:'center'}}> الفصل الخاص بالمشروع:</label>
            <select
              name="selectedDays"
              value={formData.semester}
              onChange={handleSemesterChange}
              className='inputtext'
            >
              <option value=''></option>
              <option value="الأول">الأول</option>
              <option value="الثاني">الثاني</option>
              <option value="الصيفي">الصيفي</option>
            </select>
            {formData.semester==="" && accept && <p className='error1'>الرجاء أختيار الفصل.</p>}
          </div>
        </div>
      </div>
      <div>
        <button onClick={CreateProject }  disabled={loading}>
        {loading ? <div className="spinner" /> : 'أرسال'}</button>
      </div>
    </div>
  );
}

export default FormInputProject;
