"use client"
import { motion, AnimatePresence } from "framer-motion";

export const MenuAnimation = ({ children }:any) =>(
    <>
        <AnimatePresence>
            <motion.div
            initial={{width: "30px", height: "30px", borderRadius: "10px"}}
            animate={{rotate: 225, width: "50vw", height: "50px"}}
            exit={{opacity:0, y:15}}
            transition={{duration:3}}
            >
            {children}
            </motion.div>
        </AnimatePresence>
    </>
);