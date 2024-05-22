import React, { useState } from 'react';
import axios from 'axios';
import img2 from '../assets/image/OIP (2).jpg'
import img1 from '../assets/image/OIP (3).jpg'
import img3 from '../assets/vecteezy_login-bank-account-apps_.jpg'
import { CgProfile } from 'react-icons/cg';
import { Link,useNavigate } from 'react-router-dom';
const LogIn = () => {
    const [email,setEmail] =useState('');
    const [password,setpassword] =useState('');
    const [accept, setAccept] = useState(false);
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate() ; 
    
    const LoginURlAPI='http://127.0.0.1:8000/user/login'
   async function Login(){
    let flag=true;
    setAccept(true);
    if(password.length< 8 || !email.includes("@")){
      flag=false;
    }else flag=true;
    // setLoader(true)
    if(flag){
      setLoading(true);
        try{
          const response=await axios.post(LoginURlAPI,{
            email: email,
            password: password,
          })
          console.log('ss',response.data.data.user)
          localStorage.setItem('token', response.data.data.token)
          if(response.data.data.user){
          localStorage.setItem('role', 1)
          navigate('/finputuser')
          }else{
          localStorage.setItem('role', 2)
          navigate('/fadmin')
          }
          // localStorage.setItem('role', response.data.user.role)
          // localStorage.setItem('id', response.data.user.id)
          // localStorage.setItem('token',response.data.token)    
          //   console.log(response.status)
          //   if(response.data.user.type == '2'){
          //   if(response.data.user.role == 'Student')
          //   navigate('/finputuser') 
          // else
          //    navigate('/fadmin')
          // }else{
          //   setWarning(true)
          //   localStorage.removeItem('token')
          //  }
          setLoading(false)
        }catch(err){
     console.log(err)
    //  if(err.response && err.response.status == 403){
    //    setWarning1(true)
    //  }else if (err.response && err.response.status === 500) {
    //   setWarning2(true);
    // }else  if(err.message == 'Network Error'){
    //   setWarning2(true)
    // }
     setLoading(false)
        }
      }
    }
  return (
    <div className='fullscreen1'>
    <div className='b-signup'>
        <div className='body-s'>
            <div className='part1-log'>
            <img className='img-123'src={img3}/>
            </div>
            <div className='part2-log'>
            <img className='img-1234' src={img2}/>
            <div className='body-part1'>
            <div className="text-log">
          <h2 className="sign1">Log In</h2>
          <label htmlFor="Email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Email..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           {!email.includes("@") && accept &&
               <p className="error">Please enter a valid email address</p>
              }
          <label htmlFor="Password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          {password.length < 8 && accept &&
                <p className="error">Password must be more than 8 Char</p>
              }
          <div style={{ textAlign: 'center' }}>
          <button  className='submit123' onClick={()=>Login()} disabled={loading}>
          {loading ? <div className="spinner" /> : 'login'}</button>

          <h6 className='sh6'>Don't have an account ?<span><Link to='/register'>Register</Link></span></h6>

        </div>
        </div>
        
            </div>
            </div>
        </div>
    </div>
</div>
)
}
export default LogIn