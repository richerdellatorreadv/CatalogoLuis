/**
 * Catálogo Renault 2026/2027 - Luis Fernando
 * Consultor de Vendas Autorizado
 * WhatsApp: (69) 98421-5933 | Instagram: @luis_lffer
 */

// ==========================================================================
// CONFIGURAÇÕES GERAIS DO CONSULTOR
// ==========================================================================
const CONSULTANT_CONFIG = {
    name: "Luis Fernando",
    role: "Consultor de Vendas Renault",
    phoneDisplay: "(69) 98421-5933",
    phoneRaw: "5569984215933",
    instagramUser: "luis_lffer",
    instagramUrl: "https://www.instagram.com/luis_lffer",
    photo: "assets/img/consultor/luis-fernando.webp",
    photoFallback: "assets/img/consultor/luis-fernando.jpg"
};

// ==========================================================================
// BASE DE DADOS COMPLETA DOS VEÍCULOS RENAULT 2026/2027
// ==========================================================================
const CARS_DATABASE = [
    {
        id: "kwid-evolution",
        name: "Kwid Evolution",
        brand: "Renault",
        year: "2026/2027",
        version: "1.0 SCe Flex Manual",
        category: "hatch",
        transmissionType: "manual",
        priceValue: 71090,
        priceDisplay: "R$ 71.090",
        badge: "Entrada Inteligente",
        badgeClass: "badge-green",
        tagline: "O compacto mais econômico e acessível do Brasil",
        mainImage: "assets/img/cars/kwid-front.webp",
        gallery: [
            { label: "Frontal", url: "assets/img/cars/kwid-front.webp" },
            { label: "Traseira", url: "assets/img/cars/kwid-rear.webp" }
        ],
        highlights: [
            "Excelente consumo de até 15,4 km/l na estrada",
            "4 airbags de série + controle de tração e estabilidade (ESP)",
            "Assistente de partida em rampa (HSA) e painel digital de 7\"",
            "Maior altura do solo da categoria: 185 mm para superar lombadas e buracos"
        ],
        specs: {
            motor: "1.0 SCe Flex 12V (3 cilindros)",
            potencia: "71 cv (E) / 68 cv (G) a 5.500 rpm",
            torque: "10,0 kgfm (E) / 9,4 kgfm (G) a 4.250 rpm",
            cambio: "Manual de 5 marchas",
            consumo: "14,4 km/l (Cidade) / 15,4 km/l (Estrada) com gasolina",
            portaMalas: "290 Litros (expansível até 1.100L)",
            tanque: "38 Litros",
            direcao: "Elétrica progressiva",
            garantia: "3 anos de fábrica"
        }
    },
    {
        id: "kwid-techno",
        name: "Kwid Techno",
        brand: "Renault",
        year: "2026/2027",
        version: "1.0 SCe Flex Manual",
        category: "hatch",
        transmissionType: "manual",
        priceValue: 75990,
        priceDisplay: "R$ 75.990",
        badge: "Conectividade Total",
        badgeClass: "badge-blue",
        tagline: "Multimídia de 10,1 polegadas sem fio e muito mais estilo",
        mainImage: "assets/img/cars/kwid-front.webp",
        gallery: [
            { label: "Frontal", url: "assets/img/cars/kwid-front.webp" },
            { label: "Traseira", url: "assets/img/cars/kwid-rear.webp" }
        ],
        highlights: [
            "Central Multimídia 10,1\" com Apple CarPlay e Android Auto sem fio",
            "Câmera de ré com guias dinâmicas de estacionamento",
            "Entradas USB-C de alta velocidade para carregamento",
            "Vidros elétricos dianteiros e travamento central com chave canivete"
        ],
        specs: {
            motor: "1.0 SCe Flex 12V (3 cilindros)",
            potencia: "71 cv (E) / 68 cv (G) a 5.500 rpm",
            torque: "10,0 kgfm (E) / 9,4 kgfm (G)",
            cambio: "Manual de 5 marchas",
            consumo: "14,4 km/l (Cidade) / 15,4 km/l (Estrada)",
            portaMalas: "290 Litros",
            tanque: "38 Litros",
            direcao: "Elétrica progressiva",
            garantia: "3 anos de fábrica"
        }
    },
    {
        id: "kwid-outsider",
        name: "Kwid Outsider",
        brand: "Renault",
        year: "2026/2027",
        version: "1.0 SCe Flex Manual",
        category: "hatch",
        transmissionType: "manual",
        priceValue: 84890,
        priceDisplay: "R$ 84.890",
        badge: "Visual Aventureiro",
        badgeClass: "badge-gold",
        tagline: "Barras de teto, teto bitom e proteção integral com estilo SUV",
        mainImage: "assets/img/cars/kwid-front.webp",
        gallery: [
            { label: "Frontal", url: "assets/img/cars/kwid-front.webp" },
            { label: "Traseira", url: "assets/img/cars/kwid-rear.webp" }
        ],
        highlights: [
            "Barras de teto estéticas e molduras de proteção lateral robustas",
            "Opção de teto bitom e calotas estilizadas estilo liga-leve diamantada",
            "Interior exclusivo com costuras esportivas em tom Citron Green",
            "Faróis de neblina e proteções inferiores skid plate na dianteira e traseira"
        ],
        specs: {
            motor: "1.0 SCe Flex 12V",
            potencia: "71 cv (E) / 68 cv (G)",
            torque: "10,0 kgfm (E) / 9,4 kgfm (G)",
            cambio: "Manual de 5 marchas",
            consumo: "14,4 km/l (Cidade) / 15,4 km/l (Estrada)",
            portaMalas: "290 Litros",
            tanque: "38 Litros",
            direcao: "Elétrica",
            garantia: "3 anos de fábrica"
        }
    },
    {
        id: "kardian-vibe",
        name: "Kardian Vibe Turbo",
        brand: "Renault",
        year: "2026/2027",
        version: "1.0 TCe Turbo 125 cv Manual 6M",
        category: "suv-compact",
        transmissionType: "manual",
        priceValue: 99990,
        priceDisplay: "R$ 99.990",
        badge: "O Turbo Mais Barato do Brasil",
        badgeClass: "badge-red",
        tagline: "Motor Turbo 1.0 TCe de 125 cv por menos de R$ 100 mil",
        mainImage: "assets/img/cars/kardian-front.webp",
        gallery: [
            { label: "Frontal", url: "assets/img/cars/kardian-front.webp" },
            { label: "Traseira", url: "assets/img/cars/kardian-rear.webp" }
        ],
        highlights: [
            "Motor 1.0 TCe Turbo com 125 cv e impressionantes 22,4 kgfm de torque",
            "Câmbio manual de 6 velocidades com engates curtos e precisos",
            "6 airbags de série + controle dinâmico de tração e estabilidade",
            "Ar-condicionado digital automático e acabamento interno com detalhes em azul"
        ],
        specs: {
            motor: "1.0 TCe Turbo Flex 12V Injeção Direta",
            potencia: "125 cv (E) / 120 cv (G) a 5.000 rpm",
            torque: "22,4 kgfm (E/G) a partir de 1.750 rpm",
            cambio: "Manual de 6 velocidades",
            consumo: "13,7 km/l (Cidade) / 15,3 km/l (Estrada) com gasolina",
            portaMalas: "410 Litros (o maior da categoria de SUVs compactos)",
            tanque: "50 Litros",
            direcao: "Elétrica com ajuste de altura e profundidade",
            garantia: "3 anos de fábrica"
        }
    },
    {
        id: "kardian-evolution",
        name: "Kardian Evolution EDC",
        brand: "Renault",
        year: "2026/2027",
        version: "1.0 TCe Turbo Automático EDC",
        category: "suv-compact",
        transmissionType: "auto",
        priceValue: 124590,
        priceDisplay: "R$ 124.590",
        badge: "Câmbio Dupla Embreagem",
        badgeClass: "badge-blue",
        tagline: "Câmbio automatizado de dupla embreagem banhado a óleo com aletas no volante",
        mainImage: "assets/img/cars/kardian-front.webp",
        gallery: [
            { label: "Frontal", url: "assets/img/cars/kardian-front.webp" },
            { label: "Traseira", url: "assets/img/cars/kardian-rear.webp" }
        ],
        highlights: [
            "Transmissão automática EDC de 6 velocidades de dupla embreagem (trocas ultrarrápidas)",
            "Paddle-shifts atrás do volante para condução esportiva",
            "Barras de teto funcionais modulares (transformam-se em rack de teto sem ferramentas)",
            "Painel de instrumentos digital de 7\" configurável"
        ],
        specs: {
            motor: "1.0 TCe Turbo Flex 12V Injeção Direta",
            potencia: "125 cv (E) / 120 cv (G)",
            torque: "22,4 kgfm a 1.750 rpm",
            cambio: "Automático EDC de 6 marchas (Dupla Embreagem)",
            consumo: "13,1 km/l (Cidade) / 14,8 km/l (Estrada)",
            portaMalas: "410 Litros",
            tanque: "50 Litros",
            direcao: "Elétrica com ajuste de altura e profundidade",
            garantia: "3 anos de fábrica"
        }
    },
    {
        id: "kardian-techno",
        name: "Kardian Techno EDC",
        brand: "Renault",
        year: "2026/2027",
        version: "1.0 TCe Turbo Automático EDC",
        category: "suv-compact",
        transmissionType: "auto",
        priceValue: 134590,
        priceDisplay: "R$ 134.590",
        badge: "Mais Vendido",
        badgeClass: "badge-gold",
        tagline: "Frenagem automática de emergência, freio de mão eletrônico e carregador por indução",
        mainImage: "assets/img/cars/kardian-front.webp",
        gallery: [
            { label: "Frontal", url: "assets/img/cars/kardian-front.webp" },
            { label: "Traseira", url: "assets/img/cars/kardian-rear.webp" }
        ],
        highlights: [
            "Frenagem autônoma de emergência (AEBS) e alerta de colisão frontal",
            "Freio de estacionamento eletrônico (botão) com console elevado e apoio de braço",
            "Carregador de celular por indução sem fio (Wireless Charger)",
            "Chave presencial tipo cartão 'Walk-Away Close' com partida por botão"
        ],
        specs: {
            motor: "1.0 TCe Turbo Flex 12V",
            potencia: "125 cv (E) / 120 cv (G)",
            torque: "22,4 kgfm a 1.750 rpm",
            cambio: "Automático EDC de 6 marchas",
            consumo: "13,1 km/l (Cidade) / 14,8 km/l (Estrada)",
            portaMalas: "410 Litros",
            tanque: "50 Litros",
            direcao: "Elétrica",
            garantia: "3 anos de fábrica"
        }
    },
    {
        id: "kardian-iconic",
        name: "Kardian Iconic EDC",
        brand: "Renault",
        year: "2026/2027",
        version: "1.0 TCe Turbo Automático EDC",
        category: "suv-compact",
        transmissionType: "auto",
        priceValue: 146590,
        priceDisplay: "R$ 146.590",
        badge: "Topo de Linha",
        badgeClass: "badge-purple",
        tagline: "O SUV mais completo: Piloto Automático Adaptativo (ACC), Câmera 360° e 13 ADAS",
        mainImage: "assets/img/cars/kardian-front.webp",
        gallery: [
            { label: "Frontal", url: "assets/img/cars/kardian-front.webp" },
            { label: "Traseira", url: "assets/img/cars/kardian-rear.webp" }
        ],
        highlights: [
            "Controle de cruzeiro adaptativo (ACC - acelera e freia sozinho mantendo a distância)",
            "Sistema de câmeras Multiview 360° e sensores de estacionamento dianteiros/traseiros",
            "Alerta de ponto cego nos retrovisores (BSW) e faróis Full LED automáticos",
            "Seletor Multi-Sense com modos de condução (Eco, MySense, Sport) e luzes ambientes em LED"
        ],
        specs: {
            motor: "1.0 TCe Turbo Flex 12V Injeção Direta",
            potencia: "125 cv (E) / 120 cv (G)",
            torque: "22,4 kgfm a 1.750 rpm",
            cambio: "Automático EDC Dupla Embreagem 6 marchas",
            consumo: "13,1 km/l (Cidade) / 14,8 km/l (Estrada)",
            portaMalas: "410 Litros",
            tanque: "50 Litros",
            direcao: "Elétrica calibrada com Multi-Sense",
            garantia: "3 anos de fábrica"
        }
    },
    {
        id: "duster-iconic",
        name: "Duster Iconic Plus 1.3 Turbo",
        brand: "Renault",
        year: "2026/2027",
        version: "1.3 TCe Turbo Flex CVT 8V",
        category: "suv-mid",
        transmissionType: "auto",
        priceValue: 171990,
        priceDisplay: "R$ 171.990",
        badge: "SUV Robusto & Forte",
        badgeClass: "badge-red",
        tagline: "Motor 1.3 Turbo de 163 cv e 270 Nm desenvolvido em parceria com a Mercedes-Benz",
        mainImage: "assets/img/cars/duster-front.webp",
        gallery: [
            { label: "Frontal", url: "assets/img/cars/duster-front.webp" },
            { label: "Traseira", url: "assets/img/cars/duster-rear.webp" },
            { label: "Interior", url: "assets/img/cars/duster-interior.webp" }
        ],
        highlights: [
            "Motor 1.3 TCe Turbo com 163 cv e colossal torque de 270 Nm (27,5 kgfm)",
            "Câmbio automático CVT X-Tronic com simulação de 8 velocidades",
            "Porta-malas gigantesco de 475 litros com abertura ampla",
            "Câmera Multiview de 4 ângulos, alerta de ponto cego e rodas de liga aro 17\" pretas"
        ],
        specs: {
            motor: "1.3 TCe Turbo Flex 16V (Bloco de Alumínio)",
            potencia: "163 cv (E) / 162 cv (G) a 5.500 rpm",
            torque: "27,5 kgfm (270 Nm) a 1.600 rpm",
            cambio: "Automático CVT X-Tronic com 8 marchas virtuais",
            consumo: "11,2 km/l (Cidade) / 13,8 km/l (Estrada)",
            portaMalas: "475 Litros",
            tanque: "50 Litros",
            direcao: "Elétrica",
            garantia: "3 anos de fábrica"
        }
    },
    {
        id: "boreal-evolution",
        name: "Boreal Evolution",
        brand: "Renault",
        year: "2026/2027",
        version: "1.3 TCe Turbo Flex Automático",
        category: "suv-mid",
        transmissionType: "auto",
        priceValue: 172300,
        priceDisplay: "R$ 172.300",
        badge: "Novo C-SUV Médio",
        badgeClass: "badge-blue",
        tagline: "Design premiado europeu, cockpit digital openR e conforto de primeira classe",
        mainImage: "assets/img/cars/boreal-front.webp",
        gallery: [
            { label: "Frontal", url: "assets/img/cars/boreal-front.webp" }
        ],
        highlights: [
            "Plataforma global CMF-CD de última geração com isolamento acústico superior",
            "Cockpit digital integrado openR em formato de L com alta resolução",
            "Motor 1.3 Turbo TCe de 163 cv com respostas vigorosas e baixo consumo",
            "Pacote de segurança completo com 7 airbags e frenagem autônoma"
        ],
        specs: {
            motor: "1.3 TCe Turbo Flex 16V Injeção Direta",
            potencia: "163 cv a 5.500 rpm",
            torque: "27,5 kgfm a 1.600 rpm",
            cambio: "Automático de 7 velocidades",
            consumo: "12,5 km/l (Cidade) / 14,2 km/l (Estrada)",
            portaMalas: "500 Litros",
            tanque: "55 Litros",
            direcao: "Elétrica adaptativa",
            garantia: "3 anos de fábrica"
        }
    },
    {
        id: "boreal-techno",
        name: "Boreal Techno",
        brand: "Renault",
        year: "2026/2027",
        version: "1.3 TCe Turbo Flex Automático",
        category: "suv-mid",
        transmissionType: "auto",
        priceValue: 194008,
        priceDisplay: "R$ 194.008",
        badge: "Intermediário Premium",
        badgeClass: "badge-gold",
        tagline: "Interior refinado com bancos em couro sintético, som premium e Google integrado",
        mainImage: "assets/img/cars/boreal-front.webp",
        gallery: [
            { label: "Frontal", url: "assets/img/cars/boreal-front.webp" }
        ],
        highlights: [
            "Central multimídia de 12 polegadas com Google built-in (Maps, Assistant e Play Store nativos)",
            "Bancos com revestimento premium e regulagens elétricas com suporte lombar",
            "Iluminação ambiente em LED personalizável com 48 opções de cores",
            "Ar-condicionado automático dual zone com saídas traseiras exclusivas"
        ],
        specs: {
            motor: "1.3 TCe Turbo Flex 16V",
            potencia: "163 cv",
            torque: "27,5 kgfm",
            cambio: "Automático de 7 marchas",
            consumo: "12,5 km/l (Cidade) / 14,2 km/l (Estrada)",
            portaMalas: "500 Litros",
            tanque: "55 Litros",
            direcao: "Elétrica",
            garantia: "3 anos de fábrica"
        }
    },
    {
        id: "boreal-iconic",
        name: "Boreal Iconic Esprit Alpine",
        brand: "Renault",
        year: "2026/2027",
        version: "1.3 TCe Turbo Flex Automático",
        category: "suv-mid",
        transmissionType: "auto",
        priceValue: 212725,
        priceDisplay: "R$ 212.725",
        badge: "Nível Máximo de Luxo",
        badgeClass: "badge-purple",
        tagline: "Acabamento esportivo Alpine, rodas de 19\" diamantadas e condução semiautônoma nível 2",
        mainImage: "assets/img/cars/boreal-iconic.webp",
        gallery: [
            { label: "Frontal", url: "assets/img/cars/boreal-iconic.webp" }
        ],
        highlights: [
            "Pacote exclusivo Esprit Alpine: logotipos acetinados, volante esportivo e costuras azuis",
            "Condução semiautônoma Nível 2 (Active Driver Assist com centralização na faixa e Stop&Go)",
            "Teto solar panorâmico solarbay inteligente e sistema de áudio Harman Kardon de alta fidelidade",
            "Rodas de liga leve diamantadas de 19 polegadas com acabamento escurecido"
        ],
        specs: {
            motor: "1.3 TCe Turbo Flex 16V",
            potencia: "163 cv a 5.500 rpm",
            torque: "27,5 kgfm a 1.600 rpm",
            cambio: "Automático de 7 marchas",
            consumo: "12,0 km/l (Cidade) / 14,0 km/l (Estrada)",
            portaMalas: "500 Litros",
            tanque: "55 Litros",
            direcao: "Elétrica com 4Control advanced",
            garantia: "3 anos de fábrica"
        }
    }
];

