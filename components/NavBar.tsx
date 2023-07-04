"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const links = [
    {href: "/", text: "Home"},
    {href: "/", text: "Home"}
]

export default function NavBar(){
    const handleHoverStart = () =>{
        <div className="bg-white w-screen h-300px pt-[100px]">

        </div>
    };
    return(
        <div 
            id="NavBar"
            className=" inline-flex
                        h-[100px] 
                        w-screen
                      bg-lime-500
                        px-96
                        text-black
                        items-center
                        "
        >
            
            <ul 
                className=" border-orange-500 
                            border
                            space-x-32
                            inline-flex"
            >
                {links.map((l) =>(
                <li>
                    <motion.div
                        whileHover={{
                            fontWeight: "bold"
                        }}
                    >
                        <Link href = {l.href}>
                            {l.text}
                        </Link>
                    </motion.div>
                </li>
                ))}
            </ul>
            

        </div>
    )
}