// Sans base de données, je crée de fausse data pour tester

// J'importe les types que je viens de créer
// alia @/ pour éviter les chemins relatifs trop longs 
import { Workshop } from "@/types";

export const WorkshopMock: Workshop[] = [
	{
		id: 1,
		title: "Crochet - Débutant",
		time: "10:00 - 11:00",
		place: "Workshop A",
		max_participants: 5,
		participants: [
			{ id: 1, name: "Marie", first_name: "Martin", status: "pending" },
			{ id: 2, name: "Léo", first_name: "Botrel", status: "present" },
			{ id: 3, name: "Dominique", first_name: "Souchon", status: "present" },
			{ id: 4, name: "Émeline", first_name: "Baugé", status: "absent" },
			{ id: 5, name: "Manon", first_name: "Cortot", status: "pending" },
		]
	},
	{
		id: 2,
		title: "Crochet - Avancée",
		time: "10:00 - 11:00",
		place: "Workshop B",
		max_participants: 5,
		participants: [
			{ id: 1, name: "Axel", first_name: "Carpentier", status: "absent" },
			{ id: 2, name: "Clémence", first_name: "Léger", status: "pending" },
			{ id: 3, name: "Alexia", first_name: "Duval", status: "present" },
			{ id: 4, name: "Marc", first_name: "Prudhomme", status: "absent" },
			{ id: 5, name: "Lou", first_name: "Fouché", status: "pending" },
		]
	},
	{
		id: 3,
		title: "Tricot - Débutant",
		time: "15:00 - 17:00",
		place: "Workshop A",
		max_participants: 5,
		participants: [
			{ id: 1, name: "Maxence", first_name: "Mignot", status: "pending" },
			{ id: 2, name: "Cassandre", first_name: "Maubert", status: "present" },
			{ id: 3, name: "Léna", first_name: "Le Tutour", status: "present" },
			{ id: 4, name: "Faustine", first_name: "Crocq", status: "absent" },
			{ id: 5, name: "Elsa", first_name: "Périer", status: "present" },
		]
	},
	{
		id: 4,
		title: "Tricot - Avancée",
		time: "15:00 - 17:00",
		place: "Workshop B",
		max_participants: 5,
		participants: [
			{ id: 1, name: "Sophie", first_name: "Bubost", status: "absent" },
			{ id: 2, name: "Jean", first_name: "Mazet", status: "absent" },
			{ id: 3, name: "Bruno", first_name: "Regnard", status: "present" },
			{ id: 4, name: "Yann", first_name: "Asselin", status: "absent" },
			{ id: 5, name: "Sarah", first_name: "Calleau", status: "pending" },
		]
	}
];