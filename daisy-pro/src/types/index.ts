/**
 * Defining data forms
 * Declaring entities
 * Gathering data definitions used for the app
 */

// Participant can only be one of this 3 values
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
	date: string;
	start: string;
	end: string;
	place: string;
	max_participants: number;
	participants: Participant[];
}