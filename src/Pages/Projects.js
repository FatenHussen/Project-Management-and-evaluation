import React from 'react'
import Navbar from '../Components/Navbar'
import ProjectsTable from '../Components/Projects/ProjectsTable'

const Projects = () => {
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
    
  return (
    <div className='w-[100%] min-h-screen h-fit bg-slate-200'>
      <div className='w-[100%] h-16'>
        <Navbar/>
      </div>
      <div className='w-[100%] h-fit flex justify-center items-center flex-col gap-5'>
      <div className='w-[90%] h-[100px] mt-5'>
        <p className='text-right text-xl md:text-3xl font-bold text-[#27374d]'>المشاريع</p>
        </div>
        <div className='w-[90%] h-fit'>
          <ProjectsTable projects={projects}/>
        </div>
      </div>
    </div>
  )
}

export default Projects