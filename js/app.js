const EXAMS_DATA = [
  {
    id: "urocultivo",
    code: "IP-024",
    title: "Urocultivo",
    subtitle: "Orina para urocultivo",
    category: "orina",
    categoryLabel: "Exámenes de orina",
    icon: "bi-virus",
    badge: "Entregar < 1-2 hrs",
    featured: true,
    keywords: ["orina", "infeccion", "bacterias", "cultivo", "ip-024", "segundo chorro"],
    description: "Busca determinar agentes infecciosos en su orina para que su médico tome decisiones terapéuticas apropiadas.",
    materials: [
      "1 frasco estéril para recolectar la muestra.",
      "3 tórulas empapadas en agua para realizar el aseo genital."
    ],
    requirements: [
      "Si se acompaña de examen de orina completa, se recomienda que la muestra no sea la primera orina de la mañana.",
      "Hidrátese normalmente, sin aumentar excesivamente la ingesta de líquido.",
      "Se sugiere evitar realizar este examen durante el período menstrual.",
      "No tomar antibióticos ni usar cremas/óvulos vaginales sin consultar previamente a su médico."
    ],
    hasGenderSplit: true,
    cleaningSteps: {
      mujer: [
        "Lave muy bien sus manos con abundante agua y jabón.",
        "Separe cuidadosamente los labios mayores.",
        "Con una tórula de algodón empapada en agua, limpie de adelante hacia atrás, pasando cada algodón una sola vez y botándolo.",
        "Repita el proceso dos veces más con nuevas tórulas, siempre de adelante hacia atrás."
      ],
      hombre: [
        "Lave muy bien sus manos con agua y jabón antes de empezar.",
        "Deslice el prepucio (piel que cubre el pene) hacia atrás.",
        "Realice un aseo minucioso del glande usando una tórula humedecida con agua y descártela.",
        "Repita el proceso usando dos tórulas más, una a la vez, sin reutilizarlas."
      ]
    },
    steps: [
      "Realice el aseo genital según corresponda.",
      "Abra cuidadosamente el frasco estéril sin tocar los bordes internos.",
      "Si es mujer, mantenga separados los labios mayores; si es hombre, mantenga retraído el prepucio.",
      "Comience a orinar y elimine el primer chorro en la taza del baño.",
      "Recolecte el segundo chorro directamente en el frasco hasta la mitad de su capacidad.",
      "Tape firmemente el frasco y compruebe que quedó bien cerrado."
    ],
    transport: [
      "Mantenga la muestra refrigerada.",
      "Si la toma en domicilio, transpórtela dentro de una bolsa con hielo y entréguela en el laboratorio antes de 1 a 2 horas."
    ],
    infographics: [
      { src: "assets/img/urocultivo-general.jpeg", caption: "Recolección de orina para urocultivo" },
      { src: "assets/img/urocultivo-mujer.jpeg", caption: "Preparación para urocultivo en mujeres" },
      { src: "assets/img/urocultivo-hombre.jpeg", caption: "Preparación para urocultivo en hombres" }
    ],
    videos: [{ src: "assets/video/urocultivo.mp4", caption: "Urocultivo" }]
  },
  {
    id: "orina-completa",
    code: "IP-021 / IP-020",
    title: "Orina completa",
    subtitle: "Examen de orina completa / Sedimento",
    category: "orina",
    categoryLabel: "Exámenes de orina",
    icon: "bi-droplet-fill",
    badge: "Primera orina / < 1 hr",
    featured: true,
    keywords: ["orina", "sedimento", "ip-021", "ip-020", "mañana"],
    description: "Análisis general de orina y sedimento urinario para evaluar función renal y detectar alteraciones.",
    materials: [
      "1 frasco limpio y seco entregado en la Unidad de Toma de Muestras."
    ],
    requirements: [
      "Utilice idealmente la primera orina de la mañana.",
      "Evite realizar el examen durante el período menstrual."
    ],
    hasGenderSplit: true,
    cleaningSteps: {
      mujer: [
        "Retire su ropa interior y siéntese cómodamente separando las rodillas.",
        "Separe los labios mayores con una mano y manténgalos separados durante todo el procedimiento."
      ],
      hombre: [
        "Retire su ropa interior.",
        "Retraiga el prepucio (piel que cubre el pene) y manténgalo retraído durante todo el procedimiento."
      ]
    },
    steps: [
      "Abra cuidadosamente el frasco sin tocar sus bordes.",
      "Comience a orinar eliminando el primer chorro directamente en la taza del baño.",
      "Sin dejar de orinar, recolecte el segundo chorro en el frasco hasta la mitad de su capacidad.",
      "Tape bien el frasco y mantenga la muestra refrigerada."
    ],
    transport: [
      "Coloque el frasco dentro de una bolsa y amárrela.",
      "Si la muestra se obtiene en domicilio, entréguela antes de que transcurra 1 hora desde su obtención."
    ],
    infographics: [
      { src: "assets/img/orina-completa.jpeg", caption: "Recolección de muestra de orina completa" }
    ],
    videos: [{ src: "assets/video/orina-completa.mp4", caption: "Orina completa" }]
  },
  {
    id: "orina-24h",
    code: "IP-017",
    title: "Orina de 24 horas",
    subtitle: "Recolección de orina de 24 horas",
    category: "orina",
    categoryLabel: "Exámenes de orina",
    icon: "bi-clock-history",
    badge: "Refrigerar 24 hrs",
    featured: false,
    keywords: ["24 horas", "clearance", "proteinuria", "porfirinas", "oxalato", "ip-017"],
    description: "Recolecta toda la orina eliminada durante un período exacto de 24 horas para medir componentes específicos.",
    materials: [
      "Recipiente limpio y seco de boca ancha (lavado solo con agua, sin detergente).",
      "Si es Porfirinas: bolsa negra para proteger de la luz."
    ],
    requirements: [
      "Mantenga su consumo habitual de agua, salvo indicación médica contraria.",
      "No comience la recolección hasta que haya terminado su período menstrual.",
      "Evite mezclar la orina con papel higiénico o deposiciones.",
      "Si es Oxalato en orina: no consuma vitamina C 48 hrs antes ni durante la recolección."
    ],
    hasGenderSplit: false,
    steps: [
      "Primer día a las 07:00 horas: orine normalmente y elimine TODA esa primera orina en el baño.",
      "Durante las siguientes 24 horas: recolecte absolutamente toda la orina del día y la noche en el recipiente.",
      "Segundo día a las 07:00 horas: al cumplirse las 24 horas, orine por última vez y agregue esa orina al recipiente.",
      "Mantenga el recipiente tapado y refrigerado durante todo el período."
    ],
    transport: [
      "Entregue toda la muestra recolectada el mismo día que finaliza el período.",
      "Si tiene examen de sangre asociado (ej. Clearance), debe tomarse el mismo día que entrega la orina."
    ],
    infographics: [
      { src: "assets/img/orina-24h.jpeg", caption: "Recolección de orina de 24 horas" }
    ],
    videos: [{ src: "assets/video/orina-24h.mp4", caption: "Orina de 24 horas" }]
  },
  {
    id: "test-graham",
    code: "IP-034",
    title: "Test de Graham",
    subtitle: "Muestra anal y perianal (Oxiuros)",
    category: "deposiciones",
    categoryLabel: "Exámenes de deposiciones",
    icon: "bi-layers",
    badge: "5 días seguidos",
    featured: true,
    keywords: ["graham", "oxiuros", "cinta", "laminas", "vidrio", "parasito", "ip-034"],
    description: "Detecta la presencia del parásito intestinal Enterobius vermicularis (oxiuros) mediante láminas con cinta adhesiva.",
    materials: [
      "1 caja con 5 láminas de vidrio envueltas en papel.",
      "Cada lámina incluye una cinta adhesiva transparente adherida."
    ],
    requirements: [
      "Obtenga la muestra a primera hora de la mañana, al despertar, ANTES del aseo matinal y antes de orinar o defecar.",
      "No aplique cremas, ungüentos ni talco en la zona anal la noche anterior.",
      "No haber ingerido antiparasitarios en los últimos 3 días."
    ],
    hasGenderSplit: false,
    steps: [
      "Abra la caja y tome una lámina de vidrio de la sección de placas limpias.",
      "Retire el papel envoltorio y despegue la cinta adhesiva transparente.",
      "Con la parte adhesiva de la cinta, presione y retire varias veces sobre la zona anal y perianal.",
      "Vuelva a pegar la cinta sobre la lámina de vidrio procurando que quede estirada y sin pliegues.",
      "Envuelva la lámina en su papel y guárdela en la sección de placas usadas.",
      "Repita el procedimiento 1 lámina por día durante 5 días consecutivos."
    ],
    transport: [
      "Transporte las 5 láminas con cuidado para evitar que el vidrio se quiebre.",
      "Mantenga a temperatura ambiente durante todo el período."
    ],
    infographics: [
      { src: "assets/img/test-graham.jpeg", caption: "Preparación y recolección para el test de Graham" }
    ],
    videos: [{ src: "assets/video/test-graham.mp4", caption: "Test de Graham" }]
  },
  {
    id: "coprocultivo",
    code: "IP-002",
    title: "Coprocultivo",
    subtitle: "Cultivo en deposición",
    category: "deposiciones",
    categoryLabel: "Exámenes de deposiciones",
    icon: "bi-eyedropper",
    badge: "Entregar mismo día",
    featured: false,
    keywords: ["coprocultivo", "torula", "gel", "diarrea", "bacterias", "ip-002"],
    description: "Cultivo de deposición para identificar bacterias causantes de infecciones gastrointestinales.",
    materials: [
      "1 envoltorio con un tubo que contiene gel.",
      "1 tórula con algodón en uno de sus extremos."
    ],
    requirements: [
      "No abra el envoltorio hasta el momento exacto de tomar la muestra.",
      "Se sugiere no estar en terapia con antibióticos ni consumiendo laxantes.",
      "Evite mezclar la deposición con orina o agua del baño."
    ],
    hasGenderSplit: false,
    steps: [
      "Defeque en un recipiente limpio y seco.",
      "Abra el envoltorio y retire la tórula tomándola desde el extremo con tapón.",
      "Introduzca la punta con algodón en la deposición (si es Campylobacter, tome de la zona más mucosa o purulenta).",
      "Destape el tubo e introduzca la tórula de manera que el algodón quede sumergido en el gel.",
      "Cierre el tubo herméticamente."
    ],
    transport: [
      "Coloque el tubo en una bolsa y amárrela.",
      "Entregue la muestra el mismo día de su emisión, manteniéndola refrigerada durante el traslado."
    ],
    infographics: [
      { src: "assets/img/coprocultivo.jpeg", caption: "Recolección para cultivo en deposiciones" }
    ],
    videos: [{ src: "assets/video/coprocultivo.mp4", caption: "Coprocultivo" }]
  },
  {
    id: "sangre-oculta",
    code: "IP-022",
    title: "Sangre oculta en deposiciones",
    subtitle: "Test de Guayaco sensibilizado",
    category: "deposiciones",
    categoryLabel: "Exámenes de deposiciones",
    icon: "bi-card-checklist",
    badge: "Dieta 3 días antes",
    featured: false,
    keywords: ["sangre oculta", "guayaco", "tarjeta", "dieta", "carnes", "ip-022"],
    description: "Detecta pequeñas cantidades de sangre oculta en las heces mediante tarjetas reactivas.",
    materials: [
      "Tarjetas reactivas entregadas en Toma de Muestras.",
      "Paletas de madera."
    ],
    requirements: [
      "Dieta 3 días antes y durante la toma: NO consumir carnes rojas, rabanitos, melón, coliflor, brócoli ni frutas/verduras crudas.",
      "Puede comer: pequeña cantidad de pollo, pavo o atún bien cocido, y frutas/verduras cocidas.",
      "Evite aspirina, vitamina C o antiinflamatorios 7 días antes.",
      "No recolectar hasta 3 días después de terminado el período menstrual o sangrado por hemorroides."
    ],
    hasGenderSplit: false,
    steps: [
      "Complete los datos solicitados en la tarjeta con letra imprenta.",
      "Defeque en un recipiente limpio y seco sin mezclar con orina.",
      "Levante la tapa delantera de la tarjeta.",
      "Con la paleta de madera, tome una pequeña cantidad de deposición y aplique una capa delgada en la ventana A.",
      "Con la misma paleta, tome muestra de otro sitio distinto y aplique en la ventana B.",
      "Cierre la tarjeta y guárdela protegida de la luz y el calor."
    ],
    transport: [
      "Lleve las tarjetas el mismo día en que termine de recolectar la última muestra.",
      "Mantenga a temperatura ambiente."
    ],
    infographics: [
      { src: "assets/img/sangre-oculta-guayaco.jpeg", caption: "Sangre oculta en deposiciones (test de guayaco)" },
      { src: "assets/img/sangre-oculta-inmunologico.jpeg", caption: "Sangre oculta en deposiciones (método inmunológico)" }
    ],
    videos: [{ src: "assets/video/sangre-oculta-guayaco.mp4", caption: "Sangre oculta en deposiciones (test de guayaco)" }]
  },
  {
    id: "coproparasitologico",
    code: "IP-032",
    title: "Coproparasitológico seriado",
    subtitle: "Parasitológico seriado de deposiciones",
    category: "deposiciones",
    categoryLabel: "Exámenes de deposiciones",
    icon: "bi-prescription2",
    badge: "Líquido fijador",
    featured: false,
    keywords: ["parasitologico", "coproparasitologico", "parasitos", "frascos", "fijador", "ip-032"],
    description: "Permite detectar la presencia de parásitos intestinales en muestras seriadas de deposición.",
    materials: [
      "Caja/set con 3 frascos que contienen líquido fijador especial.",
      "Un par de guantes y paleta incorporada en cada frasco."
    ],
    requirements: [
      "No utilice laxantes oleosos al menos 3 días antes ni durante la recolección.",
      "No haber ingerido antibióticos, antiparasitarios o quimioterápicos en los últimos 3 días.",
      "ADVERTENCIA: Los frascos contienen fenol, formalina y alcohol. No ingerir ni dejar al alcance de niños."
    ],
    hasGenderSplit: false,
    steps: [
      "Defeque en un recipiente limpio y seco evitando mezclar con orina.",
      "Colóquese los guantes y recolecte una muestra del tamaño de una almendra (o una cucharada si es líquida).",
      "Si observa mucus o sangre, recolecte preferentemente de esa zona.",
      "Introduzca la muestra en el frasco con líquido fijador y mezcle suavemente hasta homogeneizar.",
      "Para 3 muestras: recolecte día por medio (un frasco diferente cada día)."
    ],
    transport: [
      "Mantenga los frascos bien cerrados en un ambiente fresco (temperatura ambiente).",
      "Una vez finalizadas las muestras, transpórtelas a la Unidad de Toma de Muestras."
    ],
    infographics: [
      { src: "assets/img/coproparasitologico.jpeg", caption: "Recolección para coproparasitológico seriado" }
    ],
    videos: [{ src: "assets/video/coproparasitologico.mp4", caption: "Coproparasitológico seriado" }]
  }
];

