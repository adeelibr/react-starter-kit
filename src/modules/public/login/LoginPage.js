import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

// Material UI
import Snackbar from '@material-ui/core/Snackbar';

// API
import AuthenticationAPI from '../../../api/AuthenticationAPI';
import { APP_TOKEN } from '../../../api/Constants';
// Components
import LoginForm from './components/LoginForm';
import WelcomeMessage from './components/WelcomeMessage';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #37b44e;
  background-image: url('/dist/images/background-login.svg');
  background-repeat: no-repeat;
  background-position: right bottom;
`;

class LoginPage extends Component {
  isTokenSource = axios.CancelToken.source();

  state = {
    form: {
      username: '',
      password: '',
    },
    isLoading: false,
    isSnackbarOpen: false,
    snackbarMessage: '',
  };

  componentWillUnmount() {
    this.isTokenSource.cancel('API Cancel');
  }

  onHandleChangeForm = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  onHandleSubmitForm = async event => {
    event.preventDefault();

    const { history } = this.props;
    const { form } = this.state;

    const isFormEmpty = Object.values(form).every(item => item === '');
    if (isFormEmpty) {
      return;
    }
    // username: adnansadiq , password: adnan =? For testing
    try {
      this.setState({ isLoading: true });
      const result = await AuthenticationAPI.onLogin({
        cancelToken: this.isTokenSource.token,
        username: form.username,
        password: form.password,
      });
      this.setState({ isLoading: false });
      APP_TOKEN.set({
        token: result.access_token,
        refreshToken: result.refresh_token,
      });
      history.push('/auth');
    } catch (error) {
      if (axios.isCancel(error)) {
        // console.log('Request canceled', error.message);
      } else {
        const { message, errorCode } = error.response.data;
        if (errorCode === 'CMT-AUTH-3011') {
          this.onToggleSnackbar({ message });
        }
        this.setState({ isLoading: false });
      }
    }
  };

  onToggleSnackbar = ({ message = 'Error' }) => {
    this.setState(state => ({
      isSnackbarOpen: !state.isSnackbarOpen,
      snackbarMessage: message,
    }));
  };

  render() {
    const { form, isLoading, isSnackbarOpen, snackbarMessage } = this.state;
    return (
      <Container>
        <WelcomeMessage />
        <LoginForm
          value={form}
          isLoading={isLoading}
          onChange={this.onHandleChangeForm}
          onSubmit={this.onHandleSubmitForm}
        />

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={this.onToggleSnackbar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{snackbarMessage}</span>}
        />
      </Container>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.object, // React Router Injected
};

export default LoginPage;
