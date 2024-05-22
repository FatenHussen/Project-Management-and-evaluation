import React, { useState, useEffect } from 'react';
import Fsidebar from '../Style/fsidebar';
import img0 from '../../assets/vecteezy_profile-information-design_.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Fadmin = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    specialization: '',
    projectsCount: '',
    gender: '',
    selectedDays: []
  });

  // التعامل مع تغييرات الحقول
  const handleChange = (e) => {
    const { name, value, type, options } = e.target;

    if (type === 'select-multiple') {
      const selectedDays = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);

      setFormData({
        ...formData,
        [name]: selectedDays
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const [accept, setAccept] = useState(false);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  console.log(formData);
  const FadminURlAPI = 'http://localhost:8000/api/doctor';
  async function Fadmin1() {
    let flag=true;
    setAccept(true);
    if(formData.specialization==='' || formData.gender===''|| formData.projectsCount===''|| formData.selectedDays===''){
      flag=false;
    }else flag=true;
    if(flag){
    try {
      setLoading(true);
      const response = await axios.post(FadminURlAPI, {
        firstname: formData.fullName,
        specialization: formData.specialization,
        projects_per_semesters: formData.projectsCount,
        gender: formData.gender,
        Active_days: formData.selectedDays,
      });
      console.log('ss', response.data.user.role);
      localStorage.setItem('token', response.data.authorisation.token);
      localStorage.setItem('role', response.data.user.role);
      localStorage.setItem('id', response.data.user.id);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); 
    }
  }
  }

  return (
    <>
      <div className='contener2'>
        <Fsidebar />
        <div className='header22'>
          <div className='magd1'>
            <div>
              <h2>معلومات المشرف:</h2>
              <div className='line'></div>
            </div>
          </div>
          <div className='text0'>
            <h3>يرجى إدخال معلوماتك الشخصية لإكمال عملية التسجيل، شكرًا لتعاونك وتفهمك:</h3>
            <img src={img0} className='img0' alt="profile"/>
          </div>
          <div className="App">
            <div className='header-ff'>
              <div className='form1' style={{width:'100%'}}>
                <div className='body1-f'>
                  <div className='part1'>
                    <label>الاسم الثلاثي:</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled
                    />
                  </div>
                  <div className='part1'>
                    <label>الاختصاص:</label>
                    <select
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                    >
                      <option value=''></option>
                      <option value="Software Engineering">هندسة برمجيات</option>
                      <option value="Artificial Intelligence">ذكاء صنعي</option>
                      <option value="Networking">شبكات</option>
                    </select>
                    {formData.specialization === '' && accept && <p className='error1o'>الحقل فارغ.</p>}
                  </div>
                  <div className='part1'>
                    <label>عدد المشاريع الخاصة بهذا الفصل :</label>
                    <select
                      name="projectsCount"
                      value={formData.projectsCount}
                      onChange={handleChange}
                    >
                      {['',1, 2, 3, 4, 5, 6].map(count => (

                        <option key={count} value={String(count)}>{count}</option>
                      ))}
                    </select>
                    {formData.projectsCount === '' && accept && <p className='error1o'>الحقل فارغ.</p>}
                  </div>
                  <div className='part1'>
                    <label>الجنس:</label>
                    <select
                      name='gender'
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value=''></option>
                      <option value='male'>ذكر</option>
                      <option value='female'>أنثى</option>
                    </select>
                    {formData.gender === '' && accept && <p className='error1o'>الحقل فارغ.</p>}
                  </div>
                  <div className='part1'>
  <label>الأيام الدوام في الفصل :</label>
  <select
    name="selectedDays"
    multiple={true}
    value={formData.selectedDays}
    onChange={handleChange}
  >
    <option value="الأحد">الأحد</option>
    <option value="الاثنين">الاثنين</option>
    <option value="الثلاثاء">الثلاثاء</option>
    <option value="الأربعاء">الأربعاء</option>
    <option value="الخميس">الخميس</option>
    <option value="الجمعة">الجمعة</option>
    <option value="السبت">السبت</option>
  </select>
  {formData.selectedDays.length < 1 && accept && <p className='error1o'>الحقل فارغ.</p>}
</div>

                </div>
                <button style={{backgroundColor:'rgb(125,  125, 125)'}}onClick={()=>Fadmin1() }disabled={loading}>
                {loading ? <div className="spinner" /> : 'ارسال'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fadmin;
