import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../interfaces/user.interface'
import { findLoggedUser, signInUser } from '../actions/session.action'

export interface SessionState {
  user: User | null;
  loading: boolean;
  error: string | undefined;
}

const initialState: SessionState = {
  user: null,
  loading: false,
  error: undefined
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload as string;
    });
    builder.addCase(findLoggedUser.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
      state.loading = false;
    });
    builder.addCase(findLoggedUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(findLoggedUser.rejected, (state, err) => {
      state.loading = false;
      state.error = err.error.message;
    });
  },
})

export default sessionSlice.reducer