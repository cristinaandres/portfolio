"use client"

import { animatePageIn } from "@/utils/animate"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"
import LogoIntegrated from "@/components/Logos/LogoIntegrated"

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn()
  }, [])

  return (
    <div>
      <svg
        id="transition-element"
        className="w-screen h-screen overflow-hidden bg-transparent z-50 fixed top-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path className="path w-[3000px] h-screen" d="M 0 100 V 0 Q 50 0 100 0 V 100 z" fill="black" />

        <foreignObject
          x="50"
          y="50"
          width="100"
          height="100"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-1/12 h-1/6 flex items-center justify-center">
            {/* <LogoIntegrated /> */}
          </div>
        </foreignObject>
      </svg>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  )
}