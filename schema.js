const joi = require("joi");

module.exports.postSchema = joi.object({
    title: joi.string().required(),
    subtitle: joi.string().required(),
    content: joi.string().required(),
});