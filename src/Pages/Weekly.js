import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Weekly = () => {

    const { id } = useParams();

  return (
    <div className='w-[100%] min-h-screen h-fit bg-slate-200'>
    <div className='w-[100%] h-16'>
      <Navbar/>
    </div>
    <div className='w-[100%] h-fit flex justify-center items-center flex-col' dir="rtl">
      <p className='w-[90%] text-3xl font-bold text-[#27374d] my-5'>المتابعة الأسبوعية</p>
      <div className='w-[90%]  border-2 border-b-0 border-[#27374d] text-[#27374d] mt-16'>
            <div className='w-[30%] h-10 border-l-2 border-[#27374d] text-[#27374d]'>
                <select className='bg-transparent outline-none w-[75%]'>
                    <option>sadas</option>
                    <option>sadas</option>
                </select> 
              </div>
              <p className="w-[20%] h-10 border-l-2 border-[#27374d] text-[#27374d]">اسم المشروع</p>
              <div className='w-[50%]'>
                <input 
                  type="text"
className='w-[100%] h-10 outline-none bg-transparent' 
                  name="projectName"   
                  disabled
                />
              </div>
              </div>
      <table className="w-[90%]  border-2 border-[#27374d] text-[#27374d] mb-10" border="">
            <tr>
                <td className='w-[10%] text-center'>الحضور</td>
                <td className='w-[10%] text-center'>Testing</td>
                <td className='w-[10%] text-center'>Code</td>
                <td className='w-[10%] text-center'>Design</td>
                <td className='w-[10%] text-center'>Presentation</td>
                <td className='w-[10%] text-center'>Report</td>
                <td className='w-[10%] text-center'>Github</td>
                <td className='w-[10%] text-center'>reference_study</td>
                <td className='w-[10%] text-center'>analytical_study</td>
                <td className='w-[10%] text-center'>results</td>
            </tr>
          </table>
      </div>
      </div>
  )
}

export default Weekly