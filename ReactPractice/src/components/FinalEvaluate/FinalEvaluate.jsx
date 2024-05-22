import React, { useEffect, useState } from 'react';
import './FinalEvaluate.css'
import Fsidebar from '../Style/fsidebar';
import { MdOutlineAssessment } from "react-icons/md";
import img5 from '../../assets/landing-page-template-social-media-marketing-trendy-flat-design-website-web-design-mobile-website-concept-team-work-business-vector-illustration_87744-1112.jpg';
import { Link ,useParams} from 'react-router-dom';
import FinalTable_Ev from './FinalTable_Ev';
const FinalEvaluate = () => {
  
 const { id } = useParams();
    const [formData1, setFormData1] = useState({
        date: new Date().toISOString().slice(0, 10),
        semester: '',
        year:  '',
        rating:  ''
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Date:', date);
        console.log('Semester:', semester);
        console.log('Year:', year);
        console.log('Rating:', rating);
        
      };
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
          <h2 className='style-h2'><MdOutlineAssessment/>  المناقشة النهائية </h2>
          <div className='line'></div>
          <div className='body09'>
            <h4 className='style-h4'> تقديم تقييم شامل يعكس تطور الطالب خلال الفترة الزمنية التي قضاها في المشروع، وتحديد نقاط القوة والمجالات التي يمكنه تحسينها. يمكن أن يكون التقييم النهائي فرصة لتحفيز الطالب على المضي قدمًا وتحفيزه لتحقيق المزيد من النجاح في المستقبل..</h4>
            {/* <img className='img-g' src={img5} alt=''/> */}
          </div>
          <FinalTable_Ev/>
            </div>
            
        </div>
      </div>
  )
}

export default FinalEvaluate