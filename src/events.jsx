import events from "../data/events"

export default function Events() {
    return (
        <div className="xl:col-span-3 bg-secondary-bg p-6 rounded-3xl shadow shadow-main-shadow flex flex-col h-full" id="events">
            <EventHeader>Events</EventHeader>
            <hr className="my-2 text-white mb-6" />
            <div className="flex sm:flex-row flex-col gap-4 h-full items-center justify-evenly">
                {events.map((event) => 
                    <Event key={event.id} name={event.name} date={event.date} location={event.location}/>
                )}
            </div>
        </div>
    )
}

function EventHeader({ children }) {
    return (
        <h1 className="sm:text-6xl text-5xl text-center text-main-purple">{children}</h1>
    )
}

function Event({ name, date, location }) {
    return (
        <div className="flex flex-col h-full sm:gap-6 gap-2 items-center xl:justify-center sm:justify-between justify-center bg-main-bg shadow shadow-main-shadow p-4 rounded-3xl sm:max-h-full max-h-45">
            <EventName name={name} />
            <EventDate date={date} />
            <EventLocation location={location} />
        </div>
    )
}

function EventName({ name }) {
    return (
        <div className="sm:h-16 flex items-center">
            <p className="text-main-blue sm:text-2xl text-[1rem] text-center">{name}</p>
        </div>
    )
}

function EventDate({ date }) {
    return (
        <div className="sm:h-16 flex xl:flex-row sm:flex-col flex-row items-center xl:order-0 xl:mt-[-1.5rem] order-1">
            <p className="text-white sm:text-2xl text-[1rem] text-center">{date.month}</p>
            <p className="text-white sm:text-2xl text-[1rem] text-center sm:hidden xl:block block">&nbsp;</p>
            <p className="text-white sm:text-2xl text-[1rem] text-center">{date.day}</p>
        </div>
    )
}

function EventLocation({ location }) {
    return (
        <iframe src={location} className="border-0 lg:aspect-square 2xl:h-full lg:w-full sm:h-full sm:w-full aspect-auto w-full h-1/2" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    )
}