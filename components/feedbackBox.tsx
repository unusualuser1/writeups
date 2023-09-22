'use client'
import { useState } from "react";
import Image from "next/image"


export default function Feedback(){
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);


    const clickHandle = () =>{
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
        console.log(likeCount)
    };
    return(
        <div className="flex flex-wrap w-[40px] h-[95px] space-y-[15px]">
            <div className="relative w-full h-[40px] rounded-[100%] bg-white "
                onClick={clickHandle}
            >
                <Image className=" rounded-[50px]" layout='fill' objectFit='contain' objectPosition="center" loading='lazy' src="/../thumb.png"  alt="writeupImage"/>
            </div>
            <div className=" w-full h-[40px] rounded-[100%] bg-white">
                <Image className=" scale-y-[-1] rounded-[50px]" layout='fill' objectFit='contain' objectPosition="center" loading='lazy' src="/../thumb.png"  alt="writeupImage"/>
            </div>
        </div>
    )
}