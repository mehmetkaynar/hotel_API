"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS 
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/flight:

const permissions = require("../middlewares/permissions");
const room = require("../controllers/room");

// URL: /rooms

router.use(permissions.isAdmin);

router.route("/").get(room.list).post(room.create);

router
  .route("/:id")
  .get(room.read)
  .put(room.update)
  .patch(room.update)
  .delete(permissions.isAdmin, room.delete);

/* ------------------------------------------------------- */
module.exports = router;
