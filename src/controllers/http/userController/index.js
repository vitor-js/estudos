const get = async (req, res) => {
  return res.ok({ data: "data" });
};

module.exports = {
  get: get,
};
