import React from "react";
import menu_icon from '../../accets/menu.png'
import logo from '../../accets/logo.jpg'
import search_icon from '../../accets/search.jpg'
import upload_icon from '../../accets/upload.png'
import more_icon from '../../accets/more.png'
import notification_icon from '../../accets/notification.png'
import profile_icon from '../../accets/saurabh.jpg'
import mic_icon from '../../accets/voice-search.jpg'
import { Link } from "react-router-dom";

const Navbar = ({setSidebar}) => {
  return (
    <>
      <nav className="flex bg-white shadow-lg justify-between sticky top-0 z-10  px-10 py-1">
        <div className="flex items-center">
            <img className="w-10 mr-2" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
            <Link to='/'><img className="h-12 pl-5 " src={logo} alt="" />
            </Link>
        </div>
        <div className="flex items-center border-2 rounded-full px-2 w-96 h-9 bg-transparent justify-between mt-2">
            <input  type="text" className="outline-none" placeholder="search"/>
            <img className="w-5" src={search_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
            <img className="w-8" src={upload_icon} alt="" />
            <img className="w-6" src={more_icon} alt="" />
            <img className="w-6" src={notification_icon} alt="" />
            <img className="w-8 rounded-full" src={profile_icon} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
