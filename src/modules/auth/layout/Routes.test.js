import React from 'react';
import { shallow } from 'enzyme';

// Components
import Routes from './Routes';

function setup() {
  const props = {
    match: { url: '' },
    location: { key: 1 },
  };
  const wrapper = shallow(<Routes {...props} />);
  return { props, wrapper };
}

describe('Routes', () => {
  it('Should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
  it('Should have Route(s)', () => {
    const { wrapper } = setup();
    const el = wrapper.find('Route');
    expect(el.length).toBeGreaterThan(1);
  });
});
