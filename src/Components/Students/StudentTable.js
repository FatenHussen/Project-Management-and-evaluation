import React, { useState } from 'react'

const StudentTable = ({students, setFilteredStudents, data, student_num}) => {

  const initialFilters = {
    year: '',
    semester: '',
    name: '',
    minHours: '',
    maxHours: ''
  };

  const [filters, setFilters] = useState(initialFilters);
  console.log('pp',filters, students) 

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const applyFilters = () => {
    const filtered = data.filter(student => {
      return (
        (filters.year === '' || student.academic_year_id.toString() === filters.year) &&
        (filters.semester === '' || student.semester.toString() === filters.semester) &&
        (filters.name === '' || student.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.minHours === '' || student.hours_completed == parseInt(filters.minHours)) 
        // (filters.maxHours === '' || student.totalHours <= parseInt(filters.maxHours))
      );
    });
    setFilteredStudents(filtered);
  };

  const clearFilters = () => {
    setFilters(initialFilters);
    setFilteredStudents(data);
  };


  return (
    <div className='w-[100%]'>
      <div className='w-[100%] h-96 md:h-60 flex justify-center items-center flex-col mb-5'>
      <div className='w-[100%] h-[20%] mt-5 flex justify-between items-center'>
      <p className='text-right text-xl md:text-3xl font-bold text-[#27374d]'>عدد الطلاب: <span className='text-xl md:text-3xl font-semibold'> {student_num} </span></p>
        <p className='text-right text-xl md:text-3xl font-bold text-[#27374d]'>الطلاب</p>
        </div>
        {/* <p className='w-[100%] h-[20%] text-right text-3xl font-bold text-[#27374d]'>الطلاب</p> */}
      <div className='w-[100%] h-[60%] flex justify-between items-center md:flex-row flex-col gap-7 md:gap-0'>
        <div className='w-[100%] md:w-[22%] h-[100%] flex justify-center items-center flex-col relative '>
          <label htmlFor='semester' className='absolute md:top-2 -top-6 right-0 font-semibold'>الفصل المشروع</label>
      <select name="semester" value={filters.semester} className='w-[100%] h-10 outline-none rounded-lg border-2 border-[#27374d] p-2 text-black' onChange={handleFilterChange}>
        <option value=''></option>
        <option value='الفصل الأول'>الفصل الأول</option>
      <option value='الفصل الثاني'>الفصل الثاني</option>
      <option value='الفصل الصيفي'>الفصل الصيفي</option>
      </select>
      </div>
      <div className='w-[100%] md:w-[22%] h-[100%] flex justify-center items-center flex-col relative '>
          <label htmlFor='minHours' className='absolute md:top-2 -top-6 right-0 font-semibold'>الساعات</label>
      <input type="text" id='minHours' name="minHours" value={filters.minHours} className='w-[100%] h-10 outline-none rounded-lg border-2 border-[#27374d] p-2' onChange={handleFilterChange} />
      </div>
      <div className='w-[100%] md:w-[22%] h-[100%] flex justify-center items-center flex-col relative '>
          <label htmlFor='year' className='absolute md:top-2 -top-6 right-0 font-semibold'>السنة</label>
      <select name="year" value={filters.year} className='w-[100%] h-10 outline-none rounded-lg border-2 border-[#27374d] p-2 text-black' onChange={handleFilterChange}>
        <option value=''></option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
      </div>
      <div className='w-[100%] md:w-[22%] h-[100%] flex justify-center items-center flex-col relative '>
          <label htmlFor='name' className='absolute md:top-2 -top-6 right-0 font-semibold'>الاسم</label>
      <input type="text" id='name' name="name" value={filters.name} className='w-[100%] h-10 outline-none rounded-lg border-2 border-[#27374d] p-2' onChange={handleFilterChange} />
      </div>
      </div>
      <div className='w-[100%] md:h-[20%] h-[12%] flex justify-center gap-5 items-center mt-5 md:mt-0'>
      <button className='w-[20%] h-[100%] bg-[#732d2d] hover:bg-[#732d2dca] text-white rounded-xl' onClick={clearFilters}>مسح</button>
      <button className='w-[40%] h-[100%] bg-[#27374d] hover:bg-[#27374dd8] text-white rounded-xl' onClick={applyFilters}>بحث</button>
      </div>
      </div>
      <div className='w-[100%] overflow-x-auto scrollbar-thin scrollbar-track-[#d4d4ef] scrollbar-thumb-[#27374d] mb-10' dir='rtl'>
      <table className='w-[700px] sm:w-[100%]' >
        <tr>
          <th className='w-[25%] bg-[#27374d] rounded-tr-xl p-2 text-lg text-white'>الاسم</th>
          <th className='w-[25%] bg-[#27374d] p-2 text-lg text-white'>السنة</th>
          <th className='w-[25%] bg-[#27374d] p-2 text-lg text-white'>الساعات</th>
          <th className='w-[25%] bg-[#27374d] rounded-tl-xl p-2 text-lg text-white'>الفصل المشروع</th>
        </tr> 
       {students.length > 0 ? students.map((student, index) => (
          <tr className='bg-[#d4d4ef]' key={index}>
          <td className='w-[25%] h-16 text-center text-lg'>{student.name}</td>
          <td className='w-[25%] h-16 text-center text-lg'>{student.academic_year_id == 5 ? 'السنة الخامسة' : student.academic_year_id == 4 ? 'السنة الرابعة' : student.academic_year_id == 3 ? 'السنة الثالثة' : student.academic_year_id == 2 ? 'السنة الثانية' : student.academic_year_id == 1 ? 'السنة الأولى' : ''}</td>
          <td className='w-[25%] h-16 text-center text-lg'>{student.hours_completed}</td>
          <td className='w-[25%] h-16 text-center text-lg'>{student.semester}</td>
        </tr>
    )) : 
    <p className='w-[100%] text-center text-xl text-[#27374d] -mt-5'>لا يوجد طلاب</p>}
      </table>
      </div>
      {/* {filteredStudents.length  < 1 ? 
      <p className='w-[100%] text-center text-xl text-[#27374d] -mt-5'>لا يوجد طلاب</p>
      : ''} */}
    </div>
  )
}

export default StudentTable