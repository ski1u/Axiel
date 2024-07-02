import React, { useEffect } from "react"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"

import { useAnimationNavigate } from "./customHooks/animations/animationHooks"
import { CreateAnimation } from "./customHooks/animations/animationHooks"

import { Separator } from "@/components/ui/separator"

import { sidebarItems } from "./customHooks/sidebarItems"

export default function HomePage() {
    const [vis, toggleVis] = useAnimationNavigate()
    const nav = useNavigate()

    const loggedIn = useSelector(state => state.userData.states.isLoggedIn)
    useEffect(() => {if (!loggedIn) {nav("/choice")}}, [])

    return (
        <CreateAnimation animationProps={{}} vis={vis} cN="flex w-full h-full">
            <div className="bg-black w-full h-full p-3 rounded-lg flex flex-col items-center space-y-10">
{/*                 <div><ChevronLast color="#f5f5f5"/></div>
                <Separator className="border-[#383838] border-[1px] w-[120%]" />
                <div className="space-y-6"><LayoutGrid color="#f5f5f5"/> <BookMarked color="#f5f5f5"/></div> */}
                {Object.entries(sidebarItems).map(([num, info]) => (
                    <div key={num}>
                        {info.group}    
                        <Separator className="border-[#383838] border-[1px] w-[120%] mt-[2em]" />
                    </div>
                ))}
            </div>

            <div className="bg-black w-full h-full">

            </div>
        </CreateAnimation>
    )
}