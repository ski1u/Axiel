import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router";

import { motion, AnimatePresence } from "framer-motion";

const useVis = () => {
    const [vis, setVis] = useState(true)

    function toggleVis() {
        setVis(!vis)
    }

    return [vis, toggleVis]
}
export const useAnimationNavigate = (delay) => {
    const [vis, toggleVis] = useVis()
    const nav = useNavigate()

    const handleNav = (pathway) => {
        toggleVis()
        setTimeout(() => {
            nav(pathway)
        }, (delay || 0.4)*1000)
    }
    return [vis, toggleVis, handleNav]
}

export const CreateAnimation = ({children, animationProps, vis, cN}) => {
    const sideEffect = {type: "spring", duration: 1, delay: animationProps.delay || 0.5}
    const container = {
        hidden: {opacity: 0, y: -60},
        visible: {opacity: 1, y: 0, transition: {...sideEffect, delayChildren: animationProps.delayChildren || 1, staggerChildren: animationProps.staggerChildren || 0.65}}
    }
    const item = {
        hidden: {opacity: 0, y: animationProps.y || -30},
        visible: {opacity: 1, y: 0, transition: {type: "spring", duration: animationProps.duration || 1.5}}
    }
    const onExit = {opacity: 0, y: 60, transition: {type: "spring", duration: 1.5}}

    return (
        <AnimatePresence>
            {vis && <motion.div
            className={cN}
            variants={container}
            initial="hidden"
            animate="visible"
            exit={onExit}>
                {React.Children.map(children, (child, index) => (
                    <motion.div
                    key={index}
                    variants={item}>
                        {child}
                    </motion.div>
                ))}
            </motion.div>}
        </AnimatePresence>
    )
}