import React from 'react'
import axios from 'axios';
import img2 from '../assets/image/OIP (2).jpg'
// import img1 from '../assets/image/OIP (3).jpg'
import img3 from '../assets/vecteezy_login-bank-account-apps_.jpg'
import { Link,useNavigate } from 'react-router-dom';
import './Signup.css'
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Rpassword, setRpassword] = useState('');
    const [accept, setAccept] = useState(false);
    const [emailError, setEmailError] = useState('');
    // const [flag,setFlag]=useState(false);
    const [warning1,setWarning1]=useState(false);
    const [warning2,setWarning2]=useState(false);
    const [loading, setLoading] = useState(false);
        let navigate = useNavigate()
    const SignupURlAPI='http://127.0.0.1:8000/user/register'
   async function Signup(e){
    let flag=true;
    // e.preventDefault();
    setAccept(true);
   
    if(name===''|| password.length< 8 || !email.includes("@")){
      flag=false;
    }else flag=true;
    
    if(flag){
      setLoading(true);
        try{
          const response=await axios.post(SignupURlAPI,{
            //name : name
            name: name,
            email: email,
            password: password,
          })
          console.log('ss',response)
           localStorage.setItem('token',response.data.token)    
          //   console.log(response.status)
          //   if(response.data.user.type == '2'){
            navigate('/log-in') 
          //  }else{
          //   setWarning(true)
          //   localStorage.removeItem('token')
          //  }
          setLoading(false)
        }catch(err){
     console.log(err.response);
    //  if(err.response && err.response.status == 403){
    //     setWarning1(true)
    //  }else if (err.response && err.response.status === 500) {
    //    setWarning2(true);
    //  }else  if(err.message == 'Network Error'){
    //    setWarning2(true)
    //  }
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
              <h2 className="sign1">Sign Up</h2>
              <label htmlFor="Name">Name:</label>
              <input
                icon={<CgProfile />}
                id="name"
                type="text"
                placeholder="Name..."
                value={name}
                className='input-log'
                onChange={(e) => setName(e.target.value)}
              />
              {name === '' && accept && <p className="error">Username is Required</p>}
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
                {accept && emailError === 422 && <p>Email is Already been taken</p>}
              <label htmlFor="Password">Password:</label>
              <input
                id="password"
                type="password"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
              />
              {password.length < 8 && accept &&
                <p className="error">Password must be more than 8 Char</p>
              }
              {/* <label htmlFor="Rpassword">Rpassword:</label> */}
              {/* <input
                id="Rpassword"
                type="password"
                placeholder="Rpassword"
                value={Rpassword}
                onChange={(e) => setRpassword(e.target.value)}
              /> */}
              {/* {Rpassword !== password && accept && <p className="error">Password doesn't match</p>} */}
              <div style={{ textAlign: 'center' }}>
              <button className="submit123 submit1" onClick={Signup} disabled={loading}>
  {loading ? <div className="spinner" /> : 'Register'}
</button>

              <h6  className='sh6'>
                Already have an account?
                <span  style={{ textAlign: 'center' }}>
                  <Link to="/log-in">Log in</Link>
                </span>
              </h6>
            </div>
            </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp 