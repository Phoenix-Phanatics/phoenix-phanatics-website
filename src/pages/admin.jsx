import HeaderBackground from '../components/cards/headerBackground'
import { Card } from '../components/ui/card'

function Admin() {
	return (
		<HeaderBackground>
			<Card title="Admin Dashboard" className="w-full max-w-4xl p-8">
				<p className="text-gray-300">Admin Dashboard</p>
			</Card>
		</HeaderBackground>
	)
}

export default Admin
