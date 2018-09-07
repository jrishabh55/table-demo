import CheckboxList from "./CheckboxList";
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { shallow } from 'enzyme';

describe('CheckboxList', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CheckboxList dataList={['a']}/>);
    expect(wrapper.find(FormControlLabel).length).toBe(1);
  });

  it('renders 2 checkbox', () => {
    const wrapper = shallow(<CheckboxList dataList={['a', 'b']}/>);
    expect(wrapper.find(FormControlLabel).length).toBe(2);
  });

  it('handleChange works', () => {
    const selectMock = jest.fn()
    let event = {target: {value: 'a'}}
    const wrapper = shallow(<CheckboxList dataList={['a', 'b']} handleChange={selectMock}/>);
    wrapper.instance().handleSelect(event)
    expect(selectMock).toHaveBeenCalledWith(['a']);
  });

})