// ==========================================
// ESTADO GLOBAL
// ==========================================
let currentRoute = 'inicio';
let previousRoute = 'inicio';
let currentFilter = 'all';
let currentExam = null;
let currentProfile = 'mujer';
let fontScale = 1;
let isSpeaking = false;

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedExams();
  renderCatalog();
  setupListeners();
  const navbar = document.querySelector('.top-navbar');
  new ResizeObserver(() => {
    document.documentElement.style.setProperty('--top-navbar-height', `${navbar.offsetHeight}px`);
  }).observe(navbar);
  registerSW();
});

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).catch((error) => {
      console.error('No se pudo registrar el service worker:', error);
    });
  }
}

function setupListeners() {
  const catInput = document.getElementById('catalogSearchInput');
  catInput.addEventListener('input', (e) => {
    const val = e.target.value;
    document.getElementById('clearCatalogSearchBtn').classList.toggle('d-none', val.length === 0);
    renderCatalog();
  });

  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderCatalog();
    });
  });

  const lightbox = document.getElementById('lightboxModal');
  const viewport = document.getElementById('lightboxViewport');
  document.getElementById('lightboxZoom').addEventListener('click', () => {
    setLightboxZoom(!viewport.classList.contains('is-zoomed'));
  });
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox || (event.target === viewport && !viewport.classList.contains('is-zoomed'))) {
      lightbox.close();
    }
  });
}

