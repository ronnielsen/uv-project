// @flow
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const merge = (state, data) => {
  // console.log("merge", data);
  return Object.assign({}, state, data)
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  // <actionName>:[<arg1>,...,<argN>] --> function actionName(arg1,..., argN)
  init: [],
  setLocation: ['location'],
  putLocation: ['location'],
  putUv: ['uv'],
  putAir: ['air']
})

export const MainTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  location: 'San Jose, CA',
  uv: 1,
  air: 1
})

/* ------------- Reducers ------------- */
export const init = (state, { config }) => INITIAL_STATE;
export const putLocation = (state, { location }) => merge(state, { location });
export const putUv = (state, { uv }) => merge(state, { uv });
export const putAir = (state, { air }) => merge(state, { air });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INIT]: init,
  [Types.PUT_LOCATION]: putLocation,
  [Types.PUT_UV]: putUv,
  [Types.PUT_AIR]: putAir
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
// export const isLoggedIn = (state: Object) => (state.user && state.user !== {})
