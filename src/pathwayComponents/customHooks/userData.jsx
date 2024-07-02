import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: "userData",
    initialState: {
        states: {
            isLoggedIn: false,
            isLoading: false
        }
    },
    reducers: {
        setStates: (state, action) => {
            state.states[action.payload.type] = action.payload.value
        }
    }
})

export default userDataSlice.reducer