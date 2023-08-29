const express = require("express");
const { mobileValidation } = require("../validations");
const { mobileController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create mobile */
router.post(
  "/create-mobile",
  validate(mobileValidation.createMobile),
  mobileController.createMobile
);

/** Get mobile list */
router.get(
  "/list",
  validate(mobileValidation.getMobileList),
  mobileController.getMobileList
);

/** Get mobile details by id */
router.get(
  "/get-details/:mobileId",
  validate(mobileValidation.getDetails),
  mobileController.getUserDetails
);

/** mobile details update by id */
router.put(
  "/update-details/:mobileId",
  validate(mobileValidation.updateDetails),
  mobileController.updateDetails
);

/** Delete mobile */
router.delete(
  "/delete-mobile/:mobileId",
  validate(mobileValidation.getDetails),
  mobileController.deleteUser
);



module.exports = router;