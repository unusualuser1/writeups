'use client'
import Link from "next/link"
import { motion } from "framer-motion"
import { PageWrapper } from "./PageWrapper"
import Image from "next/image"

export default function HomePageLearn(){
    return(
        <>
            <PageWrapper>
                <div className="md:inline-flex
                                xsm:flex 
                                items-center
                                space-x-2 w-full h-[300px]
                                justify-center
                                "
                >

                
                    <div className="md:flex 
                                    bg-[#495464]
                                    ld:h-[200px] ld:w-[45vw] ld:rounded-[200px] 
                                    md:h-[150px] md:w-[55vw] md:rounded-[150px] 
                                    m:h-[300px] m:w-[30vw]
                                    xsm:h-[200px] xsm:w-[100px] xsm:rounded-[100px] 
                                    
                                    "
                    >
                        
                            <motion.div className=" relative
                                                z-50 w-[100px] h-[100px]
                                                bg-white
                                                rounded-[50%]
                                                "
                                        
                                        whileHover={{scale:0.8}}
                            >   
                                <Link href={"/Learn"}>
                                    <Image src="/Learn_icon.png" layout='fill' objectFit='contain' objectPosition="center" alt="Learn icon"  />
                                </Link>
                            </motion.div>

                        <div className="w-[80%] h-full flex items-center text-center align-middle font-semibold
                                        ld:text-[16px]
                                        md:text-[13px] md:visible md:px-4
                                        xsm:w-full 
                                        "
                        >
                            <div className="xsm:invisible xsm:translate-y-[20px] m:-translate-y-[10vw]  md:translate-y-0 md:visible"><p className="xsm:visible"> Start Learning!</p>
                            <br />Here u will find a lot of content to learn the basis to hack the boxes 
                            </div>
                        </div> 
                        
                    </div>
                </div>
            </PageWrapper>
        </>
    )
}