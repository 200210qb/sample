import {UPDATE_COLOR, UPDATE_STROKEWIDTH, UPDATE_STROKE} from './actions';

const initialState = {
  color: 'blue',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_COLOR:
      console.log(state);
      console.log(UPDATE_COLOR + '   ' + action.payload);
      return {...state, color: action.payload};
    default:
      return state;
  }
}

export default userReducer;
