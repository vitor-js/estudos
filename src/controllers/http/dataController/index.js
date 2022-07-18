// Model
const User = require("../../../api/user/model");

const getData = async (req, res) => {
  const { user_id } = req;
  const user = await User.findOne({ where: { id: user_id } });

  res.ok({
    name: user.name,
    id: user.id,
    email: user.email,
    tax_id: tax_id,
  });
};

module.exports = {
  getData,
};
