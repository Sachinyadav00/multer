const Joi = require("joi");

const signupValidatior = (req, res, next) => {
  const schema = new Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(15).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Bad Request",
      success: false,
      error,
    });
  }
  next();
};

const loginValidatior = (req, res, next) => {
  const schema = new Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(15).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Bad Request",
      success: false,
      error,
    });
  }
  next();
};

module.exports = {
  loginValidatior,
  signupValidatior,
};
