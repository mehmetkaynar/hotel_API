"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS
------------------------------------------------------- */
// Middleware: permissions

module.exports = {
  isLogin: (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("NoPermission: You must login.");
    }
  },

  isSelfOrAdmin: (req, res, next) => {
    //!  const isSelf=req.params.id===req.reservation.id ????????

    if (req.user && (req.user.isSelfOrStaff || req.user.isAdmin)) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("NoPermission: You must login and to be Staff.");
    }
  },

  isAdmin: (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("NoPermission: You must login and to be Admin.");
    }
  },
};
