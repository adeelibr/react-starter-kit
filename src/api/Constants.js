import Config from './Config';

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const VERSION = process.env.VERSION ? process.env.VERSION : 'stag';
const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'node';

const KEY = `${ENV}-${VERSION}-${PLATFORM}`;
// console.log(KEY);
export const API_JOURNEY = Config[KEY].JOURNEY_URL;
export const API_CORE = Config[KEY].CORE_URL;
export const API_CONSUMER = Config[KEY].CONSUMER_URL;
const MAP_KEY = Config[KEY].MAP_KEY;
export const MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`;

// Other
export const BOOKING_STATUSES = [
  { value: 1, label: 'Not Started' },
  { value: 2, label: 'Cancelled' },
  { value: 3, label: 'In Progress (Started)' },
  { value: 4, label: 'At Bus Stop' },
  { value: 5, label: 'Bus Left - No Show' },
  { value: 6, label: 'Ride In Progress' },
  { value: 7, label: 'Ride Completed' },
  { value: 8, label: 'Ride Cancelled By Admin' },
  { value: 9, label: 'Ride Cancelled By User - Fine' },
  { value: 10, label: 'Ride Cancelled By User - No Fine' },
  { value: 11, label: 'Ride Not Started' },
  { value: 12, label: 'Completed' },
  { value: 13, label: 'Overstay' },
];
export const LINE_TYPES = [{ id: 1, label: 'Intercity' }, { id: 0, label: 'Intracity' }];
export const CAPTAIN_STATUSES = [
  { id: 0, label: 'Inactive' },
  { id: 1, label: 'Active' },
  { id: 2, label: 'Blocked' },
  { id: 3, label: 'Deleted' },
];
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
