'use client'

import Image from "next/image"

export default function TopOfPageButton(){
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        })
    }
    
    return(
        <button onClick={scrollToTop} className=" bg-white w-full h-full pt-[2px] rounded-[100%]">
            <Image src="/../../../frecciaSu.png" layout='fill' objectFit='contain' objectPosition="center" loading='lazy' className="translate-y-[2px] rotate-180" alt="moveUp"/>
        </button>
    )
}