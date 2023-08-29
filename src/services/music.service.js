const { Music } = require("../models");

/**
 * Create music
 * @param {object} reqBody
 * @returns {Promise<Music>}
 */
const createMusic = async (reqBody) => {
  return Music.create(reqBody);
};

/**
 * Get music list music
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Music>}
 */
const getMusicList = async (filter, options) => {

  return Music.find({$or:[{is_active:true}]})
};

/**
 * Get music by email
 * @param {string} email
 * @returns {Promise<Music>}
 */
const getMusicByEmail = async (email) => {
  return Music.findOne({ email });
};

/**
 * Get Music details by id
 * @param {ObjectId} musicId
 * @returns {Promise<Music>}
 */
const getMusicById = async (musicId) => {
  return Music.findById(musicId);
};

/**
 * music details update by id
 * @param {ObjectId} musicId
 * @param {object} updateBody
 * @returns {Promise<Music>}
 */
const updateDetails = async (musicId, updateBody) => {
  return Music.findByIdAndUpdate(musicId, { $set: updateBody });
};

/**
 * Delete music
 * @param {ObjectId} musicId
 * @returns {Promise<Music>}
 */
const deleteMusic = async (musicId) => {
  return Music.findByIdAndDelete(musicId);
};



module.exports = {
  createMusic,
  getMusicList,
  getMusicByEmail,
  getMusicById,
  updateDetails,
  deleteMusic,
};