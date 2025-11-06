import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card'
import { Separator } from './components/ui/separator'
import { Badge } from './components/ui/badge'
import { Subheader, Item } from "./general"

export default function About() {
    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return ( 
        <motion.div
            className="xl:col-span-2 2xl:row-start-1 row-start-2 scroll-mt-28" 
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <Card className="h-full hover:shadow-fire-red/40 hover:scale-[1.02] transition-all duration-300 hover:border-fire-red/50">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <CardTitle>About Us</CardTitle>
                        <Badge variant="default">Team 11104</Badge>
                    </div>
                </CardHeader>
                <Separator className="mb-4" />
                <CardContent>
                    <List variants={listVariants}>
                        <ListItem id={1} variants={itemVariants}>We are a community team based out of the general Middlesex County Area.</ListItem>
                        <ListItem id={2} variants={itemVariants}>We are a First Robotics Competition (FRC) team who compete within the First Mid-Atlantic (FMA) district.</ListItem>
                        <ListItem id={3} variants={itemVariants}>Our team was founded between the 2025 and 2026 seasons.</ListItem>
                        <ListItem id={4} variants={itemVariants}>The goal of our team is to teach robotics to those who may have not been able to in their own schools. We hope to spread the love of robitcs and competition that FRC inspires.</ListItem>
                    </List>
                </CardContent>
            </Card>
        </motion.div>
     );
}

function ListItem({ id, children, variants }) {
    return (
        <motion.div variants={variants} className="flex items-start gap-3 group">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-fire-red to-violet text-white font-bold text-sm shadow-lg shadow-fire-red/30 group-hover:scale-110 transition-transform">
                {id}
            </span>
            <p className="text-gray-200 text-lg leading-relaxed flex-1">{children}</p>
        </motion.div>
    )
}

function List({ children, variants }) {
    return (
        <motion.div 
            className="flex flex-col gap-6"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {children}
        </motion.div>
    )
}