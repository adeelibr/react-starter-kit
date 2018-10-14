import axios from 'axios';
import * as c from './Constants';

const PARAMS = ({ methodType = 'GET' }) => ({
  method: methodType,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  onLogin: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/colleague/auth/login`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
  onValidate: async ({ cancelToken, accessToken }) => {
    const URL = `${c.API_CONSUMER}/something`;
    try {
      const { data } = await axios(URL, {
        method: 'GET',
        headers: {
          access_token: accessToken,
        },
        cancelToken,
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
  onRefresh: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/something`;
    try {
      const { data } = await axios(
        URL,
        Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
};
