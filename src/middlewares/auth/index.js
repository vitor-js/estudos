const { verifyJwt } = require("../../helper/jwt");

const checkJwt = (req, res, next) => {
  let token = req.headers["authorization"];
  token = token ? token.slice(7, token.length) : null;

  if (!token) {
    return res.unauthorized(null, "invalid token");
  }
  try {
    const decoded = verifyJwt(token);
    req.user_id = decoded.id;
    next();
  } catch {
    return res.unauthorized(null, "invalid token");
  }
};

module.exports = { checkJwt };
