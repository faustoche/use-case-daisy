// On liste les participants sur la page de détail de l'atelier

"use client";

import { useState } from "react";
import { Participant } from "@/types";
import ParticipantStatus from "./ParticipantStatus";
import { updateParticipantStatus } from "@/lib/actions";

interface ParticipantRowProps {
	participant: Participant;
	workshopId: number;
}

export function ParticipantRow({ participant, workshopId }: ParticipantRowProps) {
	
	const [currentStatus, setCurrentStatus] = useState(participant.status);
	
	const handleAction = () => {
		setCurrentStatus("present");
		updateParticipantStatus(workshopId, participant.id, "present");
	}
	
	return (
		<div className="flex justify-between items-center p-3 border-b">
			<p>{participant.name} {participant.first_name}</p>
			<ParticipantStatus status={currentStatus} />
			<button onClick={handleAction}>Présent</button>
		</div>
	)
}