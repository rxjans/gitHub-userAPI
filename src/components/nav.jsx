import React from 'react'
import gh from '../assets/gh.png';
const Nav = () => {
  return (
    <nav>
        <div className='w-full h-[70px] bg-gradient-to-r from-gray-800 to-gray-700 flex items-center'>
            <div className='w-[40px] ml-12 mr-2'>
                <img src={gh}></img>
            </div>
            <div className='text-center text-white font-bold text-[22px]  rounded-full'>
                <h1>GITHUB USERS</h1>
            </div>
        </div>
    </nav>
  )
}

export default Nav
