import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import HeaderBackground from '../components/cards/headerBackground'
import AttendanceCard from '../components/cards/attendanceCard'

function Attendance() {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const checkAuth = async () => {
			const { data: { session } } = await supabase.auth.getSession()

			if (!session) {
				navigate('/')
			} else {
				setLoading(false)
			}
		}

		checkAuth()
	}, [navigate])

	if (loading) {
		return null
	}

	return (
		<HeaderBackground>
			<div className="relative z-10">
				<AttendanceCard />
			</div>
		</HeaderBackground>
	)
}

export default Attendance