// ==========================================
// NAVEGACIÓN ENTRE APARTADOS (INICIO / CATÁLOGO / DETALLE)
// ==========================================
function navigateTo(route) {
  stopSpeech();
  pauseExamVideos();
  currentRoute = route;

  document.getElementById('inicioView').classList.toggle('d-none', route !== 'inicio');
  document.getElementById('catalogoView').classList.toggle('d-none', route !== 'catalogo');
  document.getElementById('detailView').classList.toggle('d-none', route !== 'detail');

  document.querySelectorAll('[data-route]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.route === route);
  });

  if (route === 'catalogo') {
    renderCatalog();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHomeSearch(e) {
  e.preventDefault();
  const q = document.getElementById('homeSearchInput').value.trim();
  const catInput = document.getElementById('catalogSearchInput');
  catInput.value = q;
  document.getElementById('clearCatalogSearchBtn').classList.toggle('d-none', q.length === 0);
  navigateTo('catalogo');
}

function goToCatalogWithFilter(category) {
  currentFilter = category;
  document.querySelectorAll('.pill-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === category);
  });
  navigateTo('catalogo');
}

// ==========================================
// RENDER TARJETAS Y BÚSQUEDA
// ==========================================
function createExamCardHTML(exam) {
  return `
    <article class="exam-card" onclick="openExam('${exam.id}')">
      <div class="exam-icon-box ${exam.category}">
        <i class="bi ${exam.icon}"></i>
      </div>
      <div class="exam-info">
        <div class="exam-top-meta">
          <span class="exam-code-tag">${exam.code}</span>
        </div>
        <h3>${exam.title}</h3>
        <p>${exam.subtitle}</p>
      </div>
      <i class="bi bi-chevron-right text-muted"></i>
    </article>
  `;
}

