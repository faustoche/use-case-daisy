// Affichage de la liste des ateliers du jour 

import Link from "next/link";
import { Workshop } from "@/types";

interface WorkshopListProps {
	workshop: Workshop;
}

export function WorkshopList({ workshop }: WorkshopListProps) {
	return (
		<Link href={`/workshop/${workshop.id}`} className="block p-4 border rounded">
			<h2>{workshop.title}</h2>
			<p>{workshop.time}</p>
			<p>{workshop.place}</p>
			<p>{workshop.participants.length} / {workshop.max_participants} participants</p>
		</Link>
	)
}