const joi = require("joi");

module.exports.postSchema = joi.object({
    title: joi.string().required(),
    subtitle: joi.string().required(),
    content: joi.string().required(),
});

module.exports.reviewSchema = joi.object ({
    review: joi.object({
    comment: joi.string().required(),
    rating: joi.number().required().min(1).max(5),
    }).required()

});