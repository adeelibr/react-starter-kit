import Config from './Config';

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'local';
const VERSION = process.env.VERSION ? process.env.VERSION : 'stag';

const KEY = `${ENV}-${PLATFORM}-${VERSION}`;
// console.log('>>>>', KEY);
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
    const cond1 = this.get().token !== null;
    const cond2 = this.get().token !== '';
    return cond1 && cond2;
  },
};
