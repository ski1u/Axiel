import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import CreateForm from "@/pathwayComponents/createAccount";

export const asyncOnStep = createAsyncThunk(
    "userForm/asyncOnStep",
    async (action, {getState, dispatch}) => {
        const state = getState().userForm
        await new Promise(resolve => setTimeout(resolve, 1000))
        dispatch(onStep(action))
})

const userFormSlice = createSlice({
    name: "userForm",
    initialState: {
        curStep: 1,
        infoInput: {
            firstName: {name: "First", value: ""},
            lastName: {name: "Last", value: ""},
            username: {name: "Username", value: ""},
            occupation: {name: "Occupation", value: ""},
            age: {name: "Age", value: ""},
            state: {name: "State", value: ""},
            city: {name: "City", value: ""},
            password: {name: "Password", value: ""}
        },
        process: {
            1: {
                inputs: {firstName: {name: "First", value: ""}, lastName: {name: "Last", value: ""}},
                heading: "What's your name?",
                description: "We'll display it so otheres can get to know you."
            },
            2: {
                inputs: {username: {name: "Username", value: ""}},
                heading: "What's your username?",
                description: "A custom nickname for yourself!"
            },
            3: {
                inputs: {occupation: {name: "Occupation", value: "", select: ["Student", "Colleague", "Other"]}, age: {name: "Age", value: ""}},
                heading: "What's your occupation?",
                description: "We'll self-customize your profile with these according information. This can be changed later",
            }
        }

    },
    reducers: {
        onChange: (state, action) => {
            const {name, value} = action.payload.target
            state.process[state.curStep].inputs[name].value = value
        },
        onStep: (state, action) => {
            switch (action.payload.type) {
                case "next": state.curStep+=1; break
                case "prev": state.curStep-=1; break
                default: break
            }
            console.log(`ran : ${state.curStep}`)
        },
        onSubmit: (state, action) => {

        }
    }
})

export const {onChange, onStep} = userFormSlice.actions
export default userFormSlice.reducer