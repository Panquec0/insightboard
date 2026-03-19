export const monthlyData = [
    { month: "Jan", requests: 42, completed: 28 },
    { month: "Fev", requests: 51, completed: 36 },
    { month: "Mar", requests: 48, completed: 40 },
    { month: "Abr", requests: 63, completed: 44 },
    { month: "Mai", requests: 58, completed: 47 },
    { month: "Jun", requests: 74, completed: 61 },
];

export const statusData = [
    { status: "Concluídas", total: 61 },
    { status: "Em andamento", total: 18 },
    { status: "Atrasadas", total: 7 },
    { status: "Novas", total: 14 },
];

export const requestsSeed = [
    {
        id: "REQ-1042",
        title: "Landing page para campanha de aquisição",
        category: "Marketing",
        owner: "Ana Costa",
        priority: "Alta",
        status: "Em andamento",
        dueDate: "21 Mar",
        progress: 72,
    },
    {
        id: "REQ-1043",
        title: "Redesign do fluxo de checkout",
        category: "Produto",
        owner: "Lucas Lima",
        priority: "Alta",
        status: "Nova",
        dueDate: "25 Mar",
        progress: 18,
    },
    {
        id: "REQ-1044",
        title: "Dashboard de métricas operacionais",
        category: "Analytics",
        owner: "Marina Alves",
        priority: "Média",
        status: "Concluída",
        dueDate: "18 Mar",
        progress: 100,
    },
    {
        id: "REQ-1045",
        title: "Ajustes de acessibilidade no portal",
        category: "UX/UI",
        owner: "Caio Santos",
        priority: "Alta",
        status: "Atrasada",
        dueDate: "16 Mar",
        progress: 43,
    },
    {
        id: "REQ-1046",
        title: "Refatoração dos cards de relatório",
        category: "Front-end",
        owner: "Bruna Nogueira",
        priority: "Média",
        status: "Em andamento",
        dueDate: "27 Mar",
        progress: 56,
    },
    {
        id: "REQ-1047",
        title: "Integração de notificações por evento",
        category: "Integração",
        owner: "Pedro Rocha",
        priority: "Baixa",
        status: "Nova",
        dueDate: "29 Mar",
        progress: 8,
    },
];

export const navItems = [
    { label: "Dashboard", active: true },
    { label: "Requests", active: false },
    { label: "Analytics", active: false },
    { label: "Settings", active: false },
];