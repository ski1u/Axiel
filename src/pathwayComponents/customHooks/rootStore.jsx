import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

import userFormSlice from "./form/userFormSlice";
import userLogInFormSlice from "./form/userLogInFormSlice";

import userData from "./userData";

const rootStore = configureStore({
    reducer: {
        userForm: userFormSlice,
        userLogInForm: userLogInFormSlice,

        userData: userData
    }
})

export default rootStore