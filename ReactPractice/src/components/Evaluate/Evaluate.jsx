import React, { useEffect, useState } from 'react';
import Fsidebar from '../Style/fsidebar';
import { MdOutlineAssessment } from "react-icons/md";
import img_5 from  '../../assets/Project_186-09_generated.jpg';
import './Evaluate.css';
import Table_ev from './Table_ev';
import { Link ,useParams} from 'react-router-dom';

const Evaluate = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    date: localStorage.getItem('date') || new Date().toISOString().slice(0, 10),
    semester: localStorage.getItem('semester') || '',
    year: localStorage.getItem('year') || '',
    rating: localStorage.getItem('rating') || ''
});


  useEffect(()=>{
    // localStorage.setItem('date', date); // حفظ التاريخ في localStorage
    // localStorage.setItem('semester', semester); // حفظ الفصل في localStorage
    // localStorage.setItem('rating', rating); // حفظ العلامة في localStorage
    // localStorage.setItem('year',year);
    console.log(localStorage.getItem('token'))
  },[])
  
  return (
    <div dir="rtl">
      <div className='container01'>
        <Fsidebar />
        <div className='header5'>
          <h2 className='style-h2'><MdOutlineAssessment/> المناقشة المرحلية </h2>
          <div className='line'></div>
          <div className='body09'>
            <h4 className='style-h4'>تتبع تقدم الطلاب من خلال جدول المرحلي يسمح للمشرفين بتقديم الإرشاد والدعم للطلاب لتحسين أدائهم وتحقيق أهدافهم التعليمية.</h4>
            {/* <img className='img-g' src={img_5} alt=''/> */}
          </div> 
            <Table_ev />
        </div>
      </div>
    </div>
  );
}

export default Evaluate;
