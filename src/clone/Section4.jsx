import React from 'react';
import img from '../img/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png'

function Section4() {
    return (
        <>
            <div className='grid grid-cols-1 justify-center border-t-[8px] border-t-[grey] xl:w-[100%] bg-black'>
                <div className='grid grid-cols-2 lg:w-[80%] m-auto items-center pt-[80px] pb-[70px]'>
                    <div className=''>
                        <img src={img} alt="" />
                    </div>
                    <div className='text-white text-center '>
                        <h1 className='text-left leading-[65px] text-[50px] font-bold ps-[3.75rem]'> Create profiles for kids
                        </h1>
                        <p className='text-left text-[22px] pt-[16px] ps-[66px] leading-[32px]'> Send children on adventures with their favourite characters in the space made just for them-free with your membership.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section4