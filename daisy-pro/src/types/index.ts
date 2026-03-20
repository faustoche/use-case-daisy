// On définit la forme de nos données
// On déclare des entités
// On centralise les définitions des données qu'on va utiliser tout au long du projet

// Attendance type
export type AttendanceStatus = "pending" | "present" | "absent"

// Participant interface
export interface Participant {
	id: number;
	name: string;
	first_name: string;
	status: AttendanceStatus;
}

// Workshop interface
export interface Workshop {
	id: number;
	title: string;
	time: string;
	place: string;
	max_participants: number;
	participants: Participant[];
}