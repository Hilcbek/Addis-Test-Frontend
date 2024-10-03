import { call, put, takeLatest } from 'redux-saga/effects';
import {
  createMuiscSuccess,
  createMusicFailure,
  createMusicStart,
  fetchMusicFailure,
  fetchMusicStart,
  fetchMusicSuccess,
  updateMusicFailure,
  updateMusicStart,
  updateMusicSuccess,
  deleteMusicStart,
  deleteMusicSuccess,
  deleteMusicFailure,
} from '../music/musicSlice';
import { Muisc } from '../types/type';
import {
  createMusic,
  deleteMusic,
  fetchMusic,
  updateMusic,
} from '../music/musicApi';
import { PayloadAction } from '@reduxjs/toolkit';

function* handleFetchMuiscs() {
  try {
    const musics: Muisc[] = yield call(fetchMusic);
    yield put(fetchMusicSuccess(musics));
  } catch (error) {
    yield put(fetchMusicFailure((error as Error).message));
  }
}
function* handleCreateMusic(action: PayloadAction<Omit<Muisc, 'id'>>) {
  try {
    const music: Muisc = yield call(createMusic, action.payload);
    yield put(createMuiscSuccess(music));
  } catch (error) {
    yield put(createMusicFailure((error as Error).message));
  }
}
function* handleUpdateMusic(action: PayloadAction<Omit<Muisc, 'id'>>) {
  try {
    const music: Muisc = yield call(updateMusic, action.payload);
    yield put(updateMusicSuccess(music));
  } catch (error) {
    yield put(updateMusicFailure((error as Error).message));
  }
}
function* handleDeleteMusic(action: PayloadAction<string>) {
  try {
    const id: string = yield call(deleteMusic, action.payload);
    yield put(deleteMusicSuccess(id));
  } catch (error) {
    yield put(deleteMusicFailure((error as Error).message));
  }
}

export default function* musicSaga() {
  yield takeLatest(fetchMusicStart.type, handleFetchMuiscs);
  yield takeLatest(createMusicStart.type, handleCreateMusic);
  yield takeLatest(updateMusicStart.type, handleUpdateMusic);
  yield takeLatest(deleteMusicStart.type, handleDeleteMusic);
}
