import {
  UPLOAD_SUCCESS,
} from '../constants/ActionTypes';

const defaultState = {
  items: [
    {
      date: new Date(),
      hash: 'xxx, yyy, zzz',
    },
  ],
};

const history = (state = defaultState, action) => {
  switch (action.type) {
    case UPLOAD_SUCCESS: {
      const next = Object.assign({}, state);

      const upload = {
        date: new Date(),
        hash: action.hash,
      };

      next.history.append(upload);

      return next;
    }

    default: {
      return state;
    }
  }
};

export default history;
