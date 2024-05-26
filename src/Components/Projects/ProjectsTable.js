import React, { useState, useEffect } from 'react'
import axios from 'axios';
import DetailsModel from './DetailsModel';

const ProjectsTable = ({type}) => {

    const initialFilters = {
        semester: '',
        name: '',
        status: ''
      };
      const [projectID, setProjectID] = useState(0)
      const [supervisors, setSupervisors] = useState([])
      const [project_num, setProject_num] = useState(0)
      const [model, setModel] = useState(false)
      const [filters, setFilters] = useState(initialFilters);
      const [filteredProjects, setFilteredProjects] = useState(supervisors);
      console.log('pp',filters, filteredProjects)
    
      const handleFilterChange = (e) => {
        const { name, value } = e.target; 
        setFilters(prevFilters => ({
          ...prevFilters,
          [name]: value
        }));
      };
    
      const applyFilters = () => {
        const filtered = supervisors.filter(project => {
          return (
            (filters.name === '' || project.name.toLowerCase().includes(filters.name.toLowerCase())) &&
            (filters.semester === '' || project.semester_id.toString().includes(filters.semester)) &&
            (filters.status === '' || project.proposal.toLowerCase().includes(filters.status.toLowerCase()))
            // (filters.maxHours === '' || student.totalHours <= parseInt(filters.maxHours))
          );
        });
        setFilteredProjects(filtered);
      };
    
      const clearFilters = () => {
        setFilters(initialFilters);
        setFilteredProjects(supervisors);
      };
    
      const supListURlAPI='http://127.0.0.1:8000/admin/project/all'
  async function get_supervisor(){
    // setLoader(false) 
   try{
     const response =await axios.get(supListURlAPI,{
       headers:{
         "Authorization":`Bearer ${localStorage.getItem('token')}`,
         "Access-Control-Allow-Origin": "*",
       "Content-Type": "multipart/form-data",

       }
     })
     console.log(response.data.data)
    //  setLoader(true)
    setSupervisors(response.data.data)
    setFilteredProjects(response.data.data)
    
   }
   catch(err){
     console.log(err)
   }
  }

  useEffect( ()=>{
    console.log(localStorage.getItem('token'))
    get_supervisor()
  //  setAddEmployee1(false)
   console.log(supervisors)
   },[])

  return (
    <div className='w-[100%]'>
    <div className='w-[100%] md:h-60 h-72 flex justify-center items-center flex-col mb-5'>
    <div className='w-[100%] h-[60%] flex justify-between items-center flex-col-reverse md:flex-row gap-7 md:gap-0'>
      <div className='w-[100%] md:w-[30%] h-[100%] flex justify-center items-center flex-col relative '>
        <label htmlFor='semester' className='absolute md:top-2 -top-6 right-0 font-semibold'>الفصل المشروع</label>
    <select name="semester" value={filters.semester} className='w-[100%] h-10 outline-none rounded-lg border-2 border-[#27374d] p-2 text-black' onChange={handleFilterChange}>
      <option value=''></option>
      <option value={1}>الفصل الأول</option>
      <option value={2}>الفصل الثاني</option>
      <option value={3}>الفصل الصيفي</option>
    </select>
    </div>
    {/* <div className='w-[22%] h-[100%] flex justify-center items-center flex-col relative '>
        <label htmlFor='minHours' className='absolute top-2 right-0 font-semibold'>الساعات</label>
    <input type="text" id='minHours' name="minHours" value={filters.minHours} className='w-[100%] h-10 outline-none rounded-lg border-2 border-[#27374d] p-2' onChange={handleFilterChange} />
    </div> */}
    <div className='w-[100%] md:w-[30%] h-[100%] flex justify-center items-center flex-col relative '>
        <label htmlFor='status' className='absolute md:top-2 -top-6 right-0 font-semibold'>الحالة</label>
    <select name="status" value={filters.status} className='w-[100%] h-10 outline-none rounded-lg border-2 border-[#27374d] p-2 text-black' onChange={handleFilterChange}>
      <option value=''></option>
      <option value='pending'>تتم معالجتها</option>
      <option value='completed'>مكتمل</option>
    </select>
    </div>
    <div className='w-[100%] md:w-[30%] h-[100%] flex justify-center items-center flex-col relative '>
        <label htmlFor='name' className='absolute md:top-2 -top-6 right-0 font-semibold'>الاسم</label>
    <input type="text" id='name' name="name" value={filters.name} className='w-[100%] h-10 outline-none rounded-lg border-2 border-[#27374d] p-2' onChange={handleFilterChange} />
    </div>
    </div>
    <div className='w-[100%] h-[12%] md:h-[20%] flex justify-center gap-5 items-center mt-5 md:mt-0'>
    <button className='w-[20%] h-[100%] bg-[#732d2d] hover:bg-[#732d2dca] text-white rounded-xl' onClick={clearFilters}>مسح</button>
    <button className='w-[35%] h-[100%] bg-[#27374d] hover:bg-[#27374dd8] text-white rounded-xl' onClick={applyFilters}>بحث</button>
    </div>
    </div>
    <div className='w-[100%] overflow-x-auto scrollbar-thin scrollbar-track-[#d4d4ef] scrollbar-thumb-[#27374d] mb-10' dir='rtl'>
    <table className='w-[700px] sm:w-[100%] mb-10'>
      <tr>
        <th className={`${!type ? 'w-[25%]' : 'w-[33%]'} bg-[#27374d] rounded-tr-xl p-2 text-lg text-white`}>الاسم</th>
        <th className={`${!type ? 'w-[25%]' : 'w-[33%]'} bg-[#27374d]  p-2 text-lg text-white`}>الحالة</th>
        <th className={`${!type ? 'w-[25%]' : 'w-[33%] rounded-tl-xl'} bg-[#27374d]  p-2 text-lg text-white`}>الفصل المشروع</th>
        {!type ?     
        <th className='w-[25%] bg-[#27374d] rounded-tl-xl p-2 text-lg text-white'>التفاصيل</th> 
        :''}
      </tr>
     {filteredProjects.length > 0 ? filteredProjects.map((project, index) => ( 
        <tr className='bg-[#d4d4ef]' key={index}>
        <td className={`${!type ? 'w-[25%]' : 'w-[33%]'} h-16 text-center text-lg`}>{project.name}</td>
        <td className={`${!type ? 'w-[25%]' : 'w-[33%]'} h-16 text-center text-lg ${project.proposal == 'pending' ? 'text-yellow-600' : 'text-green-600' }`}>{project.proposal}</td>
        <td className={`${!type ? 'w-[25%]' : 'w-[33%]'} h-16 text-center text-lg`}>{project.semester_id == 1 ? 'الفصل الأول' : project.semester_id == 2  ? 'الفصل الثاني' : project.semester_id == 3  ? 'الفصل الصيفي' : ''}</td>
        {!type ? 
          <td className='w-[25%] text-center'>
          <button className='w-[50%] border-2 border-[#27374d] rounded-xl p-2 text-lg font-bold text-[#27374d] hover:border-[#27374db2] hover:text-[#27374db2]' onClick={()=>{setModel(true); setProjectID(project.id)}}>التفاصيل</button>
      </td>
       : 
      ''}
      </tr>
      )) : ''}
    </table>
    </div>
    {filteredProjects.length  < 1 ? 
    <p className='w-[100%] text-center text-xl text-[#27374d] -mt-5'>لا يوجد مشاريع</p>
    : ''}
    <DetailsModel visible={model} onClose={()=>setModel(false)} id={projectID}/>
  </div>
  )
}

export default ProjectsTable