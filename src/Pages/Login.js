import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/OIP (2).jpg'
import login from '../Assets/vecteezy_login-bank-account-apps_.jpg'
const Login = () => {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [warning, setWarning] = useState('')
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    
    const LoginURlAPI='http://localhost:8000/api/login'
   async function LoginAPIA(){
    let hasError = false;

    if (!email.trim()) {
      setEmailError('Please enter your email.');
      hasError = true;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    setEmailError('Please enter a valid email address.');
    hasError = true;
} else {
      setEmailError('');
  }

  if (!password.trim()) {
      setPasswordError('Please enter your password.');
      hasError = true;
  } else if (password.length < 8) {
    setPasswordError('Please enter at least 8 letters.');
    hasError = true;
} else {
      setPasswordError('');
  }

  if (hasError) {
    return; // Return early if there are validation errors
  }
  console.log('ppp')
    setLoader(true)
        try{
          const response=await axios.post(LoginURlAPI, formData, {
            headers:{
          "Accept": "application/json, text/plain, */*",
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": false
            }
          }
          )
          console.log('ss',response.data)
          // localStorage.setItem('token', response.data.data.token)
          if(response.data && response.data.data.admin){
            console.log("asd",11)
          localStorage.setItem('token', response.data.data.token)
            navigate("/dashboard");
          }
          if(response.data && response.data.data.employee){
            console.log("asd",222)
          localStorage.setItem('token', response.data.data.token)
            navigate("/profile");
          }
           setLoader(false)
        }catch(err){
          setLoader(false)
        }
      }
      
      console.log('error', emailError, passwordError)
      
  //     const LoginURlAPIE='http://127.0.0.1:8000/employee/login'
  //     async function LoginAPIE(){
  //       let hasError = false;
        
  //   if (!email.trim()) {
  //     setEmailError('Please enter your email.');
  //     hasError = true;
  // } else if (!/\S+@\S+\.\S+/.test(email)) {
  //   setEmailError('Please enter a valid email address.');
  //   hasError = true;
  // } else {
  //   setEmailError('');
  // }

  // if (!password.trim()) {
  //     setPasswordError('Please enter your password.');
  //     hasError = true;
  //   } else if (password.length < 8) {
  //   setPasswordError('Please enter at least 8 letters.');
  //   hasError = true;
  // } else {
  //   setPasswordError('');
  // }
  
  // if (hasError) {
  //   return; // Return early if there are validation errors
  // }
  // setLoader(true)
  // try{
  //         const response=await axios.post(LoginURlAPIE, formData, {
  //           headers:{
  //             // "Authorization":`Bearer ${localStorage.getItem('token')}`,
  //         "Accept": "application/json, text/plain, */*",
  //         "Access-Control-Allow-Origin" : "*",
  //         "Content-Type": false
  //           }
  //         }
  //       )
  //       console.log('ss',response.data)
  //       // localStorage.setItem('token', response.data.authorisation.token)
        
  //       // localStorage.setItem('role', response.data.user.role)
  //       // localStorage.setItem('id', response.data.user.id)
  //       // localStorage.setItem('token',response.data.token)    
  //       //   console.log(response.status)
  //       //   if(response.data.user.type == '2'){
  //         //   if(response.data.user.role == 'Student')
  //           // navigate('/finputuser') 
  //         // else
  //           // nav('/students')
  //         //  }else{
  //           //   setWarning(true)
  //           //   localStorage.removeItem('token')
  //           //  }
  //           navigate("/profile");
  //           setLoader(false)
  //         }catch(err){
  //           console.log(err)
  //     console.log(err.response.status)
  //     if(err.response && err.response.status && err.response.status == 400){
  //     setWarning("not Auth")
  //   }else if(err.response.message == "Network Error"){
  //     setWarning('Network error')
  //   }else if(err.response.status == 500){
  //     setWarning('Network error')
  //   }

  //     setLoader(false)
  //       }
  //       console.log("asd",111)
  //   }
    
  //     const handleLogin = () => {
  //   // setLoader(true);
  //   if (email === 'admin@example.com') {
  //     LoginAPIA();
  //   } else {
  //     LoginAPIE();
  //   }
  //   // setLoader(false);
  // };
  return (
    <div className='w-screen h-screen bg-slate-200 flex justify-center items-center'>
        <div className='w-[80%] h-[80%] rounded-2xl md:rounded-s-2xl md:rounded-e-none shadow-lg border-t border-[#86b7fe] shadow-[#86b7fe] flex justify-center items-center'>
            <div className='w-[100%] md:w-[40%] h-[100%] md:h-[95%] bg-blue-50 rounded-2xl md:rounded-s-2xl md:rounded-e-none flex justify-center items-center flex-col'>
            <div className='w-[100%] h-[33%] flex justify-center items-center flex-col'>
                    <img src={logo}  className='w-28 rounded-full'/>
                    <p className='text-[#86b7fe] font-bold text-xl sm:text-2xl mt-5'>تسجيل الدخول</p>
                </div>
            <div className='w-[90%] h-[33%] flex justify-center flex-col text-right'>
            <label htmlFor="email" className={`font-semibold text-base sm:text-xl ${emailError ? 'text-red-600' : 'text-[#86b7fe]'}`}>البريد الاكتروني</label>
          <input id="email" type="email" placeholder="Email" className={`w-[100%] h-10 rounded-3xl p-2 outline-none border bg-white ${emailError ? 'border-red-600' : 'border-[#86b7fe]'}`} onChange={(e)=>setEmail(e.target.value)}/>
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          <label htmlFor="password" className={`font-semibold text-base sm:text-xl mt-5 ${passwordError ? 'text-red-600' : 'text-[#86b7fe]'}`}>كلمة المرور</label>
          <input id="password" type="password" placeholder="Password" className={`w-[100%] h-10 rounded-3xl p-2 outline-none border ${passwordError ? 'border-red-600' : 'border-[#86b7fe]'} bg-white`} onChange={(e)=>setPassword(e.target.value)}/>
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>
            <div className='w-[100%] h-[33%] flex justify-center items-center flex-col'>
           {warning ?  <p className='bg-red-300 text-red-600 border-2 border-red-600  p-2 mb-5 rounded-xl'>{warning}</p> : ''}
                    <button className='w-[55%] h-[25%] rounded-3xl bg-[#7eacf1] text-white hover:bg-[#719bd9] text-sm sm:text-base' onClick={()=>LoginAPIA()}>{loader ? 
                    <div className='w-[100%]] h-[100%] flex justify-center items-center'> <div
                    class=" h-6 w-6 animate-spin rounded-full border border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                      >Loading...</span>
                  </div>
                  </div>
                    : 'تسجيل الدخول'}</button>
                </div>
            </div>
            <div className='w-[58%] h-[95%] hidden md:flex justify-center items-center flex-col'>
                <img src={login} className='h-[100%]'/>
            </div>
        </div>
    </div>
  )
}

export default Login