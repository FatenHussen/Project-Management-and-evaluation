import React, { useState } from 'react';
import img_5 from '../../assets/Project_186-09_generated.jpg';
import Fsidebar from '../Style/fsidebar';
import { VscDebugReverseContinue } from "react-icons/vsc";
import ViewTable_Project_Follow_up from './ViewTable_Project_Follow_up';

const ViewProject_Follow_up = () => {
  return (
    <div dir='rtl'>
      <div className='container01'>
        <Fsidebar/>
        <div className='body-P'>
          <h2 className='style-h2'><VscDebugReverseContinue />متابعة تقدم المشروع</h2>
          <div className='line'></div>
          <div className='body09'>
            <h4 className='style-h4'>تتبع تقدم الطلاب من خلال جداول التقييم الأسبوعية يسمح للمشرفين بتقديم الإرشاد والدعم للطلاب لتحسين أدائهم وتحقيق أهدافهم التعليمية.</h4>
            <img className='img-g' src={img_5} alt='' />
          </div>
          <ViewTable_Project_Follow_up/>
        </div>
      </div>
    </div>
  )
}

export default ViewProject_Follow_up