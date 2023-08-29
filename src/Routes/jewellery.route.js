const express = require("express");
const { jewelleryValidation } = require("../validations");
const { jewelleryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create jewellery */
router.post(
  "/create-jewellery",
  validate(jewelleryValidation.createJewellery),
  jewelleryController.createJewellery
);

/** Get jewellery list */
router.get(
  "/list",
  validate(jewelleryValidation.getJewelleryList),
  jewelleryController.getJewelleryList
);

/** Get jewellery details by id */
router.get(
  "/get-details/:jewelleryId",
  validate(jewelleryValidation.getDetails),
  jewelleryController.getJewelleryDetails
);

/** user details update by id */
router.put(
  "/update-details/:jewelleryId",
  validate(jewelleryValidation.updateDetails),
  jewelleryController.updateDetails
);

/** Delete jewellery */
router.delete(
  "/delete-jewellery/:jewelleryId",
  validate(jewelleryValidation.getDetails),
  jewelleryController.deleteJewellery
);



module.exports = router;