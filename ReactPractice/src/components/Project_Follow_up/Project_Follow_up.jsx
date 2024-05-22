import React, { useState } from 'react';
import Fsidebar from '../Style/fsidebar';
import './Project_Follow_up.css';
import img_5 from '../../assets/Project_186-09_generated.jpg';
import { VscDebugReverseContinue } from "react-icons/vsc";
import Table_Project_follow_up from './Table_Project_follow_up';
import { Link ,useParams} from 'react-router-dom';
const Project_Follow_up = () => {
  const { id } = useParams();
  console.log('magdkouli',id)
  const [showForm, setShowForm] = useState(false); // حالة لإظهار وإخفاء النموذج
  return (
    <div dir='rtl'>
      <div className='container01'>
        <Fsidebar />
        <div className='body-P'>
          <h2 className='style-h2'><VscDebugReverseContinue />متابعة تقدم المشروع</h2>
          <div className='line'></div>
          <div className='body09'>
            <h4 className='style-h4'>تتبع تقدم الطلاب من خلال جداول التقييم الأسبوعية يسمح للمشرفين بتقديم الإرشاد والدعم للطلاب لتحسين أدائهم وتحقيق أهدافهم التعليمية.</h4>
            {/* <img className='img-g' src={img_5} alt='' /> */}
          </div>
          
          <Table_Project_follow_up />
        </div>
      </div>
    </div>
  )
}

export default Project_Follow_up;
