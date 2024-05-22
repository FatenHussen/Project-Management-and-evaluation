import React from 'react'
import { useState, useEffect } from 'react';
import { MdOutlineAssessment } from "react-icons/md";
import img5 from '../../assets/landing-page-template-social-media-marketing-trendy-flat-design-website-web-design-mobile-website-concept-team-work-business-vector-illustration_87744-1112.jpg';
import Fsidebar from '../Style/fsidebar';
import ViewTableFinalEvaluate from './ViewTableFinalEvaluate';
const ViewFinalEuvluate = () => {
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
      <h2 className='style-h2'><MdOutlineAssessment/>  الدراسة النهائية </h2>
        <div className='line'></div>
        <div className='body09'>
        <h4 className='style-h4'> تقديم تقييم شامل يعكس تطور الطالب خلال الفترة الزمنية التي قضاها في المشروع، وتحديد نقاط القوة والمجالات التي يمكنه تحسينها. يمكن أن يكون التقييم النهائي فرصة لتحفيز الطالب على المضي قدمًا وتحفيزه لتحقيق المزيد من النجاح في المستقبل..</h4>
        <img className='img-g' src={img5} alt=''/>
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
          <ViewTableFinalEvaluate/>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ViewFinalEuvluate