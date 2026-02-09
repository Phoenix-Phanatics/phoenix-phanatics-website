import HeaderBackground from '../components/cards/headerBackground'
import AdminLoginCard from '../components/cards/adminLogin'

function Admin() {
	return (
		<HeaderBackground>
			<div className="relative z-10">
				<AdminLoginCard />
			</div>
		</HeaderBackground>
	)
}

export default Admin
