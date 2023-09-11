import VehiclesModel from "../models/vehicles.js"
import express from 'express'

const router = express.Router();


// const router = require("express").Router();
// const vehicleModel = require("../models/vehicle");

router.post("/api/create_vehicle", async (req, res) => {
  try {
    const newVehicle = new VehiclesModel({
        carOwnerId: 'test car owner ID',
      vehicleType: req.body.vehicleType,
      vehicleBrand: req.body.vehicleBrand,
      vehicleModel: req.body.vehicleModel,
      yearOfManufacture: req.body.yearOfManufacture,
      numOfDoors: req.body.numOfDoors,
      engineCapacity: req.body.engineCapacity,
      gearboxType: req.body.gearboxType,
      vehicleColor: req.body.vehicleColor,
      testExpire: req.body.testExpire,
      whichHand: req.body.whichHand,
      currentOwnership: req.body.currentOwnership,
      lastOwnership: req.body.lastOwnership,
      kilometer: req.body.kilometer,
      moreDetails: req.body.moreDetails,
      price: req.body.price,
      vehicleLocation: req.body.vehicleLocation,
      vehicleArea: req.body.vehicleArea,
      vehicleImages: req.body.vehicleImages,
      ownerPhoneNum: req.body.ownerPhoneNum,
      ownerName: req.body.ownerName,
    });
    const savedVehicle = await newVehicle.save();
    res.status(200).json("New Vehicle Added Successfully !");
  } catch (error) {
    res.json(error);
  }
});

//create second route --> the "get" data from database
router.get("/api/get_vehicles", async (req, res) => {
  try {
    const vehicles = await VehiclesModel.find({});
    res.status(200).json(vehicles);
  } catch (error) {
    res.json(error);
  }
});

router.delete('/api/delete_vehicle', async (req, res) => {
  try {
    const vehicleId = req.body.id;

    if (!vehicleId) {
      return res.status(400).json({ message: 'Vehicle ID is required in the request body' });
    }

    // Use findByIdAndRemove to delete the vehicle by its ID
    const deletedVehicle = await VehiclesModel.findByIdAndRemove(vehicleId);

    if (!deletedVehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    return res.status(200).json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


// module.exports = router;

export default router;
