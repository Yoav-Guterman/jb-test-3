import Joi from "joi";

export const newMeetingValidator = Joi.object({
    description: Joi.string().max(255).required(),
    room: Joi.string().max(40).required(),
    startTime: Joi.date().required(),
    endTime: Joi.date().min(Joi.ref('startTime')).required()
        .messages({
            'date.min': 'End time must be after start time'
        }),
    teamId: Joi.string().uuid().required()
})

export const getMeetingsPerTeamValidator = Joi.object({
    teamId: Joi.string().uuid().required()
})