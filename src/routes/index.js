"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS 
------------------------------------------------------- */
const router = require("express").Router();

/* ------------------------------------------------------- */
// routes/:

// URL: /

// auth:
router.use("/auth", require("./auth"));
// user:
router.use("/users", require("./user"));
// room:
router.use("/rooms", require("./room"));
// reservation:
router.use("/reservations", require("./reservation"));
// document:
router.use("/documents", require("./document"));

/* ------------------------------------------------------- */
module.exports = router;
