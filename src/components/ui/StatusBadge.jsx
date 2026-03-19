export default function StatusBadge({ status }) {
    const map = {
        Concluída: "border-emerald-400/20 bg-emerald-500/15 text-emerald-300 shadow-emerald-500/10",
        "Em andamento": "border-sky-400/20 bg-sky-500/15 text-sky-300 shadow-sky-500/10",
        Atrasada: "border-rose-400/20 bg-rose-500/15 text-rose-300 shadow-rose-500/10",
        Nova: "border-violet-400/20 bg-violet-500/15 text-violet-300 shadow-violet-500/10",
    };

    return (
        <span
            className={`rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide shadow-sm ${map[status] || "border-white/10 bg-white/10 text-white"
                }`}
        >
            {status}
        </span>
    );
}