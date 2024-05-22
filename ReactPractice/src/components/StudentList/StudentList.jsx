import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import './StudentList.css'
function StudentList() {
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [students, setStudents] = useState([]);

    const handleAddStudent = () => {
        setStudents([...students, '']);
    };

    const handleDeleteStudent = (index) => {
        const updatedStudents = students.filter((student, i) => i !== index);
        setStudents(updatedStudents);
    };

    return (
        <div className='container9'>
            <div className='header9'>
                <div>
            <table className='text9'>
                <thead>
                    <tr>
                    <th><input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} /></th>
                    </tr>
                    <tr>
                        <th><label htmlFor="Name"> Name project : <input type="text"/></label></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td><label htmlFor="name">Name Student : <input type="text" value={student} onChange={(e) => {
                                const updatedStudents = [...students];
                                updatedStudents[index] = e.target.value;
                                setStudents(updatedStudents);
                            } } /></label></td>
                            <td><button onClick={() => handleDeleteStudent(index)}>X</button></td>
                        </tr>
                    ))}
                    <tr>
                    <th> <button onClick={handleAddStudent}> Add name student</button></th>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}

export default StudentList;