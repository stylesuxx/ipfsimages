import {
  UPLOAD,
  UPLOAD_ERROR,
  UPLOAD_SUCCESS,
  UPLOAD_CLEAR_ERROR,
} from '../constants/ActionTypes';

const defaultState = {
  disabled: false,
  error: null,
};

const upload = (state = defaultState, action) => {
  switch (action.type) {
    case UPLOAD: {
      const next = Object.assign({}, state);

      next.disabled = true;
      next.error = null;

      return next;
    }

    case UPLOAD_ERROR: {
      const next = Object.assign({}, state);

      next.error = action.error;
      next.disabled = true;

      return next;
    }

    case UPLOAD_CLEAR_ERROR: {
      const next = Object.assign({}, state);

      next.error = null;

      return next;
    }

    case UPLOAD_SUCCESS: {
      const next = Object.assign({}, state);

      next.disabled = false;
      next.error = null;

      return next;
    }

    default: {
      return state;
    }
  }
};

export default upload;
