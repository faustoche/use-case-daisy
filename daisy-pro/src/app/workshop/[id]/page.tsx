import { WorkshopMock } from "@/lib/mock-data";
import { WorkshopDetailClient } from "@/components/WorkshopDetail";
import { EmptyState } from "@/components/StatusViews";
import { MapPinOff } from "lucide-react";

interface PageProps {
  params: { id: string };
}

export default async function WorkshopDetails({ params }: PageProps) {
  const { id } = await params;
  const data = WorkshopMock.find(item => item.id === Number(id));

  if (!data) return (
      <main className="bg-white flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        
        <div className="bg-daisy-bg p-6 rounded-full mb-6 shadow-sm">
          {/* 2. On remplace SignpostBig par la nouvelle icône */}
          <MapPinOff className="w-16 h-16 text-daisy-primary" strokeWidth={1.5} />
        </div>
        
        <EmptyState message="Oups, il semblerait que vous soyez perdu ! La page que vous cherchez n'existe pas." />
        
      </main>
  );

  return <WorkshopDetailClient data={data} />;
}