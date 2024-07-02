import { useSelector } from "react-redux";

import { Outlet } from "react-router";

import Loading from "./pathwayComponents/loading";

export default function Root({isLoading}) {
    const loggedIn = useSelector(state => state.userData.states.isLoggedIn)

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="bg-[#f5f5f5] h-[32em] w-[48em] rounded-lg relative">
                <div>
                    {loggedIn ? null : <img className="absolute top-4 left-4 w-10 h-10 z-[0] " src="src\assets\axiel-black.svg"/>}
                </div>
                {isLoading ? <Loading isLoading={isLoading} /> : <Outlet/>}
            </div>
        </div>
    )
}