import { LocalStorageKeys, clearStorage, getFromStorage } from './localStorage'
import { AxiosError } from 'axios'
import { FieldTypeLSTokenObject } from './Types'

const loginExpired = (err: AxiosError): boolean => {
  if (err.response) {
    if (err.response.status === 440) {
      clearStorage()
      document.location.reload()
      return true
    } else {
      return false
    }
  }else{
    return false
  }
}

const invalidUser = (err: AxiosError): boolean => {
  if (err.response) {
    if (err.response.status === 401) {
      clearStorage()
      document.location.reload()
      return true
    } else {
      return false
    }
  }else{
    return false
  }
}

const validateLogin = (): boolean => {
  const token = getFromStorage<FieldTypeLSTokenObject>(LocalStorageKeys.TOKEN)
  return !!(
    token && token.uno && token.duo && token.tres &&
    getFromStorage(LocalStorageKeys.EXPIRY) &&
    getFromStorage(LocalStorageKeys.USER_ID)
  )
}

export { loginExpired, validateLogin,invalidUser }
