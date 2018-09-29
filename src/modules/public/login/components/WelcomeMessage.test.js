import React from 'react';
import { shallow } from 'enzyme';

// Components
import WelcomeMessage from './WelcomeMessage';

function setup() {
  const wrapper = shallow(<WelcomeMessage />).dive();
  return { wrapper };
}

describe('LoginPage WelcomeMessage', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
