import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  formData: {
    step1: {
      name: "",
      email: "",
      phone: "",
    },
    step2: {
      country: "",
      city: "",
      address: "",
    },
    step3: {
      occupation: "",
      skills: [],
      bio: "",
      agree: false,
    },
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.step < 3) state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
    resetForm: (state) => {
      state.step = 1;
      state.formData = {
        step1: {
          name: "",
          email: "",
          phone: "",
        },
        step2: {
          country: "",
          city: "",
          address: "",
        },
        step3: {
          occupation: "",
          skills: [],
          bio: "",
          agree: false,
        },
      };
    },
    updateFormData: (state, action) => {
      const { step, data } = action.payload;
      state.formData[`step${step}`] = {
        ...state.formData[`step${step}`],
        ...data,
      };
    },
  },
});

export const { nextStep, prevStep, resetForm, updateFormData } = formSlice.actions;
export default formSlice.reducer;
