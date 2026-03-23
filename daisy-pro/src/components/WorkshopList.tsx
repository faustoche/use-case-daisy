/**
 * Display workshop as cards
 */

import Link from "next/link";
import { Workshop } from "@/types";
import { ChevronRight, Calendar, Clock, MapPin, Users } from "lucide-react";

interface WorkshopListProps {
	workshop: Workshop;
	index: number;
}

export function WorkshopList({ workshop, index }: WorkshopListProps) {
	const isFull = workshop.participants.length >= workshop.max_participants;

	const color = index % 2 === 0 ? "border-l-daisy-primary" : "border-l-daisy-accent";
	const badgeColor = isFull
		? "bg-red-100 text-red-600"
		: "bg-purple-50 text-daisy-primary";

	return (
		<Link
			href={`/workshop/${workshop.id}`}
			className={`flex justify-between items-center p-4 rounded-xl border border-gray-100 border-l-4 ${color} shadow-sm bg-white hover:bg-daisy-bg/40 transition-colors duration-150`}
		>
			<div className="flex flex-col gap-2">
				<span className="text-base font-bold text-gray-900">{workshop.title}</span>

				<div className="flex items-center gap-2 text-gray-500">
					<Calendar className="w-3.5 h-3.5" />
					<span className="text-sm">{workshop.date}</span>
					<span className="text-gray-300">·</span>
					<Clock className="w-3.5 h-3.5" />
					<span className="text-sm">{workshop.start} – {workshop.end}</span>
				</div>

				<div className="flex items-center gap-2 text-gray-400 text-xs">
					<MapPin className="w-3.5 h-3.5" />
					<span>{workshop.place}</span>
				</div>

				<div className="flex items-center gap-2 mt-1">
					<span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${badgeColor}`}>
						<Users className="w-3 h-3" />
						{workshop.participants.length} / {workshop.max_participants}
					</span>
				</div>
			</div>
			<ChevronRight className="text-gray-300 flex-shrink-0" />
		</Link>
	);
}