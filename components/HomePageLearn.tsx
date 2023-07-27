"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { PageWrapper } from "./PageWrapper"

export default function HomePageLearn(){
    return(
        <>
            <PageWrapper>
                <div className="inline-flex 
                                translate-x-[20vw]
                                bg-[#495464]
                                h-[400px] 
                                w-[60vw] items-center 
                                rounded-[200px]"
                >
                    <Link href="/Learn">
                        <motion.div className="
                                            z-50 
                                            bg-white
                                            rounded-[50%]
                                            h-[400px] w-[400px]"
                                    
                                    whileHover={{scale:0.8}}
                        >
                            <img src="../Learn_icon.png" alt="Learn icon" className="w-full h-4/3" ></img> 
                        </motion.div>
                    </Link>

                    <p className=" text-center translate-x-[20px] font-semibold"
                    > 
                        Here u will find a lot of content to learn the basis to hack the boxes 
                        <br /> Let's start ! 
                    </p> 
                    
                </div>
            </PageWrapper>
        </>
    )
}