import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosError } from "axios";
import { api, handleApiError } from "../../helpers/api.helper";
import { User } from "../../interfaces/user.interface"

export const signInUser = createAsyncThunk<void, { email: string; password: string }>(
  'session/signInUser',
  async (credential, { rejectWithValue, dispatch }) => {
    try {
      const resp = await api.post<string>('auth/login', credential);
      if (resp.data) {
        localStorage.setItem('tkn', resp.data);

        dispatch(findLoggedUser());
      }
    } catch (err) {
      return rejectWithValue(handleApiError(err as AxiosError));
    }
  }
)

export const findLoggedUser = createAsyncThunk<User>(
  'session/findLoggedUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data: user } = await api.get<User>('users/me');
      return user;
    } catch (err) {
      return rejectWithValue(handleApiError(err as AxiosError));
    }
  }
)
