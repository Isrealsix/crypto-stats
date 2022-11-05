import { createSlice } from '@reduxjs/toolkit';
import { AuthJWT, Login } from '../../../features/Authentication/thunk';
import { State, STATUS } from '../../../shared/constants/constants';
import { IUser } from './constants';



interface userState<T> {
  essence: T | null
  loading: keyof typeof STATUS;
  error: string;
  token: string;
}

const initialState: userState<IUser> = {
  essence: null,
  loading: STATUS.IDLE,
  error: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Login.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(AuthJWT.fulfilled, (state, action) => {
        state.essence = action.payload;
        state.error = '';
      })
      .addMatcher(
        (action) => action.type.endsWith(`/pending`),
        (state) => {
          state.loading = STATUS.LOADING;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith(`/fulfilled`),
        (state) => {
          state.loading = STATUS.IDLE;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith(`/rejected`),
        (state, action) => {
          state.loading = STATUS.IDLE;
          state.error = action.payload || action.error.message;
          state.token = ''
        }
      );
  },
});
