import SelectPaper from "./SelectPaper";
import React from 'react';
import { shallow } from 'enzyme';

describe('SelectPaper', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SelectPaper dataList={['a']}/>);
    expect(wrapper.find('.call-type-list').length).toBe(1);
  });

  it('renders 2 papers', () => {
    const wrapper = shallow(<SelectPaper dataList={['a', 'b']}/>);
    expect(wrapper.find('.call-type-list').length).toBe(2);
  });

  it('handleChange works', () => {
    const selectMock = jest.fn()
    let event = {currentTarget: {id: 'a'}}
    const wrapper = shallow(<SelectPaper dataList={['a', 'b']} handleChange={selectMock}/>);
    wrapper.instance().handleSelect(event)
    expect(selectMock).toHaveBeenCalledWith(['a']);
  });

})
