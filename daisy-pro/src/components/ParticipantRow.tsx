// On liste les participants sur la page de détail de l'atelier

import { Participant } from "@/types";
import ParticipantStatus from "./ParticipantStatus";

interface ParticipantRowProps {
	participant: Participant;
}

export function ParticipantRow({ participant }: ParticipantRowProps) {
	return (
		<div className="flex justify-between items-center p-3 border-b">
			<p>{participant.name} {participant.first_name}</p>
			<ParticipantStatus status={participant.status} />
		</div>
	)
}