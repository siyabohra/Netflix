import React from 'react';
import tv from '../img/device-pile-in.png';

function Section3() {
    return (
        <>
            <div className='grid grid-cols-1 justify-center border-t-[8px] border-t-[grey] xl:w-[100%] bg-black'>
                <div className='grid grid-cols-2 lg:w-[80%] m-auto items-center py-[90px]'>
                    <div className='text-white text-center'>
                        <h1 className='text-center text-[48px] font-bold'>Watch everywhere
                        </h1>
                        <p className='text-left text-[22px] pt-[16px] ps-[55px]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className='relative'>
                        <video className=' absolute w-[61%] bottom-[45%] left-[19%] z-[1]' autoplay playsinline muted loop>
                            <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v' />
                        </video>
                        <img src={tv} className=' relative z-[2]' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section3