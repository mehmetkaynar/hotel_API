"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/flight:

const permissions = require("../middlewares/permissions");
const room = require("../controllers/room");

// URL: /rooms

// router.route('/')
//     .get(permissions.isStaffOrAdmin, flight.list)
//     .post(permissions.isStaffOrAdmin, flight.create)

// router.route('/:id')
//     .get(permissions.isStaffOrAdmin, flight.read)
//     .put(permissions.isStaffOrAdmin, flight.update)
//     .patch(permissions.isStaffOrAdmin, flight.update)
//     .delete(permissions.isAdmin, flight.delete)

// router.use(permissions.isLogin);

router.route("/").get(room.list).post(room.create);

router
  .route("/:id")
  .get(room.read)
  .put(room.update)
  .patch(room.update)
  .delete(room.delete);

/* ------------------------------------------------------- */
module.exports = router;
