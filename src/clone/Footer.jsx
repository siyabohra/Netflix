import React from 'react'

function Footer() {
    return (
        <>
            <div className='grid grid-cols-1 text-white bg-black  border-t-[8px] border-t-[grey]'>
                <div className='w-[80%] py-[70px] text-left  m-auto'>
                    <p >Questions?<span className=' border-b-white'>Call 000-800-919-1694
                    </span></p>
                    <div className='grid grid-cols-4 gap-4 py-5'>
                        <div>
                            <ul>
                                <li className='text-[14px] py-1 '>FAQ</li>
                                <li className='text-[14px] py-1 '>Investor Relations</li>
                                <li className='text-[14px] py-1 '>Privacy</li>
                                <li className='text-[14px] py-1 '>Speed Test</li>
                            </ul>

                        </div>

                        <div>
                            <ul>
                                <li className='text-[14px] py-1 '>Help Centre</li>
                                <li className='text-[14px] py-1 '>Jobs</li>
                                <li className='text-[14px] py-1 '>Cookie Preferences</li>
                                <li className='text-[14px] py-1 '>Legal Notices</li>
                            </ul>

                        </div>
                        <div>
                            <ul>
                                <li className='text-[14px] py-1 '>Account</li>
                                <li className='text-[14px] py-1 '>Ways to Watch</li>
                                <li className='text-[14px] py-1 '>Corporate Information</li>
                                <li className='text-[14px] py-1 '>Only on Netflix</li>
                            </ul>

                        </div>
                        <div>
                            <ul>
                                <li className='text-[14px] py-1 '>Media Centre</li>
                                <li className='text-[14px] py-1 '>Terms of Use</li>
                                <li className='text-[14px] py-1 '>Privacy</li>
                                <li className='text-[14px] py-1 '>Contact Us</li>
                            </ul>

                        </div>
                    </div>
                    <select name="languagesection" className=' rounded-[5px] px-[25px] py-1  text-white  bg-transparent border-[1px] ms-[3px] me-4' id="">
                        <option value="English" className='text-black'>English</option>
                        <option value="Hindi" className='text-black'>Hindi</option>
                    </select>
                    <p className='text-[15px] py-4 px-2'>Netflix India</p>
                </div>

            </div>
        </>
    )
}

export default Footer