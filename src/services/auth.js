import { fromCript, toCript } from '../utils/functions';

/**
 *  PANEL AUTH
 */

// CONSTS TO USE IN CODE
const TOKEN_KEY = toCript(process.env.REACT_APP_TOKEN_KEY);
const USER_KEY = toCript(process.env.REACT_APP_USER_KEY);
const LAST_LOGIN_KEY = toCript(process.env.REACT_APP_LAST_LOGIN_KEY);
const REMEMBER_USER_KEY = toCript(process.env.REACT_APP_REMEMBER_USER_KEY);

// COMMANDS TO EXPORT TO PANEL

const getToken = () => fromCript(localStorage.getItem(TOKEN_KEY));

const updateLocalUser = (user) => {
  //   localStorage.removeItem(USER_KEY);
  localStorage.setItem(USER_KEY, toCript(JSON.stringify(user)));
};

const getUser = () => JSON.parse(JSON.parse(fromCript(localStorage.getItem(USER_KEY))));

const getRemember = () => {
  const remember = fromCript(localStorage.getItem(REMEMBER_USER_KEY));
  if (remember === 'true') {
    return true;
  }
  return false;
};

const localLogin = async (user, token, remember) => {
  try {
    await localStorage.setItem(TOKEN_KEY, toCript(token));
    await localStorage.setItem(USER_KEY, toCript(JSON.stringify(user)));
    await localStorage.setItem(REMEMBER_USER_KEY, toCript(remember));
    await localStorage.setItem(LAST_LOGIN_KEY, new Date().toString());
    return true;
  } catch (_) {
    logout();
    return false;
  }
};

const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  return true;
};

const isAuthenticated = () => {
  const localToken = localStorage.getItem(TOKEN_KEY);
  const token = fromCript(localToken);
  const user = fromCript(localStorage.getItem(USER_KEY));

  if (localToken != null && token != null && user != null) {
    return true;
  }

  return false;
};

export { getToken, updateLocalUser, getUser, getRemember, localLogin, logout, isAuthenticated };
