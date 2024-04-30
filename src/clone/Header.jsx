import React from 'react';
import './Home.css';
import logo from '../img/logo.png'

function Header() {
  return (
        <>
            <div className='header relative xl:w-[100%]  h-[700px] border-1 bg-cover  '>
                <div className=' bg-[rgba(0,0,0,0.7)] w-[100%] h-[100%]'>
                    <div className='grid grid-cols-2 lg:w-[100%] h-[50px]'>
                        <div className=''>
                            <img src={logo} className='w-[210px] h-[110px] ms-[130px] mt-[10px] ' />
                        </div>
                        <div className=' text-white mt-[45px] '>
                            <select name="languagesection" className=' rounded-[5px] px-[25px] py-1  text-white  bg-transparent border-[1px] ms-[9rem] me-4' id="">
                                <option value="English" className='text-black'>English</option>
                                <option value="Hindi" className='text-black'>Hindi</option>
                            </select>
                            <button className='bg-[red] text-white px-[15px] font-semibold py-[4px]
                             rounded-[5px] border-[rgba(0,0,0,0.2)] '> Sign in</button>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 absolute top-[280px] left-[168px] p-[10px] text-white'>
                        <h1 className='text-[50px] font-bold'>Unlimited movies, TV shows and more</h1>
                        <p className='text-center text-[26px] pt-2'>Watch anywhere. Cancel anytime.</p>
                        <p className='text-center pt-5 text-[20px]'>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
                        <div  className='grid grid-cols-2 p-4 '>
                            <input type="text" className='w-[80%] py-4 bg-transparent rounded-[4px] border-[1px] p-2 ml-[130px] ' placeholder='Email or mobile number' /> 
                            <button className='bg-[red] w-[200px] rounded-md py-1 text-[25px] ml-[60px]'>Get Started</button>

                        </div>

                    </div>

                </div>
            </div>
        </>
  )
}

export default Header