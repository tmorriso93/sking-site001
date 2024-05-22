"use client"
import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from '../../../public/images/King Law Logo A8.jpg';
import Image from 'next/image';


function NavbarSection() {

    const [open, setOpen] = useState(false)

    const Links = [
        {name: 'Home' , link: '#'},
        {name: 'About' , link: '#'},
        {name: 'Services' , link: '#'},
        {name: 'Contact' , link: '#'},
    ]

  return (
    <section className='w-full fixed top-0 left-0 z-100 flex justify-center'>
        <div className='xxl:mx-20 lg:mx-18 mx-auto max-w-[1260] w-full bg-slate-50'>
            <div className='flex items-center justify-between text-[#00133d]
                            lg:px-4 md:px-10 px-1 lg:pt-5 lg:pb-5 h-[75px] background-filter '>
                {/* logo */}
                <div className='cursor-pointer '>
                    <Image src={Logo} alt='Logo' className='lg:w-[50px] lg:h-[50px] 
                            sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] ml-[8px] lg:ml-0 lg:mt-6 lg:pb-2' />
                </div>

                <div className='absolute md:right-[40px] right-[8px] top-4 cursor-pointer lg:hidden ' onClick={()=> 
                    setOpen(!open)}>
                    <span>
                        {open ? <AiOutlineClose className='w-[30px] h-[30px] mt-[8px] bg-slate-50'/> : <GiHamburgerMenu className=' w-[30px] h-[30px] mt-[8px]' />}
                    </span>
                </div>

                 {/* Nav Menu    */}
                <div className={`lg:flex lg:items-center justify-between lg:pb-0 z-50 absolute lg:static lg:z-auto
                                 left-0 w-full  lg:w-auto pr-[40px] lg:pl-0 transition-all duration-500 ease-in top-[73px] 
                                 ${open ? 'left-0' :  'left-[100%] '}`}>
                    <div className='lg:flex lg:items-center h-auto pb-10  lg:pb-0 bg-white lg:bg-transparent
                                    lg:rounded-none rounded-b-3xl border-b-2 lg:border-none lg:pt-0 pt-[35px]'>
                        <ul className='lg:flex lg:items-center mx-auto'>
                            {Links.map((link, i) => ( 
                                <li key={i} className='text-center lg:ml-8 text-[16px] font-bold mb-10 lg:mb-5 
                                    cursor-pointer pt-[20px]'>
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))}
                        </ul>

                       

                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default NavbarSection