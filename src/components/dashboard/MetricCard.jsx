import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
    }),
};

function Counter({ value }) {
    const numericValue = Number(String(value).replace(/\D/g, ""));
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controls = animate(0, numericValue, {
            duration: 1.1,
            ease: "easeOut",
            onUpdate(latest) {
                setCount(Math.round(latest));
            },
        });

        return () => controls.stop();
    }, [numericValue]);

    const hasLeadingZero = String(value).startsWith("0");
    const display = hasLeadingZero && count < 10 ? `0${count}` : count;

    return <span>{display}</span>;
}

export default function MetricCard({ title, value, subtitle, icon: Icon, index }) {
    return (
        <motion.div custom={index} initial="hidden" animate="visible" variants={cardVariants}>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/20">
                <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-sm text-zinc-400">{title}</p>
                            <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                                <Counter value={value} />
                            </h3>
                            <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/10 p-3 transition">
                            <Icon className="h-5 w-5 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}