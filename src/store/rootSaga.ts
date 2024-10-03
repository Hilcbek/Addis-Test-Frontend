import { all } from 'redux-saga/effects';
import musicSaga from '../sagas/musicSaga';

export default function* rootSaga() {
  yield all([musicSaga()]);
}
