"use client"
import { animate, motion, useAnimation } from "framer-motion"
import { useEffect } from 'react';
import Menu from "./Menu";
import Link from "next/link";


const links = [
    {href: "/", text: "Home"},
    {href: "/HTB", text: "HTB"},
    {href: "/", text: "Learn"}
]

export default function NavBar(){
    const controls = useAnimation();
    

    const NavBarAnimation = async () => {
        await controls.start({    
            scale: 1,
            transition: {type: "spring", }}); 

        await controls.start({
            x:"7.5vw",
            width:"85vw",
            height:"70px"});

        await controls.start({
            y:-10,
            transition:{duration:0.2,}});

        
    };
    
    useEffect(() => {
        NavBarAnimation();
      }, []);
  
    return(
        
        <>
            <motion.div
                initial={{scale: 0, y: "-15vh", x: "80vw" }}
                animate={controls}

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
                            rounded-lg"
            >
            <Menu/>        
            </motion.div> 
        </>
    )
}