// ==========================================================================
// ESTADO GLOBAL DA APLICAÇÃO
// ==========================================================================
const appState = {
    searchQuery: "",
    selectedCategory: "all",
    selectedTransmission: "all",
    sortBy: "featured",
    currentCarId: null,
    currentGalleryIndex: 0
};

// ==========================================================================
// FORMATAÇÃO DE MOEDA E MENSAGENS WHATSAPP
// ==========================================================================
function formatCurrency(val) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0
    }).format(val);
}

function generateWhatsAppUrl(message) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${CONSULTANT_CONFIG.phoneRaw}?text=${encoded}`;
}

// ==========================================================================
// RENDERIZAÇÃO DO CATÁLOGO DE CARROS
// ==========================================================================
function getFilteredCars() {
    return CARS_DATABASE.filter(car => {
        // Busca textual
        const query = appState.searchQuery.toLowerCase().trim();
        const matchesQuery = !query || 
            car.name.toLowerCase().includes(query) ||
            car.version.toLowerCase().includes(query) ||
            car.tagline.toLowerCase().includes(query) ||
            car.specs.motor.toLowerCase().includes(query);

        // Categoria
        const matchesCat = appState.selectedCategory === "all" || car.category === appState.selectedCategory;

        // Câmbio
        const matchesTrans = appState.selectedTransmission === "all" || car.transmissionType === appState.selectedTransmission;

        return matchesQuery && matchesCat && matchesTrans;
    }).sort((a, b) => {
        if (appState.sortBy === "price-asc") return a.priceValue - b.priceValue;
        if (appState.sortBy === "price-desc") return b.priceValue - a.priceValue;
        return 0; // 'featured' mantém a ordem padrão
    });
}

function renderCatalogGrid() {
    const grid = document.getElementById("catalogGrid");
    const countEl = document.getElementById("resultsCount");
    const emptyState = document.getElementById("emptyState");
    
    if (!grid) return;

    const filtered = getFilteredCars();
    
    if (countEl) {
        countEl.textContent = `${filtered.length} veículo${filtered.length === 1 ? '' : 's'} encontrado${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = "";
        if (emptyState) emptyState.style.display = "block";
        return;
    }

    if (emptyState) emptyState.style.display = "none";

    grid.innerHTML = filtered.map(car => {
        // Cálculo de parcela ilustrativa de entrada (30% + 48x com juros 1.49% a.m.)
        const entradaPadrao = car.priceValue * 0.30;
        const saldo = car.priceValue - entradaPadrao;
        const taxa = 0.0149;
        const n = 48;
        const parcelaEstimada = Math.round((saldo * taxa) / (1 - Math.pow(1 + taxa, -n)));

        const whatsAppMsg = `Olá, ${CONSULTANT_CONFIG.name}! Vim pelo Catálogo Renault 2026/2027 e tenho interesse no *${car.name.toUpperCase()}* (${car.version}) no valor de ${car.priceDisplay}. Poderia me passar mais informações e condições de pagamento?`;
        const whatsAppHref = generateWhatsAppUrl(whatsAppMsg);

        return `
            <article class="car-card" data-id="${car.id}">
                <div class="car-card-header">
                    <span class="car-badge ${car.badgeClass}">${car.badge}</span>
                    <span class="car-year">${car.year}</span>
                </div>

                <div class="car-media" onclick="openCarModal('${car.id}', 'overview')">
                    <img 
                        src="${car.mainImage}" 
                        alt="${car.name} ${car.version}" 
                        loading="lazy"
                        onerror="this.src='assets/img/branding/renault-logo.png'; this.classList.add('img-fallback');"
                    />
                    <div class="view-overlay">
                        <span>Ver Detalhes & Ficha Técnica</span>
                    </div>
                </div>

                <div class="car-body">
                    <div class="car-brand">RENAULT</div>
                    <h3 class="car-title">${car.name}</h3>
                    <p class="car-version-text">${car.version}</p>

                    <div class="car-quick-specs">
                        <div class="spec-pill" title="Motorização">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                            <span>${car.specs.potencia.split('/')[0]}</span>
                        </div>
                        <div class="spec-pill" title="Câmbio">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
                            <span>${car.specs.cambio.split(' ')[0]}</span>
                        </div>
                        <div class="spec-pill" title="Porta-malas">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="15" rx="2"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                            <span>${car.specs.portaMalas.split(' ')[0]} L</span>
                        </div>
                    </div>

                    <div class="car-pricing">
                        <div class="price-label">À vista a partir de</div>
                        <div class="price-value">${car.priceDisplay}</div>
                        <div class="price-installment">ou entrada + 48x de <strong>${formatCurrency(parcelaEstimada)}</strong>*</div>
                    </div>

                    <div class="car-actions">
                        <button class="btn btn-secondary" onclick="openCarModal('${car.id}', 'overview')">
                            Ficha & Fotos
                        </button>
                        <a class="btn btn-whatsapp" href="${whatsAppHref}" target="_blank" rel="noopener noreferrer">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                            Falar no WhatsApp
                        </a>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

// ==========================================================================
// MODAL DE DETALHES DO VEÍCULO
// ==========================================================================
function openCarModal(carId, defaultTab = "overview") {
    const car = CARS_DATABASE.find(c => c.id === carId);
    if (!car) return;

    appState.currentCarId = carId;
    appState.currentGalleryIndex = 0;

    const modal = document.getElementById("vehicleModal");
    const container = document.getElementById("modalBody");
    if (!modal || !container) return;

    container.innerHTML = `
        <div class="modal-car-header">
            <div>
                <span class="car-badge ${car.badgeClass}">${car.badge}</span>
                <h2 class="modal-title">${car.name}</h2>
                <div class="modal-subtitle">${car.version} • Ano/Modelo ${car.year}</div>
            </div>
            <div class="modal-price-box">
                <span class="modal-price-label">Preço Sugerido</span>
                <span class="modal-price-val">${car.priceDisplay}</span>
            </div>
        </div>

        <div class="modal-gallery-section">
            <div class="main-gallery-view">
                <img id="modalMainImg" src="${car.gallery[0].url}" alt="${car.name}" />
            </div>
            ${car.gallery.length > 1 ? `
                <div class="modal-thumbnails">
                    ${car.gallery.map((g, idx) => `
                        <button class="thumb-btn ${idx === 0 ? 'active' : ''}" onclick="switchModalGallery(${idx})">
                            <img src="${g.url}" alt="${g.label}" />
                            <span>${g.label}</span>
                        </button>
                    `).join('')}
                </div>
            ` : ''}
        </div>

        <nav class="modal-tabs">
            <button class="modal-tab-btn ${defaultTab === 'overview' ? 'active' : ''}" onclick="switchModalTab('overview')">
                Visão Geral
            </button>
            <button class="modal-tab-btn ${defaultTab === 'specs' ? 'active' : ''}" onclick="switchModalTab('specs')">
                Ficha Técnica
            </button>
            <button class="modal-tab-btn ${defaultTab === 'finance' ? 'active' : ''}" onclick="switchModalTab('finance')">
                Simular Financiamento
            </button>
            <button class="modal-tab-btn ${defaultTab === 'consortium' ? 'active' : ''}" onclick="switchModalTab('consortium')">
                Simular Consórcio
            </button>
        </nav>

        <div class="modal-tab-content" id="tabContentOverview" style="display: ${defaultTab === 'overview' ? 'block' : 'none'};">
            <div class="overview-grid">
                <div class="overview-text">
                    <h4>Por que escolher o ${car.name}?</h4>
                    <p class="tagline-highlight">"${car.tagline}"</p>
                    <ul class="highlights-list">
                        ${car.highlights.map(h => `
                            <li>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                                <span>${h}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="quick-summary-card">
                    <h5>Resumo Mecânico</h5>
                    <div class="summary-item">
                        <span>Motor</span>
                        <strong>${car.specs.motor}</strong>
                    </div>
                    <div class="summary-item">
                        <span>Potência</span>
                        <strong>${car.specs.potencia}</strong>
                    </div>
                    <div class="summary-item">
                        <span>Câmbio</span>
                        <strong>${car.specs.cambio}</strong>
                    </div>
                    <div class="summary-item">
                        <span>Porta-Malas</span>
                        <strong>${car.specs.portaMalas}</strong>
                    </div>
                    <div class="summary-item">
                        <span>Garantia</span>
                        <strong>${car.specs.garantia}</strong>
                    </div>
                </div>
            </div>

            <div class="modal-footer-cta">
                <a class="btn btn-whatsapp-lg" href="${generateWhatsAppUrl(`Olá, ${CONSULTANT_CONFIG.name}! Quero negociar o *${car.name} (${car.version})*. Quais as melhores condições para fechamento hoje?`)}" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    Quero Negociar este Carro no WhatsApp
                </a>
            </div>
        </div>

        <div class="modal-tab-content" id="tabContentSpecs" style="display: ${defaultTab === 'specs' ? 'block' : 'none'};">
            <div class="specs-table-container">
                <table class="specs-table">
                    <tbody>
                        <tr><td><span class="spec-name">Motor</span></td><td>${car.specs.motor}</td></tr>
                        <tr><td><span class="spec-name">Potência</span></td><td>${car.specs.potencia}</td></tr>
                        <tr><td><span class="spec-name">Torque</span></td><td>${car.specs.torque}</td></tr>
                        <tr><td><span class="spec-name">Transmissão</span></td><td>${car.specs.cambio}</td></tr>
                        <tr><td><span class="spec-name">Consumo Médio</span></td><td>${car.specs.consumo}</td></tr>
                        <tr><td><span class="spec-name">Porta-Malas</span></td><td>${car.specs.portaMalas}</td></tr>
                        <tr><td><span class="spec-name">Capacidade do Tanque</span></td><td>${car.specs.tanque}</td></tr>
                        <tr><td><span class="spec-name">Direção</span></td><td>${car.specs.direcao}</td></tr>
                        <tr><td><span class="spec-name">Garantia</span></td><td>${car.specs.garantia}</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer-cta">
                <a class="btn btn-whatsapp-lg" href="${generateWhatsAppUrl(`Olá, ${CONSULTANT_CONFIG.name}! Li a ficha técnica do *${car.name} (${car.version})* e quero tirar algumas dúvidas sobre opcionais e cores disponíveis.`)}" target="_blank" rel="noopener noreferrer">
                    Falar com Luis Fernando
                </a>
            </div>
        </div>

        <div class="modal-tab-content" id="tabContentFinance" style="display: ${defaultTab === 'finance' ? 'block' : 'none'};">
            <div class="finance-simulator-card">
                <div class="simulator-intro">
                    <h4>Simulador de Financiamento em Tempo Real</h4>
                    <p>Ajuste os valores de entrada e prazo para calcular a estimativa da sua parcela.</p>
                </div>

                <div class="sim-grid">
                    <div class="sim-controls">
                        <div class="form-group">
                            <label>Valor do Carro</label>
                            <input type="text" class="sim-input" value="${car.priceDisplay}" disabled readonly />
                        </div>

                        <div class="form-group">
                            <div class="label-with-val">
                                <label for="simEntradaRange">Valor da Entrada</label>
                                <span class="range-display" id="entradaValorDisplay">${formatCurrency(car.priceValue * 0.3)}</span>
                            </div>
                            <input 
                                type="range" 
                                id="simEntradaRange" 
                                min="${Math.round(car.priceValue * 0.1)}" 
                                max="${Math.round(car.priceValue * 0.8)}" 
                                step="1000" 
                                value="${Math.round(car.priceValue * 0.3)}"
                                oninput="updateFinanceCalculation()"
                            />
                            <div class="range-quick-pills">
                                <button type="button" onclick="setEntradaPercent(0.20)">20%</button>
                                <button type="button" onclick="setEntradaPercent(0.30)">30%</button>
                                <button type="button" onclick="setEntradaPercent(0.40)">40%</button>
                                <button type="button" onclick="setEntradaPercent(0.50)">50%</button>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="simPrazoSelect">Prazo de Pagamento</label>
                            <select id="simPrazoSelect" class="sim-select" onchange="updateFinanceCalculation()">
                                <option value="12">12 parcelas mensais</option>
                                <option value="24">24 parcelas mensais</option>
                                <option value="36">36 parcelas mensais</option>
                                <option value="48" selected>48 parcelas mensais (Mais escolhido)</option>
                                <option value="60">60 parcelas mensais</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="simNome">Seu Nome Completo (Opcional)</label>
                            <input type="text" id="simNome" class="sim-input" placeholder="Digite seu nome..." />
                        </div>
                    </div>

                    <div class="sim-results">
                        <div class="result-badge">Estimativa de Parcela</div>
                        <div class="result-installment" id="simParcelaDisplay">Calculando...</div>
                        <div class="result-meta" id="simMetaDisplay">48x com entrada de 30%</div>

                        <div class="result-benefits">
                            <div class="benefit-item">✓ Aprovação rápida de crédito</div>
                            <div class="benefit-item">✓ Aceitamos seu carro ou moto na troca</div>
                            <div class="benefit-item">✓ Financiamento via Banco Renault e principais bancos</div>
                        </div>

                        <button class="btn btn-whatsapp-lg" onclick="sendFinanceToWhatsApp()">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                            Enviar Simulação para Luis no WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-tab-content" id="tabContentConsortium" style="display: ${defaultTab === 'consortium' ? 'block' : 'none'};">
            <div class="consortium-card">
                <div class="consortium-intro">
                    <h4>Consórcio Renault: Conquiste sem Juros</h4>
                    <p>Planeje a compra do seu <strong>${car.name}</strong> com as melhores taxas de administração e parcelas que cabem no seu bolso.</p>
                </div>

                <div class="consortium-form">
                    <div class="form-group">
                        <label>Prazo Desejado</label>
                        <select id="consorcioPrazo" class="sim-select">
                            <option value="36">36 meses</option>
                            <option value="48">48 meses</option>
                            <option value="60" selected>60 meses</option>
                            <option value="72">72 meses</option>
                            <option value="84">84 meses</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Pretende ofertar lance inicial?</label>
                        <select id="consorcioLance" class="sim-select">
                            <option value="Sim, quero dar lance para antecipar">Sim, tenho valor para lance</option>
                            <option value="Não, apenas sorteio mensal">Não, pretendo aguardar sorteio</option>
                            <option value="Quero usar meu carro como lance embutido">Usar carro usado como lance</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Seu Nome</label>
                        <input type="text" id="consorcioNome" class="sim-input" placeholder="Seu nome completo..." />
                    </div>

                    <button class="btn btn-whatsapp-lg" onclick="sendConsortiumToWhatsApp()">
                        Solicitar Cotação de Consórcio no WhatsApp
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    if (defaultTab === 'finance') {
        updateFinanceCalculation();
    }
}

function switchModalGallery(index) {
    const car = CARS_DATABASE.find(c => c.id === appState.currentCarId);
    if (!car || !car.gallery[index]) return;

    appState.currentGalleryIndex = index;
    const imgEl = document.getElementById("modalMainImg");
    if (imgEl) {
        imgEl.style.opacity = "0.4";
        setTimeout(() => {
            imgEl.src = car.gallery[index].url;
            imgEl.style.opacity = "1";
        }, 150);
    }

    const thumbs = document.querySelectorAll(".thumb-btn");
    thumbs.forEach((t, i) => {
        if (i === index) t.classList.add("active");
        else t.classList.remove("active");
    });
}

function switchModalTab(tabName) {
    const tabs = ["overview", "specs", "finance", "consortium"];
    tabs.forEach(t => {
        const content = document.getElementById(`tabContent${t.charAt(0).toUpperCase() + t.slice(1)}`);
        if (content) {
            content.style.display = (t === tabName) ? "block" : "none";
        }
    });

    const btns = document.querySelectorAll(".modal-tab-btn");
    btns.forEach((b, idx) => {
        if (tabs[idx] === tabName) b.classList.add("active");
        else b.classList.remove("active");
    });

    if (tabName === 'finance') {
        updateFinanceCalculation();
    }
}

function closeModal() {
    const modal = document.getElementById("vehicleModal");
    if (modal) modal.classList.remove("active");
    document.body.style.overflow = "";
    appState.currentCarId = null;
}

// ==========================================================================
// CÁLCULO E ENVIO DO SIMULADOR DE FINANCIAMENTO
// ==========================================================================
function setEntradaPercent(pct) {
    const car = CARS_DATABASE.find(c => c.id === appState.currentCarId);
    if (!car) return;

    const range = document.getElementById("simEntradaRange");
    if (range) {
        range.value = Math.round(car.priceValue * pct);
        updateFinanceCalculation();
    }
}

function updateFinanceCalculation() {
    const car = CARS_DATABASE.find(c => c.id === appState.currentCarId);
    if (!car) return;

    const range = document.getElementById("simEntradaRange");
    const prazoSelect = document.getElementById("simPrazoSelect");
    const entradaDisplay = document.getElementById("entradaValorDisplay");
    const parcelaDisplay = document.getElementById("simParcelaDisplay");
    const metaDisplay = document.getElementById("simMetaDisplay");

    if (!range || !prazoSelect || !parcelaDisplay) return;

    const entrada = parseFloat(range.value);
    const n = parseInt(prazoSelect.value);
    const taxaMes = 0.0145; // Taxa de juros competitiva para automóveis ~1.45% a.m.

    const saldoDevedor = car.priceValue - entrada;
    const parcela = Math.round((saldoDevedor * taxaMes) / (1 - Math.pow(1 + taxaMes, -n)));

    if (entradaDisplay) entradaDisplay.textContent = formatCurrency(entrada);
    parcelaDisplay.textContent = `${formatCurrency(parcela)} / mês`;
    if (metaDisplay) {
        const pctEntrada = Math.round((entrada / car.priceValue) * 100);
        metaDisplay.textContent = `${n}x mensais • Entrada de ${formatCurrency(entrada)} (${pctEntrada}%)`;
    }
}

function sendFinanceToWhatsApp() {
    const car = CARS_DATABASE.find(c => c.id === appState.currentCarId);
    if (!car) return;

    const range = document.getElementById("simEntradaRange");
    const prazoSelect = document.getElementById("simPrazoSelect");
    const nomeInput = document.getElementById("simNome");

    const entrada = parseFloat(range ? range.value : car.priceValue * 0.3);
    const prazo = prazoSelect ? prazoSelect.value : "48";
    const nome = (nomeInput && nomeInput.value.trim()) ? nomeInput.value.trim() : "Cliente";

    const taxaMes = 0.0145;
    const saldo = car.priceValue - entrada;
    const parcela = Math.round((saldo * taxaMes) / (1 - Math.pow(1 + taxaMes, -parseInt(prazo))));

    const msg = 
`*SIMULAÇÃO DE FINANCIAMENTO - RENAULT 2026/2027*

👤 *Nome:* ${nome}
🚗 *Veículo:* ${car.name} (${car.version})
🏷️ *Valor Total:* ${car.priceDisplay}
💰 *Entrada Simulada:* ${formatCurrency(entrada)}
⏱️ *Prazo:* ${prazo} meses
📊 *Parcela Estimada:* ${formatCurrency(parcela)}/mês

Olá, ${CONSULTANT_CONFIG.name}! Realizei essa simulação pelo seu catálogo e gostaria de analisar a aprovação do meu crédito com você. Como podemos prosseguir?`;

    window.open(generateWhatsAppUrl(msg), "_blank");
    closeModal();
}

function sendConsortiumToWhatsApp() {
    const car = CARS_DATABASE.find(c => c.id === appState.currentCarId);
    if (!car) return;

    const prazoSelect = document.getElementById("consorcioPrazo");
    const lanceSelect = document.getElementById("consorcioLance");
    const nomeInput = document.getElementById("consorcioNome");

    const prazo = prazoSelect ? prazoSelect.value : "60";
    const lance = lanceSelect ? lanceSelect.value : "Apenas sorteio";
    const nome = (nomeInput && nomeInput.value.trim()) ? nomeInput.value.trim() : "Cliente";

    const msg =
`*INTERESSE EM CONSÓRCIO RENAULT*

👤 *Nome:* ${nome}
🚗 *Veículo de Interesse:* ${car.name} (${car.version})
🏷️ *Carta de Crédito:* ${car.priceDisplay}
⏱️ *Prazo Desejado:* ${prazo} meses
🎯 *Estratégia de Contemplação:* ${lance}

Olá, ${CONSULTANT_CONFIG.name}! Quero saber mais sobre os grupos de consórcio disponíveis para o *${car.name}* e tabela de parcelas reduzidas. Pode me enviar os detalhes?`;

    window.open(generateWhatsAppUrl(msg), "_blank");
    closeModal();
}

// ==========================================================================
// CONTROLE DE FILTROS E EVENTOS DE INTERFACE
// ==========================================================================
function setupEventListeners() {
    // Busca textual
    const searchInput = document.getElementById("searchInput");
    const searchClear = document.getElementById("searchClear");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            appState.searchQuery = e.target.value;
            if (searchClear) searchClear.style.display = e.target.value ? "block" : "none";
            renderCatalogGrid();
        });
    }

    if (searchClear) {
        searchClear.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = "";
                appState.searchQuery = "";
                searchClear.style.display = "none";
                renderCatalogGrid();
            }
        });
    }

    // Filtros de Categoria
    const catPills = document.querySelectorAll(".filter-pill[data-category]");
    catPills.forEach(pill => {
        pill.addEventListener("click", () => {
            catPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            appState.selectedCategory = pill.dataset.category;
            renderCatalogGrid();
        });
    });

    // Filtros de Câmbio
    const transPills = document.querySelectorAll(".filter-pill[data-trans]");
    transPills.forEach(pill => {
        pill.addEventListener("click", () => {
            transPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            appState.selectedTransmission = pill.dataset.trans;
            renderCatalogGrid();
        });
    });

    // Ordenação
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            appState.sortBy = e.target.value;
            renderCatalogGrid();
        });
    }

    // Modal - Fechar ao clicar fora ou ESC
    const modal = document.getElementById("vehicleModal");
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });
}

// ==========================================================================
// CRONÔMETRO DE CONTAGEM REGRESSIVA (24 HORAS)
// ==========================================================================
function initCountdownTimer() {
    const STORAGE_KEY = "renault_offer_countdown_v1";
    const DURATION_MS = 24 * 60 * 60 * 1000; // 24 horas

    let targetTime = null;
    try {
        targetTime = parseInt(localStorage.getItem(STORAGE_KEY), 10);
    } catch (e) {
        // Fallback se localStorage não estiver disponível
    }

    const now = Date.now();

    // Se não existir ou já expirou, reinicia o ciclo de 24h
    if (!targetTime || targetTime <= now) {
        targetTime = now + DURATION_MS;
        try {
            localStorage.setItem(STORAGE_KEY, targetTime.toString());
        } catch (e) {}
    }

    const hoursEl = document.getElementById("timerHours");
    const minutesEl = document.getElementById("timerMinutes");
    const secondsEl = document.getElementById("timerSeconds");

    if (!hoursEl || !minutesEl || !secondsEl) return;

    function tick() {
        const current = Date.now();
        let remaining = targetTime - current;

        if (remaining <= 0) {
            targetTime = current + DURATION_MS;
            try {
                localStorage.setItem(STORAGE_KEY, targetTime.toString());
            } catch (e) {}
            remaining = DURATION_MS;
        }

        const totalSeconds = Math.floor(remaining / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    tick();
    setInterval(tick, 1000);
}

// ==========================================================================
// INICIALIZAÇÃO
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
    renderCatalogGrid();
    initCountdownTimer();
});

