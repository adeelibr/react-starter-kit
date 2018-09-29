export default {
  get 'production-stag-node'() {
    return this['development-stag-node'];
  },
  'development-stag-node': {
    API_URL: '',
    AUTH_URL: '',
  },
  get 'test-stag-node'() {
    return this['development-stag-node'];
  },
};
