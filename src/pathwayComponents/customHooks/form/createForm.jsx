import { useSelector, useDispatch } from "react-redux";

import { asyncOnStep } from "./userFormSlice";

import { onChange } from "./userFormSlice";

import { useAnimationNavigate } from "../animations/animationHooks";
import { CreateAnimation } from "../animations/animationHooks";

import InputForm from "@/pathwayComponents/componentUIs/inputForm";
import ArrowNav from "@/pathwayComponents/componentUIs/arrowNav";

export default function CreateForm({heading, description, inputs, curStep}) {
    const [vis, toggleVis, handleNav] = useAnimationNavigate()
    const dispatch = useDispatch()

    const handleStep = (type) => {
        toggleVis()
        dispatch(asyncOnStep({type: type, ts: toggleVis}))
    }

    return (
        <CreateAnimation animationProps={{}} vis={vis} cN="flex justify-between items-center w-full h-full">
            <ArrowNav onClick={curStep <= 1 ? () => handleNav("/choice") : () => handleStep("prev")} />
            <div className="w-full h-full">
                <div className="space-y-[-0.5em] mb-[1em] w-full h-full">
                    <h1 className="heading1">{heading}</h1>
                    <p className="body2 smop">{description}</p>
                </div>

                <div className="flex space-x-4 w-full h-full">
                    {Object.entries(inputs).map(([dataName, info]) => (
                        <InputForm
                        name={dataName}
                        type={info.type || "text"}
                        placeholder={info.name}
                        onChange={(e) => dispatch(onChange(e))}
                        value={info.value}
                        key={dataName}
                        />
                    ))}
                </div>
            </div>
            <ArrowNav onClick={() => handleStep("next")} className="rotate-180" />
        </CreateAnimation>
    )
}
//figure out a way to animate whilst moving to new step
