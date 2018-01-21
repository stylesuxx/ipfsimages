import { combineReducers } from 'redux';
import history from './history';
import upload from './upload';

const IpfsFileUpload = combineReducers({
  history,
  upload,
});

export default IpfsFileUpload;
