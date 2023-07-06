import Link from "next/link"
import { useRouter } from "next/router";
import { useAnimation,motion, color } from "framer-motion"
import path from "node:path/posix";


const links = [
    {href: "/", text: "Home"},
    {href: "/HTB", text: "HTB"},
    {href: "/", text: "Learn"}
]

export default function Menu(){

    return(
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
    )
}