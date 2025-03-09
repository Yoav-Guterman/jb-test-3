import { ChangeEvent, useEffect, useState } from 'react'
import './List.css'
import Meeting from '../../../models/meeting/meeting'
import Team from '../../../models/team/team'
import teamsService from '../../../services/teams'
import meetingsService from '../../../services/meetings'
import Card from '../card/Card'

export default function List(): JSX.Element {

    const [meetings, setMeetings] = useState<Meeting[]>([])
    const [teams, setTeams] = useState<Team[]>([])

    useEffect(() => {
        (async () => {
            try {
                const teamsFromService = await teamsService.getAll()
                setTeams(teamsFromService)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    async function teamChanged(event: ChangeEvent<HTMLSelectElement>) {
        const teamId = event.currentTarget.value
        const currentMeetingForTeam = await meetingsService.getMeetingsPerTeam(teamId)
        setMeetings(currentMeetingForTeam)
    }

    return (
        <div className='List'>
            <div className='searchAndFilterContainer'>
                <div className='teamsSelection'>
                    <select defaultValue="" onChange={teamChanged}>
                        <option value="" disabled>please select team...</option>
                        {teams.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                    </select>
                </div>
            </div>

            <div className="CardContainer">
                {meetings.map(m => <Card key={m.id} meeting={m} />)}
            </div>
        </div>
    )
}