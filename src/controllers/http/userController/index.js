const { create } = require("../../../api/user");

const createUser = async (req, res) => {
  try {
    const result = await create(req.body);
    res.ok(result, null, null);
  } catch (err) {
    console.log(err);
    if (err.code === 400) {
      return res.badRequest(null, null);
    }
    return res.error(null, null, null);
  }
};

module.exports = {
  createUser: createUser,
};
