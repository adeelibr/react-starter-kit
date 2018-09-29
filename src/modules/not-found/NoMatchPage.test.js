import React from 'react';
import { shallow } from 'enzyme';

// Components
import NoMatchPage from './NoMatchPage';

function setup() {
  const wrapper = shallow(<NoMatchPage />).dive();
  return { wrapper };
}

describe('NoMatchPage', () => {
  it('Should have Typography', () => {
    const { wrapper } = setup();
    const el = wrapper.find('WithStyles(Typography)');
    expect(el).toHaveLength(4);
  });
  it('Should have a careem logo image', () => {
    const { wrapper } = setup();
    const el = wrapper.find('[alt="careem-logo"]');
    expect(el.exists()).toBe(true);
  });
  it('Should have a sad face image', () => {
    const { wrapper } = setup();
    const el = wrapper.find('[alt="sad-face"]');
    expect(el.exists()).toBe(true);
  });
  it('Should have a button', () => {
    const { wrapper } = setup();
    const el = wrapper.find('WithStyles(Button)');
    expect(el).toHaveLength(1);
  });
});
