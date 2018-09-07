import React from 'react';
import { mount, shallow } from 'enzyme';
import { FirstPage, mapDispatchToProps, mapStateToProps } from './FirstPage';

describe('<FirstPage />', () => {
  const initialState = { 
        callCenter: [],
        routingType: null,
        callerTypeList: [],
        contractTypeList: [],
        productCodeList: [] 
    };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<FirstPage {...initialState} />);
  });

  it('renders without expolding', () => {
    expect(wrapper.length).toEqual(1);
  });

})

describe('<FirstPAge /> mapStateToProps Validation', () => {
  const state = {
    firstPage: { 
      callCenter: [],
      routingType: null,
      callerTypeList: [],
      contractTypeList: [],
      productCodeList: [] 
  }
  };
  it('map state to props should component true', () => {
    expect(mapStateToProps(state)).toEqual({ 
      callCenter: [],
      routingType: null,
      callerTypeList: [],
      contractTypeList: [],
      productCodeList: [] 
  });
  });
});

describe('<FirstPage /> mapDispatchToProps', () => {
  const dispatch = jest.fn();
  let event = {
    target: { value: 'app' }
  }
  it('should call the updateCallCenter function', () => {
    mapDispatchToProps(dispatch).updateCallCenterProp(event);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'UPDATE_CALL_CENTER', data: 'app' });
  });

  it('should call the updateCallerTypeProp function', () => {
    mapDispatchToProps(dispatch).updateCallerTypeProp('app');
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'UPDATE_CALLER_TYPE', data: 'app' });
  });

  it('should call the updateContractTypeListProp function', () => {
    mapDispatchToProps(dispatch).updateContractTypeListProp('app');
    expect(dispatch.mock.calls[2][0]).toEqual({ type: 'UPDATE_CONTRACT_TYPE', data: 'app' });
  });

  it('should call the updateProductCodeListProp function', () => {
    mapDispatchToProps(dispatch).updateProductCodeListProp('app');
    expect(dispatch.mock.calls[3][0]).toEqual({ type: 'UPDATE_PRODUCT_CODE', data: 'app' });
  });

  it('should call the updateRoutingTypeProp function', () => {
    mapDispatchToProps(dispatch).updateRoutingTypeProp('app');
    expect(dispatch.mock.calls[4][0]).toEqual({ type: 'UPDATE_ROUTING_TYPE', data: 'app' });
  });
});