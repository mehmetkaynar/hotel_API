"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/reservation:

const permissions = require("../middlewares/permissions");
const reservation = require("../controllers/reservation");

// URL: /reservations

// router.use(permissions.isLogin);

router.route("/").get(reservation.list).post(reservation.create);

router
  .route("/:id")
  .get(reservation.read)
  .put(reservation.update)
  .delete(reservation.delete);

/* ------------------------------------------------------- */
module.exports = router;
