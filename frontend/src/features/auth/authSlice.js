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

export const regUser = createAsyncThunk("auth/register-user", async (userData, thunkApi) => {
  try {
    return await authService.registerUser(userData);
  } catch (error) {
    const message = error.response.data.message;
    return thunkApi.rejectWithValue(message);
  }
});


export const logUser = createAsyncThunk("auth/login-user", async (userData, thunkApi) => {
  try {
    return await authService.loginUser(userData);
  } catch (error) {
    const message = error.response.data.message;
    return thunkApi.rejectWithValue(message);
  }
})



export const logOut = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    return authService.logoutUser();
  } catch (error) {
    const message = error.response.data.message;
    return thunkApi.rejectWithValue(message);
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
        state.isUser = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(regUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "Signed In";
        state.isUser = action.payload;
      })
      .addCase(logUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isUser = null;
        state.message = action.payload;
      })
      .addCase(logUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Logged In";
        state.isUser = action.payload;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Logout Failed";
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.isUser = null;
        state.isSuccess = true;
        state.message = "Logout Successfully";
    })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
