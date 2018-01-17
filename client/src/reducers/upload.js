import {
  UPLOAD,
} from '../constants/ActionTypes';

const defaultState = {
  file: null,
  uploaded: false,
  uploading: false,
  hash: null,
  error: null,
};

const upload = (state = defaultState, action) => {
  switch (action) {
    case UPLOAD: {
      const next = Object.assign({}, state);

      next.uploading = true;
      next.uploaded = false;
      next.error = null;
      next.hash = null;

      return next;
    }

    default: {
      return state;
    }
  }
};

export default upload;
