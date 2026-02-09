import { motion } from 'framer-motion'

function HeaderBackground({ children }) {
	return (
		<div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black" id="home">
			<motion.div
				className="absolute inset-0 bg-cover bg-center bg-[url(../images/future.jpg)] filter-[hue-rotate(90deg)] opacity-30 bg-fixed"
				initial={{ scale: 1.2, opacity: 0 }}
				animate={{ scale: 1, opacity: 0.3 }}
				transition={{ duration: 2, ease: "easeOut" }}
			/>

			<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-main-bg" />
			<div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />

			<motion.div
				className="absolute inset-0 pointer-events-none"
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

			{children}
		</div>
	)
}

export default HeaderBackground;
