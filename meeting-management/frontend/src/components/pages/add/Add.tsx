import { useState, useEffect } from 'react'
import './Add.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Team from '../../../models/team/team'
import Meeting from '../../../models/meeting/meeting'
import MeetingDraft from '../../../models/meeting/meetingDraft'
import teamsService from '../../../services/teams'
import meetingsService from '../../../services/meetings'
import Card from '../card/Card'

export default function Add(): JSX.Element {

    const [teams, setTeams] = useState<Team[]>([])
    const [meetings, setMeetings] = useState<Meeting[]>([])

    const { register, handleSubmit, formState } = useForm<MeetingDraft>()

    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const teams = await teamsService.getAll()
                setTeams(teams)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    async function submit(draft: MeetingDraft) {
        try {
            await meetingsService.add(draft)
            alert('added meeting')
            navigate('/list')
        } catch (e) {
            alert(e)
        }
    }

    async function teamChanged(e: React.ChangeEvent<HTMLSelectElement>) {
        const teamId = e.currentTarget.value
        if (teamId) {
            try {
                const meetings = await meetingsService.getMeetingsPerTeam(teamId)
                setMeetings(meetings)
            } catch (e) {
                alert(e)
            }
        }
    }

    return (
        <div className='Add'>
            <form onSubmit={handleSubmit(submit)}>
                <select
                    defaultValue={''}
                    {...register('teamId', {
                        required: {
                            value: true,
                            message: 'team is a must'
                        }
                    })}
                    onChange={teamChanged}
                >
                    <option value="" disabled>please select job...</option>
                    {teams.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                </select>
                <span className='error'>{formState.errors.teamId?.message}</span>

                <input placeholder='room' {...register('room', {
                    required: {
                        value: true,
                        message: 'room is a must'
                    }
                })} />
                <span className='error'>{formState.errors.room?.message}</span>

                <input placeholder='description' {...register('description', {
                    required: {
                        value: true,
                        message: 'description is a must'
                    }
                })} />
                <span className='error'>{formState.errors.description?.message}</span>

                <label>start date and time</label>
                <input type="datetime-local" {...register('startTime', {
                    required: {
                        value: true,
                        message: 'start date and time is a must'
                    }
                })} />
                <span className='error'>{formState.errors.startTime?.message}</span>

                <label>end date and time</label>
                <input type="datetime-local" {...register('endTime', {
                    required: {
                        value: true,
                        message: 'end date and time is a must'
                    }
                })} />
                <span className='error'>{formState.errors.endTime?.message}</span>

                <button>Add Meeting</button>
            </form>

            {meetings.length > 0 && (
                <div>
                    <h3>Current Team Meetings</h3>
                    <div className="CardContainer">
                        {meetings.map(m => <Card key={m.id} meeting={m} />)}
                    </div>
                </div>
            )}
        </div>
    )
}