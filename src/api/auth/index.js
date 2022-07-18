// Model
const User = require("../user/model");

// Lib
const bcrypt = require("bcrypt");

// Helper
const { generateJwt, generateRefreshJwt } = require("./../../helper/jwt");

const UserLoginException = (code, message) => {
  return { message, code, name: "UserLoginException" };
};

const userlogin = async (payload) => {
  const { email, password } = payload;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw UserLoginException(404, null);
  }

  const checkpassword = await bcrypt.compare(password, user.password);

  if (!checkpassword) {
    throw UserLoginException(401, null);
  }

  const token = generateJwt({ id: user.id });
  const refreshToken = generateRefreshJwt({ id: user.id });

  return {
    token,
    refreshToken,
  };
};

module.exports = {
  userlogin,
};
