const Joi = require("joi");

/** create school */
const createSchool = {
  body: Joi.object().keys({
    school_name: Joi.string().required().trim(),
    school_address: Joi.string().required().trim(),
    school_student_name: Joi.string().required().trim(),
    school_course_name: Joi.string().required().trim(),
  }),
};

/** GEt school list */
const getSchoolList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get school details by id */
const getDetails = {
  params: Joi.object().keys({
    schoolId: Joi.string().required().trim(),
  }),
};

/** school details update by id */
const updateDetails = {
  params: Joi.object().keys({
    schoolId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    school_name: Joi.string().trim(),
    school_address: Joi.string().trim(),
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
  createSchool,
  getSchoolList,
  getDetails,
  updateDetails,
  sendMail,
};