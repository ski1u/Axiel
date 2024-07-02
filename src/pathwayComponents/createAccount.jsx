import { useSelector, useDispatch } from "react-redux";

import CreateForm from "./customHooks/form/createForm";

import { asyncOnStep } from "./customHooks/form/userFormSlice";

export default function CreateAccount() {
    const dispatch = useDispatch()

    const data = useSelector(state => state.userForm)
    const {curStep, infoInput, process} = data

    const curProcess = process[curStep]

    const handleStep = (type) => {
        toggleVis()
        dispatch(asyncOnStep({type: type, ts: toggleVis}))
    }

    return (
        <div className="flex justify-center items-center h-full w-full p-4">
            <CreateForm {...curProcess} curStep={curStep}/>
        </div>
    )
}