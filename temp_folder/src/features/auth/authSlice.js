import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";

const isUserAvailable = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isUser: isUserAvailable ? isUserAvailable : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const regUser = createAsyncThunk("auth/register-user", async (userData,thnnkApi) => {
  try {
    return await authService.registerUser(userData);
  } catch (error) {
    console.log(error);
  }
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(regUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(regUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = action.payload;
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
