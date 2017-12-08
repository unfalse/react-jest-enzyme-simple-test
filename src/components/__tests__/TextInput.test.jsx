import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextInput from './../TextInput';

configure({ adapter: new Adapter() });

describe('TextInput', () => {

    it('renders without crashing', () => {
        shallow(<TextInput name="t1" />);
    });

    it('change value of TextInput and check if onChange is called', () => {
        const onChangeSpy = jest.fn();
        const t2 = shallow(<TextInput name="t2" onChange={onChangeSpy} />);
        t2.find('input').simulate('change', { target: { value: 'test2' } });
        expect(onChangeSpy.mock.calls.length).toBe(1);
    });

    it('change value of TextInput and check if state.value is changed', () => {
        const t3 = shallow(<TextInput name="t3" onChange={() => {}} />);
        t3.find('input').simulate('change', { target: { value: 'test3' } });
        expect(t3.state().value).toBe('test3');
    });
});