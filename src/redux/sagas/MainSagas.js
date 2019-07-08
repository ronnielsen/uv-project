import { put, call } from 'redux-saga/effects';
import { Api } from '../../tools';
import { MainActions } from '../actions';

export const init = function * init() {
  // yield put(MainActions.getConfig());
  // yield put(MainActions.getImages());
  // yield put(MainActions.getDrives());
}

export const setLocation = function * setLocation({location}) {
  console.log("setLocation", location);
  let res = yield call(Api.getLocationData, location)
  console.log("res", res);
  // let {uv, air} = res
  function getRandom() {
    let min = 0;
    let max = 10;
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function getRandomAir() {
    let min = 1;
    let max = 301;
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let uv = getRandom();
  let air = getRandomAir();
  yield put(MainActions.putLocation(location));
  yield put(MainActions.putUv(uv));
  yield put(MainActions.putAir(air));
}
