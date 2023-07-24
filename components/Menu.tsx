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

    // const router = useRouter();
    // const AnimatedText = (text, isActive) =>{
    
    //     const isActivePage = router.pathname === isActive;
    
    //     return (
    //         <motion.span
    //           initial={{ opacity: 0, width: "0%" }}
    //           animate={{ opacity: 1, width: "100%" }}
    //           transition={{ duration: 0.5 }}
    //           style={{
    //             textDecoration: isActivePage ? 'underline' : 'none',
    //           }}
    //         >
    //           {text}
    //         </motion.span>
    //       );
    // }
    

    // const controls = useAnimation();

    // const Animation = async () => {
    //     await controls.start({  width:0,
    //                             textDecorationColor: "black", 
    //                             textDecorationLine: "underline", 
    //                             textDecorationStyle:"solid",
    //                             textDecorationThickness:1});

    //     await controls.start({  width: "100%"});
    // }

    // useEffect(() => {
    //     Animation();
    //   }, []);
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