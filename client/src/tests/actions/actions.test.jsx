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
