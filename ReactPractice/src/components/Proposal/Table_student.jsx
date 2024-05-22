import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table_student = ({project ,handleSend, accept}) => {
  const [students, setStudents] = useState([
       { name: project[0].students[0], role: '' },
       { name:  project[0].students[1], role: '' },
       { name: project[0].students[2], role: '' },
       { name:  project[0].students[3], role: '' },
       { name:  project[0].students[4], role: '' },
  ])
     

  const [studentsData, setStudentsData] = useState(students);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (index, value) => {
    const newStudents = [...students];
    newStudents[index].name = value;
    setStudents(newStudents);
  };

  const handleRoleChange = (index, value) => {
    const newStudents = [...students];
    newStudents[index].role = value;
    setStudents(newStudents);
  };
  console.log('log', students)
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('URL_HERE', students);
      // قم بمعالجة الاستجابة هنا
    } catch (error) {
      console.error('Error submitting data:', error);
    }
    setIsSubmitting(false);
  };

  useEffect(() => {
  }, [students]);
console.log('tt', project[0].students)
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
                disabled={project}
                onChange={(e) => handleNameChange(index, e.target.value)}
            />
        </td>
        <td>
            <input
                type="text"
                value={student.role}
                onChange={(e) => handleRoleChange(index, e.target.value)}
            />
            {student.role === '' && accept && <p className='error'>الرجاء تحديد دور الطالب.</p>}
        </td>
    </tr>
))}

        </tbody>
      </table>
      {/* <button type="button" onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
      </button> */}
      </form>
    </div>
  )
}

export default Table_student;
