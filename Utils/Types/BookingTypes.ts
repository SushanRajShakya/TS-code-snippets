import { FieldTypePackageMain } from './PackageTypes'

export enum BookingStatus {
    ACTIVE= 'active',
    DECLINED= 'declined',
    APPROVED= 'approved',
    CANCELED= 'canceled'
}

interface FieldTypeBookingCreate {
    startDate: Date,
    additionalInfo?: string
}

interface FieldTypeBooking extends FieldTypeBookingCreate{
    companyId: string,
    packageId: string
}

interface FieldTypeBookingUpdate {
    _id: string,
    status?: BookingStatus,
    additionalInfo?: string,
    startDate?: Date
}

interface FieldTypeBookingMain {
    _id: string
    additionalInfo?: string
    companyId: string,
    customerId: string,
    packageId: FieldTypePackageMain
    remarks?: string[]
    startDate: Date,
    status: BookingStatus,
}

export type {
  FieldTypeBooking,
  FieldTypeBookingMain,
  FieldTypeBookingCreate,
  FieldTypeBookingUpdate
}
