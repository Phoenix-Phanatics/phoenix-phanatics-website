import { motion } from 'framer-motion'
import events from "../data/events"
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card'
import { Separator } from './components/ui/separator'
import { Badge } from './components/ui/badge'
import { Subheader } from "./general"

export default function Events() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const eventVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div
            className='h-full'
            id="events"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            <Card className="h-full flex flex-col hover:shadow-fire-orange/40 hover:scale-[1.01] transition-all duration-300 hover:border-fire-orange/50">
                <CardHeader>
                    <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle>Events</CardTitle>
                        <Badge variant="default">{events.length} Upcoming</Badge>
                    </div>
                </CardHeader>
                <Separator className="mb-6" />
                <CardContent className="flex-1 flex">
                    <motion.div 
                        className="flex justify-evenly items-center gap-6 w-full h-full"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {events.map((event) => 
                            <Event key={event.id} name={event.name} date={event.date} location={event.location} link={event.link} variants={eventVariants} />
                        )}
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

function Event({ name, date, location, link, variants }) {
    return (
        <motion.div
            variants={variants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="h-full flex"
        >
            <Card className="h-full w-full flex flex-col hover:shadow-fire-orange/50 hover:border-fire-orange/50 bg-main-bg/80">
                <CardContent className="p-4 flex flex-col gap-4 h-full">
                    <EventName name={name} link={link} />
                    <EventDate date={date} />
                    <div className="flex-1 min-h-[200px]">
                        <EventLocation location={location} />
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

function EventName({ name, link }) {
    return (
        <div className="flex items-center justify-center min-h-[3rem]">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <motion.h3 
                    className="text-fire-orange text-xl font-semibold text-center hover:text-fire-red transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    {name}
                </motion.h3>
            </a>
        </div>
    )
}

function EventDate({ date }) {
    return (
        <motion.div 
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <Badge variant="outline" className="text-base px-4 py-1">
                {date.month} {date.day}
            </Badge>
        </motion.div>
    )
}

function EventLocation({ location }) {
    return (
        <motion.div 
            className="w-full h-full rounded-lg overflow-hidden border border-fire-orange/20 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
        >
            <iframe 
                src={location} 
                className="w-full h-full min-h-[200px]" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location"
            />
        </motion.div>
    )
}