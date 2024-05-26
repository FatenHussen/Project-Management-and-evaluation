import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Weekly = () => {
    const { id } = useParams();

    const projects = [
      {
        "attendance": [
          {
            "name": "Alice Johnson",
            "attendance": "Present",
            "testing": "Completed",
            "code": "Submitted",
            "design": "In Progress",
            "presentation": "Not Started",
            "report": "Completed",
            "github": "https://github.com/alicejohnson",
            "reference_study": "Read",
            "analytical_study": "In Progress",
            "results": "Pending"
          },
          {
            "name": "Bob Smith",
            "attendance": "Absent",
            "testing": "Not Completed",
            "code": "Not Submitted",
            "design": "Not Started",
            "presentation": "Not Started",
            "report": "Not Completed",
            "github": "https://github.com/bsmith",
            "reference_study": "Not Read",
            "analytical_study": "Not Started",
            "results": "Pending"
          },
          {
            "name": "Charlie Davis",
            "attendance": "Present",
            "testing": "In Progress",
            "code": "Submitted",
            "design": "Completed",
            "presentation": "In Progress",
            "report": "In Progress",
            "github": "https://github.com/charliedavis",
            "reference_study": "Read",
            "analytical_study": "Completed",
            "results": "Drafted"
          },
          {
            "name": "Diana Brown",
            "attendance": "Present",
            "testing": "Completed",
            "code": "Submitted",
            "design": "Submitted",
            "presentation": "In Progress",
            "report": "Completed",
            "github": "https://github.com/dianabrown",
            "reference_study": "Read",
            "analytical_study": "In Progress",
            "results": "Finalized"
          },
          {
            "name": "Ethan Clark",
            "attendance": "Absent",
            "testing": "Not Completed",
            "code": "Not Submitted",
            "design": "Not Started",
            "presentation": "Not Started",
            "report": "Not Completed",
            "github": "https://github.com/eclark",
            "reference_study": "Not Read",
            "analytical_study": "Not Started",
            "results": "Pending"
          }
        ],
        "date": "2024-05-24"
      },
      {
        "attendance": [
          {
            "name": "Alice Johnson",
            "attendance": "Present",
            "testing": "In Progress",
            "code": "Submitted",
            "design": "Completed",
            "presentation": "In Progress",
            "report": "Completed",
            "github": "https://github.com/alicejohnson",
            "reference_study": "Read",
            "analytical_study": "In Progress",
            "results": "Pending"
          },
          {
            "name": "Bob Smith",
            "attendance": "Absent",
            "testing": "Not Completed",
            "code": "Not Submitted",
            "design": "Not Started",
            "presentation": "Not Started",
            "report": "Not Completed",
            "github": "https://github.com/bsmith",
            "reference_study": "Not Read",
            "analytical_study": "Not Started",
            "results": "Pending"
          },
          {
            "name": "Charlie Davis",
            "attendance": "Present",
            "testing": "In Progress",
            "code": "Submitted",
            "design": "Completed",
            "presentation": "In Progress",
            "report": "In Progress",
            "github": "https://github.com/charliedavis",
            "reference_study": "Read",
            "analytical_study": "Completed",
            "results": "Drafted"
          },
          {
            "name": "Diana Brown",
            "attendance": "Present",
            "testing": "Completed",
            "code": "Submitted",
            "design": "Submitted",
            "presentation": "In Progress",
            "report": "Completed",
            "github": "https://github.com/dianabrown",
            "reference_study": "Read",
            "analytical_study": "In Progress",
            "results": "Finalized"
          },
          {
            "name": "Ethan Clark",
            "attendance": "Absent",
            "testing": "Not Completed",
            "code": "Not Submitted",
            "design": "Not Started",
            "presentation": "Not Started",
            "report": "Not Completed",
            "github": "https://github.com/eclark",
            "reference_study": "Not Read",
            "analytical_study": "Not Started",
            "results": "Pending"
          }
        ],
        "date": "2024-05-17"
      },
      {
        "attendance": [
          {
            "name": "Alice Johnson",
            "attendance": "Present",
            "testing": "Completed",
            "code": "Submitted",
            "design": "In Progress",
            "presentation": "Not Started",
            "report": "Completed",
            "github": "https://github.com/alicejohnson",
            "reference_study": "Read",
            "analytical_study": "In Progress",
            "results": "Pending"
          },
          {
            "name": "Bob Smith",
            "attendance": "Absent",
            "testing": "Not Completed",
            "code": "Not Submitted",
            "design": "Not Started",
            "presentation": "Not Started",
            "report": "Not Completed",
            "github": "https://github.com/bsmith",
            "reference_study": "Not Read",
            "analytical_study": "Not Started",
            "results": "Pending"
          },
          {
            "name": "Charlie Davis",
            "attendance": "Present",
            "testing": "In Progress",
            "code": "Submitted",
            "design": "Completed",
            "presentation": "In Progress",
            "report": "In Progress",
            "github": "https://github.com/charliedavis",
            "reference_study": "Read",
            "analytical_study": "Completed",
            "results": "Drafted"
          },
          {
            "name": "Diana Brown",
            "attendance": "Present",
            "testing": "Completed",
            "code": "Submitted",
            "design": "Submitted",
            "presentation": "In Progress",
            "report": "Completed",
            "github": "https://github.com/dianabrown",
            "reference_study": "Read",
            "analytical_study": "In Progress",
            "results": "Finalized"
          },
          {
            "name": "Ethan Clark",
            "attendance": "Absent",
            "testing": "Not Completed",
            "code": "Not Submitted",
            "design": "Not Started",
            "presentation": "Not Started",
            "report": "Not Completed",
            "github": "https://github.com/eclark",
            "reference_study": "Not Read",
            "analytical_study": "Not Started",
            "results": "Pending"
          }
        ],
        "date": "2024-05-10"
      },
      {
        "attendance": [
          {
            "name": "Alice Johnson",
            "attendance": "Present",
            "testing": "Completed",
            "code": "Submitted",
            "design": "In Progress",
            "presentation": "Not Started",
            "report": "Completed",
            "github": "https://github.com/alicejohnson",
            "reference_study": "Read",
            "analytical_study": "In Progress",
            "results": "Pending"
          },
          {
            "name": "Bob Smith",
            "attendance": "Absent",
            "testing": "Not Completed",
            "code": "Not Submitted",
            "design": "Not Started",
            "presentation": "Not Started",
            "report": "Not Completed",
            "github": "https://github.com/bsmith",
            "reference_study": "Not Read",
            "analytical_study": "Not Started",
            "results": "Pending"
          },
          {
            "name": "Charlie Davis",
            "attendance": "Present",
            "testing": "In Progress",
            "code": "Submitted",
            "design": "Completed",
            "presentation": "In Progress",
            "report": "In Progress",
            "github": "https://github.com/charliedavis",
            "reference_study": "Read",
            "analytical_study": "Completed",
            "results": "Drafted"
          },
          {
            "name": "Diana Brown",
            "attendance": "Present",
            "testing": "Completed",
            "code": "Submitted",
            "design": "Submitted",
            "presentation": "In Progress",
            "report": "Completed",
            "github": "https://github.com/dianabrown",
            "reference_study": "Read",
            "analytical_study": "In Progress",
            "results": "Finalized"
          },
          {
            "name": "Ethan Clark",
            "attendance": "Absent",
            "testing": "Not Completed",
            "code": "Not Submitted",
            "design": "Not Started",
            "presentation": "Not Started",
            "report": "Not Completed",
            "github": "https://github.com/eclark",
            "reference_study": "Not Read",
            "analytical_study": "Not Started",
            "results": "Pending"
          }
        ],
        "date": "2024-05-03"
      }
    ];
    
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
                  <option></option>
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