"use client"
import { motion } from "framer-motion"

export default function Home(){

    const handleMouseEnter = (event) =>{
        const target = event.currentTarget;
        target.style.width='100%';
        target.zIndex = '1';
        target.style.transition = 'width 0.3s';
    }

    const handleMouseLeave = (event) =>{
        const target = event.currentTarget;
        target.style.width='33%';
        target.zIndex = '0';
        target.style.transition = 'width 0.3s';
    }

    return(
        <main>
            <div className="flex
                            relative
                            w-screen
                            h-[550px] 
                            py-[80px] 
                            space-x-4
                            px-36"
            >
                <motion.div className=" bg-white
                                        w-1/3
                                        
                                        rounded-lg"
                            initial={{x: 0}}
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onMouseLeave={(event) => handleMouseLeave(event)}
                ></motion.div>

                <motion.div className=" bg-white
                                        w-1/3
                                        h-full
                                        rounded-lg"
                            initial={{x: 0}}
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onMouseLeave={(event) => handleMouseLeave(event)}

                >

                </motion.div>

                <motion.div className="bg-[#ffffff]
                                        w-1/3
                                        h-full
                                        py-16
                                        text-black
                                        rounded-lg "
                            initial={{ x: 0}}
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onMouseLeave={(event) => handleMouseLeave(event)}
                            

                >   
                    <center><h1>I PIU' CERCATI</h1></center>
                </motion.div>
            </div>
            
        </main>
    )
}