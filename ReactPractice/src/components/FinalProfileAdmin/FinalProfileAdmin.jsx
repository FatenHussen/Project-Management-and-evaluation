import React, { useState } from 'react';
import Fsidebar from '../Style/fsidebar';
import './finalprofileadmin.css';
import { CgProfile } from "react-icons/cg";
import img2 from '../../assets/78107921 (2).png'
import { Link } from 'react-router-dom';
import ViewTablePos from '../F_dashboard/ViewTablePos';
import ViewTableProject_Follow_up from '../F_dashboard/ViewTableProject_Follow_up';
const FinalProfileAdmin = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file)); // تحويل الملف إلى رابط قابل للعرض
  };

  return (
    <div className='container-ff'>
      <Fsidebar />
      <div className='profile-body'>
        <div className='right'>
            <h2 className='style-h2'><span><CgProfile/> المعلومات الشخصية</span></h2>
            <div className='line2'></div>
            <div className='body-right'>
            <div className='part1-f'>
                    <label>الاسم الثلاثي:</label>
                    <span>vfvkfvmk</span>
                  </div>
                  <div className='part1-f'>
                    <label>الجنس:</label>
                    <span>vfvkfvmk</span>
                  </div>
                  <div className='part1-f'>
                    <label>الأختصاص:</label>
                    <span>vfvkfvmk</span>
                  </div>
                  <div className='part1-f'>
                    <label>عدد المشاريع المستلمة:</label>
                    <span>vfvkfvmk</span>
                  </div>
                  <div className='part1-f'>
                    <label>أيام النشاط:</label>
                    <span>vfvkfvmk</span>
                  </div>
            </div>

        </div>
        <div className='left-f'>
        <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id='fileInput'
          />
          <label htmlFor='fileInput'>
            <img src={image}  className='styleImg' alt="Profile" />
          </label>
          <h5>Hi,Doctor </h5>
          <h6 className='styleh5'>معلومات الشخصية</h6>  
          <div className='line1'>
           
          </div>
          <div className='title-f'>
            <Link to='/fadmin' className='link-f'>تعديل المعلومات الشخصية</Link>
                    </div>
        </div>
      </div>
      <div className='body-ft'>
      <div className='parttow'>
            <h2 className='style-h2'>جدول المقترحات</h2>
            <div className='line'></div>  
            <ViewTablePos/>
            <h2 className='style-h2'>جدول التقيمات الأسبوعية</h2>
            <div className='line'></div>  
            <ViewTableProject_Follow_up/>
          </div> 
          </div>
    </div>
  );
};

export default FinalProfileAdmin;
