import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { musicServices } from './musicApiCalls';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
type musicType = {
  _id?: string;
  mname: string;
  desc: string;
  genere: string;
};
interface ThunkAPI {
  rejectValue: string; 
}
type IdType = string;
export const createMusic = createAsyncThunk<musicType, musicType, ThunkAPI>(
  'music/create',
  async (musicData: musicType, thunkApi) => {
    try {
      return await musicServices.createMusic(musicData);
    } catch (error) {
      let message = 'An unexpected error occurred';
      if (error instanceof AxiosError && error.response?.data?.error) {
        message = error.response.data.error;
      }
      // Reject the thunk with a message
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const allMuiscsService = createAsyncThunk<musicType[], void, ThunkAPI>(
  'music/allMuisc',
  async (_, thunkApi) => {
    try {
      return await musicServices.allMusics();
    } catch (error) {
      let message = 'An unexpected error occurred';
      if (error instanceof AxiosError && error.response?.data?.error) {
        message = error.response.data.error;
      }
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const updateMusicService = createAsyncThunk<
  musicType,
  musicType,
  ThunkAPI
>('music/updateMusic', async (music: musicType, thunkApi) => {
  try {
    return await musicServices.updateMusic(music);
  } catch (error) {
    let message = 'An unexpected error occurred';
    if (error instanceof AxiosError && error.response?.data?.error) {
      message = error.response.data.error;
    }
    // Reject the thunk with a message
    return thunkApi.rejectWithValue(message);
  }
});
export const deleteMusicService = createAsyncThunk<IdType, IdType, ThunkAPI>(
  'music/deleteMusic',
  async (id: IdType, thunkApi) => {
    try {
      return await musicServices.deleteMusic(id);
    } catch (error) {
      let message = 'An unexpected error occurred';
      if (error instanceof AxiosError && error.response?.data?.error) {
        message = error.response.data.error;
      }
      // Reject the thunk with a message
      return thunkApi.rejectWithValue(message);
    }
  }
);

type initialStateType = {
  isLoading: boolean;
  allMusics: musicType[];
};
const initialState: initialStateType = {
  allMusics: [],
  isLoading: false,
};
export const mainSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMusic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMusic.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allMusics.push(action.payload);
        toast.success('Music created Successfully!');
      })
      .addCase(createMusic.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload as string);
      })
      .addCase(allMuiscsService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allMuiscsService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allMusics = action.payload;
      })
      .addCase(allMuiscsService.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload as string);
      })
      .addCase(updateMusicService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMusicService.fulfilled, (state) => {
        state.isLoading = false;
        toast.success(`Music updated successfully!`);
      })
      .addCase(updateMusicService.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload as string);
      })
      .addCase(deleteMusicService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMusicService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allMusics = state.allMusics.filter(
          (music) => music._id !== action.payload
        );
        toast.success('Music has been deleted!');
      })
      .addCase(deleteMusicService.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload as string);
      });
  },
});

export default mainSlice.reducer;
