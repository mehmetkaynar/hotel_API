"use strict";
/* -------------------------------------------------------
	NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
	"flightId": "652cebb3bae9cde5e8a9753b",
	"passengers": [
	  "652cf408b63b905ad13d9a87",
	  "652cf408b63b905ad13d9a89",
	  {
		"firstName": "Test 11",
		"lastName": "Test 11",
		"email": "test11@site.com"
	  },
	  {
		"firstName": "Test 12",
		"lastName": "Test 12",
		"email": "test12@site.com"
	  },
	],
	"createdId": "652ceaa1bae9cde5e8a97522"
  }
/* ------------------------------------------------------- */
// Reservation Model:

const ReservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    check_in: {
      type: Date,
      required: true,
    },
    check_out: {
      type: Date,
      required: true,
    },
    pax: {
      //kafile(guest_number)
      type: Number,
      required: true,
    },
    night: {
      type: Number,
      required: true,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
      default: 100,
    },
    totalprice: {
      type: Number,
      required: true,
      default: function () {
        return this.price * this.night;
      },
    },
  },
  { collection: "reservations", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Reservation", ReservationSchema);
