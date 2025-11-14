import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { Separator } from '../ui/separator'
import { Badge } from '../ui/badge'
import { Subheader, Paragraph } from "../ui/general";

export default function FRC() {
    return (
        <motion.div
            className="2xl:row-span-2 2xl:col-span-1 xl:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <Card className="h-full hover:shadow-fire-orange/40 hover:scale-[1.02] transition-all duration-300 hover:border-fire-orange/50">
                <CardHeader>
                    <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle>FRC</CardTitle>
                        <Badge variant="outline">Robotics Competition</Badge>
                    </div>
                </CardHeader>
                <Separator className="mb-4" />
                <CardContent className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-gray-200 text-lg leading-relaxed">
                            FRC is an international robotics competition that facilitates both rivalry and community. Yearly, new competitions are created in order to challenge students in new and fun ways.
                        </p>
                    </motion.div>
                    
                    <Separator className="2xl:hidden" />
                    
                    <motion.div 
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-fire-orange/20 group">
                            <motion.iframe 
                                src="https://www.youtube.com/embed/YWbxcjlY9JY?si=vTzglWL9lwyPXuJ4" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                className="w-full aspect-video"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-fire-orange/50 rounded-xl transition-all duration-300 pointer-events-none" />
                        </div>
                        
                        <div className="bg-main-bg/50 p-4 rounded-lg border border-fire-orange/20">
                            <p className="text-gray-300 text-base leading-relaxed">
                                <span className="text-fire-orange font-semibold">2025 REEFSCAPE:</span> Teams were tasked with creating robots that could clean up metaphorical algae and coral in order to score points.
                            </p>
                        </div>
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

function FRCHeader({ children }) {
    return (
        <Subheader>{children}</Subheader>
    )
}

function FRCExplanation({ children }) {
    return (
        <Paragraph>{children}</Paragraph>
    )
}

function FRCVideo({ video }) {
    return (
        <motion.iframe 
            src={video} 
            title="YouTube video player" 
            frameBorder="0" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="my-4 2xl:w-15/16 sm:w-1/2 w-3/4 aspect-video rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        />
    );
}