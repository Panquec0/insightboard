import { motion } from "framer-motion";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";
import { monthlyData } from "../../data/mockData";

export default function RequestsChart() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
        >
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="p-5 md:p-6">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold">Tendência mensal</h3>
                            <p className="mt-1 text-sm text-zinc-400">
                                Solicitações criadas vs concluídas
                            </p>
                        </div>

                        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-zinc-200">
                            Últimos 6 meses
                        </span>
                    </div>

                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={monthlyData}>
                                <defs>
                                    <linearGradient id="requestsGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.45} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="completedGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                                    </linearGradient>
                                </defs>

                                <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    stroke="#71717a"
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#71717a"
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip
                                    cursor={false}
                                    contentStyle={{
                                        background: "#090d1f",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        borderRadius: 16,
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="requests"
                                    stroke="#8b5cf6"
                                    fill="url(#requestsGradient)"
                                    strokeWidth={3}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="completed"
                                    stroke="#38bdf8"
                                    fill="url(#completedGradient)"
                                    strokeWidth={3}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}