"use client"

import { animate } from "framer-motion/dom"
import { delay, motion } from "framer-motion"
import Link from "next/link"

const links = [
    {href: "/", text: "Home"},
    {href: "/HTB", text: "HTB"},
    {href: "/", text: "Learn"}
]

export default function NavBar(){
    //const box = document.getElementById("box")
    return(
        <div 
            id="NavBar"
            className=" fixed
                        z-10
                        inline-flex
                        h-[50px]
                        w-[50vw] 
                      bg-[#faf2a1]
                      text-black
                        items-center 
                        justify-center
                        top-0 left-0 right-0
                        translate-x-1/2
                        translate-y-[30px]
                        rounded-md"
        >
            
            <ul 
                className=" space-x-32
                            inline-flex"
            >
                {links.map((l) =>(
                <motion.li

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
            

        </div>
    )
}