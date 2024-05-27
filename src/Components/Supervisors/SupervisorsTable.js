import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DetailsModel from './DetailsModel';

const SupervisorsTable = ({ type }) => {

  const options = [
    { value: '1', label: 'Saturday', labelAR: 'السبت' },
    { value: '2', label: 'Sunday', labelAR: 'الأحد' },
    { value: '3', label: 'Monday', labelAR: 'الاثنين' },
    { value: '4', label: 'Tuesday', labelAR: 'الثلاثاء' },
    { value: '5', label: 'Friday', labelAR: 'الجمعة' }
  ];

  const initialFilters = {
    name: '',
    specialization: '',
    work_days: []
  };
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [employees, setEmployees] = useState([])
  const [filters, setFilters] = useState(initialFilters);
  const [model, setModel] = useState(false)
  const [projectID, setProjectID] = useState(0)
  const [filteredSupervisors, setFilteredSupervisors] = useState(employees);
  const [supervisor_num, setSupervisor_num] = useState(0)


  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleOptionToggle = (optionValue) => {
    setSelectedOptions(prevSelectedOptions => {
        if (prevSelectedOptions.includes(optionValue)) {
            return prevSelectedOptions.filter(val => val !== optionValue);
        } else {
            return [...prevSelectedOptions, optionValue];
        }
    });

    // Since setSelectedOptions is asynchronous, we need to use the previous state here
    setFilters(prevFilters => ({
        ...prevFilters,
        work_days: selectedOptions.includes(optionValue)
            ? prevFilters.work_days.filter(val => val !== optionValue)
            : [...prevFilters.work_days, optionValue]
    }));
};

  console.log('bb',filters)

  const applyFilters = () => {
    const filtered = employees.filter(supervisor => {
        return (
            (filters.name === '' || supervisor.name.toLowerCase().includes(filters.name.toLowerCase())) &&
            (filters.specialization === '' || (supervisor.specialization_id !== null && supervisor.specialization_id.toString().includes(filters.specialization))) &&
            (filters.work_days.length === 0 || filters.work_days.some(day => supervisor.work_days.includes(day)))
        );
    });
    setFilteredSupervisors(filtered);
};

  const clearFilters = () => {
    setFilters(initialFilters);
    setFilteredSupervisors(employees);
  };

  const empListURlAPI='http://127.0.0.1:8000/admin/employee/all'
  async function get_employee(){
    // setLoader(false) 
   try{
     const response =await axios.get(empListURlAPI,{
       headers:{
         "Authorization":`Bearer ${localStorage.getItem('admin')}`,
         "Access-Control-Allow-Origin": "*",
       "Content-Type": "multipart/form-data",

       }
     })
     console.log(response.data.data)
    //  setLoader(true)
    setEmployees(response.data.data)
    setFilteredSupervisors(response.data.data)
    setSupervisor_num(response.data.data.length)
    
   }
   catch(err){
     console.log(err)
   }
  }

  useEffect( ()=>{
    console.log(localStorage.getItem('token'))
    get_employee()
  //  setAddEmployee1(false)
   console.log(employees)
   },[])

  return (
    <div className='w-[100%]'>
      <div className='w-[90%] h-[100px] mt-5 flex justify-between items-center'>
      <p className='text-right text-xl md:text-3xl font-bold text-[#27374d]'>عدد المشرفين: <span className='text-xl md:text-3xl font-semibold'> {supervisor_num} </span></p>
        <p className='text-right text-xl md:text-3xl font-bold text-[#27374d]'>المشرفين</p>
        </div>
      <div className='w-[100%] h-96 md:h-60 flex justify-center items-center flex-col mb-5'>
        <div className='w-[100%] h-[100%] md:h-[60%] flex justify-between items-center flex-col-reverse md:flex-row'> 
        <div className='w-[100%] md:w-[33%] h-[100%] flex justify-center gap-[4%] items-center flex-row md:flex-col'>
          <button className='w-[30%] md:w-[80%] h-[35%] bg-[#27374d] hover:bg-[#27374dd8] text-white rounded-xl' onClick={applyFilters}>بحث</button>
          <button className='w-[30%] md:w-[80%] h-[35%] bg-[#732d2d] hover:bg-[#732d2dca] text-white rounded-xl' onClick={clearFilters}>مسح</button>
        </div>
          <div className='w-[100%] md:w-[33%] h-[100%] flex justify-center items-center flex-col relative '>
            <label htmlFor='work_days' className='absolute -top-3 right-0 font-semibold'>أيام العمل</label>
            <select name="work_days" value={filters.work_days} multiple className='w-[100%] h-18 outline-none rounded-lg border-2 border-[#27374d] p-2 text-black scrollbar-thin scrollbar-track-[#d4d4ef] scrollbar-thumb-[#27374d]'>
            {options.map((option) => (
              <option value={option.label} selected={selectedOptions.includes(option.label)} onClick={() => handleOptionToggle(option.label)}>{option.label}</option>
            ))} 
            </select>
          </div>
          <div className='w-[100%] md:w-[33%] h-[100%] flex justify-center items-center gap-[4%] flex-col'>
          <div className='w-[100%] md:w-[80%] h-[48%] flex justify-center items-center flex-col relative '>
            <label htmlFor='specialization' className='absolute -top-3 right-0 font-semibold'>الاختصاص</label>
            <select name="specialization" value={filters.specialization} className='w-[100%] h-10 outline-none rounded-lg border-2 border-[#27374d] p-2 text-black' onChange={handleFilterChange}>
              <option value=''></option>
              <option value={1}>شبكات حاسوبية</option>
              <option value={2}>هندسة البرمجيات</option>
              <option value={3}>الذكاء الصنعي</option>
            </select>
          </div>
          <div className='w-[100%] md:w-[80%] h-[48%] flex justify-center items-center flex-col relative '>
            <label htmlFor='name' className='absolute -top-3 right-0 font-semibold'>الاسم</label>
            <input type="text" id='name' name="name" value={filters.name} className='w-[100%] h-10 outline-none rounded-lg border-2 border-[#27374d] p-2' onChange={handleFilterChange} />
          </div>
          </div>
        </div>
      </div>
      <div className='w-[100%] overflow-x-auto scrollbar-thin scrollbar-track-[#d4d4ef] scrollbar-thumb-[#27374d] mb-10' dir='rtl'>
      <table className='w-[700px] sm:w-[100%]'>
        <tr>
          <th className={`${type ? 'w-[25%]' : 'w-[33%]'} bg-[#27374d] rounded-tr-xl p-2 text-lg text-white`}>الاسم</th>
          <th className={`${type ? 'w-[25%]' : 'w-[33%]'} bg-[#27374d]  p-2 text-lg text-white`}>أيام العمل</th>
           <th className={`${type ? 'w-[25%]' : 'w-[33%] rounded-tl-xl'} bg-[#27374d]  p-2 text-lg text-white`}>الاختصاص</th>
           {type ?     
        <th className='w-[25%] bg-[#27374d] rounded-tl-xl p-2 text-lg text-white'>التفاصيل</th> 
        :''}
        </tr>
        {filteredSupervisors.length > 0 ? filteredSupervisors.map((supervisor, index) => (
          <tr className='bg-[#d4d4ef]' key={index}>
            <td className={`${type ? 'w-[25%]' : 'w-[33%]'} h-16 text-center text-lg`}>{supervisor.name}</td>
            <td className={`${type ? 'w-[25%]' : 'w-[33%]'} h-16 text-center text-lg`}>{supervisor.work_days}</td>
            <td className={`${type ? 'w-[25%]' : 'w-[33%]'} h-16 text-center text-lg`}>{supervisor.specialization == null ? '' : supervisor.specialization.name}</td>
            {type ? 
          <td className='w-[25%] text-center relative'>
          <button className='w-[50%] border-2 border-[#27374d] rounded-xl p-2 text-lg font-bold text-[#27374d] hover:border-[#27374db2] hover:text-[#27374db2]' onClick={()=>{setModel(true); setProjectID(supervisor.id)}}>التفاصيل</button>
      </td>
       : 
       ''}
          </tr>
        )) : <p className='w-[100%] text-center text-xl text-[#27374d] -mt-5'>لا يوجد مشرفين</p>}
      </table>
      </div>
        <DetailsModel visible={model} onClose={()=>setModel(false)} id={projectID}/>
    </div>
  );
};

export default SupervisorsTable;
