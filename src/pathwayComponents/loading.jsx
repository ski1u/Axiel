import { useState, useEffect } from "react"

export default function Loading({isLoading}) {
    const [dots, setDots] = useState("")

    useEffect(() => {
        if (!isLoading) {return }

        const dotInterval = setInterval(() => {
            setDots(prevDots => (prevDots.length < 3 ? prevDots + "." : ""))
        }, 500)

        return () => clearInterval(dotInterval)
    }, [])

    if (!isLoading) {return null}
    return (
        <div className="h-full w-full flex justify-center items-center">
            <h1 className="heading2 tracking-widest">{dots}</h1>
        </div>
    )
}