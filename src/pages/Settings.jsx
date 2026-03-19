import { Bell, MoonStar, ShieldCheck, User2 } from "lucide-react";

export default function Settings() {
    return (
        <main className="min-w-0 overflow-x-hidden px-4 pb-4 pt-24 md:p-6 lg:p-8">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Settings</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight">Workspace Settings</h1>
                <p className="mt-3 max-w-2xl text-zinc-400">
                    Preferências visuais, notificações e configurações gerais do workspace.
                </p>
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <h2 className="text-xl font-semibold">Preferences</h2>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center gap-3">
                                <MoonStar className="h-5 w-5 text-zinc-300" />
                                <div>
                                    <p className="font-medium">Dark Theme</p>
                                    <p className="text-sm text-zinc-500">Interface escura habilitada</p>
                                </div>
                            </div>
                            <div className="h-6 w-11 rounded-full bg-white/20 p-1">
                                <div className="h-4 w-4 translate-x-5 rounded-full bg-white" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center gap-3">
                                <Bell className="h-5 w-5 text-zinc-300" />
                                <div>
                                    <p className="font-medium">Notifications</p>
                                    <p className="text-sm text-zinc-500">Alertas e updates ativos</p>
                                </div>
                            </div>
                            <div className="h-6 w-11 rounded-full bg-white/20 p-1">
                                <div className="h-4 w-4 translate-x-5 rounded-full bg-white" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="h-5 w-5 text-zinc-300" />
                                <div>
                                    <p className="font-medium">Security Mode</p>
                                    <p className="text-sm text-zinc-500">Proteção operacional elevada</p>
                                </div>
                            </div>
                            <div className="h-6 w-11 rounded-full bg-white/10 p-1">
                                <div className="h-4 w-4 rounded-full bg-white" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <h2 className="text-xl font-semibold">Profile</h2>

                    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-sky-400 font-bold text-black">
                                FP
                            </div>

                            <div>
                                <p className="text-lg font-semibold">Fabio Junior</p>
                                <p className="text-sm text-zinc-500">Front-end Developer</p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center gap-3">
                                    <User2 className="h-4 w-4 text-zinc-400" />
                                    <span className="text-sm text-zinc-300">Portfolio workspace owner</span>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-zinc-400">Primary stack</p>
                                <p className="mt-2 font-medium">React · JavaScript · Tailwind</p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-zinc-400">Focus</p>
                                <p className="mt-2 font-medium">UX/UI, componentização e dashboards interativos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}