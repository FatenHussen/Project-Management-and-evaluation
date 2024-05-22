import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Finputuser.css';
import Fsidebar from '../Style/fsidebar';
import img0 from '../../assets/vecteezy_profile-information-design_.jpg';

const Finputuser = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    StudentNouber: '',
    specialization: '',
    academicYear: '',
    cumulativeGPA: '',
    completedHours: '', 
    gender:'',
    currentHours: ''
    
  });
  const [accept, setAccept] = useState(false);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate()
  const FinputURlAPI='http://localhost:8000/api/student'
   async function Finput(){
    let flag=true;
    setAccept(true);
    // setLoader(true)
    if(formData.StudentNouber==='' || formData.specialization==='' || formData.academicYear==='' || formData.cumulativeGPA==='' || formData.completedHours==='' || formData.gender==='' || formData.currentHours===''){
      flag=false;
    }else flag=true;
    if(flag){
      setLoading(true)
        try{
          const response=await axios.post(FinputURlAPI,{
            f:formData.fullName,
            a:formData.StudentNouber,
            t:formData.specialization,
            c:formData.academicYear,
            d:formData.cumulativeGPA,
            e:formData.completedHours,
            k:formData.gender,
            y:formData.currentHours,
          })
          console.log('ss',response.data.user.role)
          // localStorage.setItem('token',response.data.token)    
          //   console.log(response.status)
          //   if(response.data.user.type == '2'){
            navigate('/home') 

          //  }else{
          //   setWarning(true)
          //   localStorage.removeItem('token')
          //  }
          //  setLoader(false)
        }catch(err){
     console.log(err)
    //  if(err.response && err.response.status == 403){
    //    setWarning1(true)
    //  }else if (err.response && err.response.status === 500) {
    //   setWarning2(true);
    // }else  if(err.message == 'Network Error'){
    //   setWarning2(true)
    // }
    //  setLoader(false)
        }
        finally {
          setLoading(false); 
        }
      }
    }

    console.log('dd', formData)


  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name == 'cumulativeGPA'){
      let number = value.replace(/[^\d.]/g, '');
      // Ensure only one dot is present
      number = number.replace(/(\..*)\./g, '$1');
      // Ensure that there's only one digit before the dot
      // number = number.replace(/^(\d{0,1})\./g, '$1.');
      // // Ensure only two digits after the dot
      // number = number.replace(/^(\d*\.\d{0,2})\d*/g, '$1');
      
      // Ensure the number doesn't exceed 4
       if (parseFloat(number) > 100) {
          number = '100';
       }
      // Update the state with the sanitized value
      setFormData({
          ...formData,
          [name]: number
      });
    }else if(name == 'StudentNouber'){
      const number = value.replace(/[^0-9]/g, '');
      // Limit the number of characters to 4
      const truncatedNumber = number.slice(0, 9);
      // If the truncated number is different, update the state
      if (truncatedNumber !== formData[name]) {
          setFormData({
              ...formData,
              [name]: truncatedNumber
          });
      }
    }else if(name == 'completedHours'){
      const number = value.replace(/[^0-9]/g, '');
      // Limit the number of characters to 4
      const truncatedNumber = number.slice(0, 3);
      const floatValue = parseFloat(truncatedNumber);
        // Ensure the value does not exceed 4
        const finalValue = Math.min(floatValue, 166);
      // If the truncated number is different, update the state
      if (finalValue !== formData[name]) {
          setFormData({
              ...formData,
              [name]: finalValue ? finalValue : ''
          });
      }
    }else if(name == 'currentHours'){
      const number = value.replace(/[^0-9]/g, '');
      // Limit the number of characters to 4
      const truncatedNumber = number.slice(0, 3);
      const floatValue = parseFloat(truncatedNumber);
        // Ensure the value does not exceed 4
        const finalValue = Math.min(floatValue, 21);
      // If the truncated number is different, update the state
      if (finalValue !== formData[name]) {
          setFormData({
              ...formData,
              [name]: finalValue ? finalValue : ''
          });
      }
    }
    else{
    setFormData({
      ...formData,
      [name]: value
    })
  };
   
  };
  useEffect(() => {
   
    axios.get('URL لجلب بيانات المستخدم من الـ API')
      .then(response => {
        setFormData(prevState => ({
          ...prevState,
          fullName: response.data.fullName 
        }));
      })
      .catch(error => {
        console.error('حدث خطأ أثناء جلب البيانات:', error);
      });
  }, []); 

  return (
    <>
      <div className='contener2'>
        <Fsidebar />
        <div className='header22'>
          <div className='magd1'>
            <div>
              <h2>معلومات الطالب:</h2>
              <div className='line'></div>
            </div>
          </div>
          <div className='text0'>
            <h3>يرجى إدخال معلوماتك الشخصية لإكمال عملية التسجيل، شكرًا لتعاونك وتفهمك:</h3>
            <img src={img0} className='img0' alt="profile"/>
          </div>
          <div className="App">
            <div className='header-ff'>
              <div className='form'>
                <div className='body1-f'>
                  <div className='part1'>
                    <label>الاسم الثلاثي:</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled
                      className='test1'
                    />
                  </div>
                  <div className='part1'>
                    
                   <label>الجنس</label>
                   
                   <select 
                   name='gender'
                   value={formData.gender}
                   onChange={handleChange}
                   >
{/* <option value='' disabled hidden style={{ color: 'red' }}>
  {formData.gender === '' && accept && 'الرجاء الاختيار'}
    </option>                  */}
                    <option value=''></option>
                   <option value='male'>ذكر</option>
                   <option value='female'>أنثى</option>
                     </select>
                     {formData.gender === '' && accept && <p className='error1o'>الحقل فارغ.</p>}
                     </div>
                    
                  <div className='part1'>
                    <label>الرقم الجامعي:</label>
                    <input
                      type="text"
                      name="StudentNouber"
                      value={formData.StudentNouber}
                      onChange={handleChange}
                    />
                   
                     {formData.StudentNouber.length <9  && accept && <p className='error1o'>ادخل الرقم الجامعي </p>}
                  </div>
                 
                  <div className='part1'>
                    <label>الاختصاص:</label>
                    <select
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                    >
                      {/* <option value='' disabled hidden style={{ color: 'red' }}>
  {formData.specialization === '' && accept && 'الرجاء الاختيار'}
    </option> */}
                      <option value=''></option>
                      <option value='Null'>لا يوجد أختصاص</option> 
                      <option value="Software Engineering">هندسة برمجيات</option>
                      <option value="Artificial Intelligence">ذكاء صنعي</option>
                      <option value="Networking">شبكات</option>
                    </select>
                    {formData.specialization === '' && accept && <p className='error1o'>الحقل فارغ</p>}
                  </div>
                  <div className='part1'>
                    <label>المستوى الدراسي :</label>
                    <select
                      name="academicYear"
                      value={formData.academicYear}
                      onChange={handleChange}
                    >
                      <option value=''></option>
                      <option value="أولى">أولى</option>
                      <option value="ثانية">ثانية</option>
                      <option value="ثالثة">ثالثة</option>
                      <option value="رابعة">رابعة</option>
                      <option value="خامسة">خامسة</option>
                    </select>
                    {formData.academicYear==='' && accept && <p className='error1o'>الحقل فارغ</p>}
                  </div>
                  <div className='part1'>
                    <label>المعدل التراكمي المئوي:</label>
                    <input
                      type="text"
                      name="cumulativeGPA"
                      value={formData.cumulativeGPA}
                      onChange={handleChange}
                    />
                    {formData.cumulativeGPA==='' && accept && <p className='error1o'>الحقل فارغ</p>}
                  </div>
                  <div className='part1'>
                    <label> الساعات المنجزة حتى نهاية الفصل الحالي:</label>
                    <input
                      type="text"
                      name="completedHours"
                      value={formData.completedHours}
                      onChange={handleChange}
                    />
                    {/* <select
                      name="completedHours"
                      value={formData.completedHours}
                      onChange={handleChange}
                    >
                      {Array.from({ length: 69 }, (_, i) => i + 98).map(hour => (
                        <option key={hour} value={hour}>{hour}</option>
                      ))}
                    </select> */}
                    {formData.completedHours==='' && accept && <p className='error1o'>الحقل فارغ</p>}
                  </div>
                  
                  <div className='part1'>
                    <label>الساعات المسجلة في الفصل الحالي :</label>
                    <input
                      type="text"
                      name="currentHours"
                      value={formData.currentHours}
                      onChange={handleChange}
                    />
                    {/* <select
                      name="currentHours"
                      value={formData.currentHours}
                      onChange={handleChange}
                    >
                      {Array.from({ length: 69 }, (_, i) => i + 98).map(hour => (
                        <option key={hour} value={hour}>{hour}</option>
                      ))} 
                    </select>*/}
                      {formData.currentHours==='' &&accept && <p className='error1o'>الحقل فارغ</p>}
                  </div>
                </div>
                <button style={{backgroundColor:'rgb(125,  125, 125)'}}onClick={()=>Finput() }disabled={loading}>
                {loading ? <div className="spinner" /> : 'ارسال'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finputuser;
