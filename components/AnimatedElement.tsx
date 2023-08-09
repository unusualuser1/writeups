'use client';
import ReactDOMServer from 'react-dom/server';
import getIdsFromHtml from "@/components/HTMLIdGetter";
import { PageWrapper } from "@/components/PageWrapper";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Link from 'next/link';
import { octokit } from '@/lib/octo';
import { Endpoints } from "@octokit/types"
import { getDirFile, getDirectoryData } from '@/lib/apiUtils';

export default function AnimatedElement({id,link}:any){

    return(
        <InView trackVisibility key={id}>
            {({inView , ref}) => (
                <motion.div
                            className=" bg-white text-black m-2 rounded-xl text-center animated-element
                                        xsm:w-[50px] xsm:h-[50px]
                                        sm:w-[70px] sm:h-[110px]
                                        m:w-[100px] m:h-[130px]
                                        md:w-[150px] md:h-[180px]
                                        ld:w-[200px] ld:h-[230px]"
                            ref={ref}
                            initial={{scale: 0}} 
                            animate={{scale: inView ? 1 : 0 }} 
                            transition={{duration: 0.4}} 
                >
                    <div className="xsm:w-full
                                    sm:w-full 
                                    md:w-full"
                    >
                        <Link href={`../Learn/${id}`} className="  ">
                            <img src={link} alt="section_img" className=" w-full h-4/3 rounded-b-xl rounded-r-xl" loading='lazy'></img>
                        </Link>

                    </div>
                    <div className='flex items-center justify-center
                                    
                                    sm:w-full
                                    md:w-full'
                    >
                        <p className='xsm:invisible sm:visible '>{id}</p>  {/*TODO: manage ha to show id name for screens < 230px*/}
                    </div>
                    
                </motion.div>
            )}
            
        </InView>
    )
}