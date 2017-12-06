import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import app from 'app';

configure({ adapter: new Adapter() });

describe('app', () => {
  it('renders without crashing', () => {
    mount(<app />);
  });

  it('Enter text and check if button is enabled', () => {
    const page = mount(<app/>);
    const tInput = page.find('[name="t"]');
    
    tInput.value = 'test string';
    expect(tInput.value).toBe('test string');
    
    const button = page.find('button');
    expect(button.prop('disabled')).toEqual(false);
  });
});
