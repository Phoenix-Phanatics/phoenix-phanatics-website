import { motion } from 'framer-motion'
import sponsors from "../data/sponsors"
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card'
import { Separator } from './components/ui/separator'
import { Badge } from './components/ui/badge'
import { Subheader } from "./general"

export default function Sponsors() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const sponsorVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    }
    
    const sponsorList = sponsors.map((sponsor, i) => 
        <Sponsor key={i} name={sponsor.name} image={sponsor.image} variants={sponsorVariants} />
    )

    return (
        <motion.div
            className="2xl:col-span-2 2xl:row-span-1 2xl:row-start-2 2xl:col-start-1 xl:row-span-2 xl:row-start-1 xl:col-start-3 row-start-3"
            id="sponsors"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <Card className="h-full overflow-y-auto hover:shadow-violet/40 hover:scale-[1.02] transition-all duration-300 hover:border-violet/50">
                <CardHeader>
                    <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle>Sponsors</CardTitle>
                        <Badge variant="secondary">{sponsors.length} Partners</Badge>
                    </div>
                </CardHeader>
                <Separator className="mb-4" />
                <CardContent>
                    <motion.div 
                        className="flex 2xl:flex-row xl:flex-col flex-row flex-wrap gap-6 items-center justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {(sponsorList.length > 0) ? sponsorList : <Sponsorless>We currently have no sponsors, but if you are interested please reach out at the email provided below!</Sponsorless>}
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

function SponsorHeader({ children }) {
    return (
        <Subheader className="pb-2">{children}</Subheader>
    )
}

function Sponsorless({ children }) {
    return (
        <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <p className="text-fire-orange text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                {children}
            </p>
        </motion.div>
    )
}

function Sponsor({ name, image, variants }) {
    return (
        <motion.div 
            variants={variants}
            whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0]
            }}
            transition={{ duration: 0.3 }}
            className="group"
        >
            <Card className="aspect-square w-40 sm:w-48 md:w-52 p-6 flex items-center justify-center cursor-pointer hover:shadow-fire-red/50 hover:border-fire-red/50 transition-all bg-main-bg/80">
                <SponsorImage name={name} image={image} />
            </Card>
        </motion.div>
    )
}

function SponsorImage({name, image}) {
    return (
        <motion.img 
            src={image} 
            alt={`${name} Logo`} 
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        />
    )
}

function DeleteButton() {
    return (
        <div className="flex justify-end items-end sm:mt-0 mt-2">
            <a href="./style.css" download> 
                <button className="text-1xl text-center text-white cursor-pointer bg-main-bg p-3 rounded-2xl shadow shadow-main-shadow hover:bg-[#1a1a1a] active:bg-[#1f1f1f] transition duration-300 ease-in-out">Sponsorship Packet</button>
            </a>
        </div>
    )
}