"use server";

// Server action
// Fonctions asynchrones exécutées uniquement sur le serveur
// au lieu de faire une route api et un fetch
// on appelle les composants clients au clic


import { AttendanceStatus } from "@/types";

export async function updateParticipantStatus(workshopId: number, participantId: number, newStatus: AttendanceStatus) {

	// ici on met un settimout pour voir l'etat loading
	await new Promise ((resolve) => setTimeout(resolve, 1000));
	console.log(workshopId, participantId, newStatus);
	return { success: true }
}