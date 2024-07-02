import { useSelector, useDispatch } from "react-redux"

import { onChange } from "./customHooks/form/userLogInFormSlice"

import { useAnimationNavigate } from "./customHooks/animations/animationHooks"
import { CreateAnimation } from "./customHooks/animations/animationHooks"

import OutlineButton from "./componentUIs/outlineButton"
import InputForm from "./componentUIs/inputForm"
import ArrowNav from "./componentUIs/arrowNav"

export default function LogIn() {
    const [vis, toggleVis, handleNav] = useAnimationNavigate()
    const dispatch = useDispatch()

    const infoInput = useSelector(state => state.userLogInForm.infoInput)

    return (
        <div className="flex justify-center items-center h-full p-4">
            <ArrowNav onClick={() => handleNav("/choice")} />
            <CreateAnimation animationProps={{}} vis={vis} cN="flex justify-center items-center h-full w-full">
                <form onSubmit={() => console.log(infoInput)} className="flex flex-col space-y-2 w-full h-full">
                    <h1 className="heading1">Log in</h1>
                    <div className="space-y-2">
                        {Object.entries(infoInput).map(([dataName, info]) => (
                            <InputForm
                            name={dataName}
                            type={info.type}
                            placeholder={info.name}
                            onChange={(e) => dispatch(onChange(e))}
                            value={info.value}
                            key={dataName}
                            />
                        ))}
                    </div>
                    <OutlineButton className="w-1/2" type="submit">Log in</OutlineButton>

                    <h1 className="text-sm smop mt-[6em]">Forgot password? <a className="pTextColor underline cursor-pointer p3TextColor">Reset</a></h1>
                </form>
            </CreateAnimation>
        </div>
    )
}