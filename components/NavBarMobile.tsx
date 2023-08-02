
import Link from "next/link";
import { useState } from "react"
import { animate, motion, useAnimation } from "framer-motion";


interface HamburgerMenuProps{
    onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({onClick}) => {

    const controls = useAnimation();

    const HamburgerAnimation = async () => {
        await controls.start({
            background: "black",
        })
    }



    return(
        <motion.div onClick={ () => {
                                        onClick();
                                    }
                            } 
                    className=" w-[50px] 
                                h-[50px] 
                                grid 
                                px-3 
                                py-3 
                                space-y-0"
                    animate={controls}
        >
            <div><hr className="bg-white"/></div>
            <div><hr className="bg-white"/></div>
        </motion.div>
    );
}




export default function NavBarMobile() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    
    return(
        
        <div    className="translate-y-[50px] translate-x-[20px] w-[15px] space-y-2">
            <HamburgerMenu onClick={toggleMenu}/>
            <ul className={isMenuOpen ? 'md:hidden flex flex-col gap-4' : 'hidden md:flex justify-end gap-4' }>
                <li><Link href="../">HOME</Link></li>
                <li><Link href="../HTB">HTB</Link></li>
                <li><Link href="../Learn">LEARN</Link></li>
            </ul>
        </div>
    )
}