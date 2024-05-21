import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Signup from '../Components/Dashboard/Signup'
import ProjectsTable from '../Components/Projects/ProjectsTable'
import SupervisorsTable from '../Components/Supervisors/SupervisorsTable'

const Dashboard = () => {

    const supervisors = [
        {
          "name": "John Doe",
          "specialization": "Software Engineering",
          "work_days": ["Monday", "Tuesday", "Wednesday"]
        },
        {
          "name": "Jane Smith",
          "specialization": "Data Science",
          "work_days": ["Wednesday", "Thursday", "Friday"]
        },  
        {
          "name": "Alice Johnson",
          "specialization": "Machine Learning",
          "work_days": ["Monday", "Wednesday", "Friday"]
        },
        {
          "name": "Bob Brown",
          "specialization": "Web Development",
          "work_days": ["Tuesday", "Thursday", "Saturday"]
        },
        {
          "name": "Eva Davis",
          "specialization": "Database Administration",
          "work_days": ["Monday", "Thursday", "Saturday"]
        }
      ]
      const projects =  [
        {
            "id": 1,
            "name": "Automated Farming System",
            "semester": "Spring 2023",
            "status": "pending"
        },
        {
            "id": 2,
            "name": "Smart Home Automation",
            "semester": "Fall 2022",
            "status": "Completed"
        },
        {
            "id": 3,
            "name": "E-commerce Platform",
            "semester": "Spring 2024",
            "status": "pending"
        },
        {
            "id": 4,
            "name": "Health Monitoring App",
            "semester": "Fall 2023",
            "status": "pending"
        },
        {
            "id": 5,
            "name": "Renewable Energy Management System",
            "semester": "Spring 2022",
            "status": "Completed"
        }
    ]

    const [view, setView] = useState(0)
    const [supervisor_num, setSupervisor_num] = useState(0)
    

  return (
    <div className='w-[100%] min-h-screen h-fit bg-slate-200'>
      <div className='w-[100%] h-fit flex justify-center items-center flex-col gap-5'>
        <div className='w-[100%] h-12 flex justify-center items-center gap-24 text-[#27374d] shadow-md shadow-slate-400'>
          <p className={`text-lg font-semibold py-1 px-2 cursor-pointer ${view == 2 ? 'text-[#27374d] bg-slate-300 rounded-lg' : ''}`} onClick={()=>setView(2)}>المشاريع</p>
          <p className={`text-lg font-semibold py-1 px-2 cursor-pointer ${view == 1 ? 'text-[#27374d] bg-slate-300 rounded-lg' : ''}`} onClick={()=>setView(1)}>المشرفين</p>
          <p className={`text-lg font-semibold py-1 px-2 cursor-pointer ${view == 0 ? 'text-[#27374d] bg-slate-300 rounded-lg' : ''}`} onClick={()=>setView(0)}>التسجيل</p>
        </div>
      {/* <div className='w-[90%] h-[100px] mt-5 flex justify-between items-center'>
      <p className='text-right text-xl md:text-3xl font-bold text-[#27374d]'>عدد المشرفين: <span className='text-xl md:text-3xl font-semibold'> {supervisor_num} </span></p>
        <p className='text-right text-xl md:text-3xl font-bold text-[#27374d]'>المشرفين</p>
        </div> */}
        <div className='w-[90%] h-fit'>
          {view == 0 ? <Signup/> : ''}
          {view == 1 ? <SupervisorsTable supervisors={supervisors} type={true}/> : ''}
          {view == 2 ?  <ProjectsTable projects={projects} type={true}/> : ''}
        </div>
      </div>
    </div>
  )
}

export default Dashboard