import { FieldTypeVehicleMain } from './VehicleTypes'

interface FieldTypePackageCommon {
    duration: number,
    title: string,
    price?: number,
    description?: string,
    discount?: number,
}

interface FieldTypePackageCreate extends FieldTypePackageCommon {
    vehicleId: string,
}

interface FieldTypePackageUpdate extends FieldTypePackageCreate {
    _id: string
}

interface FieldTypePackage extends FieldTypePackageCommon{
    vehicleId: FieldTypeVehicleMain,
    image?: string,
    _id: string
}

interface FieldTypePackageUploadImage {
    _id: string,
    image: File
}

interface FieldTypePackageMain extends FieldTypePackage{
    deleted: boolean,
    userId: string,
    createdAt: Date,
    modifiedAt: Date,
}

export type {
  FieldTypePackage,
  FieldTypePackageMain,
  FieldTypePackageCreate,
  FieldTypePackageUpdate,
  FieldTypePackageUploadImage
}
