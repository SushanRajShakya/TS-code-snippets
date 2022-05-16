export enum VehicleCategory {
    BIKE='BIKE',
    CAR='CAR'
}

interface FieldTypeVehicleUpdate {
    _id: string,
    name: string,
    vrn: string,
    dateOfPurchase?: number,
    brand?: string,
}

interface FieldTypeVehicleCreate {
    category: VehicleCategory,
    name: string,
    vrn: string,
    dateOfPurchase?: number,
    brand?: string,
}

interface FieldTypeVehicle extends FieldTypeVehicleCreate{
    image: string
    _id: string
}

interface FieldTypeVehicleMain extends FieldTypeVehicle{
    userId: string,
    createdAt: Date,
    modifiedAt: Date,
}

export type {
  FieldTypeVehicle,
  FieldTypeVehicleMain,
  FieldTypeVehicleUpdate,
  FieldTypeVehicleCreate,
}
