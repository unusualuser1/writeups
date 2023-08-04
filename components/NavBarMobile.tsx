"use client"
import Link from "next/link";
import {  useEffect, useState } from "react"
import { useRouter } from "next/router";


// the "interface" just set what props HamburgerMenu const will accept and its return




    



export default function NavBarMobile() {

    console.log(window.location.pathname)
    
    // code to manage the menu status (open/close)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

    };


    interface HamburgerMenuProps{
        onClick: () => void;
    }
    
    const HamburgerMenu: React.FC<HamburgerMenuProps> = ({onClick}) => {
    
    
    
        return(
            <div onClick={ () => {
                                            onClick();
                                        }
                                } 
                        className='fixed z-10 w-[50px] h-[50px] grid px-3 py-3 space-y-0 '
            >
                <div><hr className={isMenuOpen ? " rotate-45 translate-y-[9.5px] bg-white" : "bg-white" }/></div>
                <div><hr className={isMenuOpen ? " -rotate-45 -translate-y-[3.5px] bg-white" : "bg-white" }/></div>
            </div>
        );
    }

    // useEffect(()=>{

    // },[router.pathname]);
    
    
    return(
        
            
                // black background div
                <div className={isMenuOpen ? 'md:hidden  w-[50vw] h-screen transp bg-opacity-85 bg-black fixed z-10 rounded-r-xl' : ' w-0 h-0 '}> 

                    {/* menu div */}
                    <div    className="translate-y-[50px] translate-x-[20px] w-[15px] space-y-2">

                        <HamburgerMenu onClick={toggleMenu}/>

                        {/* menu list */}
                        <ul className={isMenuOpen ? 'md:hidden flex translate-y-[100px] flex-col gap-4 translate-x-6 xsm:text-[12px]' : 'hidden md:flex justify-end gap-4' }>
                            <li><Link onClick={toggleMenu} className={window.location.pathname === "/" ? 'font-bold md:text-[24px] sm:text-[20px] xsm:text-[14px]':''} href="../">HOME</Link></li>
                            <li><Link onClick={toggleMenu} className={window.location.pathname === "/HTB" ? 'font-bold md:text-[24px] sm:text-[20px] xsm:text-[14px]':''} href="../HTB">HTB</Link></li>
                            <li><Link onClick={toggleMenu} className={window.location.pathname === "/Learn" ? 'font-bold md:text-[24px] sm:text-[20px] xsm:text-[14px]':''} href="../Learn">LEARN</Link></li>
                        </ul>
                    </div>

                </div>
                
    )
}