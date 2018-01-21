import {
  UPLOAD_SUCCESS,
  UPLOAD_CLEAR_HISTORY,
} from '../constants/ActionTypes';

const defaultState = {
  items: [
    {
      date: '2018/1/1',
      time: '10:10:10',
      hash: 'QmZpc3HvfjEXvLWGQPWbHk3AjD5j8NEN4gmFN8Jmrd5g83/cs/ada.png',
    },
    {
      date: '2018/1/1',
      time: '10:10:09',
      hash: 'QmZpc3HvfjEXvLWGQPWbHk3AjD5j8NEN4gmFN8Jmrd5g83/cs/alan.jpg',
    },
  ],
};

const history = (state = defaultState, action) => {
  switch (action.type) {
    case UPLOAD_SUCCESS: {
      const next = Object.assign({}, state);
      const current = new Date();
      const date = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;
      const time = `${current.getHours()}:${current.getMinutes() < 10 ? '0' : ''}${current.getMinutes()}:${current.getSeconds() < 10 ? '0' : ''}${current.getSeconds()}`;

      const upload = {
        date,
        time,
        hash: action.hash,
      };

      next.items.unshift(upload);

      return next;
    }

    case UPLOAD_CLEAR_HISTORY: {
      const next = Object.assign({}, state);

      next.items = [];

      return next;
    }

    default: {
      return state;
    }
  }
};

export default history;
