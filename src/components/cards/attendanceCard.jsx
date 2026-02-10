import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { supabase } from '../../supabaseClient';

export default function AttendanceCard() {
	const [name, setName] = useState('');
	const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
	const [logs, setLogs] = useState([]);
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => { fetchLogs() }, []);

	const fetchLogs = async () => {
		const { data } = await supabase
			.from('attendance')
			.select('*')
			.order('check_in', { ascending: false });
		if (data) setLogs(data);
	};

	const handleCheckIn = async (e) => {
		e.preventDefault();
		if (!name || isSubmitting) return;

		setIsSubmitting(true);
		const { error } = await supabase.from('attendance').insert([
			{ student_name: name, check_in: date }
		]);

		if (error) {
			alert(`Error: ${error.message}`);
		} else {
			setName('');
			fetchLogs();
		}
		setIsSubmitting(false);
	};

	const deleteLog = async (id) => {
		if (!window.confirm("Are you sure?")) return;

		const { error } = await supabase
			.from('attendance')
			.delete()
			.eq('id', id);

		if (!error) fetchLogs();
	};

	const exportToCSV = () => {
		if (logs.length === 0) return;

		const headers = ["Student Name", "Date Recorded"];
		const rows = logs.map(log => [log.student_name, log.check_in]);

		const csvContent = [headers, ...rows]
			.map(e => e.join(","))
			.join("\n");

		const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.setAttribute("href", url);
		link.setAttribute("download", `robotics_attendance_${date}.csv`);
		link.click();
	};

	return (
		<Card className="w-full max-w-4xl relative z-50 pointer-events-auto">
			<CardHeader className="border-b border-main-shadow/50 pb-8">
				<div className="flex justify-between items-start">
					<div>
						<CardTitle className="text-5xl">Attendance</CardTitle>
					</div>
					<button
						onClick={exportToCSV}
						className="text-xs font-bold uppercase tracking-widest text-violet border border-violet/30 px-4 py-2 rounded-lg hover:bg-violet/10 transition-all"
					>
						Export CSV
					</button>
				</div>

				<form onSubmit={handleCheckIn} className="flex flex-wrap gap-4 mt-8" onClick={(e) => e.stopPropagation()}>
					<input
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="flex-1 min-w-[200px] p-3 rounded-xl bg-black border border-main-shadow text-white outline-none focus:ring-1 focus:ring-fire-orange"
					/>
					<input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						className="p-3 rounded-xl bg-black border border-main-shadow text-white outline-none focus:ring-1 focus:ring-violet"
					/>
					<button
						type="submit"
						disabled={isSubmitting}
						className="px-8 py-3 bg-gradient-to-r from-fire-red to-fire-orange rounded-xl font-bold text-white shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 transition-all"
					>
						{isSubmitting ? 'Submitting...' : 'Submit'}
					</button>
				</form>
			</CardHeader>

			<CardContent className="p-0">
				<div className="max-h-[400px] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
					<table className="w-full text-left">
						<thead className="sticky top-0 bg-secondary-bg border-b border-main-shadow text-gray-500 text-[10px] uppercase tracking-[0.2em]">
							<tr>
								<th className="px-8 py-4">Name</th>
								<th className="px-8 py-4 text-right">Date</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-main-shadow/20">
							{logs.map((log) => (
								<tr key={log.id} className="hover:bg-white/[0.02] transition-colors">
									<td className="px-8 py-5 text-gray-200 font-medium">
										<button
											onClick={() => deleteLog(log.id)}
											className="hover:text-red-600 transition-colors mr-4"
										>
											{log.student_name}
										</button>
									</td>
									<td className="px-8 py-5 text-right font-mono text-violet/60 text-sm">
										{log.check_in}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</CardContent>
		</Card>
	);
}
