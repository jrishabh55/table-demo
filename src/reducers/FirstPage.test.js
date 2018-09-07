import FirstPage from "./FirstPage";
import constants from "../constants"

it('keeps routingType', () => {
    expect(FirstPage(undefined, {type: constants.updateRoutingType, data: 'test'})).toEqual({routingType: 'test', 
    callCenter: [],
    callerTypeList: [],
    contractTypeList: [],
    productCodeList: []});
});

it('keeps updateCallerType', () => {
    expect(FirstPage(undefined, {type: constants.updateCallerType, data: 'test'})).toEqual({routingType: null, 
    callCenter: [],
    callerTypeList: 'test',
    contractTypeList: [],
    productCodeList: []});
});

it('keeps updateContractTypeList', () => {
    expect(FirstPage(undefined, {type: constants.updateContractTypeList, data: 'test'})).toEqual({routingType: null, 
    callCenter: [],
    callerTypeList: [],
    contractTypeList: 'test',
    productCodeList: []});
});

it('keeps updateProductCodeList', () => {
    expect(FirstPage(undefined, {type: constants.updateProductCodeList, data: 'test'})).toEqual({routingType: null, 
    callCenter: [],
    callerTypeList: [],
    contractTypeList: [],
    productCodeList: 'test'});
});

it('keeps updateCallCenter', () => {
    expect(FirstPage(undefined, {type: constants.updateCallCenter, data: 'test'})).toEqual({routingType: null, 
    callCenter: 'test',
    callerTypeList: [],
    contractTypeList: [],
    productCodeList: []});
});


it('keeps empty state', () => {
  expect(FirstPage(undefined, {type: ''})).toEqual({routingType: null, 
  callCenter: [],
  callerTypeList: [],
  contractTypeList: [],
  productCodeList: []});
});

