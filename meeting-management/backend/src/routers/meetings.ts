import { Router } from "express";
import validation from "../middlewares/validation";
import paramsValidation from "../middlewares/params-validation";
import { getMeetingsPerTeamValidator, newMeetingValidator } from "../controllers/meetings/validator";
import { add, getMeetingByTeam } from "../controllers/meetings/controller";

const meetingsRouter = Router()

meetingsRouter.get('/:teamId', paramsValidation(getMeetingsPerTeamValidator), getMeetingByTeam)
meetingsRouter.post('/', validation(newMeetingValidator), add)

export default meetingsRouter