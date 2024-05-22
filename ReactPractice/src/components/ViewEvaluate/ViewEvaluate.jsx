import React, { useEffect, useState } from 'react';
import { MdOutlineAssessment } from "react-icons/md";
import img_5 from  '../../assets/Project_186-09_generated.jpg';
import Fsidebar from '../Style/fsidebar';
import ViewTableEvaluate from './ViewTableEvaluate';

const ViewEvaluate = () => {
    const [formData, setFormData] = useState({
        date: localStorage.getItem('date') || new Date().toISOString().slice(0, 10),
        semester: localStorage.getItem('semester') || '',
        year: localStorage.getItem('year') || '',
        rating: localStorage.getItem('rating') || ''
    });    
  return (
    <div dir="rtl">
    <div className='container01'>
      <Fsidebar/>
      <div className='header5'>
        <h2 className='style-h2'><MdOutlineAssessment/> الدراسة المرحلية </h2>
        <div className='line'></div>
        <div className='body09'>
          <h4 className='style-h4'>تتبع تقدم الطلاب من خلال جدول المرحلي يسمح للمشرفين بتقديم الإرشاد والدعم للطلاب لتحسين أدائهم وتحقيق أهدافهم التعليمية.</h4>
          <img className='img-g' src={img_5} alt=''/>
        </div>
        <form>
          <div className='form-ff'>
          <label>
           التاريخ:
           
           </label>
           <br />
<label>
الفصل:

</label>
<br />
<label>
السنة:
</label>
<br />
<label>
العلامة:

</label>

            <br />
          </div>
        </form>
        <ViewTableEvaluate/>
      </div>
    </div>
  </div>
  )
}

export default ViewEvaluate