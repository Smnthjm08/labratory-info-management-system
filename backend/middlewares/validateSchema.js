// middlewares/validateSchema.js
const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    res.status(400).json({ errors: err.errors });
  }
};

export default validateSchema;
