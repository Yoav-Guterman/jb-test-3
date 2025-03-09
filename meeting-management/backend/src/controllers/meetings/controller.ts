import { NextFunction, Request, Response } from "express";
import Meeting from "../../models/meeting";
import Team from "../../models/team";
import { Op } from "sequelize";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";


export async function getMeetingByTeam(
    req: Request<{ teamId: string }>,
    res: Response,
    next: NextFunction
) {
    try {
        const { teamId } = req.params;
        const meetings = await Meeting.findAll({
            where: { teamId },
            include: [Team],
        });
        res.json(meetings);
    } catch (e) {
        next(e);
    }
}

export async function add(req: Request<{}, {}, {
    teamId: string
    room: string,
    description: string,
    startTime: Date,
    endTime: Date,
}>, res: Response, next: NextFunction) {
    try {
        const { teamId, startTime, endTime } = req.body;

        // Check for conflicting meetings
        const conflictingMeetings = await Meeting.findAll({
            where: {
                teamId,
                [Op.or]: [
                    // New meeting starts during an existing meeting
                    {
                        startTime: { [Op.lte]: new Date(startTime) },
                        endTime: { [Op.gt]: new Date(startTime) }
                    },
                    // New meeting ends during an existing meeting
                    {
                        startTime: { [Op.lt]: new Date(endTime) },
                        endTime: { [Op.gte]: new Date(endTime) }
                    },
                    // New meeting completely contains an existing meeting
                    {
                        startTime: { [Op.gte]: new Date(startTime) },
                        endTime: { [Op.lte]: new Date(endTime) }
                    }
                ]
            }
        });

        if (conflictingMeetings.length > 0) {
            return next(new AppError
                (StatusCodes.BAD_REQUEST,
                    'Meeting time conflicts with an existing meeting for this team'
                )
            )
        }

        const newMeeting = await Meeting.create(req.body);
        await newMeeting.reload({ include: [Team] });
        res.json(newMeeting);
    } catch (e) {
        next(e);
    }
}