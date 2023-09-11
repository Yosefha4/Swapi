import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  carOwnerId: {
    type: String,
    require: true,
  },
  vehicleType: {
    type: String,
    require: true,
  },
  vehicleBrand: {
    type: String,
    require: true,
  },
  vehicleModel: {
    type: String,
    require: true,
  },
  yearOfManufacture: {
    type: String,
    require: true,
  },
  numOfDoors: {
    type: String,
    require: true,
  },
  engineCapacity: {
    type: String,
    require: true,
  },
  gearboxType: {
    type: String,
    require: true,
  },
  vehicleColor: {
    type: String,
    require: true,
  },
  testExpire: {
    type: String,
    require: true,
  },
  whichHand: {
    type: String,
    require: true,
  },
  currentOwnership: {
    type: String,
    require: true,
  },
  lastOwnership: {
    type: String,
    require: true,
  },
  kilometer: {
    type: String,
    require: true,
  },
  moreDetails: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  vehicleLocation: {
    type: String,
    require: true,
  },
  vehicleArea: {
    type: String,
    require: true,
  },
  vehicleImages: [
    {
      type: String,
    },
  ],
  ownerPhoneNum: {
    type: String,
    require: true,
  },
  ownerName: {
    type: String,
  },
});

export default mongoose.model("vehicles", vehicleSchema);
