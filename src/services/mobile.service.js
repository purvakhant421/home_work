const { Mobile } = require("../models");

/**
 * Create mobile
 * @param {object} reqBody
 * @returns {Promise<Mobile>}
 */
const createMobile = async (reqBody) => {
  return Mobile.create(reqBody);
};

/**
 * Get mobile list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Mobile>}
 */
const getMobileList = async (filter, options) => {
  //const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Mobile.find({$or:[{is_active:true}]})
};

/**
 * Get mobile by email
 * @param {string} email
 * @returns {Promise<Mobile>}
 */
const getMobileByEmail = async (email) => {
  return Mobile.findOne({ email });
};

/**
 * Get mobile details by id
 * @param {ObjectId} mobileId
 * @returns {Promise<Mobile>}
 */
const getMobileById = async (mobileId) => {
  return Mobile.findById(mobileId);
};

/**
 * mobile details update by id
 * @param {ObjectId} mobileId
 * @param {object} updateBody
 * @returns {Promise<Mobile>}
 */
const updateDetails = async (mobileId, updateBody) => {
  return Mobile.findByIdAndUpdate(mobileId, { $set: updateBody });
};



/**
 * Delete mobile
 * @param {ObjectId} mobileId
 * @returns {Promise<Mobile>}
 */
const deleteMobile = async (mobileId) => {
  return Mobile.findByIdAndDelete(mobileId);
};


module.exports = {
  createMobile,
  getMobileList,
  getMobileByEmail,
  getMobileById,
  updateDetails,
  deleteMobile,
};