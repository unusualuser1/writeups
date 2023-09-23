"use client"
import Link from "next/link";
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import { animate } from "framer-motion";

// import "./NavBarMobile.css"

// the "interface" just set what props HamburgerMenu const will accept and its return








export default function NavBarMobile() {

    console.log(window.location.pathname)

    // code to manage the menu status (open/close)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

    };


    interface HamburgerMenuProps {
        onClick: () => void;
    }

    const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {



        return (
            <div onClick={() => {
                onClick();
            }
            }
                className='fixed z-50 w-[50px] h-[50px] grid px-3 py-3 translate-y-[50px] translate-x-[20px]'
            >
                <div>
                    <hr className={isMenuOpen ? " rotate-45 translate-y-[9.5px] bg-white" : "bg-[white]"} />
                </div>
                <div>
                    <hr className={isMenuOpen ? " -rotate-45 -translate-y-[3.5px] bg-white" : "bg-white"} />
                </div>
            </div>
        );
    }

    // useEffect(()=>{

    // },[router.pathname]);
    // black background div
    // <div className={isMenuOpen ? 'md:hidden  w-[50vw] h-screen transp bg-opacity-100 bg-[#0F4C75] transition-all duration-300 fixed z-10 rounded-r-xl' : ' w-0 h-0 transition-all duration-300'}> 
    /* <div className="text-white translate-y-[50px] translate-x-[20px] w-[15px] space-y-2 z-50" > */

    /* <HamburgerMenu onClick={toggleMenu} /> */



    return (
        <>
            <HamburgerMenu onClick={toggleMenu} />
            <div className={isMenuOpen ? "md:w-1/2 w-[200px] h-screen top-0 left-[0px] bg-[#143347] z-10 transform duration-1000 ease-in-out fixed rounded-r-2xl rounded-b-[0px]" : "md:w-1/2 w-[200px] h-screen bg-[#143347] z-10 transform duration-1000 ease-in-out fixed rounded-r-2xl rounded-b-[0px] md:translate-x-[-50vw] translate-x-[-200px] "}>

                <ul className={isMenuOpen ? 'flex translate-y-[150px] flex-col gap-4 translate-x-6 xsm:text-[12px]' : 'flex translate-y-[150px] flex-col gap-4 translate-x-6 xsm:text-[12px]'}>
                    <li><Link onClick={toggleMenu} className={window.location.pathname === "/" ? 'font-bold md:text-[24px] sm:text-[20px] xsm:text-[14px]' : ''} href={"/"} >HOME</Link> 
                    </li>
                    <li><Link onClick={toggleMenu} className={window.location.pathname === "/HackTheBox" ? 'font-bold md:text-[24px] sm:text-[20px] xsm:text-[14px]' : ''} href={"/HackTheBox"} >HTB</Link>
                    </li>
                    <li><Link onClick={toggleMenu} className={window.location.pathname === "/ctf-writeups" ? 'font-bold md:text-[24px] sm:text-[20px] xsm:text-[14px]' : ''} href={"/ctf-writeups"} >CTF</Link></li>
                </ul>
            </div>
        </>
    );
}