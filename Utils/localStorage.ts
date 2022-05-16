import { GenericObject, Nullable } from './Types'

enum LocalStorageKeys {
  RESET_STATE = 'rsi',
  LOGIN_FIELD = 'lfs',
  CONFIRM_USER = 'cfu',
  OTP_ACTIVATE_TIME = 'oat',
  REGISTER_STATE = 'reg',
  TOKEN='oto',
  EXPIRY='uep',
  USER_ID='uri',
}

const updateStorage = <T>(storageKey: LocalStorageKeys, value: T | GenericObject) => {
  window.localStorage && window.localStorage.setItem(storageKey, JSON.stringify(value))
}

const removeStorage = (storageKey: LocalStorageKeys) => {
  window.localStorage && window.localStorage.removeItem((storageKey))
}

const getFromStorage = <T>(storageKey: LocalStorageKeys):Nullable<T> => {
  let item = null
  try {
    item = window.localStorage ? JSON.parse(window.localStorage.getItem(storageKey) || '') : null
    return item
  } catch {
    return item
  }
}

const clearStorage = () => {
  window.localStorage && window.localStorage.clear()
}

export {
  clearStorage,
  getFromStorage,
  updateStorage,
  removeStorage,
  LocalStorageKeys
}
