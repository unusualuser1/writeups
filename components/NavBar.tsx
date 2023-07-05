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


    const MenuAnimation = async () => {
        await controls.start({    
            scale: 1,
            transition: {type: "spring", }}); 

        await controls.start({
            scale: 0,
            x: "120vw",
            });

        await controls.start({ 
            scale: 1,
            width: "50vw",
            height:"65vh", y: "10vh"});

        await controls.start({
            x: "80vw"
        });
        
    };
    
    useEffect(() => {
        MenuAnimation();
      }, []);
  
    return(
        
        <>
            <motion.div
                initial={{scale: 0, y: "40vh", x: "80vw" }}
                animate={controls}

                onMouseOver={()=> controls.start({
                    width: "70vw",
                    height: "50vh",
                    x: "70vw",
                    y: "20vh",
                    transition:{duration:0.5} })}

                onMouseLeave={()=> controls.start({
                    width: "50vw",
                    height:"65vh",
                    y: "10vh",
                    x:"80vw",
                    transition:{duration:0.5} })}

                className=" 
                            fixed
                            z-10
                            inline-flex
                            w-[40px] 
                            h-[40px] 
                            bg-white
                            text-black
                            items-center 
                            justify-center
                            top-0 left-0 right-0
                            rounded-[50%]"
            >         
                <motion.ul 
                    className=" space-x-32
                                inline-flex
"

                    initial={{  scale: 0,
                                x:"90vw",
                                y:"10vh" 
                            }}
                    
                    onMouseOver={()=>{ controls.start({scale:1})}}
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
                            <img src="../littleHTB.png" alt={l.text}></img>
                        </Link>
                    </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </>
    )
}