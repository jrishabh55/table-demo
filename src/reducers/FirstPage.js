import constants from '../constants'

const initialState = {
  callCenter: [],
  routingType: null,
  callerTypeList: [],
  contractTypeList: [],
  productCodeList: []
}

const firstPage = (state=initialState, action) => {
  switch  (action.type) {
    case constants.updateCallCenter :
      return {
        ...state,
        callCenter: action.data
      }
    case constants.updateRoutingType :
      return {
        ...state,
        routingType: action.data
      }
    case constants.updateContractTypeList :
      return {
        ...state,
        contractTypeList: action.data
      }
    case constants.updateProductCodeList :
      return {
        ...state,
        productCodeList: action.data
      }
    case constants.updateCallerType :
      return {
        ...state,
        callerTypeList: action.data
      }
    default:
      return state
  }
};

export default firstPage;