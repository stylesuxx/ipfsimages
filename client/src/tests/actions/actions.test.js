import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import * as actions from '../../actions';
import * as types from '../../constants/ActionTypes';

describe('actions', () => {
  it('should create an action to initialize upload', () => {
    const expectedAction = {
      type: types.UPLOAD,
    };

    expect(actions.upload()).toEqual(expectedAction);
  });

  it('should create an action to indicate upload success', () => {
    const hash = 'xxxx';
    const expectedAction = {
      type: types.UPLOAD_SUCCESS,
      hash,
    };

    expect(actions.uploadSuccess(hash)).toEqual(expectedAction);
  });

  it('should create an action to indicate upload error', () => {
    const errorText = 'Upload Error.';
    const expectedAction = {
      type: types.UPLOAD_ERROR,
      error: errorText,
    };

    expect(actions.uploadError(errorText)).toEqual(expectedAction);
  });

  it('should create an action to clear the error message', () => {
    const expectedAction = {
      type: types.UPLOAD_CLEAR_ERROR,
    };

    expect(actions.clearError()).toEqual(expectedAction);
  });


  it('should create an action to clear the upload history', () => {
    const expectedAction = {
      type: types.UPLOAD_CLEAR_HISTORY,
    };

    expect(actions.clearHistory()).toEqual(expectedAction);
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates UPLOAD_SUCCESS after uploading valid image', () => {
    fetchMock.postOnce('undefined/upload', {
      headers: {
        'content-type': 'application/json',
      },
      body: {
        hash: '1234567890abcdef',
      },
    });

    const expectedActions = [
      {
        type: types.UPLOAD,
      },
      {
        type: types.UPLOAD_SUCCESS,
        hash: '1234567890abcdef',
      },
    ];

    const store = mockStore({
      history: {
        items: [],
      },
    });

    return store.dispatch(actions.postUpload({}))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates UPLOAD_ERROR after uploading invalid file', () => {
    const error = 'Error message';
    fetchMock.postOnce('undefined/upload', {
      headers: {
        'content-type': 'application/json',
      },
      body: {
        error,
      },
    });

    const expectedActions = [
      {
        type: types.UPLOAD,
      },
      {
        type: types.UPLOAD_ERROR,
        error,
      },
    ];

    const store = mockStore({
      history: {
        items: [],
      },
    });

    return store.dispatch(actions.postUpload({}))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates UPLOAD_ERROR after uploading did not return json', () => {
    const error = 'FetchError: invalid json response body';
    fetchMock.postOnce('undefined/upload', {
      headers: {
        'content-type': 'application/text',
      },
      body: '',
    });

    const expectedActions = [
      {
        type: types.UPLOAD,
      },
      {
        type: types.UPLOAD_ERROR,
        error,
      },
    ];

    const store = mockStore({
      history: {
        items: [],
      },
    });

    return store.dispatch(actions.postUpload({}))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions[0]);
        expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
        expect(store.getActions()[1].error).toContain(error);
      });
  });
});
