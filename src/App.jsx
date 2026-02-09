import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Admin from './pages/admin'
import Attendance from './pages/attendance'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/attendance" element={<Attendance />} />
			</Routes>
		</Router>
	)
}

export default App
