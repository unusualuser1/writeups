"use client"
import Link from "next/link";
import { useState } from "react"


// the "interface" just set what props HamburgerMenu const will accept and its return





export default function NavBarMobile() {
    
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

    
    
    
    return(
        
            
                // black background div
                <div className={isMenuOpen ? 'md:hidden  w-[50vw] h-screen transp bg-opacity-80 bg-black fixed z-10 rounded-r-xl' : ' w-0 h-0 '}> 

                    {/* menu div */}
                    <div    className="translate-y-[50px] translate-x-[20px] w-[15px] space-y-2">

                        <HamburgerMenu onClick={toggleMenu}/>

                        {/* menu list */}
                        <ul className={isMenuOpen ? 'md:hidden flex translate-y-[50px] flex-col gap-4 translate-x-6' : 'hidden md:flex justify-end gap-4' }>
                            <li><Link onClick={toggleMenu} href="../">HOME</Link></li>
                            <li><Link onClick={toggleMenu} href="../HTB">HTB</Link></li>
                            <li><Link onClick={toggleMenu} href="../Learn">LEARN</Link></li>
                        </ul>
                    </div>

                </div>
                
    )
}