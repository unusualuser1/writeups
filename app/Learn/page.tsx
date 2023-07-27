"use client"
import Learn_HackTools from "@/components/Learn_HackTools";
import { PageWrapper } from "@/components/PageWrapper";
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
            <PageWrapper>
                {/* icon */}
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

                {/* content start */}
                <div id="Learn_Content" className=" flex 
                                                    translate-y-[250px]
                                                    translate-x-[17.5vw]
                                                    max-w-[1350px]  
                                                    w-[65vw] 
                                                    h-[400px]
                                                    px-1 py-1"
                >
                    {/* Hack Tools */}
                    <div className="
                                    w-[65%] 
                                    h-[300px] 
                                    border-2 
                                    border-rose-600
                                    rounded-xl
                                    px-2 py-2"
                    >
                        <Learn_HackTools/>
                    </div>
                    
                    {/* something else */}
                    <div className="w-[35%]
                                    h-full 
                                    border-2 
                                    border-rose-600
                                    rounded-xl"
                    >

                    </div>
                </div>
            </PageWrapper>
        </main>
    )
}