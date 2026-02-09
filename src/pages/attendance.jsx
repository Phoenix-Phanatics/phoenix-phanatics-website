import HeaderBackground from '../components/cards/headerBackground'
import AttendanceCard from '../components/cards/attendanceCard'

function Attendance() {
	return (
		<HeaderBackground>
			<div className="relative z-10">
				<AttendanceCard />
			</div>
		</HeaderBackground>
	)
}

export default Attendance
