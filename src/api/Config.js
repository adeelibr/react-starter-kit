export default {
  'development-local-stag': {
    API_URL: '',
    AUTH_URL: '',
  },
  get 'production-local-stag'() {
    return this['development-local-stag'];
  },
  get 'test-local-stag'() {
    return this['development-local-stag'];
  },
};
