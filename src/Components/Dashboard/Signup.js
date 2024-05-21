import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/OIP (2).jpg'
import login from '../../Assets/vecteezy_login-bank-account-apps_.jpg'

const Signup = () => {

  const [loader, setLoader] = useState(false)
    const [data,setData] =useState({ 
        name : '',
        email: '',
        password: '',
        role : '' 
    });
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      password: '',
      role: '',
    })
    const nav = useNavigate()
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('role', data.role);
    const SignupURlAPI='http://127.0.0.1:8000/admin/employee/create'
   async function Signup(){
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

    if (!data.email.trim()) {
      setErrors(error => ({
        ...error,
        email: 'Please enter your email.'
      }));
      hasError = true;
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    setErrors(error => ({
      ...error,
      email: 'Please enter a valid email address.'
    }));
    hasError = true;
} else {
  setErrors(error => ({
    ...error,
    email: ''
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

  if (!data.role.trim()) {
    setErrors(error => ({
      ...error,
      role: 'Please enter your role.'
    }));
    hasError = true;
} else {
setErrors(error => ({
  ...error,
  role: ''
}));
}

  if (hasError) {
    return; // Return early if there are validation errors
}

    setLoader(true)
        try{
          const response=await axios.post(SignupURlAPI, formData, {
            headers:{
              "Authorization":`Bearer ${localStorage.getItem('token')}`,
          "Accept": "application/json, text/plain, */*",
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": false
            }
          })
          // console.log('ss',response.data.user)
          // localStorage.setItem('token', response.data.authorisation.token)

          // localStorage.setItem('role', response.data.user.role)
          // localStorage.setItem('id', response.data.user.id)
          // localStorage.setItem('token',response.data.token)    
          //   console.log(response.status)
          //   if(response.data.user.type == '2'){
          //   if(response.data.user.role == 'Student')
            // nav('/login') 
          // else
            // nav('/fadmin')
          //  }else{
          //   setWarning(true)
          //   localStorage.removeItem('token')
          //  }
           setLoader(false)
        }catch(err){
     console.log(err) 
    //  if(err.response && err.response.status == 403){
    //    setWarning1(true)
    //  }else if (err.response && err.response.status === 500) {
    //   setWarning2(true);
    // }else  if(err.message == 'Network Error'){
    //   setWarning2(true)
    // }
     setLoader(false)
        }
    }

    console.log('ss',data)

  return (
    <div className='w-[100%] h-[650px] bg-slate-200 flex justify-center items-center'>
        <div className='w-[80%] h-[100%] rounded-2xl md:rounded-s-2xl md:rounded-e-none shadow-lg border-t border-[#86b7fe] shadow-[#86b7fe] flex justify-center items-center'>
            <div className='w-[100%] md:w-[40%] h-[100%] md:h-[95%] bg-blue-50 rounded-2xl md:rounded-s-2xl md:rounded-e-none flex justify-center items-center flex-col'>
            <div className='w-[100%] h-[25%] flex justify-center items-center flex-col'>
                    <img src={logo}  className='h-24 rounded-full mt-5'/>
                    <p className='text-[#86b7fe] font-bold text-xl sm:text-2xl mt-2'>تسجيل</p>
                </div>
            <div className='w-[90%] h-[65%] flex justify-center flex-col text-right'>
            <label htmlFor="name" className={`font-semibold text-base sm:text-xl mt-5 ${errors.name ? 'text-red-600' : 'text-[#86b7fe]'}`}>الاسم الكامل</label>
          <input id="name" type="text" className={`w-[100%] h-10 rounded-3xl p-2 outline-none border ${errors.name ? 'border-red-600' : 'border-[#86b7fe]'} bg-white`} onChange={(e)=>setData({...data, name : e.target.value})}/>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <label htmlFor="email" className={`font-semibold text-base sm:text-xl mt-5 ${errors.email ? 'text-red-600' : 'text-[#86b7fe]'}`}>البريد الاكتروني</label>
          <input id="email" type="email" className={`w-[100%] h-10 rounded-3xl p-2 outline-none border ${errors.email ? 'border-red-600' : 'border-[#86b7fe]'} bg-white`} onChange={(e)=>setData({...data, email : e.target.value})}/>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <label htmlFor="password" className={`font-semibold text-base sm:text-xl mt-5 ${errors.password ? 'text-red-600' : 'text-[#86b7fe]'}`}>كلمة المرور</label>
          <input id="password" type="password" className={`w-[100%] h-10 rounded-3xl p-2 outline-none border ${errors.password ? 'border-red-600' : 'border-[#86b7fe]'} bg-white`} onChange={(e)=>setData({...data, password : e.target.value})}/>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          <label htmlFor="role" className={`font-semibold text-base sm:text-xl mt-5 ${errors.role ? 'text-red-600' : 'text-[#86b7fe]'}`}>المنصب</label>
          {/* <input id="password" type="password" placeholder="Password" className='w-[100%] h-10 rounded-3xl p-2 outline-none border bg-white border-[#7eacf1]' onChange={(e)=>setData({...data, password : e.target.value})}/> */}
          <select id='role' className={`w-[100%] h-10 rounded-3xl p-2 outline-none border ${errors.role ? 'border-red-600' : 'border-[#86b7fe]'} bg-white`} onChange={(e)=>setData({...data, role : e.target.value})}>
            <option value=''></option>
            <option value='dean'>العميد</option>
            <option value='super'>نائب العميد</option>
            <option>نائب العميد</option>
            <option>نائب العميد</option>

          </select>
          {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
            </div>
            <div className='w-[100%] h-[10%] flex justify-center items-center flex-col'>
                    <button className='w-[55%] h-[75%] rounded-3xl bg-[#7eacf1] text-white hover:bg-[#719bd9] text-sm sm:text-base' onClick={()=>Signup()}>{loader ? 
                    <div className='w-[100%]] h-[100%] flex justify-center items-center'> <div
                    class=" h-6 w-6 animate-spin rounded-full border border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                      >Loading...</span>
                  </div>
                  </div>
                    : 'تسجيل'}</button>
                    {/* <p className='text-[#86b7fe]'>Don't have an account ?<a></a> Register</p> */}
                </div>
            </div>
            <div className='w-[58%] h-[95%] hidden md:flex justify-center items-center flex-col'>
                <img src={login} className='h-[100%]'/>
            </div>
        </div>
    </div>
  )
}

export default Signup