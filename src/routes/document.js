"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS 
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/document:

// URL: /documents

router.all("/", (req, res) => {
  res.send({
    redoc: "/documents/redoc",
    json: "/documents/json",
  });
});

// Redoc:
const redoc = require("redoc-express");
router.use("/redoc", redoc({ specUrl: "/documents/json", title: "API Docs" }));

/* ------------------------------------------------------- */
module.exports = router;
