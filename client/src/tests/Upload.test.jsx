import React from 'react';
import { shallow } from 'enzyme';

import { CircularProgress } from 'material-ui/Progress';

import Upload from '../components/Upload';

describe('Upload component', () => {
  it('renders without crashing', () => {
    shallow((
      <Upload
        clearError={() => false}
        disabled={false}
      />
    ));
  });

  it('has no spinner when enabled', () => {
    const upload = shallow((
      <Upload
        clearError={() => false}
        disabled={false}
      />
    ));

    expect(upload.dive().find(CircularProgress)).toHaveLength(0);
  });

  it('has spinner when disabled', () => {
    const upload = shallow((
      <Upload
        clearError={() => false}
        disabled
      />
    ));

    expect(upload.dive().find(CircularProgress)).toHaveLength(1);
  });
});
