"use client"
import { motion } from "framer-motion"

export default function Home(){
    return(
        <main>
            <div className="bg-blue-800 relative w-[300px] h-[300px] float-right translate-y-20 -translate-x-16 px-2 py-2 grid grid-cols-2 grid-rows-2 gap-2 rounded-lg rotate-[60deg] z-8">
                <div className=" bg-white rounded-lg">
                    <a href="/HTB"><img src="../HTB_logo.png" className=" object-cover w-full h.full rotate-[180deg] rounded-lg"></img></a> 
                </div>
                <div className=" bg-white rounded-lg">

                </div>
                <div className=" bg-white rounded-lg">

                </div>
                <div className=" bg-white rounded-lg">

                </div>
            </div>
        </main>
    )
}