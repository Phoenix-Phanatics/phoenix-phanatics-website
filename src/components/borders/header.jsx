import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Header() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 150])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden" id="home">
            {/* Animated background with parallax */}
            <motion.div 
                className="absolute inset-0 bg-cover bg-center bg-[url(../images/future.jpg)] filter-[hue-rotate(90deg)] opacity-30 bg-fixed"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />
            
            {/* Gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-main-bg" />
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />
            
            {/* Animated particles in background */}
            <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-fire-orange rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.4, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </motion.div>

            {/* Main hero content */}
            <motion.div 
                className="relative z-10 flex flex-col items-center justify-center gap-8 px-6"
                style={{ y, opacity }}
            >
                {/* Team number with badge style */}
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                    <div className="backdrop-blur-md bg-white/5 border border-fire-orange/30 rounded-full px-8 py-3 shadow-2xl shadow-fire-orange/20">
                        <span className="text-fire-orange font-bold text-xl md:text-2xl tracking-wider">
                            TEAM 11104
                        </span>
                    </div>
                </motion.div>

                {/* Main title with enhanced fire effect */}
                <PhoenixTitle delay={0.6} />    

                {/* Subtitle/tagline */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
                    className="text-center"
                >
                    <p className="text-gray-300 text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-2xl">
                        A FIRST Robotics Team based in East Brunswick, NJ
                    </p>
                </motion.div>

                {/* Scroll indicator */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-fire-orange/70 text-sm uppercase tracking-widest">Scroll</span>
                        <svg className="w-6 h-6 text-fire-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div> */}
            </motion.div>
        </div>
    )
}

function PhoenixTitle({ delay }) {
    const [embers, setEmbers] = useState([])

    useEffect(() => {
        // Create ember particles
        const emberArray = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 3,
            drift: (Math.random() - 0.5) * 60
        }))
        setEmbers(emberArray)
    }, [])

    return (
        <div className="fire-container relative">
            {/* Enhanced fire base effect */}
            {/* <motion.div 
                className="fire-base"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ delay: delay + 0.3, duration: 1 }}
            /> */}
            
            {/* Ember particles */}
            {embers.map(ember => (
                <motion.div
                    key={ember.id}
                    className="ember"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + ember.delay * 0.5 }}
                    style={{
                        left: `${ember.left}%`,
                        bottom: '-20px',
                        animationDelay: `${ember.delay}s`,
                        '--drift': `${ember.drift}px`
                    }}
                />
            ))}
            
            {/* Phoenix text with enhanced animation */}
            <motion.h1 
                className="phoenix-text 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center sm:px-12 px-6 py-8 font-black tracking-tight"
                style={{
                    background: 'linear-gradient(135deg, #FF4500 0%, #FF6B35 25%, #FFD23F 50%, #C41E3A 75%, #FF4500 100%)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
                initial={{ 
                    y: 150, 
                    opacity: 0, 
                    scale: 0.5,
                    rotateX: 90
                }}
                animate={{ 
                    y: 0, 
                    opacity: 1, 
                    scale: 1,
                    rotateX: 0,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                    y: { duration: 1.2, delay, ease: [0.6, -0.05, 0.01, 0.99] },
                    opacity: { duration: 1.2, delay, ease: "easeOut" },
                    scale: { duration: 1.2, delay, ease: [0.6, -0.05, 0.01, 0.99] },
                    rotateX: { duration: 1.2, delay, ease: "easeOut" },
                    backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear", delay: delay + 1 }
                }}
            >
                Phoenix Phanatics
            </motion.h1>
        </div>
    )
}