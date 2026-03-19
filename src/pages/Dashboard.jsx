import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    Clock3,
    CheckCircle2,
    AlertTriangle,
    Filter,
    Search,
} from "lucide-react";
import Header from "../components/layout/Header";
import MetricCard from "../components/dashboard/MetricCard";
import RequestsChart from "../components/dashboard/RequestsChart";
import StatusChart from "../components/dashboard/StatusChart";
import RequestCard from "../components/dashboard/RequestCard";
import { requestsSeed } from "../data/mockData";

export default function Dashboard() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("Todos");

    const filteredRequests = useMemo(() => {
        return requestsSeed.filter((item) => {
            const matchesSearch =
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.id.toLowerCase().includes(search.toLowerCase());

            const matchesStatus =
                statusFilter === "Todos" ? true : item.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [search, statusFilter]);

    return (
        <main className="min-w-0 overflow-x-hidden px-4 pb-4 pt-24 md:p-6 lg:p-8">
            <Header />

            <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <MetricCard
                    title="Total de requests"
                    value="74"
                    subtitle="+12% vs mês anterior"
                    icon={ArrowUpRight}
                    index={0}
                />
                <MetricCard
                    title="Em andamento"
                    value="18"
                    subtitle="5 com prioridade alta"
                    icon={Clock3}
                    index={1}
                />
                <MetricCard
                    title="Concluídas"
                    value="61"
                    subtitle="82% de taxa de entrega"
                    icon={CheckCircle2}
                    index={2}
                />
                <MetricCard
                    title="Atrasadas"
                    value="07"
                    subtitle="Atenção em UX e fluxo"
                    icon={AlertTriangle}
                    index={3}
                />
            </section>

            <section className="mt-6 grid min-w-0 gap-6 xl:grid-cols-[1.35fr_minmax(0,0.95fr)]">
                <div className="min-w-0">
                    <RequestsChart />
                </div>
                <div className="min-w-0">
                    <StatusChart />
                </div>
            </section>

            <section className="mt-6 min-w-0">
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                    <div className="p-5 md:p-6">
                        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                            <div className="min-w-0">
                                <h3 className="text-lg font-semibold">Requests recentes</h3>
                                <p className="mt-1 text-sm text-zinc-400">
                                    Área ideal para demonstrar filtros, animação e componentização
                                </p>
                            </div>

                            <div className="flex w-full min-w-0 flex-col gap-3 xl:w-auto xl:items-center xl:flex-row">
                                <div className="relative w-full xl:w-72 xl:min-w-[288px]">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                                    <input
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Buscar request"
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder:text-zinc-500 outline-none transition focus:border-sky-400/30 focus:bg-white/[0.07] focus:ring-1 focus:ring-sky-400/30"
                                    />
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {["Todos", "Nova", "Em andamento", "Concluída", "Atrasada"].map(
                                        (item) => (
                                            <button
                                                key={item}
                                                onClick={() => setStatusFilter(item)}
                                                className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm transition-all duration-300 ${statusFilter === item
                                                        ? "scale-[1.02] border-white bg-white text-black shadow-lg"
                                                        : "border-white/10 bg-white/5 text-zinc-200 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                                                    }`}
                                            >
                                                <Filter className="h-4 w-4" />
                                                {item}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 grid min-w-0 gap-5 xl:grid-cols-2">
                            <AnimatePresence mode="popLayout">
                                {filteredRequests.map((request, index) => (
                                    <RequestCard
                                        key={request.id}
                                        request={request}
                                        index={index}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}