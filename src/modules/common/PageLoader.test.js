import React from 'react';
import { shallow } from 'enzyme';

// Component
import PageLoader from './PageLoader';

function setup() {
  const props = {
    error: true,
    retry: jest.fn(),
    pastDelay: false,
  };
  const wrapper = shallow(<PageLoader {...props} />);
  return { props, wrapper };
}

describe('PageLoader', () => {
  it('Should have a button for retry if error', () => {
    const { wrapper } = setup();
    expect(wrapper.find('button').exists()).toBe(true);
  });
  it('Should have a loading placeholder when component loading', () => {
    const { wrapper } = setup();
    wrapper.setProps({
      error: false,
      pastDelay: true,
    });
    expect(wrapper.find('div').text()).toMatch('Loading');
  });
  it('Should return nothing if no error and no pastDelay', () => {
    const { wrapper } = setup();
    wrapper.setProps({
      error: false,
      pastDelay: false,
    });
    expect(wrapper.children()).toHaveLength(0);
  });
});
