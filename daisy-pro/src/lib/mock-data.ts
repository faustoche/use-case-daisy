/**
 * Creating mockdata to avoid using database
 * Using @/ to avoid relative routes
 */

import { Workshop } from "@/types";

export const WorkshopMock: Workshop[] = [
	{
		id: 1,
		title: "Initiation au tour de potier",
		date: "Lun. 23 mars 2026",
		start: "09h00",
		end: "11h00",
		place: "Studio des Tours",
		max_participants: 5,
		participants: [
			{ id: 101, name: "Martin", first_name: "Marie", status: "present" },
			{ id: 102, name: "Botrel", first_name: "Léo", status: "pending" },
			{ id: 103, name: "Souchon", first_name: "Dominique", status: "pending" },
			{ id: 104, name: "Baugé", first_name: "Émeline", status: "present" },
			{ id: 105, name: "Cortot", first_name: "Manon", status: "pending" },
		]
	},
	{
		id: 2,
		title: "Atelier libre: pratique autonome",
		date: "Lun. 23 mars 2026",
		start: "10h00",
		end: "13h00",
		place: "Atelier Principal",
		max_participants: 25,
		participants: [
			{ id: 106, name: "Carpentier", first_name: "Axel", status: "pending" },
			{ id: 107, name: "Léger", first_name: "Clémence", status: "present" },
			{ id: 108, name: "Duval", first_name: "Alexia", status: "pending" },
			{ id: 109, name: "Prudhomme", first_name: "Marc", status: "present" },
			{ id: 110, name: "Fouché", first_name: "Lou", status: "pending" },
			{ id: 111, name: "Morel", first_name: "Julien", status: "present" },
			{ id: 112, name: "Renaud", first_name: "Sophie", status: "present" },
			{ id: 113, name: "Giraud", first_name: "Thomas", status: "present" },
			{ id: 114, name: "Blanchard", first_name: "Camille", status: "pending" },
			{ id: 115, name: "Barbier", first_name: "Lucas", status: "pending" },
			{ id: 116, name: "Chevalier", first_name: "Emma", status: "pending" },
			{ id: 117, name: "Perrin", first_name: "Nathan", status: "pending" },
			{ id: 118, name: "Marchand", first_name: "Chloé", status: "present" },
			{ id: 119, name: "Colin", first_name: "Hugo", status: "pending" },
			{ id: 120, name: "Leclerc", first_name: "Manon", status: "present" },
		]
	},
	{
		id: 3,
		title: "Poterie en famille: duo parent-enfant",
		date: "Lun. 23 mars 2026",
		start: "14h00",
		end: "15h30",
		place: "Salle de Modelage",
		max_participants: 6,
		participants: [
			{ id: 121, name: "Maubert", first_name: "Maxence", status: "present" },
			{ id: 122, name: "Maubert", first_name: "Cassandre", status: "present" },
			{ id: 123, name: "Crocq", first_name: "Léna", status: "present" },
			{ id: 124, name: "Crocq", first_name: "Faustine", status: "present" },
			{ id: 125, name: "Périer", first_name: "Elsa", status: "present" },
			{ id: 126, name: "Périer", first_name: "Mathilde", status: "present" },
		]
	},
	{
		id: 4,
		title: "Modelage: création de tasses",
		date: "Lun. 23 mars 2026",
		start: "16h00",
		end: "18h00",
		place: "Salle de Modelage",
		max_participants: 5,
		participants: [
			{ id: 126, name: "Bubost", first_name: "Sophie", status: "pending" },
			{ id: 127, name: "Mazet", first_name: "Jean", status: "present" },
			{ id: 128, name: "Regnard", first_name: "Bruno", status: "present" },
			{ id: 129, name: "Asselin", first_name: "Yann", status: "pending" },
			{ id: 130, name: "Calleau", first_name: "Sarah", status: "pending" },
		]
	},
	{
		id: 5,
		title: "Émaillage et décors colorés",
		date: "Lun. 23 mars 2026",
		start: "18h30",
		end: "20h30",
		place: "Studio des Émaux",
		max_participants: 5,
		participants: [
			{ id: 131, name: "Rousseau", first_name: "Alice", status: "pending" },
			{ id: 132, name: "Garnier", first_name: "Paul", status: "present" },
			{ id: 133, name: "Fabre", first_name: "Juliette", status: "pending" },
			{ id: 134, name: "Vidal", first_name: "Antoine", status: "pending" },
			{ id: 135, name: "Blanc", first_name: "Claire", status: "pending" },
		]
	}
];