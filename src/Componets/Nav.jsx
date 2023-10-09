import React from 'react'
import logo from '../img/logo.svg'
import { useState } from 'react';
import Sidebar from '../Componets/Sidebar';
import {BsFillBagFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';


function Nav() {
  const [open, setOpen] = useState(false);

  const openSidebar = () => {
    setOpen(true);
  }

  const closeSidebar = () => {
    setOpen(false);
  }


  return (
    <div>
        <div className="w-full   container">
            <div className="flex justify-between mx-10 my-5 ">
              <Link to={'/'}><img src={logo}  className=' w-10 h-10 ' alt="" /></Link>
                
                <div className=''>
                  <BsFillBagFill className='w-5 h-5' onClick={openSidebar} />
                </div>
            </div>
            
        </div>
        <Sidebar open={open} close={closeSidebar} /> 
    </div>
  )
}

export default Nav