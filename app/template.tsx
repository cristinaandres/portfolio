"use client"

import { animatePageIn } from "@/utils/animate"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn()
  }, [])
  return (
    <div>
      <div
        id="transition-element"
        className="w-screen h-screen overflow-hidden bg-black z-50 fixed top-0 left-0 flex items-center justify-center"
      >
        <Image src={'/images/logo_white.svg'} alt="Logo Cristina" width={200} height={200}/>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  )
}