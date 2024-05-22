import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Weekly = () => {
    const { id } = useParams();

    const projects = [
      {
        date: "2024-05-22",
        projectName: "Project Alpha",
        attendance: ["Alice", "Bob", "Charlie", "David", "Eve"],
        testing: "Completed",
        code: "In Progress",
        design: "Completed",
        presentation: "Pending",
        report: "Completed",
        github: "Updated",
        reference_study: "Reviewed",
        analytical_study: "In Progress",
        results: "Pending",
        notes: "Need to finalize the code by next week.",
        tasks: "Complete the pending presentation and results analysis."
      },
      {
        date: "2024-05-15",
        projectName: "Project Beta",
        attendance: ["Frank", "Grace", "Hannah"],
        testing: "Pending",
        code: "Completed",
        design: "In Progress",
        presentation: "Completed",
        report: "In Progress",
        github: "Pending",
        reference_study: "Reviewed",
        analytical_study: "Completed",
        results: "Completed",
        notes: "Ensure all team members are present for the next meeting.",
        tasks: "Finish the design and update the GitHub repository."
      }
    ]    
    const [filteredProjects, setFilteredProjects] = useState([])
    const [date, setDate] = useState()

     const filterDataByDate = (e) => {
    const filtered = projects.filter(entry => entry.date === e.target.value);
    setFilteredProjects(filtered);
  };

  console.log(filteredProjects)

  return (
    <div className='w-[100%] min-h-screen h-fit bg-slate-200'>
    <div className='w-[100%] h-16'>
      <Navbar/>
    </div>
    <div className='w-[100%] h-fit flex justify-center items-center flex-col' dir="rtl">
      <p className='w-[90%] text-3xl font-bold text-[#27374d] my-5'>المتابعة الأسبوعية</p>
      <div className='w-[98%] bg-[#9fb0c9] border-2 border-b-0 border-[#27374d] text-[#27374d] mt-16 flex justify-center items-center'>
            <div className='w-[20%] h-[100%] p-2 border-l-2 border-[#27374d] text-[#27374d] flex justify-center items-center'>
                <select className='bg-transparent outline-none w-[75%]' onChange={(e)=>filterDataByDate(e)}>
                {projects.map((project, index) => ( 
                    <option value={project.date}>{project.date}</option>
                  ))}
                </select> 
              </div>
              <p className="w-[18%] h-[100%] border-l-2 border-[#27374d] text-[#27374d] p-2">اسم المشروع</p>
              <div className='w-[62%]'>
                <input 
                  type="text"
className='w-[100%] h-[100%] p-2 outline-none bg-transparent' 
                  name="projectName"   
                  disabled
                />
              </div>
              </div>
      <table className="w-[98%]  border-2 border-[#27374d] text-[#27374d] mb-10" border="2">
            <tr className='border-b-2 border-[#27374d]'>
                <td className='w-[20%] h-10 text-center border-l-2 border-[#27374d]'>الحضور</td>
                <td className='w-[9%] h-10 text-center border-l-2 border-[#27374d]'>Testing</td>
                <td className='w-[9%] h-10 text-center border-l-2 border-[#27374d]'>Code</td>
                <td className='w-[9%] h-10 text-center border-l-2 border-[#27374d]'>Design</td>
                <td className='w-[9%] h-10 text-center border-l-2 border-[#27374d]'>Presentation</td>
                <td className='w-[9%] h-10 text-center border-l-2 border-[#27374d]'>Report</td>
                <td className='w-[9%] h-10 text-center border-l-2 border-[#27374d]'>Github</td>
                <td className='w-[9%] h-10 text-center border-l-2 border-[#27374d]'>reference_study</td>
                <td className='w-[9%] h-10 text-center border-l-2 border-[#27374d]'>analytical_study</td>
                <td className='w-[9%] h-10 text-center'>results</td>
            </tr>
            <tr className='border-b-2 border-[#27374d]'>
                <td className='w-[20%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d]'>
                <td className='w-[20%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d]'>
                <td className='w-[20%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d]'>
                <td className='w-[20%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d]'>
                <td className='w-[20%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center border-l-2 border-[#27374d]'></td>
                <td className='w-[9%] h-14 text-center'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d]'>
                <td className='w-[20%] h-10 text-center border-l-2 border-[#27374d]'>المجموع</td>
                <td className='w-[9%] h-10 text-center'></td>
            </tr>
            <tr className='border-b-2 border-[#27374d]'>
                <td className='w-[20%] h-10 text-center border-l-2 border-[#27374d]'>التقييم</td>
                <td className='w-[9%] h-10 text-center'></td>
            </tr>
          </table>
          <div className='w-[90%] h-fit mb-5 flex justify-center items-center flex-col text-[#27374d]'>
            <p className='w-[100%] text-[#27374d] font-bold text-2xl'>الملاحظات</p>
            <input type='text' className='w-[90%] h-80 bg-transparent' disabled/>
            <p className='w-[100%] text-[#27374d] font-bold text-2xl'>المهام</p>
            <input type='text' className='w-[90%] h-80 bg-transparent' disabled/>
          </div>
      </div>
      </div>
  )
}

export default Weekly