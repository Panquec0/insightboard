import { motion } from "framer-motion";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";
import { statusData } from "../../data/mockData";

export default function StatusChart() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.35 }}
        >
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="p-5 md:p-6">
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold">Distribuição por status</h3>
                        <p className="mt-1 text-sm text-zinc-400">Visão operacional rápida</p>
                    </div>

                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={statusData}>
                                <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                                <XAxis
                                    dataKey="status"
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
                                <Bar dataKey="total" fill="#60a5fa" radius={[14, 14, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}