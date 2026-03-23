/**
 * Import visual components
 * Manage differents states for a page
 */

import { Loader2 } from "lucide-react";

// Using animate-spin to make it turn
export function LoadingState() {
	return <div className="animate-spin"><Loader2 /></div>
}

// Take a message as a parameters and display it in gray
export function EmptyState({ message }: { message: string }) {
	return <p className="text-lg font-medium text-gray-600">{message}</p>;
}

// Take a message as a parameters and display it in red
export function ErrorState({ error }: { error: string }) {
	return <p className="text-red-500 font-bold">{error}</p>;
}