import axios from 'axios';
import { isLoggedIn, getToken } from '../authToken';
import callsList from './callsList';
import * as helpers from './helpers';

const instance = axios.create({
  baseURL: 'https://go-pilot.3blades.io/',
});

const prepareAxios = call => (data, options = {}) => instance({
  ...options,
  data,
  method: call.method,
  url: call.path(options.urlParams),
  headers: (isLoggedIn() && { Authorization: `Bearer ${getToken()}` }),
});

/* eslint-disable no-param-reassign */
const recursivelyAddMethod = (obj = {}, call, currentIndex = 0) => {
  const pathArray = call.name.split('.');
  const currentPath = pathArray[currentIndex];
  if (currentIndex === (pathArray.length - 1)) {
    if (obj[currentPath]) throw new Error(`Call already exists for ${call.name}`);
    obj[currentPath] = prepareAxios(call);
  } else {
    obj[currentPath] = recursivelyAddMethod(obj[currentPath], call, (currentIndex + 1));
  }
  return obj;
};
/* eslint-enable */

const api = callsList.reduce((obj, call, index) => {
  if (!call.name) throw Error(`No name provided for call at index ${index}`);
  return recursivelyAddMethod(obj, call);
}, {});

api.helpers = helpers;

export default api;
