"use client"
import { motion } from "framer-motion"
import { Noto_Music } from "next/font/google"

export default function Home(){
    return(
        <>
            <motion.div 
                className=" z-2 
                            w-[30vw] 
                            bg-red-500 
                            py-80
                            "
                initial = {{
                    height: "200px",
                }}
                    
                whileHover ={{
                    rotate:225
                }}
            >
            </motion.div>
        </>
    )
}