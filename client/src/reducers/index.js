import { combineReducers } from 'redux';
import upload from './upload';

const IpfsFileUpload = combineReducers({
  upload,
});

export default IpfsFileUpload;
