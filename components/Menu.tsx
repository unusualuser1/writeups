import Link from "next/link"
import { motion } from "framer-motion"


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
                    {links.map((l) =>(
                        <motion.li                       
                            initial={{scale: 1}}    

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
                </motion.ul>
    )
}