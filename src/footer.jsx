import { motion } from 'framer-motion'
import { Separator } from './components/ui/separator'
import columns from "../data/columns";

export default function Footer() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const columnVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <motion.footer 
            className="w-full bg-secondary-bg/80 backdrop-blur-sm border-t-2 border-fire-orange/30" 
            id="socials"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-wrap items-start justify-around gap-8">
                    {columns.map((column, i) => (
                        <Column column={column.links} key={i} variants={columnVariants}>
                            {column.header}
                        </Column>
                    ))}
                </div>
                
                <Separator className="my-6" />
                
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <p className="text-gray-400 text-sm">
                        © 2025 Phoenix Phanatics - Team 11104. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    )
}

function Column({ column, children, variants }) {
    return (
        <motion.div 
            className="flex flex-col items-center gap-3 min-w-[150px]"
            variants={variants}
        >
            <ColumnHeader>{children}</ColumnHeader>
            <div className="flex flex-col gap-2">
                {column.map((link, i) => (
                    <ColumnLink key={i} name={link.name} link={link.link} />
                ))}
            </div>
        </motion.div>
    )
}

function ColumnHeader({ children }) {
 return (
    <motion.h3 
        className="text-xl font-bold bg-gradient-to-r from-fire-red to-fire-orange bg-clip-text text-transparent cursor-default"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
    >
        {children}
    </motion.h3>
 )
}

function ColumnLink({ name, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="group">
            <motion.p 
                className="text-gray-300 text-base text-center group-hover:text-violet transition-colors"
                whileHover={{ scale: 1.1, x: 5 }}
                transition={{ duration: 0.2 }}
            >
                {name}
            </motion.p>
        </a>
    )
}