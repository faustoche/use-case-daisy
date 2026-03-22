// Ici, on va faire une gestion des états 
// quand il n'y a pas de donnée ou que ça plante

// On peut récupérer des icones avec Lucide
import { AlertTriangle, Loader2 } from "lucide-react";

// 1er composant: on charge l'état
export function LoadingState() {
	return <div className="animate-spin"><Loader2 /></div>
}

// 2nd composant: état vide 
export function EmptyState({ message }: { message: string }) {
	return <p className="text-lg font-medium text-gray-600">{message}</p>;
}

// 3rd composant: erreur
export function ErrorState({ error }: { error: string }) {
	return <p className="text-red-500 font-bold">{error}</p>;
}