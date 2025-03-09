import Meeting from '../../../models/meeting/meeting'
import './Card.css'

interface CardProps {
    meeting: Meeting,
}

export default function Card(props: CardProps): JSX.Element {

    const { room, description, startTime, endTime } = props.meeting
    const { name } = props.meeting.team

    return (
        <div className='Card'>
            <h4>team: {name}</h4>
            <p>description: {description}</p>
            <p>startTime: {(new Date(startTime)).toLocaleDateString()}</p>
            <p>endTime: {(new Date(endTime)).toLocaleDateString()}</p>
            <p>room: {room}</p>
        </div>
    )
}