import { WorkshopMock } from "@/lib/mock-data";
import { WorkshopList } from "@/components/WorkshopList";

export default function Home() {
  return (
	<main className="flex flex-col min-h-screen pb-6">
	  
	<header className="flex items-center justify-between px-4 py-4 bg-daisy-primary shadow-md mb-2">
		<img src="/logo_daisy.png" alt="logo" className="w-10 h-10 object-contain brightness-0 invert" />
		
		<div className="flex items-center gap-3">
			<span className="text-base font-semibold tracking-tight text-white">Tempo</span>
			<div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center shadow-md bg-white">
				<img src="/logo_poterie.png" alt="logo-atelier" className="w-full h-full object-cover"/>
			</div>
		</div>
	</header>
  
	<section className="px-4 py-4">
		<h2 className="font-semibold mb-4 text-gray-900">Événements du jour</h2>

		<div className="flex flex-row w-full gap-3">
			<div className="flex-1 rounded-xl shadow-sm border border-gray-100 bg-white p-4 text-center border-t-4 border-t-daisy-primary">
				<p className="text-2xl font-bold text-daisy-primary">4</p>
				<p className="text-xs text-gray-500 mt-0.5">événements</p>
			</div>
			<div className="flex-1 rounded-xl shadow-sm border border-gray-100 bg-white p-4 text-center border-t-4 border-t-daisy-accent">
				<p className="text-2xl font-bold text-daisy-accent">73</p>
				<p className="text-xs text-gray-500 mt-0.5">participants</p>
			</div>
		</div>
	</section>


	  <section className="px-4 flex flex-col gap-4 mt-2">
		{WorkshopMock.map((workshop, index) => (
			<WorkshopList key={workshop.id} workshop={workshop} index={index} />
		))}
	  </section>

	</main>
  );
}