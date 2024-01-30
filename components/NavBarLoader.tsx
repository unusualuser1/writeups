'use client'
import { useState, useEffect } from "react";
import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";
import NavBarDesktop_v2 from "./NavBarDesktop_v2";



export default function DynamicNavBar() {
    // const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    // setIsMobile(window.innerWidth < 768);
    // const handleResize = () => {
    //     setIsMobile(window.innerWidth < 768);
    // };

    // window.addEventListener('resize', handleResize);
    // return () => {
    //     window.removeEventListener('resize', handleResize);
    // }
    // }, []);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        import('mobile-detect').then(({ default: MobileDetect }) => {
            const md = new MobileDetect(window.navigator.userAgent);
            setIsMobile(!!md.mobile());

            // Personalizza la logica in base alle tue esigenze
            if (isMobile) {
                document.body.classList.add('mobile-device');
            } else {
                document.body.classList.remove('mobile-device');
            }
        });
    }, [isMobile]);

    return (
        <>
            {isMobile ? <NavBarMobile /> : <NavBarDesktop_v2 />}
        </>
    )
}





