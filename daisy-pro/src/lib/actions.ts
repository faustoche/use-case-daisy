"use server";

/**
 * "use server": code is only in server, not in navigator
 * Async function are executed only on server instead of api and fetch
 * Calling composants when click
 */

import { AttendanceStatus } from "@/types";

export async function updateParticipantStatus(workshopId: number, participantId: number, newStatus: AttendanceStatus) {

	// Using timeout to wait 1sec to simulate slow network
	await new Promise ((resolve) => setTimeout(resolve, 1000));
	//throw new Error("Simulate network error");
	console.log(workshopId, participantId, newStatus);
	return { success: true }
}