"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS 
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "flightNumber": "IS-AN-001",
    "airline": "THY",
    "departure": "ISTANBUL",
    "departureDate": "2020-10-01 10:00:00",
    "arrival": "ANKARA",
    "arrivalDate": "2020-10-01 12:00:00",
    "createdId": "652ceaa1bae9cde5e8a97522"
}
{
  "flightNumber": "IS-AN-002",
  "airline": "THY",
  "departure": "ISTANBUL",
  "departureDate": "2020-10-01 23:00:00",
  "arrival": "ANTALYA",
  "arrivalDate": "2020-10-02 03:00:00",
  "createdId": "65317b1c29b1267920ddf30d"
}
/* ------------------------------------------------------- */
// Flight Model:

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    image: String,
    bedType: {
      type: Number,
      enum: [1, 2, 3],
      required: true,
      default: 2,
    },
    price: {
      type: Number,
      required: true,
      default: 100,
    },
  },
  { collection: "room", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Room", roomSchema);
