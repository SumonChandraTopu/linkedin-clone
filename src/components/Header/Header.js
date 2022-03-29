import React from 'react';
import './Header.css';
import { FiSearch } from "react-icons/fi";
import {HiHome} from "react-icons/hi";
import {ImUsers} from "react-icons/im";
import {MdBusinessCenter} from "react-icons/md";
import {MdNotifications} from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs"
import logo from "../../assets/linkedin.png"
import avatar from "../../assets/avatar.jpg"
import HeaderOption from './HeaderOption';


function Header() {
  return (
    <div className='header'>
        <div className="header_left">
             <img src={logo} alt="" />
             <div className="header_search">
                 <FiSearch />
                 {/* Search Icon */}
                 <input type="text" />
             </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon={HiHome} title="Home" />
            <HeaderOption Icon={ImUsers} title="My Network" />
            <HeaderOption Icon={MdBusinessCenter} title="Jobs" />
            <HeaderOption Icon={BsFillChatDotsFill} title="Messaging" />
            <HeaderOption Icon={MdNotifications} title="Notification" />
            <HeaderOption avatar={avatar} title="Me" />
        </div>
    </div>
  )
}

export default Header