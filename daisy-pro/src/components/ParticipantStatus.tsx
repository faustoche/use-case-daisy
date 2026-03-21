import { AttendanceStatus } from "@/types";

// On construit l'interface
//  On doit définir la forme du bouton que le composant va recevoir

// Création d'une interface
// On lui donne le status lié à l'attendance status
interface ParticipantStatusProps {
	status: AttendanceStatus;
}

export default function ParticipantStatus({ status }: ParticipantStatusProps) {
	let dynamicColor;
	let label;
	
	switch (status) {
		case "pending":
			dynamicColor = "bg-orange-500 text-white";
			label = "pending";
			break;
		case "absent":
			dynamicColor = "bg-red-500 text-white";
			label = "absent";
			break;
		case "present":
			dynamicColor = "bg-green-500 text-white";
			label = "present";
			break;
	}

	return (
		<span className={`px-2 py-1 rounded-md text-sm font-bold ${dynamicColor}`}>{label}</span>
	);
}