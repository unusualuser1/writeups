'use client'
import { useState, useEffect } from "react";
import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";
import NavBarDesktop_v2 from "./NavBarDesktop_v2";



export default function DynamicNavBar() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    }
    }, []);

    return(
        <>
            {isMobile ? <NavBarMobile/> : <NavBarDesktop_v2/>}
        </>
    )
}





