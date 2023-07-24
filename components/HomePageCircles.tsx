'use client'
import { motion } from "framer-motion"

export default function HomePageCircles() {
    return(
        <>
            <div className="flex w-screen h-[400px] justify-center">
                <div className="bg-white w-[30px] h-[30px] rounded-[50%] "></div>
                <div className="bg-white w-[30px] h-[30px] rounded-[50%]"></div>
                <div className="bg-white w-[30px] h-[30px] rounded-[50%]"></div>
                <div className="bg-white w-[30px] h-[30px] rounded-[50%]"></div>
                <div className="bg-white w-[30px] h-[30px] rounded-[50%]"></div>
                <motion.div>

                </motion.div>
            </div>
        </>
    )
}