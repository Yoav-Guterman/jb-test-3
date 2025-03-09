import axios from 'axios'
import Meeting from '../models/meeting/meeting'
import MeetingDraft from '../models/meeting/meetingDraft'


class Meetings {

    async getMeetingsPerTeam(teamId: string): Promise<Meeting[]> {
        const response = await axios<Meeting[]>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings/${teamId}`)
        return response.data
    }

    async add(draft: MeetingDraft): Promise<Meeting> {
        const response = await axios.post<Meeting>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings`, draft)
        return response.data
    }
}

const meetingsService = new Meetings()
export default meetingsService