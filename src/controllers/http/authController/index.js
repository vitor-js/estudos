const { userlogin } = require("../../../api/auth");

const login = async (req, res) => {
  try {
    const result = await userlogin(req.body);
    res.ok(result, null, null);
  } catch (err) {
    if (err.code === 401) {
      return res.unauthorized(null, null);
    }
    if (err.code === 404) {
      return res.badRequest(null, null);
    }
    return res.error(null, null, null);
  }
};

module.exports = {
  login: login,
};
