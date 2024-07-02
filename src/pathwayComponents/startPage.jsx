import React, {useState, useEffect} from "react"

import { motion } from "framer-motion"
import { buttonHover } from "./customHooks/animations/animationStyles"

import { CreateAnimation } from "./customHooks/animations/animationHooks"
import { useAnimationNavigate } from "./customHooks/animations/animationHooks"

export default function StartPage() {
    const [vis, toggleVis, handleNav] = useAnimationNavigate()

    return (
        <CreateAnimation animationProps={{duration: 2, staggerChildren: 0.8}} vis={vis} cN="flex flex-col justify-center items-center space-y-2 h-full w-full">
            <div className="flex space-x-2 text-2xl font-medium">
                <h1>Welcome</h1>
                <h1>To</h1>
            </div>

            <div className="text-3xl">
                <h1 className="pTextColor">Axiel</h1>
            </div>

            <div className="mt-6">
                <motion.h1
                className="cursor-pointer"
                onClick={() => handleNav("/choice")}
                whileHover={buttonHover}>
                    Get started.
                </motion.h1>
            </div>
        </CreateAnimation>
    )
}