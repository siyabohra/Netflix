import React, { useState } from 'react';
import { Ques } from './question';

function Faq() {
    const [data,setdata] = useState(Ques);
    const [show,setShow] = useState(false)
  return (
    <>
        <div className='grid grid-cols-1 justify-center border-t-[8px] border-t-[grey] xl:w-[100%] bg-black'>
            <div className='grid grid-cols-1 lg:w-[80%] m-auto items-center pt-[80px] pb-[70px]'>
                <h1 className='  text-white text-center leading-[65px] text-[50px] font-bold ps-[3.75rem] mb-5'>Frequently Asked Questions</h1>
                    {
                        data.map((v)=>{
                            return(
                                <>
                                    <h1 className='text-white text-left bg-[#414141] text-[24px] font-600 p-5 my-1'  onClick={()=>setShow(!show)} >{v.Question}
                                   </h1>
                                  {  show && <h1 className='text-white text-left bg-[#414141] text-[20px] p-4'>{v.Answer}</h1> }
                                </>  
                            )
                           
                        })
                    }
            </div>

        </div>
    </>
  )
}

export default Faq