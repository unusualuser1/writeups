
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from 'next/navigation'


const links = [
    {href: "/", text: "Home", id: 1},
    {href: "/HTB", text: "HTB", id: 2},
    {href: "/ctf", text: "CTF", id: 3}
]



export default function Menu(){



    // const handleMouseEnter = (event:any) =>{
    //     const target = event.currentTarget;
    //     target.style.fontWeight='bold';
    //     target.style.scale= 0.9;
    //     target.style.transition = 'scale 0.5s';
    // }

    // const handleMouseLeave = (event:any) =>{
    //     const target = event.currentTarget;
    //     for (let index = 0; index < links.length; index++) {
    //         path === links[index].href ? target.style.fontWeight='bold' : target.style.fontWeight='normal' 
    //     }
    //     target.style.scale= 1;
    //     target.style.transition = 'scale 0.5s';
    // }

    const path = usePathname()


    useEffect(() => {
    },[path]);


    return(
        <>
            <motion.ul 
                className=" flex space-x-24
                            z-10 
                            text-white"
            >   
            {/* <li><img src="../logo.ico" alt="logo" ></img></li> */}
                {links.map((l) =>(
                    <Link   
                        className="text-[16px]"
                        href = {l.href}
                        key={l.id}
                    >
                        <motion.li
                            
                            className={path === l.href ? 'px-[20px] font-bold bg-[#3c3c3c] rounded-lg' : 'rounded-lg transition-all hover:bg-[#3c3c3c] px-[20px]'}
                        >   
                            <motion.div

                                className='hover:scale-90 transition-all'
                                // onMouseEnter={(event) => handleMouseEnter(event)}
                                // onMouseLeave={(event) => handleMouseLeave(event)}
                                // transition={{ duration: 0.5 }}
                            >
                            
                                {l.text}
                            </motion.div>
                        </motion.li>
                    </Link>
                ))}
            </motion.ul>
        </>
    )
}