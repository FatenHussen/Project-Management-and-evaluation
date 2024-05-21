import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Middle = () => {
    const { id } = useParams();
    const projectData =[
        { name: 'فكرة المشروع', score: 8 },
        { name: 'دراسة الإشارة', score: 8 },
        { name: 'دراسة تحليلية', score: 8 },
        { name: 'التصميم', score: 10 },
        { name: 'البرمجة', score: 10 },
        { name: 'الإدارة', score: 8 },
        { name: 'Git Hub', score: 8 },
        { name: 'الخيارات', score: 8 },
        { name: 'النتائج/التحليل', score: 8 },
        { name: 'القيمة المضافة', score: 8 },
        { name: 'التقدير', score: 8 },
        { name: 'العرض', score: 8 },
      ];

    return (
      <div className='w-[100%] min-h-screen h-fit bg-slate-200'>
      <div className='w-[100%] h-16'>
        <Navbar/>
      </div>
      <div className='w-[100%] h-fit flex justify-center items-center flex-col' dir="rtl">
        <p className='w-[90%] text-3xl font-bold text-[#27374d] my-5'>الدراسة المرحلية</p>
        <div className='w-[90%] bg-[#9fb0c9] border-2 border-b-0 border-[#27374d] text-[#27374d] mt-16 flex justify-center items-center'>
                <p className="w-[25.05%] h-[100%] border-l-2 border-[#27374d] text-[#27374d] p-2">اسم المشروع</p>
                <div className='w-[74.95%]'>
                  <input 
                    type="text"
  className='w-[100%] h-[100%] p-2 outline-none bg-transparent' 
                    name="projectName"   
                    disabled
                  />
                </div>
                </div>
        <table className="w-[90%]  border-2 border-[#27374d] text-[#27374d] mb-10" border="2">
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-10 text-center border-l-2 border-[#27374d]'>أعضاء المشروع</td>
                  <td className='w-[10%] h-10 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-10 text-center border-l-2 border-[#27374d]'>العلامة</td>
                  <td className='w-[55%] h-10 text-center border-l-2 border-[#27374d]'>ملاحظات</td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-10 text-center border-l-2 border-[#27374d]'>مكونات التقييم</td>
                  <td className='w-[10%] h-10 text-center border-l-2 border-[#27374d] font-bold'></td>
                  <td className='w-[10%] h-10 text-center border-l-2 border-[#27374d]'>العلامة</td>
                  <td className='w-[55%] h-10 text-center border-l-2 border-[#27374d]'>ملاحظات</td>
              </tr>
              {projectData.map((project, index) => (
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'>{project.name}</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>{project.score}</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              ))}
              {/* <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr>
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d] font-bold'>100</td>
                  <td className='w-[10%] h-14 text-center border-l-2 border-[#27374d]'></td>
                  <td className='w-[55%] h-14 text-center border-l-2 border-[#27374d]'></td>
              </tr> */}
              <tr className='border-b-2 border-[#27374d]'>
                  <td className='w-[25%] h-14 text-center border-l-2 border-[#27374d]'>التقييم نهائي</td>
                  <td className='h-14 text-center font-bold'></td>
              </tr>
            </table>
            {/* <div className='w-[90%] h-fit mb-5 flex justify-center items-center flex-col text-[#27374d]'>
              <p className='w-[100%] text-[#27374d] font-bold text-2xl'>الملاحظات</p>
              <input type='text' className='w-[90%] h-80 bg-transparent' disabled/>
              <p className='w-[100%] text-[#27374d] font-bold text-2xl'>المهام</p>
              <input type='text' className='w-[90%] h-80 bg-transparent' disabled/>
            </div> */}
        </div>
        </div>
    )
}

export default Middle