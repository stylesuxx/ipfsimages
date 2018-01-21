import reducer from '../../reducers/history';
import * as types from '../../constants/ActionTypes';

describe('History Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      items: [],
    });
  });

  it('should handle UPLOAD_CLEAR_HISTORY', () => {
    expect(reducer({ items: [{}, {}] }, {
      type: types.UPLOAD_CLEAR_HISTORY,
    })).toEqual({
      items: [],
    });
  });

  it('should handle UPLOAD_SUCCESS', () => {
    const hash = '1234567890abcdef';
    const result = reducer({ items: [] }, {
      type: types.UPLOAD_SUCCESS,
      hash: '1234567890abcdef',
    });
    expect(result.items.length).toBe(1);
    expect(result.items[0].hash).toEqual(hash);
  });
});
