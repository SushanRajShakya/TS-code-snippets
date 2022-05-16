/** A high-level generic object. */
type GenericObject<T = unknown> = { [key: string]: T }

/** A high-level error object. */
interface ErrorObject {
    error: string,
}

/** Generic type to allow null. */
type Nullable<T> = T | null

/** Function with single parameter returning void*/
type FunctionWithParam<T> = (p: T) => void

/** Function with no parameter returning void*/
type FunctionWithNoParam = () => void

/** Function with parameter with returning type*/
type FunctionWithNoParamButReturn<R> = () => R

/** Function with parameter with returning type*/
type FunctionWithParamAndReturn<P, R> = (p: P) => R

interface ApiResponseType<T> {
    data: T,
    message: string,
    success: boolean
}

interface FieldTypeBanner {
    title: string,
    description: string,
    imageUrl: string,
    navButtons?: {
        name: string,
        redirection: string
    }[]
}

export type {
  GenericObject,
  ErrorObject,
  FunctionWithParam,
  FunctionWithNoParam,
  FunctionWithParamAndReturn,
  FunctionWithNoParamButReturn,
  Nullable,
  ApiResponseType,
  FieldTypeBanner
}
