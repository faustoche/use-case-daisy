//

import { WorkshopMock } from "@/lib/mock-data";
import { ParticipantRow } from "@/components/ParticipantRow";
import { EmptyState } from "@/components/StatusViews";

interface PageProps {
	params: { id: string };
}

export default async function WorkshopDetails({ params }: PageProps) {
	const currentId = params.id;

	const data = WorkshopMock.find(item => item.id === Number(currentId));

	if (!data) {
		return <EmptyState message="Atelier introuvable" />
	}

	return (
		<main className="p-4">
			<h1>{data.title}</h1>
			{data.participants.map((participant) => (
				<ParticipantRow key={participant.id} participant={participant} />
			))}
		</main>
	);
}