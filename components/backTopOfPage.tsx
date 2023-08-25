'use client'

import Image from "next/legacy/image"

export default function TopOfPageButton(){
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        })
    }
    
    return(
        <div className="w-[40px] h-[40px] bottom-0 right-0 absolute">
            <button onClick={scrollToTop} className="relative bg-white w-full h-full rounded-[100%]">
                <Image src="/../../../frecciaSu.png" layout='fill' objectFit='contain' objectPosition="center" loading='lazy' className=" translate-y-[2px] rotate-180" alt="moveUp"/>
            </button>
        </div>
    )
}