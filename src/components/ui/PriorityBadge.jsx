export default function PriorityBadge({ priority }) {
    const map = {
        Alta: "text-orange-300",
        Média: "text-yellow-300",
        Baixa: "text-zinc-300",
    };

    return <span className={`text-sm font-semibold ${map[priority]}`}>{priority}</span>;
}