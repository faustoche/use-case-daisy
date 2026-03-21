//

import { WorkshopMock } from "@/lib/mock-data";
import { WorkshopList } from "@/components/WorkshopList";

export default function Home() {
	return (

		<main>
			<h1 className="text-2xl font-bold mb-6">Ateliers du jour</h1>

			{WorkshopMock.map((workshop) => (
				<WorkshopList key={workshop.id} workshop={workshop} />
			))}
		</main>
	);
}