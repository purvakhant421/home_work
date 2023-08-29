const { Category } = require("../models");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/**
 * Get user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Category>}
 */
const getCategoryList = async (filter, options) => {
  //const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Category.find({$or:[{is_active:true}]})
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<Category>}
 */
const getCategoryByEmail = async (email) => {
  return Category.findOne({ email });
};

/**
 * Get category details by id
 * @param {ObjectId} categoryId
 * @returns {Promise<Category>}
 */
const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

/**
 * user details update by id
 * @param {ObjectId} categoryId
 * @param {object} updateBody
 * @returns {Promise<Category>}
 */
const updateDetails = async (categoryId, updateBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

/**
 * Delete user
 * @param {ObjectId} categoryId
 * @returns {Promise<Category>}
 */
const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};



module.exports = {
  createCategory,
  getCategoryList,
  getCategoryByEmail,
  getCategoryById,
  updateDetails,
  deleteCategory,
};