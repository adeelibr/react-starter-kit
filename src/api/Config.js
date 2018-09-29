export default {
  get 'production-stag-node'() {
    return this['development-stag-node'];
  },
  'production-stag-java': {
    JOURNEY_URL: '/gateway/jp',
    CORE_URL: '/gateway/core',
    CONSUMER_URL: '/gateway/consumer',
    MAP_KEY: 'AIzaSyDR2SqfGeIvp3f7BIoEXT8quyNItVWaPCA',
  },
  'development-stag-node': {
    JOURNEY_URL: 'http://conedge.eu-west-1.elasticbeanstalk.com/v1',
    CORE_URL: 'http://conedge.eu-west-1.elasticbeanstalk.com/v1',
    CONSUMER_URL: 'http://conedge.eu-west-1.elasticbeanstalk.com/v1',
    MAP_KEY: 'AIzaSyDR2SqfGeIvp3f7BIoEXT8quyNItVWaPCA',
  },
  // 'development-stag-node': {
  //   JOURNEY_URL: 'http://qa-cmt-journey-service.eu-west-1.elasticbeanstalk.com/v1',
  //   CORE_URL: 'http://qa-cmt-core-service.eu-west-1.elasticbeanstalk.com/v1',
  //   CONSUMER_URL: 'http://qa-cmt-consumer-api-gateway.eu-west-1.elasticbeanstalk.com/v1',
  //   MAP_KEY: 'AIzaSyDR2SqfGeIvp3f7BIoEXT8quyNItVWaPCA',
  // },
  get 'test-stag-node'() {
    return this['development-stag-node'];
  },
};
