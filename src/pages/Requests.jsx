import { useMemo, useState } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { requestsSeed } from "../data/mockData";
import RequestCard from "../components/dashboard/RequestCard";

export default function Requests() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("Todos");

    const filteredRequests = useMemo(() => {
        return requestsSeed.filter((item) => {
            const matchesSearch =
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.id.toLowerCase().includes(search.toLowerCase()) ||
                item.owner.toLowerCase().includes(search.toLowerCase());

            const matchesStatus =
                statusFilter === "Todos" ? true : item.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [search, statusFilter]);

    return (
        <main className="min-w-0 overflow-x-hidden px-4 pb-4 pt-24 md:p-6 lg:p-8">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Requests</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight">All Requests</h1>
                <p className="mt-3 max-w-2xl text-zinc-400">
                    Visualização completa das solicitações com busca, filtros e cards interativos.
                </p>

                <div className="mt-6 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                    <div className="relative w-full xl:w-80">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Buscar por request, responsável ou ID"
                            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder:text-zinc-500 outline-none transition focus:border-sky-400/30 focus:bg-white/[0.07] focus:ring-1 focus:ring-sky-400/30"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {["Todos", "Nova", "Em andamento", "Concluída", "Atrasada"].map((item) => (
                            <button
                                key={item}
                                onClick={() => setStatusFilter(item)}
                                className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm transition-all duration-300 ${statusFilter === item
                                        ? "scale-[1.02] border-white bg-white text-black shadow-lg"
                                        : "border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                <Filter className="h-4 w-4" />
                                {item}
                            </button>
                        ))}

                        <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white">
                            <SlidersHorizontal className="h-4 w-4" />
                            Filtros
                        </button>
                    </div>
                </div>
            </section>

            <section className="mt-6 grid gap-5 xl:grid-cols-2">
                {filteredRequests.map((request, index) => (
                    <RequestCard key={request.id} request={request} index={index} />
                ))}
            </section>
        </main>
    );
}