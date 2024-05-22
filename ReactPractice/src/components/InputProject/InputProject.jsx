import React from 'react'
import Fsidebar from '../Style/fsidebar'
import img2 from '../../assets/OIP (4).jpg'
import './InputProject.css'
import FormInputProject from './FormInputProject'
const InputProject = () => {
  return (
    <div className='contener2'>
        <Fsidebar/>
        <div className='header22'>
        <h2 className='style-h2'>ادخال  بيانات المشروع :</h2>
                    <div className='line'></div>
                    <div className='part-1'>
                    <h3 className='style'>يرجى إدخال معلومات المشروع في الحقول المخصصة حيث توفر امكانية انشاء مشروعك</h3>
                    <img src={img2} alt=''/>
                    </div>
                    <FormInputProject/>
        </div>
        
    </div>
  )
}


export default InputProject