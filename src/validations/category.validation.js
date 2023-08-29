const Joi = require("joi");

/** create user */
const createCategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_desc: Joi.string().required().trim(),
  }),
};

/** GEt user list */
const getCategoryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get category details by id */
const getDetails = {
  params: Joi.object().keys({
    categoryId: Joi.string().required().trim(),
  }),
};

/** category details update by id */
const updateDetails = {
  params: Joi.object().keys({
    categoryId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    category_name: Joi.string().trim(),
    category_desc: Joi.string().trim(),
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
  createCategory,
  getCategoryList,
  getDetails,
  updateDetails,
  sendMail,
};