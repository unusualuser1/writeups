"use client"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from 'react';
import Menu from "./Menu";



export default function NavBarDesktop(){

    const controls = useAnimation();
    

    const NavBarAnimation = async () => {
        await controls.start({    
            scale: 1});

        await controls.start({
            y:-10,
            transition:{duration:0.1,}});
    };
    
    useEffect(() => {
        NavBarAnimation();
    }, []);



  
    return(
        
        <>

            <motion.div
                initial={{scale: 0, height:"70px", y: "-15vh", x: "7.5vw", width:"85vw"}}
                animate={controls}

                className="
                            fixed
                            z-10
                            inline-flex
                            w-[40px] 
                            min-w-[500px]
                            h-[40px] 
                            bg-[#e0e0e0]
                            text-black
                            items-center 
                            justify-center
                            top-0 left-0 right-0
                            rounded-lg"
            >
            <Menu/>        
            </motion.div> 
        </>
    )
}