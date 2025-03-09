import { NextFunction, Request, Response } from "express";
import Team from "../../models/team";

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const teams = await Team.findAll()
        res.json(teams)
    } catch (e) {
        next(e)
    }
}