export const UPDATE_COLOR = 'UPDATE_COLOR';

export const updateColor = color => dispatch => {
  dispatch({
    type: UPDATE_COLOR,
    payload: color,
  });
};

