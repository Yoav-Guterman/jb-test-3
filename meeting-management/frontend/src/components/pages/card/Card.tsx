import Meeting from '../../../models/meeting/meeting'
import './Card.css'

interface CardProps {
    meeting: Meeting,
}

export default function Card(props: CardProps): JSX.Element {

    const { room, description, startTime, endTime } = props.meeting
    const { name } = props.meeting.team

    // Calculate duration between start and end time
    const calculateDuration = (start: string | Date, end: string | Date): string => {
        const startDate = new Date(start);
        const endDate = new Date(end);

        // Calculate difference in milliseconds
        const durationMs = endDate.getTime() - startDate.getTime();

        // Convert to hours and minutes
        const hours = Math.floor(durationMs / (1000 * 60 * 60));
        const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

        return `${hours}h ${minutes}m`;
    };

    return (
        <div className='Card'>
            <h4>team: {name}</h4>
            <p>description: {description}</p>
            <p>startTime: {(new Date(startTime)).toLocaleString()}</p>
            <p>endTime: {(new Date(endTime)).toLocaleString()}</p>
            <p>duration: {calculateDuration(startTime, endTime)}</p>
            <p>room: {room}</p>
        </div>
    )
}