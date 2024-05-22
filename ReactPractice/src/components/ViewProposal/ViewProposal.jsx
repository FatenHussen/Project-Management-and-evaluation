import React from 'react'
import { RiFileEditFill } from "react-icons/ri";
import  img_6 from  '../../assets/Event-Proposal-Template.png'
import img2 from '../../assets/image/OIP (2).jpg'
import Fsidebar from '../Style/fsidebar';
import Table_pr from '../Proposal/Table_pr';
import ViewTable_pr from './ViewTable_pr';
import ViewTableStudent from './ViewTableStudent';

const ViewProposal = () => {
  return (
    <div>
            <div className='container01'>
                <Fsidebar/>
                <div className='header5'>
                <h2 className='style-h2'><RiFileEditFill/> مقترح الطالب</h2>
                    <div className='line'></div>
                <div className='start'>
                  
                        <h3 className='style2'>الجمهورية العربية السورية، جامعة الشام الخاصة، كلية الهندسة المعلوماتية</h3>
                        <img src={img2} className='img-aspu' alt=''/>
                    </div>
                    <div className='body09'>
                        <h4 className='style-h4'>يمكن لهذا المقترح أن يمكّن الطلاب من التعبير بشكل كامل عن أفكار مشاريعهم، بما في ذلك تفصيل جميع جوانب المشروع المقترح والمشكلة التي يهدفون إلى حلها أو معالجتها.</h4>
                        <img className='img-g' src={img_6} alt=''/>
                    </div>
                    <ViewTable_pr/>
                </div>
            </div>
        </div>
  )
}

export default ViewProposal