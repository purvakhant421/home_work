const { mobileService } = require("../services");

/** create mobile */
const createMobile = async (req, res) => {
  try {
    const reqBody = req.body;

    const mobileExists = await mobileService.getMobileByEmail(reqBody.email);
    if (mobileExists) {
      throw new Error("Mobile already created by this email!");
    }

    const mobile = await mobileService.createMobile(reqBody);
    if (!mobile) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Mobile create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get mobile list */
const getMobileList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { mobile_company: { $regex: search, $options: "i" } },
        { mobile_status: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await mobileService.getMobileList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Mobile list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get mobile details by id */
const getMobileDetails = async (req, res) => {
  try {
    const getDetails = await mobileService.getMobileById(req.params.mobileId);
    if (!getDetails) {
      throw new Error("Mobile not found!");
    }

    res.status(200).json({
      success: true,
      message: "Mobile details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** mobile details update by id */
const updateDetails = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.getMobileById(mobileId);
    if (!mobileExists) {
      throw new Error("Mobile not found!");
    }

    await mobileService.updateDetails(mobileId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Mobile details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete mobile */
const deleteMobile = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.getMobileById(mobileId);
    if (!mobileExists) {
      throw new Error("Mobile not found!");
    }

    await mobileService.deletemobile(mobileId);

    res.status(200).json({
      success: true,
      message: "Mobile delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createMobile,
  getMobileList,
  getMobileDetails,
  updateDetails,
  deleteMobile,
};