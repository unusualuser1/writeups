"use client"
import { motion } from "framer-motion"

export default function Home(){
    return(
        <main>
            <div className="inline-flex 
                            py-[80px]"
            >
                <div className="bg-white
                                w-[40vw]
                                h-[400px]
                                translate-x-[15vw]"
                ></div>
                <div className="bg-red-600
                                w-[25vw]
                                h-[400px]
                                translate-x-[20vw]"
                ></div>
            </div>
            <div className="inline-flex
                            pb-[120px]"
            >
                <div className="bg-white
                                w-[40vw]
                                h-[400px]
                                translate-x-[15vw]"
                ></div>
                <div className="bg-red-600
                                w-[25vw]
                                h-[400px]
                                translate-x-[20vw]
                                "
                ></div>
            </div>
            
        </main>
    )
}