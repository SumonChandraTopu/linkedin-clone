import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Header.css"

function HeaderOption({Icon, title, avatar}) {
  return (
    <div className='header_option'>
        {Icon && <Icon className="headerOption_icon" />}
        
        {avatar && (
          <Avatar className='headerOption_icon' src={avatar} />
        )}
        <h3 className='headerOption_title'>{title}</h3> 
    </div>
  )
}

export default HeaderOption