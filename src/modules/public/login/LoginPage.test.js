import React from 'react';
import { shallow } from 'enzyme';

// Component
import LoginPage from './LoginPage';

function setup() {
  const wrapper = shallow(<LoginPage />);
  return { wrapper };
}

describe('LoginPage', () => {
  it('Should render', () => {
    const { wrapper } = setup();
    expect(wrapper.children()).toHaveLength(3);
  });
  it('Should have WelcomeMessage', () => {
    const { wrapper } = setup();
    expect(wrapper.find('WithStyles(WelcomeMessage)')).toHaveLength(1);
  });
  it('Should have LoginForm', () => {
    const { wrapper } = setup();
    expect(wrapper.find('WithStyles(LoginForm)')).toHaveLength(1);
  });
  it('Should have Snackbar', () => {
    const { wrapper } = setup();
    expect(wrapper.find('WithStyles(Snackbar)')).toHaveLength(1);
  });
  it('Should call onHandleChangeForm & update form state', () => {
    const { wrapper } = setup();
    const event = {
      target: { name: 'username', value: 'testvalue' },
    };
    wrapper.instance().onHandleChangeForm(event);
    wrapper.update();
    expect(wrapper.state().form.username).toBe('testvalue');
  });
  it('Should call onToggleSnackbar & set snackbar to true', () => {
    const { wrapper } = setup();
    wrapper.instance().onToggleSnackbar({ message: 'test' });
    wrapper.update();
    const el = wrapper.find('WithStyles(Snackbar)');
    expect(el.prop('open')).toBe(true);
  });
  it('Should do nothing when empty form submit', () => {
    const { wrapper } = setup();
    const event = { preventDefault: jest.fn() };
    wrapper.instance().onHandleSubmitForm(event);
    wrapper.update();
    expect(wrapper.state().isLoading).toBe(false);
  });
});
