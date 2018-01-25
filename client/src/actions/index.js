import * as types from '../constants/ActionTypes';

export const upload = () => ({
  type: types.UPLOAD,
});

export const uploadSuccess = hash => ({
  type: types.UPLOAD_SUCCESS,
  hash,
});

export const uploadError = error => ({
  type: types.UPLOAD_ERROR,
  error,
});

export const clearError = () => ({
  type: types.UPLOAD_CLEAR_ERROR,
});

export const clearHistory = () => ({
  type: types.UPLOAD_CLEAR_HISTORY,
});

export const postUpload = file =>
  (dispatch) => {
    dispatch(upload());
    const formData = new FormData();
    formData.append('file', file);

    return fetch(`${process.env.API_URL}/upload`, {
      method: 'post',
      body: formData,
    })
      .then(response => response.json())
      .then((json) => {
        if (json.error) {
          return dispatch(uploadError(json.error));
        }

        return dispatch(uploadSuccess(json.hash));
      })
      .catch(error => dispatch(uploadError(error.stack)));
  };
