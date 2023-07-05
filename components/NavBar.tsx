"use client"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"
import { useEffect } from 'react';







const links = [
    {href: "/", text: "Home"},
    {href: "/HTB", text: "HTB"},
    {href: "/", text: "Learn"}
]

export default function NavBar(){
    const controls = useAnimation();

    const animationSequence = async () => {
        await controls.start({    
            scale: 1, 
            rotate: 360 , 
            transition: {type: "spring", }}); 
            await controls.start({y: -45})
            await controls.start({ width: "50vw", x:"25vw"});
            await controls.start({y: -15})
        
    };
    
    useEffect(() => {
        animationSequence();
      }, []);

    return(
        <>
            <motion.div
                initial={{scale: 0, y: "30px", x: "50vw" }}
                animate={controls}
                onMouseOver={()=>  controls.start({height: "50px", y: 20, transition:{duration:0.5} })}
                onMouseLeave={()=>  controls.start({height: "40px", y: -15, transition:{duration:0.5} })}
                className=" 
                            fixed
                            z-10
                            inline-flex
                            w-[40px] 
                            h-[40px] 
                            bg-[#faf2a1]
                            text-black
                            items-center 
                            justify-center
                            top-0 left-0 right-0
                             rounded-md"
            >         
                <ul 
                    className=" space-x-32
                                inline-flex"
                >
                    {links.map((l) =>(
                    <motion.li                       
                        initial={{scale: 0}}    

                        whileHover={{
                            fontWeight: "bold",
                            scale: 1.3,
                        }}

                        animate={{
                            type: "inertia",
                                                      
                        }}

                        transition={{
                            duration: 0.3 
                        }}
                    >
                        
                        <Link href = {l.href}>
                            {l.text}
                        </Link>
                    </motion.li>
                    ))}
                </ul>
            </motion.div>
        </>
    )
}