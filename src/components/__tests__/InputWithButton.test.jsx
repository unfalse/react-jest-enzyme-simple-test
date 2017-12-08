import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputWithButton from './../InputWithButton';

configure({ adapter: new Adapter() });

describe('InputWithButton', () => {
    
    it('renders without crashing', () => {
        shallow(<InputWithButton />);
    });

    it('change value of text input and check if state is changed', () => {
        const t2 = shallow(<InputWithButton />);
        t2.find('[name="t"]').simulate('change', { target: { value: 'test2' } });
        expect(t2.state().t).toBe('test2');
    });

    it('change value of text input and check if button is enabled', () => {
        const t3 = shallow(<InputWithButton />);
        t3.find('[name="t"]').simulate('change', { target: { value: 'test3' } });
        expect(t3.find('button').prop('disabled')).toBe(false);
    });

});