import { updateCallCenter, updateCallerType, updateContractTypeList, updateProductCodeList, updateRoutingType } from './FirstPageActions'
import constants from '../constants'

describe('updateCallCenter', () => {
  it('returns type with content', () => {
    let data = 'app';
    expect(updateCallCenter(data)).toEqual({
      type: constants.updateCallCenter,
      data
    });
  });
});

describe('updateCallerType', () => {
    it('returns type with content', () => {
      let data = 'app';
      expect(updateCallerType(data)).toEqual({
        type: constants.updateCallerType,
        data
      });
    });
});

describe('updateProductCodeList', () => {
    it('returns type with content', () => {
      let data = 'app';
      expect(updateProductCodeList(data)).toEqual({
        type: constants.updateProductCodeList,
        data
      });
    });
});

describe('updateContractTypeList', () => {
    it('returns type with content', () => {
      let data = 'app';
      expect(updateContractTypeList(data)).toEqual({
        type: constants.updateContractTypeList,
        data
      });
    });
});

describe('updateRoutingType', () => {
    it('returns type with content', () => {
      let data = 'app';
      expect(updateRoutingType(data)).toEqual({
        type: constants.updateRoutingType,
        data
      });
    });
});