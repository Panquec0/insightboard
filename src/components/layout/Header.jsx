import { Bell, CircleUserRound } from "lucide-react";

export default function Header() {
    return (
        <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Dashboard</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
                    Monthly Requests Overview
                </h2>
                <p className="mt-3 text-zinc-400 max-w-2xl">
                    Um dashboard React com foco em experiência visual, componentização,
                    filtros dinâmicos e animações suaves para destacar seu portfólio em vagas front-end.
                </p>
            </div>

            <div className="flex items-center gap-3">
                <button className="rounded-2xl border border-white/10 bg-white/5 p-3 text-zinc-300 hover:bg-white/10 hover:text-white transition-colors">
                    <Bell className="h-5 w-5" />
                </button>
                <button className="rounded-2xl border border-white/10 bg-white/5 p-3 text-zinc-300 hover:bg-white/10 hover:text-white transition-colors">
                    <CircleUserRound className="h-5 w-5" />
                </button>
            </div>
        </header>
    );
}