import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Chart from '../Components/Students/Chart'
import StudentTable from '../Components/Students/StudentTable'

const Students = () => {

  const [students, setStudents] = useState([]) 
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [student_num, setStudent_num] = useState(0)


  const empListURlAPI='http://127.0.0.1:8000/admin/users/all'
  async function get_employee(){
    // setLoader(false) 
   try{
     const response =await axios.get(empListURlAPI,{
       headers:{
         "Authorization":`Bearer ${localStorage.getItem('token')}`,
         "Access-Control-Allow-Origin": "*",
       "Content-Type": "multipart/form-data",

       }
     })
     console.log(response.data.data)
    //  setLoader(true)
    setStudents(response.data.data)
    setFilteredStudents(response.data.data)
    setStudent_num(response.data.data.length);

    
   }
   catch(err){
     console.log(err)
   }
  }

  useEffect( ()=>{
    console.log(localStorage.getItem('token'))
    get_employee()
  //  setAddEmployee1(false)
   console.log(students)
   },[])

   console.log(students)


  return (
    <div className='w-[100%] min-h-screen h-fit bg-slate-200'>
      <div className='w-[100%] h-16'>
        <Navbar/>
      </div>
      <div className='w-[100%] h-fit flex justify-center items-center flex-col gap-5'>
      <div className='w-[90%] h-[100px] mt-5'>
        <p className='text-right text-3xl font-bold text-[#27374d]'>مرحبا بكم في لوحة التحكم</p>
        </div>
        <div className='w-[90%] h-[400px]'>
        <Chart students={students}/>
        </div> 
        <div className='w-[90%] h-fit'>
          <StudentTable student_num={student_num} students={filteredStudents} setFilteredStudents={setFilteredStudents} data={students}/>
        </div>
      </div>
    </div>
  )
}

export default Students