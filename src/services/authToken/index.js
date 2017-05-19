import memoize from 'lodash/memoize';

const TOKEN_KEY = '3blades_token';

const getItem = key => () => window.localStorage.getItem(key);
const setItem = key => value => window.localStorage.setItem(key, value);
const removeItem = key => () => window.localStorage.removeItem(key);

const getAuthToken = getItem(TOKEN_KEY);
const setAuthToken = setItem(TOKEN_KEY);
const removeAuthToken = removeItem(TOKEN_KEY);

const memoizedGetAuthToken = memoize(getAuthToken);

export function login(token) {
  memoizedGetAuthToken.cache.clear();
  setAuthToken(token);
}

export function isLoggedIn() {
  // NOTE: we include TOKEN_KEY below so that
  // `memoize` has an argument to cache against
  return !!memoizedGetAuthToken(TOKEN_KEY);
}

export function logout() {
  removeAuthToken();
  memoizedGetAuthToken.cache.clear();
}

export const getToken = () => memoizedGetAuthToken(TOKEN_KEY);
