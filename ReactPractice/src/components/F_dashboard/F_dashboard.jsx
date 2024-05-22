import React from 'react'
import Fsidebar from '../Style/fsidebar'
import './F_dashboard.css'
import { MdDashboard } from "react-icons/md";
import imgQ from '../../assets/photo_2024-04-24_23-00-44.jpg'
import imgq1 from '../../assets/photo_2024-04-24_23-00-59.jpg'
import ViewTablePos from './ViewTablePos';
import ViewTableVealuate from './ViewTableVealuate';
import ViewTableFinal from './ViewTableFinal';
import ViewTableProject_Follow_up from './ViewTableProject_Follow_up';
const F_dashboard = () => {
  return (
    <div className='container01'>
        <Fsidebar/>
        <div className='header50'>
          <h2 className='style-h2'> <span><MdDashboard /> </span>
لوحة التحكم</h2>
          <div className='line'></div>
          <div className='partone'>
            <img src={imgQ} className='imgq'alt=''/>
            <img src={imgq1} className='imgq1' alt=''/>
          </div>
          <div className='parttow'>
            <h2 className='style-h2'>جدول المقترحات</h2>
            <div className='line'></div>  
            <ViewTablePos/>
          </div> 
          <div className='parttow'>
            <h2 className='style-h2'>جدول التقيمات الأسبوعية</h2>
            <div className='line'></div>  
            <ViewTableProject_Follow_up/>
          </div>  
          <div className='parttow'>
            <h2 className='style-h2'>جدول التقيمات المرحلية</h2>
            <div className='line'></div>  
            <ViewTableVealuate/>
          </div>
          <div className='parttow'>
            <h2 className='style-h2'>جدول التقيمات  النهاءية</h2>
            <div className='line'></div>  
            <ViewTableFinal/>
          </div>
        </div>
    </div>
  )
}

export default F_dashboard