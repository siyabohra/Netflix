import React from 'react';
import tv from '../img/tv.png';

function Section1() {
    return (
        <>
            <div className='grid grid-cols-1 justify-center border-t-[8px] border-t-[grey] xl:w-[100%] bg-black'>
                <div className='grid grid-cols-2 lg:w-[80%] m-auto items-center py-[90px]'>
                    <div className='text-white text-center'>
                        <h1 className='text-center text-[48px] font-bold'>Enjoy on your TV
                        </h1>
                        <p className='text-left text-[22px] pt-[16px] ps-[61px]'>Watch on smart TVs, PlayStation, Xbox,
                            Chromecast, Apple TV, Blu-ray players
                            and more.</p>
                    </div>
                    <div className='relative'>
                        <video className=' absolute w-[73%] bottom-[25%] left-[13%] z-[1]' autoplay playsinline muted loop>
                            <source  src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v'/>
                        </video>
                        <img src={tv} className=' relative z-[2]' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section1