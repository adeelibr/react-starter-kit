import Config from './Config';

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const VERSION = process.env.VERSION ? process.env.VERSION : 'stag';
const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'node';

const KEY = `${ENV}-${VERSION}-${PLATFORM}`;
// console.log(KEY);
export const API_URL = Config[KEY].API_URL;
export const AUTH_URL = Config[KEY].AUTH_URL;

// Helpers
export const APP_TOKEN = {
  set: ({ token, refreshToken }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('refresh_token', refreshToken);
  },
  remove: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
  },
  get: () => ({
    token: localStorage.getItem('token'),
    refreshToken: localStorage.getItem('refresh_token'),
  }),
  get notEmpty() {
    return this.get().token !== null;
  },
};
