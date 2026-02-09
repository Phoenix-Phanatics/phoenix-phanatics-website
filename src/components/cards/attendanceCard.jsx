import React, { useState } from 'react';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent
} from '../ui/card';

function AttendanceCard() {
	const [attendance] = useState([
		{ id: 1, name: "Alex Rivera", team: "Programming", time: "4:30 PM" },
		{ id: 2, name: "Sam Chen", team: "Mechanical", time: "4:35 PM" },
		{ id: 3, name: "Jordan Smith", team: "CAD", time: "4:42 PM" },
		{ id: 4, name: "Evelyn Voss", team: "Electronics", time: "5:01 PM" },
	]);

	const stopPropa = (e) => e.stopPropagation();

	return (
		<Card className="w-full max-w-4xl relative z-50 pointer-events-auto">
			<CardHeader className="border-b border-main-shadow/50 pb-8">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
					<div>
						<CardTitle className="text-5xl">Attendance</CardTitle>
					</div>

					<div className="flex gap-2 w-full md:w-auto" onClick={stopPropa}>
						<input
							type="text"
							placeholder="Student Name..."
							onKeyDown={stopPropa}
							className="flex-1 md:w-64 p-3 rounded-xl bg-black border border-main-shadow text-sm focus:ring-1 focus:ring-fire-orange outline-none transition-all text-white"
						/>
						<button
							className="px-6 py-3 bg-gradient-to-r from-fire-red to-fire-orange rounded-xl font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-fire-red/20 text-white"
						>
							Check In
						</button>
					</div>
				</div>
			</CardHeader>

			<CardContent className="p-0" onClick={stopPropa}>
				<div className="max-h-[400px] overflow-y-auto custom-scrollbar">
					<table className="w-full text-left border-collapse">
						<thead className="sticky top-0 bg-secondary-bg z-20 shadow-sm">
							<tr className="text-gray-500 text-xs uppercase tracking-widest border-b border-main-shadow">
								<th className="px-8 py-4 font-semibold">Member</th>
								<th className="px-8 py-4 font-semibold">Department</th>
								<th className="px-8 py-4 font-semibold text-right">Timestamp</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-main-shadow/30">
							{attendance.map((entry) => (
								<tr key={entry.id} className="group hover:bg-white/[0.02] transition-colors">
									<td className="px-8 py-5 font-medium text-gray-200">{entry.name}</td>
									<td className="px-8 py-5">
										<span className="text-[10px] px-2 py-1 rounded border border-main-shadow bg-main-shadow/10 text-gray-400 uppercase">
											{entry.team}
										</span>
									</td>
									<td className="px-8 py-5 text-right font-mono text-violet/80 text-sm">
										{entry.time}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</CardContent>

			<div className="p-4 bg-main-shadow/5 border-t border-main-shadow text-center">
				<p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
					Total: <span className="text-fire-orange font-bold">{attendance.length}</span>
				</p>
			</div>
		</Card>
	);
}

export default AttendanceCard;
