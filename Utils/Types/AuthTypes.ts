import { Category, SvgIconName, UserAccountStatus, UserGender, UserOperations } from '../enum'
import { Nullable } from './main'

interface FieldTypeLogin {
    email: string,
    password: string,
}

interface FieldTypeResendOtpCode {
    email: string,
}


interface FieldTypeUserProfileCommon {
    address: string,
    phone: Nullable<number>,
}

interface FieldTypeUserProfileCustomer {
    gender?: UserGender
}

interface FieldTypeUserProfileCompany {
    panNumber?: Nullable<number>,
}

interface FieldTypeUserProfile extends FieldTypeUserProfileCommon {
    fullName: string,
    customer?: FieldTypeUserProfileCustomer,
    company?: FieldTypeUserProfileCompany
}

interface FieldTypeUser {
    password: string,
    email: string,
    category: Category
    accountStatus: UserAccountStatus,
    profile: FieldTypeUserProfile,
    image?: string,
    isVerified: boolean
}

interface FieldTypeUserMain extends FieldTypeUser {
    _id: string,
    createdAt: Date,
    modifiedAt: Date,
    operation: UserOperations,
    otpCode: string,
    otpExpiry: Date,
}

interface FieldTypeRegister {
    email: string,
    category: Category
    password: string,
    profile: {
        fullName: string,
    }
}

interface FieldTypeResendOtp {
    email: string,
    operation: UserOperations
}

interface FieldTypeResetPassword {
    email: string,
    otpCode: string,
    password: string,
}

interface FieldTypeChangePassword {
    prevPassword: string,
    newPassword: string,
}

interface FieldTypeVerifyOtp {
    email: string,
    otpCode: string,
    operation: UserOperations
}

interface FieldTypeAnswerSet {
    displayOption: string,
    value: string,
    icon?: SvgIconName
}

export type {
  FieldTypeLogin,
  FieldTypeChangePassword,
  FieldTypeResendOtp,
  FieldTypeResetPassword,
  FieldTypeVerifyOtp,
  FieldTypeResendOtpCode,
  FieldTypeUserMain,
  FieldTypeRegister,
  FieldTypeAnswerSet,
  FieldTypeUserProfile
}
