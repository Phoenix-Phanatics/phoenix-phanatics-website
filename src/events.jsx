import events from "../data/events"

export default function Events() {
    return (
        <div className="xl:col-span-3 bg-secondary-bg p-6 rounded-3xl shadow shadow-main-shadow flex flex-col" id="events">
            <EventHeader>Events</EventHeader>
            <hr className="my-2 text-white mb-6" />
            <div className="flex gap-4 h-full items-center justify-evenly">
                {events.map((event) => 
                    <Event key={event.id} name={event.name} date={event.date} location={event.location}/>
                )}
            </div>
        </div>
    )
}

function EventHeader({ children }) {
    return (
        <h1 className="text-6xl text-center text-main-purple">{children}</h1>
    )
}

function Event({ name, date, location }) {
    return (
        <div className="flex flex-col h-full gap-6 items-center xl:justify-center justify-between bg-main-bg shadow shadow-main-shadow p-4 rounded-3xl">
            <EventName name={name} />
            <EventDate date={date} />
            <EventLocation location={location} />
        </div>
    )
}

function EventName({ name }) {
    return (
        <div className="h-16 flex items-center">
            <p className="text-main-blue text-2xl text-center">{name}</p>
        </div>
    )
}

function EventDate({ date }) {
    return (
        <div className="h-16 flex xl:flex-row flex-col items-center xl:order-0 xl:mt-[-1.5rem] order-1">
            <p className="text-white text-2xl text-center">{date.month}</p>
            <p className="text-white text-2xl text-center hidden xl:block">&nbsp;</p>
            <p className="text-white text-2xl text-center">{date.day}</p>
        </div>
    )
}

function EventLocation({ location }) {
    return (
        <iframe src={location} className="border-0 lg:aspect-square 2xl:h-full lg:w-full h-full w-full" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    )
}