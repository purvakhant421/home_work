const Joi = require("joi");

/** create mobile */
const createMobile = {
  body: Joi.object().keys({
    mobile_company: Joi.string().required().trim(),
    mobile_model: Joi.string().required().trim(),
    mobile_price: Joi.string().required().trim(),
    mobile_status: Joi.string().required().trim(),
  }),
};

/** Get mobile details by id */
const getDetails = {
  params: Joi.object().keys({
    mobileId: Joi.string().required().trim(),
  }),
};

/** mobile details update by id */
const updateDetails = {
  params: Joi.object().keys({
    mobileId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    mobile_company: Joi.string().trim(),
    mobile_status: Joi.string().trim(),
  }),
};


/** Send mail */
const sendMail = {
  body: Joi.object({
    email: Joi.string().required().trim().email(),
    subject: Joi.string().required().trim(),
    text: Joi.string().required().trim(),
  }),
};

module.exports = {
  createMobile,
  getDetails,
  updateDetails,
  sendMail,
};