import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";


const links = [
    {href: "/", text: "Home"},
    {href: "/HTB", text: "HTB"},
    {href: "/Learn", text: "Learn"}
]



export default function Menu(){
    return(
        <>
            <motion.ul 
                className=" space-x-32
                            inline-flex
                            z-10
                            text-black"
            >   
            {/* <li><img src="../logo.ico" alt="logo" ></img></li> */}
                {links.map((l) =>(
                    <motion.li                     
                        initial={{scale: 1}}    

                        whileHover={{
                            fontWeight: "bold",
                            scale: 1.3,
                        }}

                        transition={{
                            duration: 0.1 
                        }}
                    >   
                        <Link href = {l.href}>
                            {l.text}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </>
    )
}