function renderFeaturedExams() {
  const featured = EXAMS_DATA.filter(e => e.featured);
  document.getElementById('featuredExamsGrid').innerHTML = featured.map(createExamCardHTML).join('');
}

function normalizeText(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function fuzzyMatch(query, target) {
  if (!query) return true;
  const q = normalizeText(query).trim();
  const t = normalizeText(target);
  if (t.includes(q)) return true;

  if (q.length >= 4) {
    const words = t.split(/\s+/);
    return words.some(w => {
      if (Math.abs(w.length - q.length) > 1) return false;
      let diffs = 0;
      const len = Math.min(w.length, q.length);
      for (let i = 0; i < len; i++) {
        if (w[i] !== q[i]) diffs++;
      }
      diffs += Math.abs(w.length - q.length);
      return diffs <= 1;
    });
  }
  return false;
}

function renderCatalog() {
  const query = document.getElementById('catalogSearchInput').value;
  const sortBy = document.getElementById('sortSelect').value;
  const listEl = document.getElementById('catalogGrid');
  const emptyEl = document.getElementById('emptyState');

  let filtered = EXAMS_DATA.filter(exam => {
    const matchesCat = currentFilter === 'all' || exam.category === currentFilter;
    const searchableBlob = `${exam.title} ${exam.code} ${exam.subtitle} ${exam.keywords.join(' ')}`;
    return matchesCat && fuzzyMatch(query, searchableBlob);
  });

  if (sortBy === 'az') {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'code') {
    filtered = [...filtered].sort((a, b) => a.code.localeCompare(b.code));
  }

  document.getElementById('resultsCount').textContent = `Mostrando ${filtered.length} ${filtered.length === 1 ? 'examen' : 'exámenes'}`;

  if (filtered.length === 0) {
    listEl.innerHTML = '';
    emptyEl.classList.remove('d-none');
    return;
  }

  emptyEl.classList.add('d-none');
  listEl.innerHTML = filtered.map(createExamCardHTML).join('');
}

function clearCatalogSearch() {
  const input = document.getElementById('catalogSearchInput');
  input.value = '';
  document.getElementById('clearCatalogSearchBtn').classList.add('d-none');
  currentFilter = 'all';
  document.querySelectorAll('.pill-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === 'all');
  });
  renderCatalog();
}

