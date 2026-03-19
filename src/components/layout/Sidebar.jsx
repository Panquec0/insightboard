import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    FolderKanban,
    BarChart3,
    Settings,
    PanelLeftOpen,
    X,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
    { label: "Dashboard", path: "/", icon: LayoutDashboard },
    { label: "Requests", path: "/requests", icon: FolderKanban },
    { label: "Analytics", path: "/analytics", icon: BarChart3 },
    { label: "Settings", path: "/settings", icon: Settings },
];

function SidebarContent({ onClose }) {
    return (
        <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-sky-400 text-black font-bold shadow-lg shadow-violet-500/20">
                        IB
                    </div>

                    <div>
                        <h1 className="text-lg font-semibold tracking-tight">InsightBoard</h1>
                        <p className="text-sm text-zinc-400">React UI Portfolio Project</p>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="lg:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                    aria-label="Fechar menu lateral"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>

            <div className="flex flex-1 items-center">
                <nav className="w-full space-y-2">
                    {navItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.06 * index }}
                            >
                                <NavLink
                                    to={item.path}
                                    end={item.path === "/"}
                                    onClick={onClose}
                                    className={({ isActive }) =>
                                        `flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all duration-300 ${isActive
                                            ? "border border-white/10 bg-white/10 text-white shadow-lg shadow-black/10"
                                            : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                        }`
                                    }
                                >
                                    <Icon className="h-4 w-4" />
                                    {item.label}
                                </NavLink>
                            </motion.div>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}

export default function Sidebar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {!mobileOpen && (
                <motion.button
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    onClick={() => setMobileOpen(true)}
                    className="fixed right-3 top-3 z-50 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-[#0b1022]/92 px-4 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-sky-400/25 hover:bg-[#11172b] lg:hidden"
                    aria-label="Abrir menu lateral"
                >
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/10 via-sky-400/10 to-cyan-400/10" />
                    <PanelLeftOpen className="relative h-4 w-4" />
                    <span className="relative">Menu</span>
                </motion.button>
            )}

            <aside className="hidden border-r border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl lg:block lg:p-6">
                <SidebarContent />
            </aside>

            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
                        />

                        <motion.aside
                            initial={{ x: 320, opacity: 0.8 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 320, opacity: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="fixed right-0 top-0 z-50 h-screen w-[290px] border-l border-white/10 bg-[#0b1022] p-5 pt-16 backdrop-blur-2xl lg:hidden"
                        >
                            <SidebarContent onClose={() => setMobileOpen(false)} />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}