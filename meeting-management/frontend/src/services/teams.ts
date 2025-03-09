import axios from "axios"
import Team from "../models/team/team"

class Teams {
    async getAll(): Promise<Team[]> {
        const response = await axios(`${import.meta.env.VITE_REST_SERVER_URL}/teams`)
        return response.data
    }
}

const teamsService = new Teams()
export default teamsService