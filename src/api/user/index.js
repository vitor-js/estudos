// Lib
const bcrypt = require("bcrypt");

// Model
const User = require("./model");

// Helper
const { generateJwt, generateRefreshJwt } = require("./../../helper/jwt");

const UserException = (code, message) => {
  return { message, code, name: "UserException" };
};

const create = async (payload) => {
  const { name, email, password, tax_id } = payload;
  const userExist = await User.findOne({ where: { email } });

  if (userExist) {
    throw UserException(400, "user exist");
  }

  const hash = bcrypt.hashSync(password, 1);
  const newUser = await User.create({
    name,
    email,
    tax_id,
    password: hash,
  });

  const token = generateJwt({ id: newUser.id });
  const refreshToken = generateRefreshJwt({ id: newUser.id });

  delete newUser.password;

  return {
    name,
    email,
    tax_id,
    refreshToken,
    token,
  };
};

module.exports = {
  create,
};
