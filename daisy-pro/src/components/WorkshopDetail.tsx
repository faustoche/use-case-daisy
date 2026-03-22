"use client";

import { useState } from "react";
import { Workshop } from "@/types";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Check } from "lucide-react";
import Link from "next/link";

interface Props {
  data: Workshop;
}

// Détail pour chaque atelier
export function WorkshopDetailClient({ data }: Props) {

	// UseState va permettre de mémoriser une valeur c'est un hook
	// present = liste des ids des participants présents
	// setPresent = fonction pour modfiier la liste 
	// [] = valeur de départ avec une liste vide
	const [present, setPresent] = useState<number[]>([]);

	const countAsPresent = (id: number) => {

		// Est-ce que l'id est dans la liste?
		// pas de push id en react
		// si oui -> je garde tous les participants sauf celui qu'on ne veut pas
		// Sinon fait une copie de la liste (on prend tout avec ...)
		
		if (present.includes(id)) {
			const newList = present.filter(participant => participant !== id);
			setPresent(newList);
		} else {
			const newList = [...present, id];
			setPresent(newList);
		}
	};

	const presentCount = present.length;
	const total = data.participants.length;

	return (
		<main className="flex flex-col min-h-screen">

			<header className="bg-daisy-primary px-4 py-4 shadow-md">
				<div className="flex items-center gap-3 mb-4">
				<Link href="/" className="text-white/70 hover:text-white transition-colors">
					<ArrowLeft className="w-5 h-5" />
				</Link>
				<h1 className="text-white font-bold text-lg leading-tight flex-1">{data.title}</h1>
				</div>

				<div className="flex flex-col gap-1.5">
				<div className="flex items-center gap-2 text-white/80 text-sm">
					<Calendar className="w-4 h-4" />
					<span>{data.date}</span>
					<span className="text-white/40">·</span>
					<Clock className="w-4 h-4" />
					<span>{data.start} – {data.end}</span>
				</div>
				<div className="flex items-center gap-2 text-white/80 text-sm">
					<MapPin className="w-4 h-4" />
					<span>{data.place}</span>
				</div>
				</div>
			</header>


			<div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
				<div className="flex items-center gap-2 text-sm text-gray-600">
				<Users className="w-4 h-4" />
				<span><span className="font-bold text-daisy-accent">{presentCount}</span> / {total} présents</span>
				</div>

				<div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
				<div className="h-full bg-daisy-accent rounded-full transition-all duration-300" style={{ width: total > 0 ? `${(presentCount / total) * 100}%` : "0%" }}/>
				</div>
			</div>

			<section className="px-4 py-4 flex flex-col gap-2 bg-white flex-1">
				{data.participants.map((participant, index) => {

				const isPresent = present.includes(participant.id);
				const color = index % 2 === 0 ? "border-l-daisy-primary" : "border-l-daisy-accent";

				return (
					<button key={participant.id} onClick={() => countAsPresent(participant.id)} className={`w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 border-l-4 ${color} shadow-sm text-left transition-colors duration-150 ${isPresent ? "bg-purple-50" : "bg-white"}`}>

					<div className="flex items-center gap-3">


						<div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors duration-150 ${isPresent ? "bg-daisy-primary text-white" : "bg-gray-100 text-gray-500"}`}>
							{participant.name[0]}{participant.first_name[0]}
						</div>

						<div>
						<p className="font-semibold text-gray-900 text-sm">
							{participant.name} {participant.first_name}
						</p>
						</div>
					</div>

					<div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-150 ${isPresent ? "bg-daisy-primary border-daisy-primary" : "border-gray-200 bg-white"}`}>
						{isPresent && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
					</div>
					</button>
				);
				})}
			</section>
		</main>
	);
}