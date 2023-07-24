"use client"
import Learn_HackTools from "@/components/Learn_HackTools";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Learn_Home(){
    const controls = useAnimation();
    const Learn_Icon =async () => {
        

        await controls.start({
            opacity:1
        })             
    }

    useEffect(() => {
        Learn_Icon();
      }, []);
  


    return(
        <main>
            <div className="flex justify-center">
                <motion.div className="
                                    bg-white
                                    rounded-[50%]
                                    h-[200px] w-[200px]"
                                initial={{  opacity:0, 
                                            height:"200px", 
                                            width:"200px",
                                            y:"100px"}}
                                animate={controls}
                                
            >
                    <img src="../Learn_icon.png" alt="Learn icon" className="w-full h-4/3" ></img> 
                </motion.div>

                

            </div>
            <div id="Learn_Content" className=" flex 
                                                translate-y-[250px]
                                                translate-x-[20vw]
                                                max-w-[1350px] 
                                                w-[60vw] 
                                                h-[300px]
                                                bg-white
                                                justify-center"
            >
                <Learn_HackTools/>
            </div>
        </main>
    )
}