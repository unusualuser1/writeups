
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from 'next/navigation'


const links = [
    {href: "/", text: "Home", id: 1},
    {href: "/HTB", text: "HTB", id: 2},
    {href: "/Learn", text: "Learn", id: 3}
]



export default function Menu(){

    const path = usePathname()


    const handleMouseEnter = (event:any) =>{
        const target = event.currentTarget;
        target.style.fontWeight='bold';
        target.style.scale= 0.9;
        target.style.transition = 'scale 0.5s';
    }

    const handleMouseLeave = (event:any) =>{
        const target = event.currentTarget;
        target.style.fontWeight='normal';
        target.style.scale= 1;
        target.style.transition = 'scale 0.5s';
    }


    return(
        <>
            <motion.ul 
                className=" flex space-x-24
                            z-10 
                            text-white"
            >   
            {/* <li><img src="../logo.ico" alt="logo" ></img></li> */}
                {links.map((l) =>(
                    <motion.li
                        key={l.id}
                        className={path === l.href ? 'px-[20px]  border-[1px]':'px-[20px]'}
                    >   
                        <motion.div

                            
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onMouseLeave={(event) => handleMouseLeave(event)}
                            transition={{ duration: 0.5 }}
                        >
                            <Link   
                                    className="text-[16px]"
                                    href = {l.href}>
                                {l.text}
                            </Link>
                        </motion.div>
                    </motion.li>
                ))}
            </motion.ul>
        </>
    )
}