import { ArrowUpRight, Activity, Gauge, Target } from "lucide-react";
import MetricCard from "../components/dashboard/MetricCard";
import RequestsChart from "../components/dashboard/RequestsChart";
import StatusChart from "../components/dashboard/StatusChart";

export default function Analytics() {
    return (
        <main className="min-w-0 overflow-x-hidden px-4 pb-4 pt-24 md:p-6 lg:p-8">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Analytics</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight">Performance Analytics</h1>
                <p className="mt-3 max-w-2xl text-zinc-400">
                    Visão analítica do fluxo de requests com indicadores operacionais e tendências.
                </p>
            </section>

            <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <MetricCard
                    title="Growth rate"
                    value="24"
                    subtitle="+8% na última janela"
                    icon={ArrowUpRight}
                    index={0}
                />
                <MetricCard
                    title="Operational load"
                    value="18"
                    subtitle="Requests ativos no momento"
                    icon={Activity}
                    index={1}
                />
                <MetricCard
                    title="Delivery score"
                    value="91"
                    subtitle="Eficiência operacional"
                    icon={Gauge}
                    index={2}
                />
                <MetricCard
                    title="Goal completion"
                    value="76"
                    subtitle="Meta mensal atingida"
                    icon={Target}
                    index={3}
                />
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_minmax(0,0.95fr)]">
                <div className="min-w-0">
                    <RequestsChart />
                </div>
                <div className="min-w-0">
                    <StatusChart />
                </div>
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl xl:col-span-2">
                    <h2 className="text-xl font-semibold">Key Insights</h2>
                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-sm text-zinc-400">Maior tendência</p>
                            <h3 className="mt-2 text-lg font-semibold">Crescimento em requests</h3>
                            <p className="mt-2 text-sm text-zinc-500">
                                Alta consistente no volume entre abril e junho.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-sm text-zinc-400">Risco atual</p>
                            <h3 className="mt-2 text-lg font-semibold">Atrasos pontuais</h3>
                            <p className="mt-2 text-sm text-zinc-500">
                                Existe concentração de gargalo em demandas prioritárias.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-sm text-zinc-400">Oportunidade</p>
                            <h3 className="mt-2 text-lg font-semibold">Melhorar throughput</h3>
                            <p className="mt-2 text-sm text-zinc-500">
                                Automação e priorização podem elevar a taxa de entrega.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <h2 className="text-xl font-semibold">Summary</h2>
                    <div className="mt-5 space-y-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-sm text-zinc-400">Média de resposta</p>
                            <p className="mt-2 text-2xl font-semibold">2.4d</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-sm text-zinc-400">Taxa de conclusão</p>
                            <p className="mt-2 text-2xl font-semibold">82%</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-sm text-zinc-400">SLA atendido</p>
                            <p className="mt-2 text-2xl font-semibold">94%</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}