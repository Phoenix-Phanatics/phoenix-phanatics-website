import events from "../data/events"

export default function Events() {
    return (
        <div className="col-span-3">
            <EventHeader>Events</EventHeader>
            <hr className="my-2" />
            <div className="flex gap-4 items-center justify-evenly">
                {events.map((event) => 
                    <Event key={event.id} name={event.name} date={event.date} location={event.location}/>
                )}
            </div>
        </div>
    )
}

function EventHeader({ children }) {
    return (
        <h1 className="text-6xl text-center text-white">{children}</h1>
    )
}

function Event({ name, date, location }) {
    return (
        <div className="flex gap-6 items-center justify-center">
            <div>
                <EventName name={name} />
                <EventDate date={date} />
            </div>
            <EventLocation location={location} />
        </div>
    )
}

function EventName({ name }) {
    return (
        <p className="text-white text-2xl text-center">{name}</p>
    )
}

function EventDate({ date }) {
    return (
        <p className="text-white text-2xl text-center">{date}</p>
    )
}

function EventLocation({ location }) {
    return (
        <iframe src={location} width="300" height="225" style={{border:"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    )
}