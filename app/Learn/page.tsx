"use client"
import ReactDOMServer from 'react-dom/server';
import getIdsFromHtml from "@/components/HTMLIdGetter";
import { PageWrapper } from "@/components/PageWrapper";
import WikiLearn_Page from "./WikiLearn/page";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Link from 'next/link';




export default function Learn_Home(){

    {/* animation code for scroll */}
    const AnimatedElement = (id:string) => {
        

        return(
            <InView trackVisibility>
                {({inView , ref}) => (
                    <motion.div key={id} 
                                className="flex bg-white text-black w-[300px] h-[150px]  m-2 rounded-xl text-center animated-element"
                                ref={ref}
                                initial={{scale: 0}} 
                                animate={{scale: inView ? 1 : 0 }} 
                                transition={{duration: 0.4}} 
                    >
                        <div className=" w-[50%] ">
                            <Link href={"../Learn/WikiLearn#" + id} className="  ">
                                <img src="../../HTB_logo.png" alt="section_img" className=" w-full h-4/3 rounded-b-xl rounded-r-xl" loading='lazy'></img>
                            </Link>
                        </div>
                        <div className='flex w-1/2 items-center justify-center'><p className=' text'>{id}</p></div>
                        
                    </motion.div>
                )}
                
            </InView>
        )
    }

    

    {/* code to list the "id" of the main sections*/}
    const fileContent = ReactDOMServer.renderToString(<WikiLearn_Page/>);

    const ids = getIdsFromHtml(fileContent);
    console.log(ids);
    
    console.log(fileContent);
    
    return(
        <main className="">

            <PageWrapper>

                {/* icon */}
                <div className="flex justify-center ">
                    <div className="    bg-white
                                        rounded-[50%]
                                        h-[200px] w-[200px]"
                                    
                >
                        <img src="../Learn_icon.png" alt="Learn icon" className="w-full h-4/3" ></img> 
                    </div>
                </div>


                {/* Content Start */}
                <div className=" bg-slate-500 rounded-xl flex justify-center flex-wrap w-[50vw] translate-x-[25vw] translate-y-[50px] py-5">
                    {ids.map((id) =>(
                        AnimatedElement(id)
                    ))}
                    
                </div>

                


            </PageWrapper>
        </main>
    )
}