import constants from '../constants'

export const updateCallCenter = (data) => {
  return {
    type: constants.updateCallCenter,
    data: data
  }
}

export const updateCallerType = (data) => {
    return {
      type: constants.updateCallerType,
      data: data
    }
}

export const updateContractTypeList = (data) => {
    return {
      type: constants.updateContractTypeList,
      data: data
    }
}

export const updateProductCodeList = (data) => {
    return {
      type: constants.updateProductCodeList,
      data: data
    }
}

export const updateRoutingType = (data) => {
    return {
      type: constants.updateRoutingType,
      data: data
    }
}