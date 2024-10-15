import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Muisc } from '../types/type';
import toast from 'react-hot-toast';

interface musicState {
  musics: Muisc[];
  isError: boolean;
  isLoading: boolean;
}
const initialState: musicState = {
  musics: [],
  isError: false,
  isLoading: false,
};
export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    fetchMusicStart: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    fetchMusicSuccess: (state, action: PayloadAction<Muisc[]>) => {
      state.musics = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    fetchMusicFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      toast.error(action.payload);
    },
    createMusicStart: (state, action: PayloadAction<Muisc>) => {
      console.log(action.payload);
      state.isLoading = true;
    },
    createMuiscSuccess: (state, action: PayloadAction<Muisc>) => {
      state.isLoading = false;
      state.isError = false;
      state.musics.push(action.payload);
      toast.success('Muisc created successfully!');
    },
    createMusicFailure: (state, action: PayloadAction<string>) => {
      state.isError = true;
      state.isLoading = false;
      toast.error(action.payload);
    },
    updateMusicStart: (state, action: PayloadAction<Muisc>) => {
      console.log(action.payload);
      state.isLoading = true;
    },
    updateMusicSuccess: (state, action: PayloadAction<Muisc>) => {
      state.isLoading = false;
      state.isError = false;
      const updatedMusicIndex = state.musics.findIndex(
        (music: Muisc) => music._id === action.payload._id
      );
      if (updatedMusicIndex !== -1) {
        state.musics[updatedMusicIndex] = action.payload;
      }
      toast.success('Muisc udpated successfully!');
    },
    updateMusicFailure: (state, action: PayloadAction<string>) => {
      state.isError = true;
      state.isLoading = false;
      toast.error(action.payload);
    },

    deleteMusicStart: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      console.log(action.payload);
    },
    deleteMusicSuccess: (state, action: PayloadAction<string | undefined>) => {
      state.musics = state.musics.filter(
        (music: Muisc) => music._id !== action.payload
      );
      state.isLoading = false;
      state.isError = false;
      toast.success('Muisc deleted successfully!');
    },
    deleteMusicFailure: (state, action: PayloadAction<string>) => {
      state.isError = true;
      state.isLoading = false;
      toast.error(action.payload);
    },
  },
});
export const {
  fetchMusicStart,
  fetchMusicSuccess,
  fetchMusicFailure,
  createMusicStart,
  createMuiscSuccess,
  createMusicFailure,
  updateMusicStart,
  updateMusicSuccess,
  updateMusicFailure,
  deleteMusicStart,
  deleteMusicSuccess,
  deleteMusicFailure,
} = musicSlice.actions;
export default musicSlice.reducer;
