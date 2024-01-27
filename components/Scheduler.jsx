import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from 'dayjs'
import 'dayjs/locale/bg'

dayjs.locale('bg')
const localizer = dayjsLocalizer(dayjs)
const events = [
    {
        start: dayjs('2024-01-28T12:00:00').toDate(),
        end: dayjs('2024-01-28T13:00:00').toDate(),
        title: "Събитие 1"
    },
    {
        start: dayjs('2024-01-28T16:00:00').toDate(),
        end: dayjs('2024-01-28T17:00:00').toDate(),
        title: "Събитие 2"
    }
]

const Scheduler = () => {
    return (
        <div>
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                popup={true}
                events={events}
                style={{
                    height: "95vh",
                    width: "90%"
                }}
            />
        </div>
    )
}

export default Scheduler