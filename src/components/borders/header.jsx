import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import HeaderBackground from '../cards/headerBackground'

export default function Header() {
	const { scrollY } = useScroll()
	const y = useTransform(scrollY, [0, 500], [0, 150])
	const opacity = useTransform(scrollY, [0, 300], [1, 0])

	return (
		<HeaderBackground>
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
			</motion.div>
		</HeaderBackground>
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
