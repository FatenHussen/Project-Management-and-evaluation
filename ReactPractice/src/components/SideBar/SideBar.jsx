import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div>
      <Link to="/dashboard/project">project</Link>
      <Link to="/dashboard/users">user</Link>
    </div>
  )
}

export default SideBar