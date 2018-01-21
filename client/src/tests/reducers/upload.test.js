import uploadReducer from '../../reducers/upload';
import * as types from '../../constants/ActionTypes';

describe('Upload Reducer', () => {
  it('should return the initial state', () => {
    expect(uploadReducer(undefined, {})).toEqual({
      disabled: false,
      error: null,
    });
  });

  it('should handle UPLOAD', () => {
    expect(uploadReducer({}, {
      type: types.UPLOAD,
    })).toEqual({
      disabled: true,
      error: null,
    });
  });

  it('should handle UPLOAD_ERROR', () => {
    const error = 'Error message';
    expect(uploadReducer({}, {
      type: types.UPLOAD_ERROR,
      error,
    })).toEqual({
      disabled: true,
      error,
    });
  });

  it('should handle UPLOAD_CLEAR_ERROR', () => {
    expect(uploadReducer({}, {
      type: types.UPLOAD_CLEAR_ERROR,
    })).toEqual({
      disabled: false,
      error: null,
    });
  });

  it('should handle UPLOAD_SUCCESS', () => {
    expect(uploadReducer({}, {
      type: types.UPLOAD_SUCCESS,
    })).toEqual({
      disabled: false,
      error: null,
    });
  });
});
