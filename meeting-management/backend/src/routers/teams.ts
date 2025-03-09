import { Router } from "express";
import { getAll } from "../controllers/teams/controller";

const teamsRouter = Router()

teamsRouter.get('/', getAll)

export default teamsRouter