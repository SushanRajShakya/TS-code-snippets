import {
  FieldTypeLSExpiry,
  FieldTypeLSUserId,
  FunctionWithNoParamButReturn,
  FunctionWithParam,
  FunctionWithParamAndReturn,
  Nullable
} from './Types'
import { validateLogin } from './checkLogin'
import { LocalStorageKeys, getFromStorage, updateStorage } from './localStorage'
import { FieldTypeLSTokenObject } from './Types'

export const generateDisplayEmail:FunctionWithParamAndReturn<string, string> = email => {
  const atIndex = email.indexOf('@')
  return `${email.slice(0,2)}****${email.slice(atIndex)}`
}

export const capitalizeFirstLetterOfEachWord:FunctionWithParamAndReturn<string, string> =
    sentence => sentence.split(' ').map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ')

export const tokenAssembler = ():Nullable<string> => {
  const token = getFromStorage<FieldTypeLSTokenObject>(LocalStorageKeys.TOKEN)
  return validateLogin() && token
    ? `${token.uno}.${token.duo}.${token.tres}`
    : null
}

export const setLocalStorageAfterLogin:FunctionWithParam<{ id: string, token: string }> = async ({ token, id }) => {
  const splitArray = token.split('.')
  const tokenObject:FieldTypeLSTokenObject = {
    uno: splitArray[0], duo: splitArray[1], tres: splitArray[2],
  }
  await updateStorage<FieldTypeLSTokenObject>(LocalStorageKeys.TOKEN, tokenObject)
  await updateStorage<FieldTypeLSUserId>(LocalStorageKeys.USER_ID, { id })
  await updateStorage<FieldTypeLSExpiry>(LocalStorageKeys.EXPIRY, { expiry: Date.now().toString() })
}

export const formatDate = (date: number) => {
  const d = new Date(date)
  let month = '' + (d.getMonth() + 1),
    day = '' + d.getDate()
  const year = d.getFullYear()

  if (month.length < 2)
    month = '0' + month
  if (day.length < 2)
    day = '0' + day

  return [year, month, day].join('-')
}

export const getYearList:FunctionWithNoParamButReturn<string[]> = () => {
  const currentYear = new Date().getFullYear()
  const years:string[] = [] as string[]
  Array.from(Array(150)).map((_, i) => {
    years.push((currentYear - i).toString())
  })
  return years
}

export const getCompleteImageUrl:FunctionWithParamAndReturn<string | undefined | null, Nullable<string>> = path => {
  return path ? `http://localhost:${process.env.REACT_APP_PORT}/file/${path}` : null
}

export const getDiscountedPrice:FunctionWithParamAndReturn<{price?: number, discount?: number},  Nullable<number>> = ({ discount, price }) => {
  return discount && price
    ? price - (price * (discount / 100))
    : null
}

export const isNumber:FunctionWithParamAndReturn<string, boolean> = str => /^-?[\d.]+(?:e-?\d+)?$/.test(str)

export const getBannerUrl:FunctionWithParamAndReturn<string, string> = fileName =>  `http://localhost:${process.env.REACT_APP_PORT}/bannerImages/${fileName}`
