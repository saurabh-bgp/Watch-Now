import React from 'react'
import home from '../../accets/home.jpg'
import game_icon from '../../accets/game_icon.png'
import automobiles from '../../accets/automobiles.png'
import sports from '../../accets/sports.png'
import entertainment from '../../accets/entertenment.png'
import tech from '../../accets/tech.png'
import music from '../../accets/music.png'
import blogs from '../../accets/blogs.png'
import news from '../../accets/news.png'
import jack from '../../accets/vishal.png'
import simon from '../../accets/babu1.jpg'
import tom from '../../accets/babu3.jpg'
import megan from '../../accets/megan.jpg'
import cameron from '../../accets/cameron.jpg'
import './Sidebar.css'

const Sidebar = ({ sidebar, category, setCategory }) => {
  const sidebarStyle = {
    width: sidebar ? '20%' : '5%',
    transition: 'width 0.3s',
  };

  const paragraphStyle = {
    display: sidebar ? 'block' : 'none',
  };

  return (
    <div style={sidebarStyle} className="sidebar">
      <div className="bg-white h-full fixed top-0 pl-8 pt-20">
        <div onClick={()=>setCategory(0)} className={`flex side-link items-center w-fit flex-wrap mb-4 cursor-pointer ${category===0?"pb-1 border-b-2 border-red-700":""}`}>
          <img className='h-5 w-5 mr-4' src={home} alt="" />
          <p style={paragraphStyle}>Home</p>
        </div>
        <div onClick={()=>setCategory(20)} className={`flex side-link items-center w-fit flex-wrap mb-4 cursor-pointer ${category===20?"pb-1 border-b-2 border-red-700":""}`}>
          <img className='h-5 w-5 mr-4' src={game_icon} alt="" />
          <p style={paragraphStyle}>Gaming</p>
        </div>
        <div onClick={()=>setCategory(2)} className={`flex items-center w-fit flex-wrap mb-4 cursor-pointer ${category===2?"pb-1 border-b-2 border-red-700":""}`}>
          <img className='h-5 w-5 mr-4' src={automobiles} alt="" />
          <p style={paragraphStyle}>Automobiles</p>
        </div>
        <div onClick={()=>setCategory(17)} className={`flex items-center w-fit flex-wrap mb-4 cursor-pointer ${category===17?"pb-1 border-b-2 border-red-700":""}`}>
          <img className='h-5 w-5 mr-4' src={sports} alt="" />
          <p style={paragraphStyle}>Sports</p>
        </div>
        <div onClick={()=>setCategory(24)} className={`flex items-center w-fit flex-wrap mb-4 cursor-pointer ${category===24?"pb-1 border-b-2 border-red-700":""}`}>
          <img className='h-5 w-5 mr-4' src={entertainment} alt="" />
          <p style={paragraphStyle}>Entertainment</p>
        </div>
        <div onClick={()=>setCategory(28)} className={`flex items-center w-fit flex-wrap mb-4 cursor-pointer ${category===28?"pb-1 border-b-2 border-red-700":""}`}>
          <img className='h-5 w-5 mr-4' src={tech} alt="" />
          <p style={paragraphStyle}>Technology</p>
        </div>
        <div onClick={()=>setCategory(10)} className={`flex items-center w-fit flex-wrap mb-4 cursor-pointer ${category===10?"pb-1 border-b-2 border-red-700":""}`}>
          <img className='h-5 w-5 mr-4' src={music} alt="" />
          <p style={paragraphStyle}>Music</p>
        </div>
        <div onClick={()=>setCategory(22)} className={`flex items-center w-fit flex-wrap mb-4 cursor-pointer ${category===22?"pb-1 border-b-2 border-red-700":""}`}>
          <img className='h-5 w-5 mr-4' src={blogs} alt="" />
          <p style={paragraphStyle}>Blogs</p>
        </div>
        <div onClick={()=>setCategory(25)} className={`flex items-center w-fit flex-wrap mb-4 cursor-pointer ${category===25?"pb-1 border-b-2 border-red-700":""}`}>
          <img className='h-5 w-5 mr-4' src={news} alt="" />
          <p style={paragraphStyle}>News</p>
        </div>
        <hr style={paragraphStyle} className='border-0 h-[1px] bg-gray-300 w-36 ' />
        <h3 style={paragraphStyle} className='text-sm text-gray-950 mt-2 mb-4'>SUBSCRIBED</h3>
        <div className="flex w-36 h-full flex-col">
          <div className="flex gap-5 cursor-pointer">
            <img className='w-7 h-7 rounded-full' src={jack} alt="" />
            <p style={paragraphStyle}>Vishal-vishu</p>
          </div>
          <div className="flex gap-5 mt-5 cursor-pointer">
            <img className='w-7 h-7 rounded-full' src={simon} alt="" />
            <p style={paragraphStyle}>BittuSingh</p>
          </div>
          <div className="flex gap-5 mt-5 cursor-pointer">
            <img className='w-7 h-7 rounded-full' src={tom} alt="" />
            <p style={paragraphStyle}>DivyaBharti</p>
          </div>
          <div className="flex gap-5 mt-5 cursor-pointer">
            <img className='w-7 h-7 rounded-full' src={megan} alt="" />
            <p style={paragraphStyle}>BeautifulGirl</p>
          </div>
          <div className="flex gap-5 mt-5 cursor-pointer">
            <img className='w-7 h-7 rounded-full' src={cameron} alt="" />
            <p style={paragraphStyle}>LaptopGirl</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
