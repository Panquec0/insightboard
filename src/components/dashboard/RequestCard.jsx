import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import StatusBadge from "../ui/StatusBadge";
import PriorityBadge from "../ui/PriorityBadge";

export default function RequestCard({ request, index }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group"
        >
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-xl shadow-lg shadow-black/10 transition-all duration-300 group-hover:border-sky-400/20 group-hover:shadow-2xl group-hover:shadow-cyan-500/5">
                <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <div className="mb-4 flex flex-wrap items-center gap-2">
                                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-medium text-zinc-200">
                                    {request.id}
                                </span>
                                <StatusBadge status={request.status} />
                            </div>

                            <h3 className="text-xl font-semibold leading-snug text-white transition-colors group-hover:text-sky-100">
                                {request.title}
                            </h3>

                            <p className="mt-3 text-sm text-zinc-400">
                                {request.category} · Responsável: {request.owner}
                            </p>
                        </div>

                        <button className="rounded-full border border-white/10 bg-white/5 p-2.5 text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/10 group-hover:text-white">
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="mt-7 grid grid-cols-3 gap-5 text-sm">
                        <div>
                            <p className="text-zinc-500">Prioridade</p>
                            <p className="mt-2">
                                <PriorityBadge priority={request.priority} />
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Prazo</p>
                            <p className="mt-2 font-medium text-zinc-200">{request.dueDate}</p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Progresso</p>
                            <p className="mt-2 font-medium text-zinc-200">{request.progress}%</p>
                        </div>
                    </div>

                    <div className="mt-6 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${request.progress}%` }}
                            transition={{ duration: 0.9, delay: 0.12 + index * 0.05 }}
                            className="h-full rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-cyan-300"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}