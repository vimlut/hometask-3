const Joi = require('joi');
const noteCategories = require('./constants').noteCategories;

const notesSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string()
    .valid(...noteCategories)
    .required(),
  content: Joi.string(),
  isArchived: Joi.boolean().strict().required(),
});

module.exports = { notes: notesSchema };
