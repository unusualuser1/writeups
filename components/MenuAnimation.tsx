"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react';

const controls = useAnimation();

const animationSequence = async () => {
    await controls.start({ scale: 1, rotate: 360 , transition: {type: "spring"}}); // Prima animazione
    await controls.start({ x: 200 }); // Seconda animazione
};

useEffect(() => {
    animationSequence();
  }, []);

const MenuAnimation =()=>{
    return(
        <>
        </>
    )
}