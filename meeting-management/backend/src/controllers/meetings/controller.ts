import { NextFunction, Request, Response } from "express";
import Meeting from "../../models/meeting";
import Team from "../../models/team";


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
        const newMeeting = await Meeting.create(req.body)
        await newMeeting.reload({ include: [Team] })
        res.json(newMeeting)
    } catch (e) {
        next(e)
    }
}