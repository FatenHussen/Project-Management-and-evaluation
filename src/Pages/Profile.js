import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from '../Components/Navbar'
import { BsFillPersonFill  } from "react-icons/bs";

const Profile = () => {
  const [loader, setLoader] = useState(false)
    const [edit, setEdit] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [data, setData] = useState({
        name: '',
        specialization : '',
        days: [],
        gender: '',
        projects: '',
        password: ''
    }) 

    // const [profile, setProfile] = useState([])
    const profile = {
      name: 'John Doe',
      specialization: 'Software Engineering',
      days: ['Monday', 'Wednesday', 'Friday'],
      gender: 'Male',
      projects: 2
  };

  const [errors, setErrors] = useState({
    name: '',
    specialization : '',
    days: '',
    gender: '',
    projects: '',
    password: ''
  })

  const options = [
    { value: '1', label: 'Saturday', labelAR: 'السبت' },
    { value: '2', label: 'Sunday', labelAR: 'الأحد' },
    { value: '3', label: 'Monday', labelAR: 'الاثنين' },
    { value: '4', label: 'Tuesday', labelAR: 'الثلاثاء' },
    { value: '5', label: 'Friday', labelAR: 'الجمعة' }
  ];

  const SignupURlAPI='http://localhost:8000/api/login'
   async function EditProfile(){
    let hasError = false;

    if (!data.name.trim()) {
      setErrors(error => ({
        ...error,
        name: 'Please enter your name.'
      }));
      hasError = true;
  } else {
  setErrors(error => ({
    ...error,
    name: ''
  }));
  }

    if (!data.specialization.trim()) {
      setErrors(error => ({
        ...error,
        specialization: 'Please enter your specialization.'
      }));
      hasError = true;
  } else {
  setErrors(error => ({
    ...error,
    specialization: ''
  }));
  }

  if (!data.password.trim()) {
    setErrors(error => ({
      ...error,
      password: 'Please enter your password.'
    }));
      hasError = true;
  } else if (data.password.length < 8) {
    setErrors(error => ({
      ...error,
      password: 'Please enter at least 8 letters.'
    }));
    hasError = true;
} else {
  setErrors(error => ({
    ...error,
    password: ''
  }));
  }

  if (data.days.length == 0) {
    setErrors(error => ({
      ...error,
      days: 'Please enter your days.'
    }));
    hasError = true;
} else {
setErrors(error => ({
  ...error,
  days: ''
}));
}

if (!data.gender.trim()) {
  setErrors(error => ({
    ...error,
    gender: 'Please enter your gender.'
  }));
  hasError = true;
} else {
setErrors(error => ({
...error,
gender: ''
}));
}

if (!data.projects.trim()) {
  setErrors(error => ({
    ...error,
    projects: 'Please enter your projects.'
  }));
  hasError = true;
} else {
setErrors(error => ({
...error,
projects: ''
}));
}

  if (hasError) {
    return; // Return early if there are validation errors
}

    setLoader(true)
        try{
          const response=await axios.post(SignupURlAPI,{
            name : data.name,
            email: data.email,
            password: data.password,
            role : data.role
          })
          console.log('ss',response.data.user)
          localStorage.setItem('token', response.data.authorisation.token)
          localStorage.setItem('id', response.data.user.id)
           setLoader(false)
          setEdit(false)
        }catch(err){
     console.log(err)
     setLoader(false)
        }
    }

    const empListURlAPI='http://127.0.0.1:8000/admin/get_profile'
  async function get_profile(){
    // setLoader(false) 
   try{
     const response =await axios.get(empListURlAPI,{
       headers:{
         "Authorization":`Bearer ${localStorage.getItem('token')}`,
         "Access-Control-Allow-Origin": "*",
       "Content-Type": "multipart/form-data",

       }
     })
     // console.log(response.data)
    //  setLoader(true)
    //  setProfile(response.data.data)
    
   }
   catch(err){
     console.log(err)
   }
  }

  useEffect( ()=>{
    console.log(localStorage.getItem('token'))
    get_profile()
  //  setAddEmployee1(false)
   console.log(profile)
   },[])

   console.log(profile)


  const handleOptionToggle = (optionValue) => {
    setSelectedOptions(prevSelectedOptions => {
        if (prevSelectedOptions.includes(optionValue)) {
            return prevSelectedOptions.filter(val => val !== optionValue);
        } else {
            return [...prevSelectedOptions, optionValue];
        }
    });

    setData(prevFilters => ({
      ...prevFilters,
      days: selectedOptions.includes(optionValue)
          ? prevFilters.days.filter(val => val !== optionValue)
          : [...prevFilters.days, optionValue]
  }));
  }

  const handleCancel = () =>{
    setEdit(false)
    setSelectedOptions([])
     setData({
      name: '',
      specialization : '',
      days: [],
      gender: '',
      projects: '',
      password: ''
  })
  setErrors({
    name: '',
    specialization : '',
    days: '',
    gender: '',
    projects: '',
    password: ''
})
  }
  console.log('fff', errors)

  return (
    <div className='w-[100%] min-h-screen h-fit bg-slate-200'>
    <div className='w-[100%] h-16'>
      <Navbar/>
    </div>
    <div className='w-[100%] h-fit flex justify-center items-center flex-col'>
    <div className='w-[90%] h-[100px] mt-5'>
      <p className='text-right text-xl sm:text-2xl md:text-3xl font-bold text-[#27374d] -mt-3 sm:mt-0'>المعلومات الشخصية</p>
      </div>
      <div className='w-[90%] h-fit md:h-[500px] bg-slate-400 bg-opacity-50 rounded-2xl flex justify-center items-center flex-col relative mb-5 md:mb-0'>
        <div className='sm:w-36 sm:h-36 w-28 h-28 rounded-full bg-slate-100 absolute -top-16 left-7 sm:left-24 md:left-auto flex justify-center items-center shadow-md shadow-slate-500'>
        <BsFillPersonFill color='#27374d' size={75}/>
        </div>
        
        <div className='w-[95%] h-[80%] md:grid grid-cols-2 grid-rows-3 items-center gap-8 text-[#27374d] mt-20 md:mt-0' dir='rtl'>
        <div className='w-[100%] col-span-2 flex justify-center items-center flex-col gap-2 mt-5'>
            {edit ? 
            <>
                <div className='w-[100%] flex justify-center items-center flex-col md:flex-row  sm:gap-8 mt-7'>
                <div className='w-[100%] flex justify-center items-center flex-col gap-2'>
            <div className='w-[70%]'>
                    <label className={`font-semibold text-base sm:text-xl mt-5 ${errors.name ? 'text-red-600' : 'text-[#27374d]'}`}>الاسم</label>
                </div>
                <input type='text' value={ edit ? data.name : profile.name} className={`w-[70%] h-14 outline-none bg-transparent border-2 ${errors.name ? 'border-red-600' : 'border-[#27374d]'} rounded-lg p-2`} disabled={!edit} onChange={(e)=>setData({...data, name : e.target.value})}/>
                {errors.password && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
                <div className='w-[100%] flex justify-center items-center flex-col gap-2'>
            <div className='w-[70%]'>
                    <label className={`font-semibold text-base sm:text-xl mt-5 ${errors.password ? 'text-red-600' : 'text-[#27374d]'}`}>كلمة المرور</label>
                </div>
                <input type='text' value={ edit ? data.password : profile.password} className={`w-[70%] h-14 outline-none bg-transparent border-2 ${errors.password ? 'border-red-600' : 'border-[#27374d]'} rounded-lg p-2`} disabled={!edit} onChange={(e)=>setData({...data, password : e.target.value})}/>
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            </div>
            </>
            :
            <p className='text-2xl font-semibold'>{profile.name}</p>
            }
            </div>
            <div className='w-[100%] flex justify-center items-center flex-col gap-2'>
                <div className='w-[70%]'>
                    <label className={`font-semibold text-base sm:text-xl mt-5 ${errors.specialization ? 'text-red-600' : 'text-[#27374d]'}`}>الاختصاص</label>
                </div>
                {/* <input type='text' value={ edit ? data.specialization : profile.specialization} className={`w-[70%] h-14 outline-none bg-transparent border-2 ${errors.specialization ? 'border-red-600' : 'border-[#27374d]'} rounded-lg p-2`} disabled={!edit} onChange={(e)=>setData({...data, specialization : e.target.value})}/> */}
                <select value={ edit ? data.specialization : profile.specialization} className={`w-[70%] h-14 outline-none bg-transparent border-2 ${errors.specialization ? 'border-red-600' : 'border-[#27374d]'} rounded-lg p-2`} disabled={!edit}> 
              <option value={1} onClick={(e)=>setData({...data, specialization : e.target.value})}>1</option>
            </select>
                {errors.specialization && <p className="text-red-500 text-sm">{errors.specialization}</p>}
            </div>
            <div className='w-[100%] flex justify-center items-center flex-col gap-2'>
            <div className='w-[70%]'>
                    <label className={`font-semibold text-base sm:text-xl mt-5 ${errors.gender ? 'text-red-600' : 'text-[#27374d]'}`}>الجنس</label>
                </div>
                <select value={ edit ? data.gender : profile.gender} className={`w-[70%] h-14 outline-none bg-transparent border-2 ${errors.gender ? 'border-red-600' : 'border-[#27374d]'} rounded-lg p-2`} disabled={!edit}> 
              <option value={1} onClick={(e)=>setData({...data, gender : e.target.value})}>1</option>
            </select>
                {/* <input type='text' value={ edit ? data.gender : profile.gender} className={`w-[70%] h-14 outline-none bg-transparent border-2 ${errors.gender ? 'border-red-600' : 'border-[#27374d]'} rounded-lg p-2`}  disabled={!edit} onChange={(e)=>setData({...data, gender : e.target.value})}/> */}
                {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>
            <div className='w-[100%] flex justify-center items-center flex-col gap-2'>
            <div className='w-[70%]'>
                    <label className={`font-semibold text-base sm:text-xl mt-5 ${errors.days ? 'text-red-600' : 'text-[#27374d]'}`}>الأيام المختارة</label>
                </div>
                <select name="days" value={ edit ? data.days : profile.days} multiple className={`w-[70%] h-18 outline-none rounded-lg border-2 ${errors.days ? 'border-red-600' : 'border-[#27374d]'} p-2 scrollbar-thin scrollbar-track-[#d4d4ef] scrollbar-thumb-[#27374d]`} disabled={!edit}>
            {options.map((option) => (
              <option value={option.label} selected={selectedOptions.includes(option.label)} onClick={() => handleOptionToggle(option.label)}>{option.label}</option>
            ))}
            </select>
            {errors.days && <p className="text-red-500 text-sm">{errors.days}</p>}
                {/* <input type='text' className='w-[70%] h-14 outline-none bg-transparent border-2 border-[#27374d] rounded-lg p-2' disabled={!edit}/> */}
            </div>
            <div className='w-[100%] flex justify-center items-center flex-col gap-2 mb-5 md:mb-0'>
            <div className='w-[70%]'>
                    <label className={`font-semibold text-base sm:text-xl mt-5 ${errors.projects ? 'text-red-600' : 'text-[#27374d]'}`}>عدد المشاريع</label>
                </div>
                <input type='text' value={ edit ? data.projects : profile.projects} className={`w-[70%] h-14 outline-none bg-transparent border-2 ${errors.projects ? 'border-red-600' : 'border-[#27374d]'} rounded-lg p-2`} disabled={!edit} onChange={(e)=>setData({...data, projects : e.target.value})}/>
                {errors.projects && <p className="text-red-500 text-sm">{errors.projects}</p>}
            </div>
        </div>
        <div className='absolute top-5 right-5'>
            {edit ? 
            <div className='flex justify-center items-center flex-col sm:flex-row gap-2'>
                <button className='border-2 border-[#27374d] hover:border-[#27374da5] hover:text-[#27374da5] text-[#27374d] w-28 h-12 rounded-xl font-semibold' onClick={()=>handleCancel()}>إلغاء</button>
                <button className='bg-[#27374d] hover:bg-[#27374dcb] text-white w-28 h-12 rounded-xl' onClick={()=>EditProfile()}>{loader ? 
                    <div className='w-[100%]] h-[100%] flex justify-center items-center'> <div
                    class=" h-6 w-6 animate-spin rounded-full border border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                      >Loading...</span>
                  </div>
                  </div>
                    : 'حفظ'}</button>
            </div>
            : 
            <button className='bg-[#27374d] hover:bg-[#27374dcb] text-white w-28 h-12 rounded-xl' onClick={()=>setEdit(true)}>تعديل</button>
            }
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile