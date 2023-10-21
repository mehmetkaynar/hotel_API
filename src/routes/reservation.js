"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS 
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/reservation:

const { isLogin } = require("../middlewares/permissions");
const reservation = require("../controllers/reservation");

// URL: /reservations

router.use(isLogin);

router.route("/").get(reservation.list).post(reservation.create);

router
  .route("/:id")
  .get(reservation.read)
  .put(reservation.update)
  .delete(reservation.delete);

/* ------------------------------------------------------- */
module.exports = router;
