import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import SupervisorsTable from '../Components/Supervisors/SupervisorsTable'
import SupervisorsProjects from '../Components/Supervisors/SupervisorsProjects'

const Supervisors = () => {

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
      const superProjects = [
          {
            "project_id": 1,
            "project_name": "Project Alpha",
            "supervisors": [
              {
                "supervisor_id": 103,
                "name": "Alice Johnson",
                "meetings": 7
              }
            ]
          },
          {
            "project_id": 2,
            "project_name": "Project Beta",
            "supervisors": [
              {
                "supervisor_id": 104,
                "name": "Michael Brown",
                "meetings": 12
              },
              {
                "supervisor_id": 105,
                "name": "Emily Davis",
                "meetings": 9
              },
              {
                "supervisor_id": 106,
                "name": "David Wilson",
                "meetings": 11
              }
            ]
          },
          {
            "project_id": 3,
            "project_name": "Project Gamma",
            "supervisors": [
              {
                "supervisor_id": 107,
                "name": "Sarah Lee",
                "meetings": 5
              },
              {
                "supervisor_id": 108,
                "name": "Chris Martinez",
                "meetings": 6
              },
              {
                "supervisor_id": 109,
                "name": "Jessica Garcia",
                "meetings": 4
              }
            ]
          },
          {
            "project_id": 4,
            "project_name": "Project Delta",
            "supervisors": [
              {
                "supervisor_id": 110,
                "name": "Daniel Rodriguez",
                "meetings": 15
              },
              {
                "supervisor_id": 111,
                "name": "Laura Hernandez",
                "meetings": 14
              },
            ]
          }
        ]
      
      const [supervisor_num, setSupervisor_num] = useState(0)
      const [view, setView] = useState(false)
      

  return (
    <div className='w-[100%] min-h-screen h-fit bg-slate-200'>
      <div className='w-[100%] h-16'>
        <Navbar/>
      </div>
      <div className='w-[100%] h-fit flex justify-center items-center flex-col gap-5'>
        <div className='w-[90%] h-12 flex justify-center items-center gap-4 text-[#27374d]'>
          <p className={`text-lg font-semibold py-1 px-2 cursor-pointer ${view ? 'border-b-2 border-[#27374d]' : ''}`} onClick={()=>setView(true)}>المشاريع</p>
          <p className={`text-lg font-semibold py-1 px-2 cursor-pointer ${!view ? 'border-b-2 border-[#27374d]' : ''}`} onClick={()=>setView(false)}>المشرفين</p>
        </div>
      <div className='w-[90%] h-[100px] mt-5 flex justify-between items-center'>
      <p className='text-right text-xl md:text-3xl font-bold text-[#27374d]'>عدد المشرفين: <span className='text-xl md:text-3xl font-semibold'> {supervisor_num} </span></p>
        <p className='text-right text-xl md:text-3xl font-bold text-[#27374d]'>المشرفين</p>
        </div>
        <div className='w-[90%] h-fit'>
          {!view ? <SupervisorsTable supervisors={supervisors}/> : <SupervisorsProjects projects={superProjects}/>}
        </div>
      </div>
    </div>
  )
}

export default Supervisors