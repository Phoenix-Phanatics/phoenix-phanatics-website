import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter
} from '../ui/card';

const AdminLoginCard = ({ onLoginSuccess }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (authError) {
			setError(authError.message);
			setLoading(false);
			return;
		}

		const { data: profile, error: profileError } = await supabase
			.from('profiles')
			.select('role')
			.eq('id', authData.user.id)
			.single();

		if (profileError || profile?.role !== 'admin') {
			await supabase.auth.signOut();
			setError("Unauthorized: You do not have admin privileges.");
			setLoading(false);
			return;
		}

		setLoading(false);
		if (onLoginSuccess) onLoginSuccess();
	};

	return (
		<Card className="max-w-md w-full mx-auto">
			<CardHeader>
				<CardTitle>Admin Login</CardTitle>
			</CardHeader>

			<form onSubmit={handleLogin}>
				<CardContent className="space-y-4">
					<div className="flex flex-col space-y-2">
						<label className="text-sm font-medium text-gray-400">Email Address</label>
						<input
							type="email"
							required
							className="p-3 rounded-xl bg-[#1a1a1a] border border-main-shadow text-white focus:outline-none focus:ring-2 focus:ring-fire-orange transition-all"
							placeholder="placeholder@gmail.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="flex flex-col space-y-2">
						<label className="text-sm font-medium text-gray-400">Password</label>
						<input
							type="password"
							required
							className="p-3 rounded-xl bg-[#1a1a1a] border border-main-shadow text-white focus:outline-none focus:ring-2 focus:ring-violet transition-all"
							placeholder="••••••••"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					{error && (
						<div className="p-3 rounded-lg bg-red-900/20 border border-red-500/50 text-red-400 text-sm">
							{error}
						</div>
					)}
				</CardContent>

				<CardFooter>
					<button
						type="submit"
						disabled={loading}
						className="w-full py-3 px-4 rounded-xl font-bold text-white transition-all duration-300 
                       bg-gradient-to-r from-fire-red to-violet hover:opacity-90 disabled:opacity-50
                       shadow-lg shadow-fire-red/20 active:scale-[0.98]"
					>
						{loading ? "Authenticating..." : "Establish Connection"}
					</button>
				</CardFooter>
			</form>
		</Card>
	);
};

export default AdminLoginCard;
