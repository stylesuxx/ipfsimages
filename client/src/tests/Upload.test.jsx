import React from 'react';
import { shallow } from 'enzyme';

import Dropzone from 'react-dropzone';
import { CircularProgress } from 'material-ui/Progress';

import Upload from '../components/Upload';

describe('Upload component', () => {
  it('renders without crashing', () => {
    shallow((
      <Upload
        postUpload={() => false}
        clearError={() => false}
        disabled={false}
      />
    ));
  });

  it('has no spinner when enabled', () => {
    const upload = shallow((
      <Upload
        postUpload={() => false}
        clearError={() => false}
        disabled={false}
      />
    ));

    expect(upload.dive().find(CircularProgress)).toHaveLength(0);
  });

  it('has "Dropzone" when enabled', () => {
    const upload = shallow((
      <Upload
        postUpload={() => false}
        clearError={() => false}
        disabled={false}
      />
    ));

    expect(upload.dive().find(Dropzone)).toHaveLength(1);
  });

  it('has no "Dropzone" when disabled', () => {
    const upload = shallow((
      <Upload
        postUpload={() => false}
        clearError={() => false}
        disabled
      />
    ));

    expect(upload.dive().find(Dropzone)).toHaveLength(0);
  });

  it('has spinner when disabled', () => {
    const upload = shallow((
      <Upload
        postUpload={() => false}
        clearError={() => false}
        disabled
      />
    ));

    expect(upload.dive().find(CircularProgress)).toHaveLength(1);
  });

  it('should trigger function on drop', () => {
    const header = shallow((
      <Upload
        postUpload={() => false}
        clearError={() => false}
        disabled={false}
      />
    ));

    header.dive().find(Dropzone).simulate('drop', {
      target: {
        files: [{}],
      },
    });
  });
});
