import HeaderBackground from '../components/cards/headerBackground'
import AdminLoginCard from '../components/cards/adminLogin'
import { useNavigate } from 'react-router-dom'

function Admin() {
	const navigate = useNavigate()

	return (
		<HeaderBackground>
			<div className="relative z-10">
				<AdminLoginCard onLoginSuccess={() => navigate('/attendance')} />
			</div>
		</HeaderBackground>
	)
}

export default Admin
