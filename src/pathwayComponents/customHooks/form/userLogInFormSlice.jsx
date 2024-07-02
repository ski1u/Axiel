import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userLogInSlice = createSlice({
    name: "userLogInForm",
    initialState: {
        infoInput: {
            username: {name: "Username", type: "text", value: ""},
            password: {name: "Password", type: "password", value: ""}
        }
    },
    reducers: {
        onChange: (state, action) => {
            const {name, value} = action.payload.target
            state.infoInput[name].value = value
        },
        onSubmit: (state, action) => {
            
        }
    }
})

export const {onChange, onSubmit} = userLogInSlice.actions
export default userLogInSlice.reducer