import React from 'react'

const SupervisorsProjects = ({projects}) => {
  return (
    <div className='w-[100%]'>
        <div className='w-[100%] overflow-x-auto scrollbar-thin scrollbar-track-[#d4d4ef] scrollbar-thumb-[#27374d] mb-10' dir='rtl'>
        {projects.map((project, index) => (
        <table className='w-[700px] sm:w-[100%]'>
        <tr>
          <th className='w-[70%] bg-[#4d596a] text-right p-2 text-lg text-white'>{project.project_name}</th>
          <th className='w-[30%] bg-[#4d596a] p-2 text-lg text-white'>عدد الاجتماعات</th>
        </tr>
        {project.supervisors.map((supervisor, index) => (
          <tr className='bg-[#d4d4ef]'>
            <td className='w-[33%] h-16 text-right p-2 text-lg'>{supervisor.name}</td>
            <td className='w-[33%] h-16 text-center text-lg'>{supervisor.meetings}</td>
          </tr>
           ))}
      </table>
       ))}
      </div>
    </div>
  )
}

export default SupervisorsProjects