import React from 'react';
import { shallow } from 'enzyme';

// Components
import LoginForm from './LoginForm';

function setup() {
  const props = {
    value: {
      username: '',
      password: '',
    },
    isLoading: false,
    onChange: jest.fn(),
    onSubmit: jest.fn(),
  };
  const wrapper = shallow(<LoginForm {...props} />).dive();
  return { props, wrapper };
}

describe('LoginPage LoginForm', () => {
  it('Should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
  it('Should have username field as user', () => {
    const { props, wrapper } = setup();
    wrapper.setProps({
      ...props,
      value: {
        username: 'test',
        password: 'test',
      },
    });
    const elUser = wrapper.find('[name="username"]');
    const elPass = wrapper.find('[name="password"]');
    expect(elUser.prop('value')).toBe('test');
    expect(elPass.prop('value')).toBe('test');
  });
  it('Should have the button say Login', () => {
    const { props, wrapper } = setup();
    wrapper.setProps({
      ...props,
      isLoading: false,
    });
    const el = wrapper.find('[type="submit"]');
    expect(el.html()).toMatch('Login</span>');
  });
  it('Should have the button be in loading state', () => {
    const { props, wrapper } = setup();
    wrapper.setProps({
      ...props,
      isLoading: true,
    });
    const el = wrapper.find('[type="submit"]');
    expect(el.find('WithStyles(CircularProgress)').exists()).toBe(true);
  });
});
