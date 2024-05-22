import React from 'react'
import './dashboard.css'
import SideBar from '../components/SideBar/SideBar'
import Users from '../Users'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <TopBar/>
      <div className='d-flex1'>
      <SideBar/>
      <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard