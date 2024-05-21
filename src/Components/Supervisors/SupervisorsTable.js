import React, { useState } from 'react';

const SupervisorsTable = ({ supervisors, type }) => {

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
  const [filters, setFilters] = useState(initialFilters);
  const [filteredSupervisors, setFilteredSupervisors] = useState(supervisors);

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
    const filtered = supervisors.filter(supervisor => {
      return (
        (filters.name === '' || supervisor.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.specialization === '' || supervisor.specialization.toLowerCase().includes(filters.specialization.toLowerCase())) &&
        (filters.work_days.length === 0 || filters.work_days.some(day => supervisor.work_days.includes(day)))
      );
    });
    setFilteredSupervisors(filtered);
};


  const clearFilters = () => {
    setFilters(initialFilters);
    setFilteredSupervisors(supervisors);
  };

  return (
    <div className='w-[100%]'>
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
              {supervisors.map((supervisor, index) => (
              <option value={supervisor.specialization}>{supervisor.specialization}</option>
            ))}
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
        {filteredSupervisors.map((supervisor, index) => (
          <tr className='bg-[#d4d4ef]' key={index}>
            <td className={`${type ? 'w-[25%]' : 'w-[33%]'} h-16 text-center text-lg`}>{supervisor.name}</td>
            <td className={`${type ? 'w-[25%]' : 'w-[33%]'} h-16 text-center text-lg`}>{supervisor.work_days.join(', ')}</td>
            <td className={`${type ? 'w-[25%]' : 'w-[33%]'} h-16 text-center text-lg`}>{supervisor.specialization}</td>
            {type ? 
          <td className='w-[25%] text-center'>
          <button className='w-[50%] border-2 border-[#27374d] rounded-xl p-2 text-lg font-bold text-[#27374d] hover:border-[#27374db2] hover:text-[#27374db2]' >التفاصيل</button>
      </td>
       : 
      ''}
          </tr>
        ))}
      </table>
      </div>
      {filteredSupervisors.length < 1 ?
        <p className='w-[100%] text-center text-xl text-[#27374d] -mt-5'>لا يوجد مشرفين</p>
        : ''}
    </div>
  );
};

export default SupervisorsTable;
