import Link from "next/link";
import { motion } from "framer-motion";


const links = [
    {href: "/", text: "Home", id: 1},
    {href: "/HTB", text: "HTB", id: 2},
    {href: "/Learn", text: "Learn", id: 3}
]



export default function Menu(){

    const handleMouseEnter = (event:any) =>{
        const target = event.currentTarget;
        target.style.fontWeight='bold';
        target.style.scale=1.5;
        target.style.transition = 'scale 0.5s';
    }

    const handleMouseLeave = (event:any) =>{
        const target = event.currentTarget;
        target.style.fontWeight='normal';
        target.style.scale=1;
        target.style.transition = 'scale 0.5s';
    }



    return(
        <>
            <motion.ul 
                className=" space-x-32
                            inline-flex
                            z-10
                            text-white"
            >   
            {/* <li><img src="../logo.ico" alt="logo" ></img></li> */}
                {links.map((l) =>(
                    <motion.li     
                        key={l.id}   

                        onMouseEnter={(event) => handleMouseEnter(event)}
                        onMouseLeave={(event) => handleMouseLeave(event)}

                        transition={{ duration: 0.5 }}
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