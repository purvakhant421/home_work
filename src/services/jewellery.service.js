const { Jewellery } = require("../models");

/**
 * Create Jewellery
 * @param {object} reqBody
 * @returns {Promise<Jewellery>}
 */
const createJewellery = async (reqBody) => {
  return Jewellery.create(reqBody);
};

/**
 * Get Jewellery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Jewellery>}
 */
const getJewelleryList = async (filter, options) => {

  return Jewellery.find({$or:[{is_active:true}]})
};

/**
 * Get Jewellery by email
 * @param {string} email
 * @returns {Promise<Jewellery>}
 */
const getJewelleryByEmail = async (email) => {
  return Jewellery.findOne({ email });
};

/**
 * Get Jewellery details by id
 * @param {ObjectId} jewelleryId
 * @returns {Promise<Jewellery>}
 */
const getJewelleryById = async (jewelleryId) => {
  return Jewellery.findById(jewelleryId);
};

/**
 * jewllery details update by id
 * @param {ObjectId} jewlleryId
 * @param {object} updateBody
 * @returns {Promise<Jewellery>}
 */
const updateDetails = async (jewlleryId, updateBody) => {
  return Jewellery.findByIdAndUpdate(jewelleryId, { $set: updateBody });
};


/**
 * Delete Jewellery
 * @param {ObjectId} jewelleryId
 * @returns {Promise<Jewellery>}
 */
const deleteJewellery = async (jewelleryId) => {
  return Jewellery.findByIdAndDelete(jewelleryId);
};


module.exports = {
  createJewellery,
  getJewelleryList,
  getJewelleryByEmail,
  getJewelleryById,
  updateDetails,
  deleteJewellery,
};