import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FormStage: 3,
  FormUserSignup: {
    name: "",
    role: "",
    email: "",
    password: "",
  },
  FormUserPrivacy: {
    signup1: false,
    signup2: false,
  },
};

export const signUpSlice = createSlice({
  name: "signUpSlice",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.FormUserSignup = {
        name: action.payload.name,
        role: action.payload.role,
        email: action.payload.email,
        password: action.payload.password,
      };
    },
    setSignUp: (state, action) => {
      state.FormUserPrivacy = {
        ...state.FormUserPrivacy,
        [`signup${action.payload}`]: true,
      };
    },
  },
});

export const { signUp, setSignUp } = signUpSlice.actions;
export default signUpSlice.reducer;
