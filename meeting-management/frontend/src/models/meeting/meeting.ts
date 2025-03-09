import Team from "../team/team"
import MeetingDraft from "./meetingDraft"

export default interface Meeting extends MeetingDraft {
    id: string
    team: Team
}