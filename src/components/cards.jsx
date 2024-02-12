import React from 'react'
import user from '../assets/user.png';
import user1 from '../assets/user1.avif';
const Cards = (props) => {
    const followers = Math.floor(Math.random() * 1000);
    const articles = Math.floor(Math.random() * 1000);
    const rating = Math.floor(Math.random() * 10);


  return (
    <div className='shadow-2xl h-[220px] rounded-2xl border-[3px] bg-white/10 backdrop-blur-[2px] border-gray-600/60 mt-10 ml-10 w-[520px] overflow-hidden ease-in duration-200 hover:bg-white/80 hover:backdrop-blur-none hover:mt-8 hover:border-gray-600'>
        <div className='flex gap-6'>
            <div className='text-black  ml-6 min-w-[200px] rounded min-h-[220px]'>
               <img className='mt-4 w-[190px] h-[180px] mr-4 rounded-full border-gray-400/60 border-4' src={props.img}></img>
            </div>
            <div className='w-full text-black h-[220px] text-center pr-6 antialiased'>
                <div className='text-[32px] mt-6 '>
                    <h1>{props.name}</h1>     
                </div>
                <div className='text-center text-gray-700'>
                    <h1>Web Developer</h1>
                </div>
                <div className='shadow-xl flex justify-around mt-8 bg-gray-200 font-semibold text-gray-700 border border-gray-800 text-center rounded-xl px-2 py-[1px] text-[8px]'>
                    <div>
                        <h1>ARTICLES</h1>
                        <p className='text-black text-[16px]'>{articles}</p>
                    </div>
                    <div>
                        <h1>FOLLOWERS</h1>
                        <p className='text-black text-[16px]'>{followers}</p>
                    </div>
                    <div>
                        <h1>RATING</h1>
                        <p className='text-black text-[16px]'>{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
