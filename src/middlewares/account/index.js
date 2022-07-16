const Joi = require("@hapi/joi");
const { getValidatorError } = require("../../helper/validators");

const accountSignUp = (req, res, next) => {
  const { email, password, tax_id, name } = req.body;
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    tax_id: Joi.string().pattern(
      new RegExp(
        "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})"
      )
    ),
    name: Joi.string().required(),
  });

  const { error } = schema.validate(
    { email, password, tax_id, name },
    { abortEarly: false }
  );

  const messages = getValidatorError(error);

  if (error) {
    return res.badRequest(null, null, { error: messages });
  }

  next();
};

module.exports = { accountSignUp };
