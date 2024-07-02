import React, {useEffect} from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

import { Button } from "@/components/ui/button"
import OutlineButton from "./componentUIs/outlineButton"

import { motion } from "framer-motion"
import { buttonHover } from "./customHooks/animations/animationStyles"

import { useAnimationNavigate, CreateAnimation } from "./customHooks/animations/animationHooks"

export default function Choice() {
   const [vis, toggleVis, handleNav] = useAnimationNavigate()
   const nav = useNavigate()

   const loggedIn = useSelector(state => state.userData.states.isLoggedIn)
   useEffect(() => {if (loggedIn) {nav("/homepage")}}, [])

   return (
    <CreateAnimation animationProps={{}} vis={vis} cN="flex justify-center items-center h-full w-full flex-col space-y-3">
        <motion.div whileHover={buttonHover}><Button onClick={() => handleNav("/create")}>Create an account</Button></motion.div>
        <h1>or</h1>
        <motion.div whileHover={buttonHover}><OutlineButton onClick={() => handleNav("/log-in")} variant="outline" className="bg-[#f5f5f5] border-[#1f1f1f] border-opacity-35 font-medium">Log in</OutlineButton></motion.div>
    </CreateAnimation>
   )
}