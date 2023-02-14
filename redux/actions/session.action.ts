import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosError } from "axios";
import { api, handleApiError } from "../../helpers/api.helper";
import { User } from "../../interfaces/user.interface"
import { User as FirebaseUser } from 'firebase/auth';


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

export const signInGoogleUser = createAsyncThunk<void, FirebaseUser>(
  'session/signInGoogleUser',
  async (firebaseUser, { rejectWithValue, dispatch }) => {
    const arrayName = firebaseUser.displayName?.split(" ") || "";
    const name = arrayName[0];
    const lastName = arrayName[1]
    try {
      const resp = await api.post<string>('auth/google', {
        name: name,
        lastName: lastName,
        email: firebaseUser.email,
        photoUrl: firebaseUser.photoURL,
        phoneNumber: firebaseUser.phoneNumber,
        googleId: firebaseUser.uid,
        createdFrom: 'google_sign_in',
      });
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
