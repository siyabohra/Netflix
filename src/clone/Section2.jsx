import React from 'react';
import mobile from '../img/mobile-0819.jpg';
import img1 from '../img/boxshot.png';
import img2 from '../img/download-icon (1).gif'

function Section2() {
    return (
        <>
            <div className='grid grid-cols-1 justify-center border-t-[8px] border-t-[grey] xl:w-[100%] bg-black'>
                <div className='grid grid-cols-2 lg:w-[80%] m-auto items-center pt-[80px] pb-[70px]'>
                    <div className=''>
                        <img src={mobile} />
                        <div className='w-[55%] h-[100px] border-[2px] bg-black border-[grey] rounded-xl grid grid-cols-3 relative top-[-127px] left-[111px]'>
                            <img src={img1} className='w-[88%] p-[15px]' />
                            <div className='grid grid-cols-1'>
                                <span className='text-white text-[12px] font-bold pt-[30px]'>Stranger Things</span>
                                <span className='text-[#0059B9] pb-[24px]'>Downloading...</span>
                            </div>
                            <img src={img2} alt="" className='w-[75%] m-[16px]' />


                        </div>

                    </div>
                    <div className='text-white text-center '>
                        <h1 className='text-left leading-[53px] text-[50px] font-bold ps-[3.75rem]'>Download your shows to watch offline
                        </h1>
                        <p className='text-left text-[22px] pt-[16px] ps-[61px]'> Save your favourites easily and always have something to watch.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section2