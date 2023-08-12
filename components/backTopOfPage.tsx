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
        <button onClick={scrollToTop} className=" bg-white w-[40px] h-[40px] pt-[2px] rounded-[100%]">
            <Image src="/../../../frecciaSu.png" layout='fill' objectFit='contain' objectPosition="center" loading='lazy' className=" rotate-180" alt="moveUp"/>
        </button>
    )
}