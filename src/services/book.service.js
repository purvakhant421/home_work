const { Jewellery } = require("../models");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<Jewellery>}
 */
const createJewellery = async (reqBody) => {
  return Jewellery.create(reqBody);
};

/**
 * Get user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Jewellery>}
 */
const getJewelleryList = async (filter, options) => {
  //const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Jewellery.find({$or:[{is_active:true}]})
};

/**
 * Get user by email
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
 * book details update by id
 * @param {ObjectId} bookId
 * @param {object} updateBody
 * @returns {Promise<Book>}
 */
const updateDetails = async (bookId, updateBody) => {
  return Book.findByIdAndUpdate(bookId, { $set: updateBody });
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