// ==========================================
// VISTA DETALLE DEL EXAMEN
// ==========================================
function openExam(id) {
  stopSpeech();
  if (currentRoute !== 'detail') {
    previousRoute = currentRoute;
  }
  currentExam = EXAMS_DATA.find(e => e.id === id);
  if (!currentExam) return;

  currentRoute = 'detail';
  document.getElementById('inicioView').classList.add('d-none');
  document.getElementById('catalogoView').classList.add('d-none');
  document.getElementById('detailView').classList.remove('d-none');

  document.getElementById('stickyTitle').textContent = currentExam.title;
  document.getElementById('detailCode').textContent = `Código: ${currentExam.code}`;
  document.getElementById('detailCategory').textContent = currentExam.categoryLabel;
  document.getElementById('detailTitle').textContent = currentExam.title;
  document.getElementById('detailSubtitle').textContent = currentExam.subtitle;

  const banner = document.getElementById('examHeroBanner');
  banner.className = `detail-banner ${currentExam.category}`;

  switchTab('tab-req');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBackFromDetail() {
  navigateTo(previousRoute || 'inicio');
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tabId);
  });

  const container = document.getElementById('detailContent');
  if (!currentExam) return;
  pauseExamVideos();

  if (tabId === 'tab-req') {
    container.innerHTML = `
      <div class="detail-grid-blocks">
        <div class="info-block">
          <h3><i class="bi bi-file-medical text-teal"></i> ¿En qué consiste?</h3>
          <p class="mb-0">${currentExam.description}</p>
        </div>
        <div class="info-block">
          <h3><i class="bi bi-box-seam text-teal"></i> Materiales necesarios</h3>
          <ul>${currentExam.materials.map(m => `<li>${m}</li>`).join('')}</ul>
        </div>
        <div class="info-block highlight-warn full-span">
          <h3><i class="bi bi-exclamation-triangle-fill text-warning"></i> Requisitos previos</h3>
          <ul>${currentExam.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>
      </div>
    `;
  } else if (tabId === 'tab-steps') {
    let genderBlock = '';
    if (currentExam.hasGenderSplit) {
      const cleanList = currentExam.cleaningSteps[currentProfile];
      genderBlock = `
        <div class="info-block">
          <h3><i class="bi bi-person-check text-teal"></i> Preparación / Aseo previo</h3>
          <div class="profile-selector">
            <button class="profile-btn ${currentProfile === 'mujer' ? 'active' : ''}" onclick="setProfile('mujer')">
              <i class="bi bi-gender-female"></i> Mujer
            </button>
            <button class="profile-btn ${currentProfile === 'hombre' ? 'active' : ''}" onclick="setProfile('hombre')">
              <i class="bi bi-gender-male"></i> Hombre
            </button>
          </div>
          ${cleanList.map((s, idx) => `
            <div class="step-item">
              <div class="step-num">${idx + 1}</div>
              <div class="step-text">${s}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="detail-grid-blocks">
        ${genderBlock}
        <div class="info-block ${currentExam.hasGenderSplit ? '' : 'full-span'}">
          <h3><i class="bi bi-check2-circle text-teal"></i> Procedimiento de recolección</h3>
          ${currentExam.steps.map((s, idx) => `
            <div class="step-item">
              <div class="step-num">${idx + 1}</div>
              <div class="step-text">${s}</div>
            </div>
          `).join('')}
        </div>
        <div class="info-block full-span">
          <h3><i class="bi bi-truck text-teal"></i> Conservación y traslado</h3>
          <ul>${currentExam.transport.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>
      </div>
    `;
  } else if (tabId === 'tab-media') {
    renderVisualGuide(container, currentExam);
  }
}

function renderVisualGuide(container, exam) {
  container.innerHTML = `
    <div class="detail-grid-blocks">
      <section class="info-block media-group" data-media="images">
        <h3><i class="bi bi-image text-teal" aria-hidden="true"></i> Infografías y fotos</h3>
      </section>
      <section class="info-block media-group" data-media="videos">
        <h3><i class="bi bi-camera-video text-teal" aria-hidden="true"></i> Videos explicativos</h3>
      </section>
    </div>
  `;

  const imageGroup = container.querySelector('[data-media="images"]');
  exam.infographics.forEach(({ src, caption }) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'media-preview';
    button.setAttribute('aria-label', `Ampliar: ${caption}`);
    button.addEventListener('click', () => openLightbox(src, caption));

    const image = document.createElement('img');
    image.alt = '';
    image.loading = 'lazy';
    image.addEventListener('error', () => showMediaError(button, 'No se pudo cargar la imagen.'));
    button.append(image);
    imageGroup.append(createMediaFigure(button, caption));
    image.src = src;
  });

  const videoGroup = container.querySelector('[data-media="videos"]');
  exam.videos.forEach(({ src, caption }) => {
    const video = document.createElement('video');
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', caption);
    video.addEventListener('error', () => showMediaError(video, 'No se pudo cargar el video.'));
    videoGroup.append(createMediaFigure(video, caption));
    video.src = src;
  });

  if (!exam.infographics.length) {
    imageGroup.insertAdjacentHTML('beforeend', '<p class="media-notice">No hay imágenes para este examen.</p>');
  }
  if (!exam.videos.length) {
    videoGroup.insertAdjacentHTML('beforeend', '<p class="media-notice">No hay videos para este examen.</p>');
  }
}

function createMediaFigure(media, caption) {
  const figure = document.createElement('figure');
  figure.className = 'media-figure';
  const label = document.createElement('figcaption');
  label.textContent = caption;
  figure.append(media, label);
  return figure;
}

function showMediaError(media, text) {
  const message = document.createElement('p');
  message.className = 'media-notice';
  message.textContent = text;
  media.replaceWith(message);
}

function pauseExamVideos() {
  document.querySelectorAll('#detailContent video').forEach(video => video.pause());
}

function setProfile(profile) {
  currentProfile = profile;
  switchTab('tab-steps');
}

// ==========================================
// ACCESIBILIDAD Y LIGHTBOX
// ==========================================
function changeFontSize(dir) {
  fontScale = Math.min(1.25, Math.max(0.9, +(fontScale + dir * 0.08).toFixed(2)));
  document.documentElement.style.setProperty('--font-scale', fontScale);
  document.getElementById('fontScaleLabel').textContent = `${Math.round(fontScale * 100)}%`;
}

function openLightbox(src, caption) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxCaption').textContent = caption;
  document.getElementById('lightboxModal').showModal();
  setLightboxZoom(false);
}

function setLightboxZoom(zoomed) {
  const viewport = document.getElementById('lightboxViewport');
  viewport.classList.toggle('is-zoomed', zoomed);
  viewport.tabIndex = zoomed ? 0 : -1;
  viewport.scrollTo(0, 0);
  document.getElementById('lightboxZoom').textContent = zoomed ? 'Alejar' : 'Acercar';
}

// ==========================================
// LECTURA EN VOZ ALTA MEJORADA (VOZ NATURAL)
// ==========================================
let preferredVoice = null;
let speechQueue = [];
let speechIndex = 0;

function loadNaturalVoice() {
  if (!('speechSynthesis' in window)) return;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return;

  const priorityPatterns = [
    /Catalina.*Natural/i,
    /Lorenzo.*Natural/i,
    /Dalia.*Natural/i,
    /Salome.*Natural/i,
    /Paloma.*Natural/i,
    /Natural/i,
    /Google español/i,
    /Paulina/i,
    /Monica/i
  ];

  const spanishVoices = voices.filter(v => v.lang.toLowerCase().startsWith('es'));

  for (const pattern of priorityPatterns) {
    const match = spanishVoices.find(v => pattern.test(v.name));
    if (match) {
      preferredVoice = match;
      return;
    }
  }

  preferredVoice = spanishVoices.find(v => !/espeak/i.test(v.name)) || spanishVoices[0] || null;
}

if ('speechSynthesis' in window) {
  loadNaturalVoice();
  window.speechSynthesis.onvoiceschanged = loadNaturalVoice;
}

function buildSpeechChunks() {
  if (!currentExam) return [];
  const activeTab = document.querySelector('.tab-btn.active')?.dataset.tab || 'tab-req';
  const chunks = [];

  chunks.push(`${currentExam.title}. Código ${currentExam.code}.`);

  if (activeTab === 'tab-req') {
    chunks.push(currentExam.description);
    chunks.push('Materiales necesarios:');
    currentExam.materials.forEach(m => chunks.push(m));
    chunks.push('Requisitos previos importantes:');
    currentExam.requirements.forEach(r => chunks.push(r));
  } else if (activeTab === 'tab-steps') {
    if (currentExam.hasGenderSplit) {
      const label = currentProfile === 'mujer' ? 'paciente femenino' : 'paciente masculino';
      chunks.push(`Preparación y aseo previo para ${label}:`);
      currentExam.cleaningSteps[currentProfile].forEach((s, i) => {
        chunks.push(`Paso ${i + 1}: ${s}`);
      });
    }
    chunks.push('Procedimiento de recolección:');
    currentExam.steps.forEach((s, i) => {
      chunks.push(`Paso ${i + 1}: ${s}`);
    });
    chunks.push('Conservación y traslado:');
    currentExam.transport.forEach(t => chunks.push(t));
  } else {
    chunks.push('Estás en la sección de guía visual. Toca la infografía para ampliarla o reproduce el video explicativo.');
  }

  return chunks;
}

function speakNextChunk() {
  if (!isSpeaking || speechIndex >= speechQueue.length) {
    stopSpeech();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(speechQueue[speechIndex]);
  if (preferredVoice) {
    utterance.voice = preferredVoice;
    utterance.lang = preferredVoice.lang;
  } else {
    utterance.lang = 'es-CL';
  }

  utterance.rate = 1.03;
  utterance.pitch = 1.02;

  utterance.onend = () => {
    if (!isSpeaking) return;
    speechIndex++;
    setTimeout(speakNextChunk, 260);
  };

  utterance.onerror = () => stopSpeech();

  window.speechSynthesis.speak(utterance);
}

function toggleSpeech() {
  if (!('speechSynthesis' in window)) {
    alert('Tu navegador no soporta lectura en voz alta.');
    return;
  }
  if (isSpeaking) {
    stopSpeech();
    return;
  }
  if (!currentExam) return;

  loadNaturalVoice();
  window.speechSynthesis.cancel();

  speechQueue = buildSpeechChunks();
  speechIndex = 0;
  isSpeaking = true;

  const btn = document.getElementById('ttsBtn');
  btn.classList.add('speaking');
  document.getElementById('ttsBtnText').textContent = 'Detener';

  speakNextChunk();
}

function stopSpeech() {
  isSpeaking = false;
  speechQueue = [];
  speechIndex = 0;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  const btn = document.getElementById('ttsBtn');
  if (btn) {
    btn.classList.remove('speaking');
    document.getElementById('ttsBtnText').textContent = 'Escuchar';
  }
}
