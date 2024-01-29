import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar.css'
import dayjs from 'dayjs'
import 'dayjs/locale/bg'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'

function Popup({ event }) {
    const [showModal, setShowModal] = useState(false)
    const handleOpenModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return (
        <>
            <div>
                <div onClick={handleOpenModal}>{event.title}</div>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{event.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {event.description ? (
                        <strong>Описание:</strong>
                    ) : ('')}
                    <p>{event.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Затвори
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



dayjs.locale('bg')

const localizer = dayjsLocalizer(dayjs)
const messages = {
    today: 'Днес',
    previous: 'Предишен',
    next: 'Следващ',
    month: 'Месец',
    week: 'Седмица',
    day: 'Ден',
    agenda: 'Събития',
    date: 'Дата',
    time: 'Време',
    event: 'Събитие'
}

const events = [
    {
        start: dayjs('2024-01-29T12:00:00').toDate(),
        end: dayjs('2024-01-29T13:00:00').toDate(),
        title: "Събитие 1",
        description: 'Lorem ipsum dolor sit amet'
    },
    {
        start: dayjs('2024-01-30T16:00:00').toDate(),
        end: dayjs('2024-01-30T17:00:00').toDate(),
        title: "Събитие 2"
    },
    {
        start: dayjs('2024-01-31T09:00:00').toDate(),
        end: dayjs('2024-01-31T10:00:00').toDate(),
        title: "Англ. език B2",
        description: 'Курс по англ. език за напреднали'
    }
]

const Scheduler = () => {

    return (
        <div>
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                defaultView={'week'}
                views={["week"]}
                popup={true}
                events={events}
                messages={messages}
                toolbar={false}
                components={{
                    event: Popup,
                }}
                style={{
                    height: "95vh",
                    width: "95%",
                    margin: 'auto'
                }}
            />
        </div>
    )
}

export default Scheduler