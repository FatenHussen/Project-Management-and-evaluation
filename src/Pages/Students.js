import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Chart from '../Components/Students/Chart'
import StudentTable from '../Components/Students/StudentTable'

const Students = () => {

  const students = [
    {
      "name": "Alice",
      "semester": 2,
      "year": 1,
      "totalHours": 300
    },
    {
      "name": "Bob",
      "semester": 1,
      "year": 5,
      "totalHours": 280
    },
    {
      "name": "Charlie",
      "semester": 3,
      "year": 4,
      "totalHours": 320
    },
    {
      "name": "Diana",
      "semester": 2,
      "year": 4,
      "totalHours": 310
    },
    {
      "name": "Eva",
      "semester": 1,
      "year": 3,
      "totalHours": 290
    }
  ]

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
        <Chart/>
        </div> 
        <div className='w-[90%] h-fit'>
          <StudentTable students={students}/>
        </div>
      </div>
    </div>
  )
}

export default Students