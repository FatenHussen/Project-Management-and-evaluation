import React from 'react'
import { BiNotification } from 'react-icons/bi'

const ContentHeader = () => {
  return (
    <div className='content--header'>
        <h1 className='header--title'>Dashboard</h1>
        <div className='header--activity'>
            <div className="notify">
            <BiNotification className='icon-f'/>
            </div>
        </div>
    </div>
  )
}

export default ContentHeader