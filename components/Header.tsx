"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {href: "/", text:"Home"},
  {href: "/", text: "Difficoltà"}
]


export default function Header() {
  const path = usePathname();
    return (
        <>
            <div className ="fixed z-50 inline-flex h-26 w-full pr-8 bg-Header">
              <div className="px-30 m-1">
                <img className="w-25 h-20 " src="../logo.ico"></img>
              </div>
              <div className="flex justify-end items-center w-full"> 
                <ul className="inline-flex space-x-8 m-1.5 ">
                  {links.map((l) => (
                    <li key={l.href}>
                      <motion.div whileHover={{scale: 1.1}}>
                        <Link 
                          
                          className={`${
                            l.href === path ? "text-yellow-600 font-bold" : ""
                          } text-base`} 
                          href = {l.href}
                        >
                          {l.text}
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                  
                </ul>
              </div>
            </div>
        </>
    )
} 