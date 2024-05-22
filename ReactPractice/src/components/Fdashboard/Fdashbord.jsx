import React from 'react'
import Fsidebar from '../Style/fsidebar'
import './Fdashbord.css'
import Fcontent from '../Fcontent'
import Fprofile from '../Fprofile'
import About from '../About/About'
import StudentTable from '../StudentTable/StudentTable'
const Fdashbord = () => {
  return (
    <div className='dashboard-f'>
        <Fsidebar/>
        <div className='dashboard--content'>
        <StudentTable/>
            
        </div>
    </div>
  )
}

export default Fdashbord