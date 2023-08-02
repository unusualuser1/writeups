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
                                className="bg-white text-black w-[45%] h-[200px] m-2 rounded-xl text-center animated-element"
                                ref={ref}
                                initial={{scale: 0}} 
                                animate={{scale: inView ? 1 : 0 }} 
                                transition={{duration: 0.4}} 
                    >
                        <div className="flex w-full h-[80%] ">
                            <Link href={"../Learn/WikiLearn#" + id} className=" h-full ">
                                <img src="../../HTB_logo.png" alt="section_img" className=" l w-full h-4/3 rounded-b-xl rounded-r-xl" loading='lazy'></img>
                            </Link>
                            <div className='w-full '>asdsad</div>
                        </div>
                        
                        {id}
                        
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
        <main className="translate-y-[100px]">
            

                {/* content start */}
                {/* <div id="Learn_Content" className=" flex 
                                                    translate-y-[250px]
                                                    translate-x-[17.5vw]
                                                    max-w-[1350px]  
                                                    w-[65vw] 
                                                    h-[400px]
                                                    px-1 py-1"
                > */}
                    {/* Hack Tools */}
                    {/* <div className="
                                    w-[65%] 
                                    h-[300px] 
                                    border-2 
                                    border-rose-600
                                    rounded-xl
                                    px-2 py-2"
                    >
                        <Learn_HackTools/>
                    </div> */}
                    
                    {/* something else */}
                    {/* <div className="w-[35%]
                                    h-full 
                                    border-2 
                                    border-rose-600
                                    bg-white
                                    px-4
                                    py-6
                                    text-black
                                    rounded-xl
                                    overflow-hidden 
                                    overflow-y-scroll"
                    >
                    <ul>
                        {ids.map((id)=>(
                            <li key={id}>{id}</li>
                        ))}
                    </ul>
                    </div>
                </div> */}

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