/**
 * Creating mockdata to avoid using database
 * Using @/ to avoid relative routes
 */

import { Workshop } from "@/types";

export const WorkshopMock: Workshop[] = [
	{
		id: 1,
		title: "Crochet - Débutant",
		date: "Dim. 26 avril 2026",
		start: "10h00",
		end: "11h00",
		place: "Workshop A",
		max_participants: 5,
		participants: [
			{ id: 1, name: "Marie", first_name: "Martin", status: "pending" },
			{ id: 2, name: "Léo", first_name: "Botrel", status: "pending" },
			{ id: 3, name: "Dominique", first_name: "Souchon", status: "pending" },
			{ id: 4, name: "Émeline", first_name: "Baugé", status: "pending" },
			{ id: 5, name: "Manon", first_name: "Cortot", status: "pending" },
		]
	},
	{
		id: 2,
		title: "Crochet - Avancée",
		date: "Lun. 27 avril 2026",
		start: "10h00",
		end: "11h00",
		place: "Workshop B",
		max_participants: 25,
		participants: [
			{ id: 1, name: "Axel", first_name: "Carpentier", status: "pending" },
			{ id: 2, name: "Clémence", first_name: "Léger", status: "pending" },
			{ id: 3, name: "Alexia", first_name: "Duval", status: "pending" },
			{ id: 4, name: "Marc", first_name: "Prudhomme", status: "pending" },
			{ id: 5, name: "Lou", first_name: "Fouché", status: "pending" },
			{ id: 6, name: "Julien", first_name: "Morel", status: "pending" },
			{ id: 7, name: "Sophie", first_name: "Renaud", status: "pending" },
			{ id: 8, name: "Thomas", first_name: "Giraud", status: "pending" },
			{ id: 9, name: "Camille", first_name: "Blanchard", status: "pending" },
			{ id: 10, name: "Lucas", first_name: "Barbier", status: "pending" },
			{ id: 11, name: "Emma", first_name: "Chevalier", status: "pending" },
			{ id: 12, name: "Nathan", first_name: "Perrin", status: "pending" },
			{ id: 13, name: "Chloé", first_name: "Marchand", status: "pending" },
			{ id: 14, name: "Hugo", first_name: "Colin", status: "pending" },
			{ id: 15, name: "Manon", first_name: "Leclerc", status: "pending" },
		]
	},
	{
		id: 3,
		title: "Tricot - Débutant",
		date: "Mar. 28 avril 2026",
		start: "10h00",
		end: "11h00",
		place: "Workshop A",
		max_participants: 5,
		participants: [
			{ id: 1, name: "Maxence", first_name: "Mignot", status: "pending" },
			{ id: 2, name: "Cassandre", first_name: "Maubert", status: "pending" },
			{ id: 3, name: "Léna", first_name: "Le Tutour", status: "pending" },
			{ id: 4, name: "Faustine", first_name: "Crocq", status: "pending" },
			{ id: 5, name: "Elsa", first_name: "Périer", status: "pending" },
		]
	},
	{
		id: 4,
		title: "Tricot - Avancée",
		date: "Mer. 29 avril 2026",
		start: "10h00",
		end: "11h00",
		place: "Workshop B",
		max_participants: 5,
		participants: [
			{ id: 1, name: "Sophie", first_name: "Bubost", status: "pending" },
			{ id: 2, name: "Jean", first_name: "Mazet", status: "pending" },
			{ id: 3, name: "Bruno", first_name: "Regnard", status: "pending" },
			{ id: 4, name: "Yann", first_name: "Asselin", status: "pending" },
			{ id: 5, name: "Sarah", first_name: "Calleau", status: "pending" },
		]
	}
];