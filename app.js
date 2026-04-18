// ═══════════════════════════════════════════
// DATA - PRODUCT CATALOG
// ═══════════════════════════════════════════
const PRODUCTS = [
  { id:1,  name:"Brie de Meaux",           cat:"soft",         emoji:"🫶", img:"https://images.unsplash.com/photo-1486297986069-b34419a2aca4?w=480&h=360&fit=crop&auto=format&q=80", origin:"Île-de-France, Francia",       tagline:"La reina de los quesos suaves",                  desc:"Queso de pasta blanda con corteza enmohecida blanca, textura cremosa y sabores suaves con notas de champiñón y tierra.",         price:8.50,  weight:"250g",   intensity:"Suave",       milk:"Vaca",   maturity:"4 semanas",   pairing:"Vino Champagne, Pinot Noir ligero o manzana verde.",           badge:"popular", popular:true },
  { id:2,  name:"Camembert de Normandie",  cat:"soft",         emoji:"🧀", img:"https://images.unsplash.com/photo-1452195100486-9cc7a74b8691?w=480&h=360&fit=crop&auto=format&q=80", origin:"Normandía, Francia",            tagline:"Sabor profundo y carácter único",                desc:"Queso de leche cruda con corteza blanca, más intenso que el Brie. Suave y cremoso con aromas complejos de tierra y nata.",          price:7.20,  weight:"250g",   intensity:"Medio",       milk:"Vaca",   maturity:"3 semanas",   pairing:"Calvados, sidra normanda o vino blanco Burgundy." },
  { id:3,  name:"Burrata Italiana",        cat:"soft",         emoji:"🤍", img:"https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=480&h=360&fit=crop&auto=format&q=80", origin:"Puglia, Italia",                tagline:"Seda líquida envuelta en mozzarella",            desc:"El exterior es mozzarella fresca y el interior contiene stracciatella y nata, creando una explosión de cremosidad.",                price:9.80,  weight:"200g",   intensity:"Muy suave",   milk:"Vaca",   maturity:"Fresco",      pairing:"Tomate heirloom, aceite de oliva y albahaca fresca.",          badge:"new" },
  { id:4,  name:"Taleggio",               cat:"soft",         emoji:"🟠", img:"https://images.unsplash.com/photo-1559561853-08451507a318?w=480&h=360&fit=crop&auto=format&q=80", origin:"Lombardía, Italia",             tagline:"Suave y goloso con aroma intenso",              desc:"Queso lavado semi-suave con corteza rosacea y pasta cremosa. Su olor es fuerte pero su sabor resulta suave y mantecoso.",           price:11.50, weight:"300g",   intensity:"Medio-Alto",  milk:"Vaca",   maturity:"6-10 semanas",pairing:"Peras maduras, nueces o vino tinto Chianti." },
  { id:5,  name:"Reblochon",              cat:"soft",         emoji:"🟡", img:"https://images.unsplash.com/photo-1486297986069-b34419a2aca4?w=480&h=360&fit=crop&auto=format&q=80", origin:"Saboya, Francia",               tagline:"El alma de los Alpes en un queso",              desc:"Queso lavado con corteza anaranjada y pasta suave con aroma persistente. Base del famoso tartiflette.",                             price:10.20, weight:"500g",   intensity:"Medio",       milk:"Vaca",   maturity:"3-4 semanas", pairing:"Vino blanco de Saboya, Apremont o sidra seca." },
  { id:6,  name:"Cheddar Extra Madurado", cat:"hard",         emoji:"🏔️", img:"https://images.unsplash.com/photo-1452195100486-9cc7a74b8691?w=480&h=360&fit=crop&auto=format&q=80", origin:"Somerset, England",             tagline:"El rey indiscutible del queso británico",       desc:"Madurado durante 18 meses, presenta una textura densa y granular con notas de caramelo, nuez y un toque picante al final.",         price:12.80, weight:"300g",   intensity:"Fuerte",      milk:"Vaca",   maturity:"18 meses",    pairing:"Ale amarga de Nottingham, uvas o chutney de mango.",           badge:"british", popular:true },
  { id:7,  name:"Parmigiano Reggiano",    cat:"hard",         emoji:"⭐", img:"https://images.unsplash.com/photo-1587486936761-f32c5e6e56a6?w=480&h=360&fit=crop&auto=format&q=80", origin:"Emilia-Romaña, Italia",         tagline:"El rey de los quesos italianos",                desc:"El queso más famoso del mundo. Granuloso, cristalino, con intensas notas de umami, frutos secos y caramelo salado.",               price:18.50, weight:"300g",   intensity:"Muy Fuerte",  milk:"Vaca",   maturity:"24 meses",    pairing:"Prosecco, vino tinto Barolo o miel de acacia.",                badge:"popular" },
  { id:8,  name:"Manchego Curado",        cat:"hard",         emoji:"🇪🇸", img:"https://images.unsplash.com/photo-1617196033183-6ff24c1b2b96?w=480&h=360&fit=crop&auto=format&q=80", origin:"La Mancha, España",             tagline:"Firmeza y carácter de la meseta",               desc:"Elaborado con leche de oveja manchega, presenta corteza rayada característica y pasta densa con sabores complejos y persistentes.",  price:14.20, weight:"300g",   intensity:"Fuerte",      milk:"Oveja", maturity:"6 meses",     pairing:"Jerez amontillado, jamón ibérico o membrillo." },
  { id:9,  name:"Gruyère AOC",            cat:"hard",         emoji:"🟡", img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=480&h=360&fit=crop&auto=format&q=80", origin:"Friburgo, Suiza",               tagline:"El complemento perfecto para fondues",          desc:"Queso alpino de larga tradición con pequeños ojos, sabor frutal y complejo que se vuelve más pronunciado con la maduración.",       price:13.90, weight:"300g",   intensity:"Medio-Fuerte",milk:"Vaca",   maturity:"12 meses",    pairing:"Fendant suizo, cerveza de trigo o manzana Golden." },
  { id:10, name:"Comté Reserva",          cat:"hard",         emoji:"🟤", img:"https://images.unsplash.com/photo-1575377222312-dd1a63a51638?w=480&h=360&fit=crop&auto=format&q=80", origin:"Franche-Comté, Francia",        tagline:"El queso de montaña más consumido de Francia",  desc:"Elaborado en queserías alpinas con leche de vacas Montbéliarde. Sus sabores evolucionan de dulce y frutal a notas de frutos secos.", price:15.60, weight:"300g",   intensity:"Fuerte",      milk:"Vaca",   maturity:"18 meses",    pairing:"Chardonnay de Borgoña, nueces o embutidos alpinos.",           badge:"new" },
  { id:11, name:"Red Leicester",          cat:"hard",         emoji:"🟠", img:"https://images.unsplash.com/photo-1603729362753-f8162ac6c3df?w=480&h=360&fit=crop&auto=format&q=80", origin:"Leicestershire, England",       tagline:"El rojo emblemático del Midlands inglés",       desc:"Queso británico de color rojo-naranja teñido con annatto. Sabor suave pero pleno, ligeramente más dulce que el Cheddar.",           price:9.50,  weight:"250g",   intensity:"Medio",       milk:"Vaca",   maturity:"3-6 meses",   pairing:"Pickle de Branston, cerveza Ale inglesa o manzanas.",          badge:"british" },
  { id:12, name:"Emmental Suizo",         cat:"hard",         emoji:"🧀", img:"https://images.unsplash.com/photo-1452195100486-9cc7a74b8691?w=480&h=360&fit=crop&auto=format&q=80", origin:"Berna, Suiza",                  tagline:"El clásico de los agujeros imposibles de ignorar",desc:"Queso de pasta dura con grandes ojos característicos. Sabor dulce, ligeramente frutal con notas de avellana y un final suave.",     price:11.00, weight:"300g",   intensity:"Suave-Medio", milk:"Vaca",   maturity:"8 meses",     pairing:"Riesling alemán, salami o peras de temporada." },
  { id:13, name:"Stilton DOP",            cat:"blue",         emoji:"💙", img:"https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?w=480&h=360&fit=crop&auto=format&q=80", origin:"Nottinghamshire, England",      tagline:"Orgullo de Nottingham, el rey de los azules",   desc:"El queso azul inglés por excelencia. Venas azul-verdes con textura cremosa y sabores intensos pero equilibrados con matices de nuez.",price:16.50, weight:"300g",   intensity:"Fuerte",      milk:"Vaca",   maturity:"9 semanas",   pairing:"Oporto vintage, nueces o peras Williams.",                     badge:"british popular", popular:true },
  { id:14, name:"Roquefort AOP",          cat:"blue",         emoji:"💚", img:"https://images.unsplash.com/photo-1565591452602-e0febb6419ef?w=480&h=360&fit=crop&auto=format&q=80", origin:"Combalou, Francia",             tagline:"La leyenda centenaria de las cuevas",           desc:"Madurado en las cuevas naturales de Combalou con moho Penicillium roqueforti. Intensamente picante y salado con notas minerales.",   price:19.80, weight:"100g",   intensity:"Muy Fuerte",  milk:"Oveja", maturity:"3 meses",     pairing:"Sauternes, higos frescos o miel de romero.",                   badge:"popular" },
  { id:15, name:"Gorgonzola Piccante",    cat:"blue",         emoji:"🟢", img:"https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?w=480&h=360&fit=crop&auto=format&q=80", origin:"Piamonte y Lombardía, Italia",  tagline:"La potencia azul de Italia en estado puro",     desc:"El azul italiano más conocido. En su versión piccante presenta venas pronunciadas, textura quebradiza y sabores intensamente picantes.",price:13.40, weight:"200g",   intensity:"Fuerte",      milk:"Vaca",   maturity:"12 semanas",  pairing:"Amarone della Valpolicella, higos o miel de castaño." },
  { id:16, name:"Cabrales",              cat:"blue",         emoji:"🔵", img:"https://images.unsplash.com/photo-1565591452602-e0febb6419ef?w=480&h=360&fit=crop&auto=format&q=80", origin:"Asturias, España",              tagline:"La fuerza salvaje de los Picos de Europa",      desc:"Queso azul asturiano madurado en cuevas naturales de la sierra. Extremadamente potente, picante y complejo con texturas únicas.",    price:14.90, weight:"200g",   intensity:"Muy Fuerte",  milk:"Mixta", maturity:"4-6 meses",   pairing:"Sidra asturiana, miel, o vino tinto Ribera del Duero." },
  { id:17, name:"Chèvre Frais",          cat:"goat",         emoji:"🐐", img:"https://images.unsplash.com/photo-1559561853-08451507a318?w=480&h=360&fit=crop&auto=format&q=80", origin:"Loire, Francia",                tagline:"Frescura y acidez del campo francés",           desc:"Queso fresco de cabra con textura suave y granulosa. Sabores frescos, lácteos con acidez característica y notas de hierba.",         price:6.80,  weight:"150g",   intensity:"Suave",       milk:"Cabra", maturity:"Fresco",      pairing:"Sauvignon Blanc, miel de lavanda o ensalada verde." },
  { id:18, name:"Crottin de Chavignol",  cat:"goat",         emoji:"🟫", img:"https://images.unsplash.com/photo-1559561853-08451507a318?w=480&h=360&fit=crop&auto=format&q=80", origin:"Centre-Val de Loire, Francia",  tagline:"Pequeño en tamaño, enorme en carácter",         desc:"Queso pequeño con corteza rugosa que va de fresco a muy curado. Su sabor evoluciona de lácteo y suave a intensamente caprino.",      price:8.20,  weight:"60g x2", intensity:"Medio-Fuerte", milk:"Cabra", maturity:"Variable",    pairing:"Sancerre, nueces o rúcula con aceite de oliva." },
  { id:19, name:"Valençay AOP",          cat:"goat",         emoji:"⬡",  img:"https://images.unsplash.com/photo-1486297986069-b34419a2aca4?w=480&h=360&fit=crop&auto=format&q=80", origin:"Berry, Francia",                tagline:"La pirámide truncada más elegante",             desc:"Forma piramidal característica con corteza gris-ceniza. Textura húmeda que se vuelve más seca con la maduración.",                  price:9.60,  weight:"220g",   intensity:"Medio",       milk:"Cabra", maturity:"4-5 semanas", pairing:"Pouilly-Fumé, higos o membrillo.",                             badge:"new" },
  { id:20, name:"Garrotxa",             cat:"goat",         emoji:"🪨", img:"https://images.unsplash.com/photo-1617196033183-6ff24c1b2b96?w=480&h=360&fit=crop&auto=format&q=80", origin:"Cataluña, España",              tagline:"El queso catalán de los Pirineos",              desc:"Queso semicurado con corteza gris-azulada natural. Pasta firme y compacta de color marfil con sabores caprinos pero suaves.",        price:12.30, weight:"300g",   intensity:"Medio",       milk:"Cabra", maturity:"2-3 meses",   pairing:"Cava brut, membrillo o aceitunas arbequinas." },
  { id:21, name:"Manchego Semicurado",   cat:"sheep",        emoji:"🐑", img:"https://images.unsplash.com/photo-1617196033183-6ff24c1b2b96?w=480&h=360&fit=crop&auto=format&q=80", origin:"La Mancha, España",             tagline:"La suavidad de la oveja manchega",              desc:"Versión joven del Manchego con texturas más blandas y sabores más lácteos y limpios. Ideal para quienes descubren los quesos de oveja.",price:11.20,weight:"300g",   intensity:"Suave-Medio", milk:"Oveja", maturity:"3 meses",     pairing:"Vino tinto joven La Mancha, uvas o tomate cherry." },
  { id:22, name:"Pecorino Romano DOP",   cat:"sheep",        emoji:"🇮🇹", img:"https://images.unsplash.com/photo-1587486936761-f32c5e6e56a6?w=480&h=360&fit=crop&auto=format&q=80", origin:"Lazio, Italia",                 tagline:"El sabor salado de la Roma antigua",            desc:"Queso duro de oveja con sabor intensamente salado y picante. Esencial en la cocina italiana tradicional.",                          price:13.80, weight:"300g",   intensity:"Muy Fuerte",  milk:"Oveja", maturity:"8-12 meses",  pairing:"Vino tinto Cesanese, higos secos o prosciutto." },
  { id:23, name:"Wensleydale & Arándanos",cat:"sheep",       emoji:"🫐", img:"https://images.unsplash.com/photo-1452195100486-9cc7a74b8691?w=480&h=360&fit=crop&auto=format&q=80", origin:"North Yorkshire, England",      tagline:"El favorito de Wallace y Gromit",               desc:"Clásico queso inglés de Yorkshire con arándanos añadidos. Textura húmeda y desmenuzable con sabor dulce y ligeramente ácido.",      price:10.40, weight:"300g",   intensity:"Suave",       milk:"Mixta", maturity:"3 semanas",   pairing:"Sidra de pera, galletas de avena o chutney de frutos rojos.",  badge:"british popular", popular:true },
  { id:24, name:"Ossau-Iraty AOP",       cat:"sheep",        emoji:"🐏", img:"https://images.unsplash.com/photo-1617196033183-6ff24c1b2b96?w=480&h=360&fit=crop&auto=format&q=80", origin:"País Vasco/Pirineos, Francia",  tagline:"El espíritu de los Pirineos vascos",            desc:"Queso pirenaico de leche de oveja Manech. Pasta prensada con sabores suaves, lácteos con notas de hierba de montaña y avellana.",   price:14.50, weight:"300g",   intensity:"Medio",       milk:"Oveja", maturity:"3 meses",     pairing:"Irouléguy tinto, membrillo o jamón de Bayona." },
  { id:25, name:"Cornish Yarg",          cat:"british",      emoji:"🌿", img:"https://images.unsplash.com/photo-1530564072564-4fbef5d2fcfc?w=480&h=360&fit=crop&auto=format&q=80", origin:"Cornwall, England",             tagline:"El queso envuelto en ortigas de Cornualles",    desc:"Único queso británico envuelto en hojas de ortiga que le dan una corteza comestible y un sabor fresco y herbáceo inconfundible.",   price:13.20, weight:"300g",   intensity:"Suave-Medio", milk:"Vaca",   maturity:"4-8 semanas", pairing:"Vino blanco seco, ensalada o embutido de campo.",             badge:"british new", popular:true },
  { id:26, name:"Double Gloucester",     cat:"british",      emoji:"🟡", img:"https://images.unsplash.com/photo-1603729362753-f8162ac6c3df?w=480&h=360&fit=crop&auto=format&q=80", origin:"Gloucestershire, England",      tagline:"El queso de los rodajes por las colinas",       desc:"Queso duro inglés de color naranja brillante. Sabor suave y cremoso más pronunciado que el Red Leicester, con notas de mantequilla.", price:9.80,  weight:"250g",   intensity:"Medio",       milk:"Vaca",   maturity:"4-6 meses",   pairing:"Ale inglesa, encurtidos Branston o cebolla pickled.",          badge:"british" },
  { id:27, name:"Lancashire Tasty",      cat:"british",      emoji:"🏴", img:"https://images.unsplash.com/photo-1452195100486-9cc7a74b8691?w=480&h=360&fit=crop&auto=format&q=80", origin:"Lancashire, England",           tagline:"El sabor del norte inglés en su máxima expresión",desc:"Queso desmenuzable y húmedo del norte de Inglaterra. Textura única y sabor ligeramente ácido y mantecoso.",                         price:10.60, weight:"300g",   intensity:"Medio-Fuerte",milk:"Vaca",   maturity:"6-12 meses",  pairing:"Black pudding, pickles o cerveza Stout inglesa.",              badge:"british" },
  { id:28, name:"Chutney de Mango Artesanal",cat:"accompaniment",emoji:"🫙",img:"https://images.unsplash.com/photo-1541544537965-0558c25f7bdc?w=480&h=360&fit=crop&auto=format&q=80", origin:"The Cheese Shop, Nottingham",  tagline:"Maridaje perfecto para quesos duros",           desc:"Chutney elaborado artesanalmente con mangos de primera calidad, jengibre y especias. Equilibrio perfecto entre dulce, ácido y especiado.",price:5.50,weight:"300g",intensity:"—",milk:"Vegano",maturity:"—",pairing:"Cheddar madurado, Cornish Yarg o queso de cabra." },
  { id:29, name:"Crackers de Avena Artesanales",cat:"accompaniment",emoji:"🍘",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=480&h=360&fit=crop&auto=format&q=80", origin:"Escocia",                     tagline:"La base perfecta para cualquier queso",         desc:"Galletas de avena escocesas elaboradas con ingredientes de primera. El acompañamiento ideal para realzar el sabor de cualquier queso.",price:4.20,weight:"200g",intensity:"—",milk:"Sin lácteos",maturity:"—",pairing:"Perfectas con cualquier queso de nuestra selección." },
  { id:30, name:"Ale de Nottingham – The Trip to Jerusalem",cat:"accompaniment",emoji:"🍺",img:"https://images.unsplash.com/photo-1532634733-490b54b0cef4?w=480&h=360&fit=crop&auto=format&q=80", origin:"Nottingham, England",         tagline:"La cerveza más antigua de Nottingham",          desc:"Ale británica de la pub más antigua de Nottingham (1189). Amargor equilibrado con notas maltosas y de caramelo.",                  price:3.80, weight:"500ml",  intensity:"—",           milk:"Sin lácteos",maturity:"—",pairing:"Stilton, Cheddar Extra Madurado o Lancashire." },
];

// ═══════════════════════════════════════════
// RECENT ORDERS & TOP PRODUCTS DATA
// ═══════════════════════════════════════════
const RECENT_ORDERS = [
  { name:"Stilton DOP + Cheddar Extra", emoji:"💙", date:"Hace 2 horas", price:"£29.30", status:"transit" },
  { name:"Tabla Selección Británica x3", emoji:"🇬🇧", date:"Ayer, 14:32", price:"£38.50", status:"delivered" },
  { name:"Brie de Meaux + Crackers", emoji:"🫶", date:"Hace 2 días", price:"£12.70", status:"delivered" },
  { name:"Roquefort AOP", emoji:"💚", date:"Hace 3 días", price:"£19.80", status:"pending" },
];
const TOP_PRODUCTS = [
  { name:"Stilton DOP",    emoji:"💙", sold:"38 unidades" },
  { name:"Cheddar Extra",  emoji:"🏔️", sold:"31 unidades" },
  { name:"Wensleydale",    emoji:"🫐", sold:"28 unidades" },
  { name:"Cornish Yarg",   emoji:"🌿", sold:"24 unidades" },
  { name:"Brie de Meaux",  emoji:"🫶", sold:"21 unidades" },
];

// ═══════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════
let cart = [];
let currentProduct = null;
let currentPage = 1;
const PAGE_SIZE = 9;
let filteredProducts = [...PRODUCTS];
let currentView = 'grid';
let currentCat = 'all';
let maxPrice = 110;
let searchQuery = '';
let sortBy = 'default';

// ═══════════════════════════════════════════
// LANGUAGE SYSTEM
// ═══════════════════════════════════════════
let currentLang = localStorage.getItem('lang') || 'es';

const TRANSLATIONS = {
  es: {
    nav_accessibility: 'Accesibilidad',
    nav_account: 'Mi cuenta',
    nav_dashboard: 'Dashboard',
    nav_catalog: 'Catálogo',
    nav_story: 'Nuestra Historia',
    nav_cafe: 'Café & Sala',
    nav_delivery: 'Envíos',
    nav_contact: 'Contacto',
    a11y_panel: 'Panel de Accesibilidad',
    a11y_dark: 'Modo Oscuro',
    a11y_dark_desc: 'Reduce la fatiga visual',
    a11y_contrast: 'Alto Contraste',
    a11y_contrast_desc: 'Mejora la legibilidad',
    a11y_spacing: 'Espaciado de Texto',
    a11y_spacing_desc: 'Ajusta la separación',
    spacing_normal: 'Normal',
    spacing_wide: 'Amplio',
    spacing_extra: 'Extra',
    a11y_lang: 'Idioma',
    a11y_lang_desc: 'Cambia el idioma del sitio',
    a11y_autosave: 'Tus preferencias se guardan automáticamente',
  },
  en: {
    nav_accessibility: 'Accessibility',
    nav_account: 'My account',
    nav_dashboard: 'Dashboard',
    nav_catalog: 'Catalogue',
    nav_story: 'Our Story',
    nav_cafe: 'Café & Room',
    nav_delivery: 'Delivery',
    nav_contact: 'Contact',
    a11y_panel: 'Accessibility Panel',
    a11y_dark: 'Dark Mode',
    a11y_dark_desc: 'Reduces eye strain',
    a11y_contrast: 'High Contrast',
    a11y_contrast_desc: 'Improves readability',
    a11y_spacing: 'Text Spacing',
    a11y_spacing_desc: 'Adjust text separation',
    spacing_normal: 'Normal',
    spacing_wide: 'Wide',
    spacing_extra: 'Extra',
    a11y_lang: 'Language',
    a11y_lang_desc: 'Change the site language',
    a11y_autosave: 'Your preferences are saved automatically',
  }
};

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.es;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');
}

function setLanguage(lang, btn) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('#lang-es, #lang-en').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  if (btn) { btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true'); }
  applyTranslations(lang);
  toast(lang === 'en' ? '🇬🇧 Language: English' : '🇪🇸 Idioma: Español');
}

// ═══════════════════════════════════════════
// ACCESSIBILITY MODAL
// ═══════════════════════════════════════════
let highContrast = false;
let currentSpacing = localStorage.getItem('spacing') || 'normal';

function openA11yPanel() {
  const overlay = document.getElementById('a11y-modal-overlay');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.getElementById('a11y-modal-inner').querySelector('.a11y-modal-close').focus();
  document.body.style.overflow = 'hidden';
}

function closeA11yPanel() {
  const overlay = document.getElementById('a11y-modal-overlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.getElementById('a11y-nav-btn').focus();
}

function closeA11yModal(e) {
  if (e.target === document.getElementById('a11y-modal-overlay')) closeA11yPanel();
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  const btn = document.getElementById('theme-btn');
  btn.setAttribute('aria-pressed', String(!isDark));
  btn.classList.toggle('active', !isDark);
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  toast(isDark ? (currentLang==='en'?'Light mode activated':'Modo claro activado') : (currentLang==='en'?'Dark mode activated':'Modo oscuro activado'));
}

function toggleHighContrast() {
  highContrast = !highContrast;
  document.documentElement.classList.toggle('high-contrast', highContrast);
  const btn = document.getElementById('contrast-btn');
  btn.setAttribute('aria-pressed', String(highContrast));
  btn.classList.toggle('active', highContrast);
  if (highContrast) {
    document.documentElement.style.setProperty('--gold', '#ffd700');
  } else {
    document.documentElement.style.removeProperty('--gold');
  }
  localStorage.setItem('highContrast', String(highContrast));
  toast(highContrast ? (currentLang==='en'?'High contrast on':'Alto contraste activado') : (currentLang==='en'?'Normal contrast':'Contraste normal'));
}

function setSpacing(level, btn) {
  currentSpacing = level;
  const scales = { normal: 1, wide: 1.35, extra: 1.7 };
  document.documentElement.style.setProperty('--spacing-scale', scales[level]);
  document.querySelectorAll('#spacing-normal,#spacing-wide,#spacing-extra').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  localStorage.setItem('spacing', level);
}

function changeFontSize(dir) {
  // kept for backward compat
}
function toggleSpacing() {
  // kept for backward compat — now setSpacing handles this
}

// ═══════════════════════════════════════════
// FONT SIZE CONTROL
// ═══════════════════════════════════════════
function setFontSize(size, btn) {
  const html = document.documentElement;
  html.setAttribute('data-font', size);
  const scales = { small: 0.9, normal: 1, large: 1.25 };
  html.style.fontSize = `calc(16px * ${scales[size]})`;
  document.querySelectorAll('#font-sm,#font-md,#font-lg').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  if (btn) { btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true'); }
  localStorage.setItem('fontSize', size);
  const labels = { small: 'Letra pequeña', normal: 'Letra normal', large: 'Letra grande' };
  toast('🔡 ' + (labels[size] || 'Tamaño ajustado'));
}

// ═══════════════════════════════════════════
// REDUCED MOTION TOGGLE
// ═══════════════════════════════════════════
let reducedMotion = localStorage.getItem('reducedMotion') === 'true';

function toggleReducedMotion() {
  reducedMotion = !reducedMotion;
  document.documentElement.classList.toggle('reduce-motion', reducedMotion);
  const btn = document.getElementById('motion-btn');
  if (btn) {
    btn.setAttribute('aria-pressed', String(reducedMotion));
    btn.classList.toggle('active', reducedMotion);
  }
  localStorage.setItem('reducedMotion', String(reducedMotion));
  toast(reducedMotion ? '🎞 Animaciones reducidas' : '🎞 Animaciones activadas');
}

// ═══════════════════════════════════════════
// SCROLL-HIDE NAVBAR
// ═══════════════════════════════════════════
function initScrollNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  let lastY = 0;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < 80) {
          nav.classList.remove('nav-hidden');
        } else if (y > lastY + 4) {
          nav.classList.add('nav-hidden');
        } else if (y < lastY - 4) {
          nav.classList.remove('nav-hidden');
        }
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}


// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════
function init() {
  // Restore theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
      const btn = document.getElementById('theme-btn');
      if (btn) { btn.setAttribute('aria-pressed', 'true'); btn.classList.add('active'); }
    }
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    const btn = document.getElementById('theme-btn');
    if (btn) { btn.setAttribute('aria-pressed', 'true'); btn.classList.add('active'); }
  }

  // Restore high contrast
  if (localStorage.getItem('highContrast') === 'true') {
    highContrast = true;
    document.documentElement.classList.add('high-contrast');
    document.documentElement.style.setProperty('--gold', '#ffd700');
    const btn = document.getElementById('contrast-btn');
    if (btn) { btn.setAttribute('aria-pressed', 'true'); btn.classList.add('active'); }
  }

  // Restore spacing
  const savedSpacing = localStorage.getItem('spacing') || 'normal';
  const spacingBtn = document.getElementById(`spacing-${savedSpacing}`);
  if (spacingBtn) setSpacing(savedSpacing, spacingBtn);

  // Restore font size
  const savedFont = localStorage.getItem('fontSize') || 'normal';
  const fontMap = { small: 'font-sm', normal: 'font-md', large: 'font-lg' };
  const fontBtn = document.getElementById(fontMap[savedFont]);
  if (fontBtn) setFontSize(savedFont, fontBtn);

  // Restore reduced motion
  if (localStorage.getItem('reducedMotion') === 'true') {
    reducedMotion = true;
    document.documentElement.classList.add('reduce-motion');
    const mBtn = document.getElementById('motion-btn');
    if (mBtn) { mBtn.setAttribute('aria-pressed', 'true'); mBtn.classList.add('active'); }
  }

  // Restore language
  const savedLang = localStorage.getItem('lang') || 'es';
  currentLang = savedLang;
  const langBtn = document.getElementById(`lang-${savedLang}`);
  if (langBtn) { langBtn.classList.add('active'); langBtn.setAttribute('aria-pressed','true'); }
  const otherLang = savedLang === 'es' ? 'en' : 'es';
  const otherBtn = document.getElementById(`lang-${otherLang}`);
  if (otherBtn) { otherBtn.classList.remove('active'); otherBtn.setAttribute('aria-pressed','false'); }
  applyTranslations(savedLang);

  // Accessibility modal close on Escape
  document.getElementById('a11y-modal-overlay')?.addEventListener('click', closeA11yModal);

  // Onboarding
  const seen = sessionStorage.getItem('onboarding-seen');
  if (seen) { document.getElementById('onboarding').classList.add('hidden'); }
  else { document.getElementById('onboarding').querySelector('.onboarding-modal').focus?.(); }

  // Populate dashboard
  renderDashboard();
  // Render catalog
  renderProducts();
  updateCounts();
  renderPagination();
  // Scroll reveal
  initReveal();
  // Scroll-hide navbar
  initScrollNav();
  // Range input style
  updateRangeStyle();
  // Keyboard: close modal with Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (document.getElementById('a11y-modal-overlay')?.classList.contains('open')) { closeA11yPanel(); return; }
      if (!document.getElementById('product-modal').classList.contains('modal-overlay') || document.getElementById('product-modal').classList.contains('open')) closeModal();
      if (document.getElementById('cart-sidebar').classList.contains('open')) closeCart();
      if (!document.getElementById('onboarding').classList.contains('hidden')) closeOnboarding();
    }
    if (e.key === 'Tab' && document.getElementById('product-modal').classList.contains('open')) {
      trapFocus(e, document.getElementById('modal-inner'));
    }
  });
}

function trapFocus(e, container) {
  const focusable = container.querySelectorAll('button,input,select,textarea,[tabindex]:not([tabindex="-1"])');
  const first = focusable[0], last = focusable[focusable.length-1];
  if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
  else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
}

// ═══════════════════════════════════════════
// ONBOARDING
// ═══════════════════════════════════════════
function nextStep(n) {
  document.querySelectorAll('.onboarding-step').forEach(s => s.classList.remove('active'));
  const step = document.getElementById(`step-${n}`);
  if (step) { step.classList.add('active'); step.querySelector('button')?.focus(); }
}
function closeOnboarding() {
  document.getElementById('onboarding').classList.add('hidden');
  sessionStorage.setItem('onboarding-seen', '1');
  document.getElementById('main-content').focus?.() || document.querySelector('nav').focus();
}

// ═══════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════
function animateCounter(id, from, to, dur) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = performance.now();
  const tick = (now) => {
    const pct = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(from + (to - from) * easeOut(pct));
    if (pct < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

// ═══════════════════════════════════════════
// CATALOG FILTERS
// ═══════════════════════════════════════════
function applyFilters() {
  searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
  sortBy = document.getElementById('sort-select').value;
  let result = PRODUCTS.filter(p => {
    const catMatch = currentCat === 'all' || p.cat === currentCat;
    const priceMatch = p.price <= maxPrice;
    const searchMatch = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.origin.toLowerCase().includes(searchQuery) ||
      p.desc.toLowerCase().includes(searchQuery) ||
      p.cat.toLowerCase().includes(searchQuery);
    return catMatch && priceMatch && searchMatch;
  });
  if (sortBy === 'price-asc') result.sort((a,b) => a.price - b.price);
  else if (sortBy === 'price-desc') result.sort((a,b) => b.price - a.price);
  else if (sortBy === 'name-asc') result.sort((a,b) => a.name.localeCompare(b.name));
  else if (sortBy === 'name-desc') result.sort((a,b) => b.name.localeCompare(a.name));
  else if (sortBy === 'popular') result.sort((a,b) => (b.popular?1:0) - (a.popular?1:0));
  filteredProducts = result;
  currentPage = 1;
  renderProducts();
  renderPagination();
  const count = filteredProducts.length;
  document.getElementById('showing-count').textContent = Math.min(count, PAGE_SIZE * currentPage);
  document.getElementById('catalog-count').innerHTML = `Mostrando <strong>${Math.min(count, PAGE_SIZE)}</strong> de <strong>${count}</strong> productos`;
}
function setCatFilter(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.cat-filter-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
  applyFilters();
}
function quickFilter(cat) {
  currentCat = cat;
  const sidebar = document.querySelector(`.cat-filter-btn[data-cat="${cat}"]`);
  if (sidebar) { setCatFilter(cat, sidebar); }
  else { applyFilters(); }
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}
function updatePriceFilter(el) {
  maxPrice = parseFloat(el.value);
  document.getElementById('price-display').textContent = `£${maxPrice}`;
  el.setAttribute('aria-valuenow', maxPrice);
  updateRangeStyle();
  applyFilters();
}
function updateRangeStyle() {
  const el = document.getElementById('price-filter');
  if (!el) return;
  const pct = ((el.value - el.min) / (el.max - el.min)) * 100;
  el.style.setProperty('--pct', pct + '%');
}
function resetFilters() {
  currentCat = 'all';
  maxPrice = 110;
  searchQuery = '';
  sortBy = 'default';
  document.getElementById('search-input').value = '';
  document.getElementById('price-filter').value = 110;
  document.getElementById('price-display').textContent = '£110';
  document.getElementById('sort-select').value = 'default';
  document.querySelectorAll('.cat-filter-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
  document.querySelector('.cat-filter-btn[data-cat="all"]').classList.add('active');
  document.querySelector('.cat-filter-btn[data-cat="all"]').setAttribute('aria-pressed','true');
  updateRangeStyle();
  applyFilters();
  toast('Filtros limpiados');
}
function updateCounts() {
  const cats = ['soft','hard','blue','goat','sheep','british','accompaniment'];
  cats.forEach(c => {
    const el = document.getElementById(`count-${c}`);
    if (el) el.textContent = PRODUCTS.filter(p => p.cat === c).length;
  });
  document.getElementById('count-all').textContent = PRODUCTS.length;
}

// ═══════════════════════════════════════════
// RENDER PRODUCTS
// ═══════════════════════════════════════════
const CAT_LABELS = { soft:'Suave', hard:'Duro', blue:'Azul', goat:'Cabra', sheep:'Oveja', british:'Británico', accompaniment:'Acompañamiento' };
const CAT_BG = { soft:'bg-soft', hard:'bg-hard', blue:'bg-blue', goat:'bg-goat', sheep:'bg-sheep', british:'bg-british', accompaniment:'bg-hard' };

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const start = (currentPage-1) * PAGE_SIZE;
  const pageItems = filteredProducts.slice(start, start + PAGE_SIZE);
  if (pageItems.length === 0) {
    grid.innerHTML = `<div class="no-results" role="alert">
      <div class="no-results-icon">🔍</div>
      <div class="no-results-text">Sin resultados</div>
      <p>Prueba con otros filtros o términos de búsqueda.</p>
    </div>`;
    return;
  }
  grid.innerHTML = pageItems.map(p => {
    const badges = (p.badge||'').split(' ');
    const badgeHTML = badges.filter(b=>b).map(b => {
      if (b==='popular') return `<span class="product-badge badge-popular">Más vendido</span>`;
      if (b==='new')     return `<span class="product-badge badge-new">Nuevo</span>`;
      if (b==='british') return `<span class="product-badge badge-british">🇬🇧 Británico</span>`;
      return '';
    }).join('');
    return `
    <article class="product-card" role="listitem" tabindex="0"
      aria-label="${p.name}, ${CAT_LABELS[p.cat]}, £${p.price.toFixed(2)}"
      onclick="openModal(${p.id})"
      onkeydown="if(event.key==='Enter'||event.key===' '){openModal(${p.id}); event.preventDefault();}">
      <div class="product-thumb">
        <div class="product-img-wrap ${CAT_BG[p.cat]||'bg-soft'}">
          <img
            class="product-img"
            src="${p.img}"
            alt="${p.name}"
            loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <div class="product-emoji-fallback" aria-hidden="true" style="display:none;">${p.emoji}</div>
        </div>
        ${badgeHTML}
        <button class="product-wishlist" aria-label="Guardar ${p.name} en favoritos" aria-pressed="false"
          onclick="toggleWishlist(event,${p.id})" title="Añadir a favoritos">♡</button>
      </div>
      <div class="product-info">
        <div class="product-cat">${CAT_LABELS[p.cat]||p.cat}</div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-origin">📍 ${p.origin}</div>
        <p class="product-desc">${p.desc}</p>
        <div class="product-meta" aria-label="Detalles del queso">
          <span class="product-meta-label">Tipo</span>
          <span class="product-meta-value">${p.cat === 'soft' ? 'Blando' : p.cat === 'hard' ? 'Duro' : p.cat === 'blue' ? 'Azul' : p.cat === 'goat' ? 'Cabra' : p.cat === 'sheep' ? 'Oveja' : p.cat === 'british' ? 'Británico' : 'Otro'}</span>
          <span class="product-meta-label">Leche</span>
          <span class="product-meta-value">${p.milk}</span>
          <span class="product-meta-label">Maduración</span>
          <span class="product-meta-value">${p.maturity}</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            £${p.price.toFixed(2)}
            <small>${p.weight}</small>
          </div>
          <button class="product-add-btn"
            aria-label="Añadir ${p.name} al carrito"
            onclick="quickAddToCart(event,${p.id})"
            title="Añadir al carrito">+</button>
        </div>
      </div>
    </article>`;
  }).join('');
  // Update count
  const total = filteredProducts.length;
  const shown = Math.min(start + PAGE_SIZE, total);
  document.getElementById('catalog-count').innerHTML = `Mostrando <strong>${shown}</strong> de <strong>${total}</strong> productos`;
}

function renderPagination() {
  const total = filteredProducts.length;
  const pages = Math.ceil(total / PAGE_SIZE);
  const pag = document.getElementById('pagination');
  if (pages <= 1) { pag.innerHTML = ''; return; }
  let html = `<button class="page-btn" onclick="goPage(${currentPage-1})" aria-label="Página anterior" ${currentPage===1?'disabled':''}>‹</button>`;
  for (let i=1;i<=pages;i++) {
    html += `<button class="page-btn ${i===currentPage?'active':''}" onclick="goPage(${i})" aria-label="Página ${i}" aria-current="${i===currentPage?'page':'false'}">${i}</button>`;
  }
  html += `<button class="page-btn" onclick="goPage(${currentPage+1})" aria-label="Página siguiente" ${currentPage===pages?'disabled':''}>›</button>`;
  pag.innerHTML = html;
}
function goPage(p) {
  const pages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  if (p<1||p>pages) return;
  currentPage = p;
  renderProducts();
  renderPagination();
  document.getElementById('catalog').scrollIntoView({ behavior:'smooth' });
}

function setView(v) {
  currentView = v;
  const grid = document.getElementById('products-grid');
  grid.classList.toggle('list-view', v === 'list');
  document.getElementById('grid-btn').classList.toggle('active', v === 'grid');
  document.getElementById('list-btn').classList.toggle('active', v === 'list');
  document.getElementById('grid-btn').setAttribute('aria-pressed', String(v==='grid'));
  document.getElementById('list-btn').setAttribute('aria-pressed', String(v==='list'));
}

// ═══════════════════════════════════════════
// PRODUCT MODAL
// ═══════════════════════════════════════════
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  // Modal hero: show real image with emoji fallback
  const heroBg = document.getElementById('modal-img-bg');
  heroBg.className = `modal-hero-img ${CAT_BG[p.cat]||'bg-soft'}`;
  heroBg.innerHTML = `
    <img src="${p.img}" alt="${p.name}"
      style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.85;"
      onerror="this.style.display='none';">
    <span id="modal-emoji" style="font-size:100px;position:relative;z-index:1;filter:drop-shadow(0 4px 16px rgba(0,0,0,0.4));">${p.emoji}</span>`;
  document.getElementById('modal-cat').textContent = CAT_LABELS[p.cat]||p.cat;
  document.getElementById('modal-origin').textContent = `📍 ${p.origin}`;
  document.getElementById('modal-product-name').textContent = p.name;
  document.getElementById('modal-tagline').textContent = p.tagline;
  document.getElementById('modal-desc').textContent = p.desc;
  document.getElementById('modal-price').textContent = p.price.toFixed(2);
  document.getElementById('modal-weight-label').textContent = `por ${p.weight}`;
  document.getElementById('modal-pairing').textContent = p.pairing;
  document.getElementById('modal-qty').value = 1;
  document.getElementById('modal-add-btn').classList.remove('added');
  document.getElementById('modal-add-btn').textContent = '🛒 Añadir al Carrito';
  document.getElementById('modal-attrs').innerHTML = `
    <div class="modal-attr"><div class="modal-attr-label">Intensidad</div><div class="modal-attr-value">${p.intensity}</div></div>
    <div class="modal-attr"><div class="modal-attr-label">Leche</div><div class="modal-attr-value">${p.milk}</div></div>
    <div class="modal-attr"><div class="modal-attr-label">Maduración</div><div class="modal-attr-value">${p.maturity}</div></div>
  `;
  const overlay = document.getElementById('product-modal');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('modal-add-btn').focus(), 100);
}
function closeModal() {
  const overlay = document.getElementById('product-modal');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  currentProduct = null;
}
function handleModalOverlayClick(e) {
  if (e.target === document.getElementById('product-modal')) closeModal();
}
function changeQty(dir) {
  const input = document.getElementById('modal-qty');
  const newVal = Math.max(1, Math.min(20, parseInt(input.value) + dir));
  input.value = newVal;
  input.setAttribute('aria-valuenow', newVal);
}
function addToCartFromModal() {
  if (!currentProduct) return;
  const qty = parseInt(document.getElementById('modal-qty').value);
  addToCart(currentProduct, qty);
  const btn = document.getElementById('modal-add-btn');
  btn.classList.add('added');
  btn.textContent = '✅ Añadido al carrito';
  setTimeout(() => { btn.classList.remove('added'); btn.textContent = '🛒 Añadir al Carrito'; }, 2000);
}
function quickAddToCart(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if (p) addToCart(p, 1);
}
function toggleWishlist(e, id) {
  e.stopPropagation();
  const btn = e.currentTarget;
  const isPressed = btn.getAttribute('aria-pressed') === 'true';
  btn.setAttribute('aria-pressed', String(!isPressed));
  btn.textContent = isPressed ? '♡' : '♥';
  btn.style.color = isPressed ? '' : '#c0392b';
  toast(isPressed ? 'Eliminado de favoritos' : '♥ Guardado en favoritos');
}

// ═══════════════════════════════════════════
// CART
// ═══════════════════════════════════════════
function addToCart(product, qty) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) { existing.qty += qty; }
  else { cart.push({ ...product, qty }); }
  updateCartUI();
  toast(`🧀 ${product.name} añadido al carrito`, 'success');
}
function updateCartUI() {
  const count = cart.reduce((s,i) => s + i.qty, 0);
  const total = cart.reduce((s,i) => s + (i.price * i.qty), 0);

  // Badge counter
  const countEl = document.getElementById('cart-count');
  countEl.textContent = count;
  countEl.classList.add('bump');
  setTimeout(() => countEl.classList.remove('bump'), 400);
  document.getElementById('cart-btn').setAttribute('aria-label', `Abrir carrito, ${count} artículo${count!==1?'s':''}`);

  const itemsEl = document.getElementById('cart-items-list');
  const emptyEl = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');

  if (cart.length === 0) {
    emptyEl.classList.add('visible');
    itemsEl.style.display = 'none';
    footerEl.style.display = 'none';
    return;
  }

  emptyEl.classList.remove('visible');
  itemsEl.style.display = '';
  footerEl.style.display = '';

  // Render items with product image + unit price + subtotal
  itemsEl.innerHTML = cart.map(item => {
    const subtotal = (item.price * item.qty).toFixed(2);
    const thumb = item.img
      ? `<img src="${item.img}" alt="${item.name}" class="cart-item-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <span class="cart-item-emoji-fallback" aria-hidden="true" style="display:none;">${item.emoji}</span>`
      : `<span class="cart-item-emoji" aria-hidden="true">${item.emoji}</span>`;
    return `
    <div class="cart-item" role="listitem" data-id="${item.id}">
      <div class="cart-item-thumb">
        ${thumb}
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">
          <span class="cart-item-unit-price">£${item.price.toFixed(2)} / ud.</span>
          <span class="cart-item-weight">${item.weight || ''}</span>
        </div>
        <div class="cart-item-row">
          <div class="cart-item-qty" role="group" aria-label="Cantidad de ${item.name}">
            <button class="cart-qty-btn" onclick="updateCartQty(${item.id},-1)"
              aria-label="Reducir cantidad de ${item.name}">−</button>
            <span class="cart-qty-num" aria-live="polite" aria-label="Cantidad: ${item.qty}">${item.qty}</span>
            <button class="cart-qty-btn" onclick="updateCartQty(${item.id},1)"
              aria-label="Aumentar cantidad de ${item.name}">+</button>
          </div>
          <div class="cart-item-price" aria-label="Subtotal: £${subtotal}">£${subtotal}</div>
        </div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${item.id})"
        aria-label="Eliminar ${item.name} del carrito" title="Eliminar">✕</button>
    </div>`;
  }).join('');

  // Free-shipping progress bar
  const FREE_THRESHOLD = 40;
  const pct = Math.min(100, (total / FREE_THRESHOLD) * 100);
  const remaining = Math.max(0, FREE_THRESHOLD - total).toFixed(2);
  const freeShipping = total >= FREE_THRESHOLD;
  const progressHTML = `
    <div class="cart-shipping-bar" aria-label="Progreso hacia envío gratis">
      <div class="cart-shipping-track" role="progressbar"
        aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(pct)}">
        <div class="cart-shipping-fill" style="width:${pct}%"></div>
      </div>
      <p class="cart-shipping-label ${freeShipping ? 'achieved' : ''}">
        ${freeShipping
          ? '🎉 ¡Envío gratis desbloqueado!'
          : `Te faltan <strong>£${remaining}</strong> para envío gratis`}
      </p>
    </div>`;

  // Clear-cart button
  const clearBtn = `
    <div class="cart-clear-row">
      <button class="cart-clear-btn" onclick="clearCart()" aria-label="Vaciar carrito completo">
        🗑 Vaciar carrito
      </button>
      <span class="cart-item-count">${count} artículo${count!==1?'s':''}</span>
    </div>`;

  // Inject shipping bar before footer
  let shippingEl = document.getElementById('cart-shipping-bar-wrap');
  if (!shippingEl) {
    shippingEl = document.createElement('div');
    shippingEl.id = 'cart-shipping-bar-wrap';
    footerEl.prepend(shippingEl);
  }
  shippingEl.innerHTML = progressHTML;

  let clearEl = document.getElementById('cart-clear-wrap');
  if (!clearEl) {
    clearEl = document.createElement('div');
    clearEl.id = 'cart-clear-wrap';
    itemsEl.after(clearEl);
  }
  clearEl.innerHTML = clearBtn;

  // Total
  document.getElementById('cart-total').textContent = total.toFixed(2);

  // Subtotal label
  const subtotalLabelEl = document.querySelector('.cart-subtotal-label');
  if (subtotalLabelEl) subtotalLabelEl.textContent = `Total (${count} artículo${count!==1?'s':''})`;

  // Toggle checkout btn state
  const checkoutBtn = document.querySelector('.cart-checkout-btn');
  if (checkoutBtn) checkoutBtn.disabled = false;
}
function updateCartQty(id, dir) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + dir);
  updateCartUI();
}
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
  toast('Producto eliminado del carrito');
}
function openCart() {
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.getElementById('cart-sidebar').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('cart-sidebar').querySelector('button')?.focus(), 100);
}
function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.getElementById('cart-sidebar').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function clearCart() {
  if (!confirm('¿Vaciar el carrito? Esta acción no se puede deshacer.')) return;
  cart = [];
  const clearEl = document.getElementById('cart-clear-wrap');
  if (clearEl) clearEl.innerHTML = '';
  const shippingEl = document.getElementById('cart-shipping-bar-wrap');
  if (shippingEl) shippingEl.innerHTML = '';
  updateCartUI();
  toast('🗑 Carrito vaciado');
}

function handleCheckout() {
  if (cart.length === 0) { toast('Tu carrito está vacío', 'error'); return; }

  const total = cart.reduce((s,i) => s + (i.price * i.qty), 0);
  const count = cart.reduce((s,i) => s + i.qty, 0);
  const freeShipping = total >= 40;

  // Build order summary HTML
  const summaryRows = cart.map(item =>
    `<div class="checkout-row">
      <span class="checkout-row-name">${item.emoji} ${item.name} × ${item.qty}</span>
      <span class="checkout-row-price">£${(item.price * item.qty).toFixed(2)}</span>
    </div>`
  ).join('');

  const shippingCost = freeShipping ? 0 : 4.99;
  const grandTotal = (total + shippingCost).toFixed(2);

  // Build checkout modal
  const modal = document.createElement('div');
  modal.id = 'checkout-modal';
  modal.className = 'checkout-modal-overlay';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'checkout-modal-title');
  modal.innerHTML = `
    <div class="checkout-modal" id="checkout-modal-inner">
      <button class="checkout-modal-close" onclick="document.getElementById('checkout-modal').remove()"
        aria-label="Cerrar resumen de pedido">✕</button>

      <div class="checkout-hero">
        <span class="checkout-icon" aria-hidden="true">🛒</span>
        <h2 class="checkout-title" id="checkout-modal-title">Resumen del <em>Pedido</em></h2>
        <p class="checkout-sub">${count} artículo${count!==1?'s':''} · The Cheese Shop Nottingham</p>
      </div>

      <div class="checkout-body">
        <div class="checkout-items">${summaryRows}</div>

        <div class="checkout-totals">
          <div class="checkout-row">
            <span>Subtotal</span>
            <span>£${total.toFixed(2)}</span>
          </div>
          <div class="checkout-row">
            <span>Envío</span>
            <span class="${freeShipping ? 'checkout-free' : ''}">
              ${freeShipping ? '🎉 Gratis' : '£' + shippingCost.toFixed(2)}
            </span>
          </div>
          <div class="checkout-row checkout-grand">
            <span><strong>Total</strong></span>
            <span><strong>£${grandTotal}</strong></span>
          </div>
        </div>

        <div class="checkout-info">
          <p>📍 <strong>Entrega:</strong> Nottingham y alrededores · 24h</p>
          <p>📞 <strong>Confirmación:</strong> Te contactaremos para coordinar la entrega</p>
        </div>

        <div class="checkout-actions">
          <button class="checkout-confirm-btn" id="checkout-confirm"
            onclick="confirmOrder()" aria-label="Confirmar y enviar pedido">
            <span id="checkout-confirm-text">✅ Confirmar Pedido · £${grandTotal}</span>
          </button>
          <button class="checkout-back-btn"
            onclick="document.getElementById('checkout-modal').remove(); openCart();"
            aria-label="Volver al carrito">
            ← Volver al carrito
          </button>
        </div>
      </div>
    </div>`;

  document.body.appendChild(modal);
  closeCart();
  requestAnimationFrame(() => modal.classList.add('open'));
  document.getElementById('checkout-confirm').focus();

  // Close on overlay click
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
  // Close on Escape
  const escHandler = e => { if (e.key === 'Escape') { modal.remove(); document.removeEventListener('keydown', escHandler); } };
  document.addEventListener('keydown', escHandler);
}

function confirmOrder() {
  const btn = document.getElementById('checkout-confirm');
  const btnText = document.getElementById('checkout-confirm-text');
  if (!btn) return;
  btn.disabled = true;
  btnText.textContent = 'Procesando...';

  // Snapshot cart before async clear
  const cartSnapshot = cart.map(i => ({ ...i }));

  setTimeout(() => {
    const total = cartSnapshot.reduce((s,i) => s + (i.price * i.qty), 0);
    const freeShipping = total >= 40;
    const grandTotal = (total + (freeShipping ? 0 : 4.99)).toFixed(2);
    const orderId = 'TCS-' + Date.now().toString(36).toUpperCase().slice(-6);
    // cartSnapshot already captured above

    const modal = document.getElementById('checkout-modal');
    if (modal) {
      const inner = document.getElementById('checkout-modal-inner');
      inner.innerHTML = `
        <div class="checkout-success">
          <div class="checkout-success-icon" aria-hidden="true">✅</div>
          <h2 class="checkout-success-title">¡Pedido Confirmado!</h2>
          <p class="checkout-success-sub">Pedido <strong>${orderId}</strong></p>
          <p class="checkout-success-text">
            Hemos recibido tu pedido por <strong>£${grandTotal}</strong>.
            Recibirás confirmación y nuestro equipo te contactará para coordinar la entrega en 24h.
          </p>
          <div class="checkout-success-info">
            <p>📍 Entrega en Nottingham y alrededores</p>
            <p>📞 +44 (0)115 941 8011</p>
            <p>✉️ info@thecheeseshop.co.uk</p>
          </div>
          <button class="checkout-confirm-btn"
            onclick="document.getElementById('checkout-modal').remove()"
            style="margin-top:24px;">
            Cerrar y Seguir Comprando →
          </button>
        </div>`;
    }

    toast(`🧀 Pedido ${orderId} confirmado · £${grandTotal}`, 'success');

    // ── Add to live order history ──
    addLiveOrder(orderId, cartSnapshot, grandTotal);

    cart = [];
    const clearEl = document.getElementById('cart-clear-wrap');
    if (clearEl) clearEl.innerHTML = '';
    updateCartUI();
  }, 1800);
}

// ═══════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════
function toggleMenu() {
  const nav = document.getElementById('nav-links');
  const btn = document.getElementById('hamburger-btn');
  const isOpen = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(isOpen));
  btn.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('#nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('nav-links').classList.remove('open');
      document.getElementById('hamburger-btn').setAttribute('aria-expanded', 'false');
    });
  });
});

// ═══════════════════════════════════════════
// FORMS
// ═══════════════════════════════════════════
function validateField(input) {
  const id = input.id;
  const hint = document.getElementById(`${id}-hint`);
  if (!hint) return true;
  let error = '';
  if (input.required && !input.value.trim()) {
    error = 'Este campo es obligatorio.';
  } else if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    error = 'Introduce un email válido.';
  } else if (input.value.trim().length > 0 && input.minLength && input.value.length < input.minLength) {
    error = `Mínimo ${input.minLength} caracteres.`;
  }
  if (error) {
    input.classList.add('error'); input.classList.remove('success');
    hint.innerHTML = `<span class="hint-error">⚠ ${error}</span>`;
    input.setAttribute('aria-invalid', 'true');
  } else if (input.value.trim()) {
    input.classList.remove('error'); input.classList.add('success');
    hint.innerHTML = `<span class="hint-success">✓ Correcto</span>`;
    input.setAttribute('aria-invalid', 'false');
  } else {
    input.classList.remove('error','success');
    hint.innerHTML = '';
    input.removeAttribute('aria-invalid');
  }
  return !error;
}
function handleFormSubmit(e) {
  e.preventDefault();
  const fields = ['fname','lname','email','address'];
  let valid = true;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!validateField(el)) valid = false;
  });
  if (!valid) {
    toast('Por favor corrige los errores del formulario.', 'error');
    document.querySelector('.form-input.error')?.focus();
    return;
  }
  const btn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  btn.disabled = true;
  btn.classList.add('loading');
  btnText.textContent = 'Enviando...';
  setTimeout(() => {
    btn.classList.remove('loading');
    btn.classList.add('sent');
    btnText.textContent = '✅ Pedido enviado';
    toast('¡Pedido enviado con éxito! Te contactaremos pronto.', 'success');
    setTimeout(() => {
      btn.disabled = false;
      btn.classList.remove('sent');
      btnText.textContent = 'Enviar Pedido';
      document.getElementById('order-form').reset();
      ['fname','lname','email','address'].forEach(id => {
        const el = document.getElementById(id);
        el.classList.remove('success','error');
        const hint = document.getElementById(`${id}-hint`);
        if(hint) hint.innerHTML = '';
      });
    }, 3000);
  }, 1800);
}
function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById('newsletter-email');
  if (!input.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    input.style.borderColor = 'var(--error)';
    toast('Introduce un email válido.', 'error');
    input.focus();
    setTimeout(() => input.style.borderColor = '', 2000);
    return;
  }
  const btn = e.target.querySelector('button');
  btn.textContent = '✅ ¡Suscrito!';
  btn.style.background = 'var(--success)';
  input.value = '';
  toast('¡Suscripción confirmada!', 'success');
  setTimeout(() => {
    btn.textContent = 'Suscribirse →';
    btn.style.background = '';
  }, 3000);
}

// ═══════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════
function toast(msg, type = '') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  el.setAttribute('role', 'alert');
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 350);
  }, 2800);
}

// ═══════════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════════
let revealObserver;
function initReveal() {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ═══════════════════════════════════════════
// INIT ON DOM READY
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', init);
// ═══════════════════════════════════════════
// PRODUCT PICKER — Contact form dynamic combobox
// ═══════════════════════════════════════════
let pickerSelection = {}; // { productId: {product, qty} }

function renderProductPicker(cat) {
  var wrap = document.getElementById('product-picker-wrap');
  if (!wrap) return;
  if (!cat) { wrap.innerHTML = ''; updatePickerSummary(); return; }

  var items = PRODUCTS.filter(function(p) { return p.cat === cat; });
  if (!items.length) {
    wrap.innerHTML = '<p style="font-family:Josefin Sans,sans-serif;font-size:11px;color:var(--text-secondary);padding:10px 0;">Sin productos en esta categoria.</p>';
    return;
  }

  var countLabel = items.length + ' producto' + (items.length !== 1 ? 's' : '');
  var rows = '';
  for (var i = 0; i < items.length; i++) {
    var p = items[i];
    var sel = pickerSelection[p.id];
    var qty = sel ? sel.qty : 0;
    var qtyControls = '';
    if (sel) {
      qtyControls = '<button class="picker-qty-btn" onclick="changePickerQty(' + p.id + ',-1)">−</button>' +
        '<span class="picker-qty-num">' + qty + '</span>' +
        '<button class="picker-qty-btn" onclick="changePickerQty(' + p.id + ',1)">+</button>';
    } else {
      qtyControls = '<button class="picker-qty-btn" onclick="togglePickerItem(' + p.id + ')" style="width:auto;padding:0 10px;border-radius:12px;font-size:11px;">+ Añadir</button>';
    }
    rows += '<div class="product-picker-item' + (sel ? ' selected' : '') + '" role="option" aria-selected="' + (sel ? 'true' : 'false') + '">' +
      '<span class="picker-item-emoji" aria-hidden="true">' + p.emoji + '</span>' +
      '<div class="picker-item-info">' +
        '<div class="picker-item-name">' + p.name + '</div>' +
        '<div class="picker-item-origin">📍 ' + p.origin + ' · ' + p.weight + '</div>' +
      '</div>' +
      '<span class="picker-item-price">£' + p.price.toFixed(2) + '</span>' +
      '<div class="picker-item-qty-wrap" onclick="event.stopPropagation()">' + qtyControls + '</div>' +
    '</div>';
  }

  wrap.innerHTML =
    '<div class="product-picker" id="product-picker" role="listbox" aria-multiselectable="true">' +
      '<div class="product-picker-header">Selecciona y ajusta cantidad <span class="product-picker-count">' + countLabel + '</span></div>' +
      '<div class="product-picker-list">' + rows + '</div>' +
    '</div>';
}

function togglePickerItem(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (pickerSelection[productId]) {
    delete pickerSelection[productId];
    toast(`${product.emoji} ${product.name} quitado del pedido`);
  } else {
    pickerSelection[productId] = { product, qty: 1 };
    toast(`✓ ${product.name} añadido al pedido`, 'success');
  }

  // Refresh picker items (keep category)
  const cat = document.getElementById('category')?.value;
  if (cat) renderProductPicker(cat);

  updatePickerSummary();
  // Auto-fill the message field with selected products
  autoFillOrderMessage();
}

function changePickerQty(productId, dir) {
  var sel = pickerSelection[productId];
  if (!sel) { togglePickerItem(productId); return; }
  var newQty = sel.qty + dir;
  if (newQty <= 0) {
    delete pickerSelection[productId];
    toast(sel.product.emoji + ' ' + sel.product.name + ' quitado del pedido');
  } else {
    sel.qty = Math.min(newQty, 20);
  }
  var cat = document.getElementById('category') ? document.getElementById('category').value : '';
  if (cat) renderProductPicker(cat);
  updatePickerSummary();
  autoFillOrderMessage();
}

function updatePickerSummary() {
  var wrap = document.getElementById('picker-selected-wrap');
  var list = document.getElementById('picker-selected-list');
  var totalEl = document.getElementById('picker-total');
  if (!wrap || !list || !totalEl) return;

  var selected = Object.values(pickerSelection);
  if (!selected.length) { wrap.classList.remove('visible'); return; }

  wrap.classList.add('visible');
  var total = 0;
  var itemsHtml = '';
  for (var i = 0; i < selected.length; i++) {
    var s = selected[i];
    var subtotal = s.product.price * s.qty;
    total += subtotal;
    itemsHtml += '<li class="picker-selected-item">' +
      '<span>' + s.product.emoji + ' ' + s.product.name +
        '<span style="color:var(--text-secondary);font-size:10px;"> x' + s.qty + ' — £' + subtotal.toFixed(2) + '</span>' +
      '</span>' +
      '<div style="display:flex;align-items:center;gap:4px;">' +
        '<button class="picker-qty-btn" onclick="changePickerQty(' + s.product.id + ',-1)" style="width:20px;height:20px;font-size:12px;">−</button>' +
        '<span class="picker-qty-num" style="font-size:12px;">' + s.qty + '</span>' +
        '<button class="picker-qty-btn" onclick="changePickerQty(' + s.product.id + ',1)" style="width:20px;height:20px;font-size:12px;">+</button>' +
        '<button class="picker-remove-btn" onclick="togglePickerItem(' + s.product.id + ')" aria-label="Quitar">✕</button>' +
      '</div>' +
    '</li>';
  }
  list.innerHTML = itemsHtml;

  var freeMsg = total >= 40
    ? '(envio gratis incluido)'
    : '(+ £4.99 envio si pedido < £40)';
  totalEl.innerHTML = 'Total estimado: <strong>£' + total.toFixed(2) + '</strong> <span style="font-size:9px;color:var(--text-secondary);margin-left:4px;">' + freeMsg + '</span>';
}

function autoFillOrderMessage() {
  const msgEl = document.getElementById('message');
  if (!msgEl || msgEl.dataset.manuallyEdited) return;
  const selected = Object.values(pickerSelection);
  if (!selected.length) { msgEl.value = ''; return; }
  var lines = [];
  for (var i = 0; i < selected.length; i++) {
    var s = selected[i];
    lines.push('• ' + s.product.name + ' x' + s.qty +
      ' (' + s.product.weight + ' c/u) — £' + (s.product.price * s.qty).toFixed(2));
  }
  var total = 0;
  for (var j = 0; j < selected.length; j++) total += selected[j].product.price * selected[j].qty;
  var shipping = total >= 40 ? 'Envio gratis' : 'Envio £4.99';
  msgEl.value = 'Me gustaria pedir los siguientes productos:' + String.fromCharCode(10) +
    lines.join(String.fromCharCode(10)) + String.fromCharCode(10) + String.fromCharCode(10) +
    'Subtotal: £' + total.toFixed(2) + ' - ' + shipping;
}

// Mark message as manually edited when user types
document.addEventListener('DOMContentLoaded', () => {
  const msgEl = document.getElementById('message');
  if (msgEl) msgEl.addEventListener('input', () => { msgEl.dataset.manuallyEdited = '1'; });
});

// ═══════════════════════════════════════════
// LIVE ORDER HISTORY — session-based, real-time
// ═══════════════════════════════════════════
var liveOrders = RECENT_ORDERS.slice();
var liveOrderCount = 142;
var newOrdersCount = 0;

var STATUS_LABELS = {
  pending:   { icon: '⏳', text: 'Pendiente',  cls: 'badge-pending' },
  transit:   { icon: '🚚', text: 'En camino',  cls: 'badge-transit' },
  delivered: { icon: '✓',  text: 'Entregado',  cls: 'badge-delivered' }
};

function formatOrderTime(timestamp) {
  if (!timestamp) return '';
  var now = new Date();
  var diff = Math.floor((now - timestamp) / 1000);
  if (diff < 60)    return 'Hace unos segundos';
  if (diff < 3600)  return 'Hace ' + Math.floor(diff/60) + ' min';
  if (diff < 86400) return 'Hace ' + Math.floor(diff/3600) + 'h';
  return timestamp.toLocaleDateString('es-ES', { day:'numeric', month:'short' });
}

function addLiveOrder(orderId, cartSnapshot, grandTotal) {
  var topItem = cartSnapshot[0];
  var itemCount = 0;
  for (var i = 0; i < cartSnapshot.length; i++) itemCount += cartSnapshot[i].qty;
  var now = new Date();
  var name;
  if (itemCount === 1 && cartSnapshot.length === 1) {
    name = topItem.name;
  } else if (cartSnapshot.length === 1) {
    name = topItem.name + ' x' + topItem.qty;
  } else {
    name = topItem.name + ' + ' + (cartSnapshot.length - 1) + ' producto' + (cartSnapshot.length > 2 ? 's' : '') + ' mas';
  }

  var newOrder = {
    name: name,
    emoji: topItem.emoji,
    date: 'Hace unos segundos',
    price: '£' + grandTotal,
    status: 'pending',
    id: orderId,
    isNew: true,
    timestamp: now,
    items: cartSnapshot.map(function(i) {
      return { name: i.name, qty: i.qty, price: i.price, emoji: i.emoji };
    })
  };

  liveOrders.unshift(newOrder);
  if (liveOrders.length > 10) liveOrders.pop();
  liveOrderCount++;
  newOrdersCount++;

  var statEl = document.getElementById('stat-orders');
  if (statEl) {
    statEl.textContent = liveOrderCount;
    statEl.classList.add('stat-bump');
    setTimeout(function() { statEl.classList.remove('stat-bump'); }, 600);
  }

  renderDashboard();

  var toastContainer = document.getElementById('toast-container');
  if (toastContainer) {
    var el = document.createElement('div');
    el.className = 'toast success';
    el.innerHTML = '✅ Pedido <strong>#' + orderId + '</strong> · <a onclick="scrollToDashboard()" class="toast-action" style="cursor:pointer;">Ver en Dashboard →</a>';
    el.setAttribute('role', 'alert');
    toastContainer.appendChild(el);
    setTimeout(function() { el.classList.add('out'); setTimeout(function() { el.remove(); }, 350); }, 5000);
  }

  setTimeout(function() { updateOrderStatus(orderId, 'transit'); }, 60000);
  setTimeout(function() { updateOrderStatus(orderId, 'delivered'); }, 180000);
}

function updateOrderStatus(orderId, newStatus) {
  var order = null;
  for (var i = 0; i < liveOrders.length; i++) {
    if (liveOrders[i].id === orderId) { order = liveOrders[i]; break; }
  }
  if (!order || order.status === 'delivered') return;
  order.status = newStatus;
  if (order.timestamp) order.date = formatOrderTime(order.timestamp);
  renderDashboard();
  var labels = { transit: '🚚 Tu pedido esta en camino', delivered: '✅ Tu pedido ha sido entregado' };
  if (labels[newStatus]) toast(labels[newStatus] + ' — #' + orderId, newStatus === 'delivered' ? 'success' : '');
}

function scrollToDashboard() {
  var el = document.getElementById('dashboard');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function cycleOrderStatus(orderId) {
  var order = null;
  for (var i = 0; i < liveOrders.length; i++) {
    if (liveOrders[i].id === orderId) { order = liveOrders[i]; break; }
  }
  if (!order) return;
  var cycle = { pending: 'transit', transit: 'delivered', delivered: 'pending' };
  order.status = cycle[order.status] || 'pending';
  renderDashboard();
  var st = STATUS_LABELS[order.status];
  toast('Pedido #' + orderId + ' → ' + st.icon + ' ' + st.text);
}

// Refresh timestamps every 30s
setInterval(function() { if (liveOrders.length) renderDashboard(); }, 30000);

// ═══════════════════════════════════════════
// renderDashboard — uses liveOrders with full detail
// ═══════════════════════════════════════════
function renderDashboard() {
  var ordersEl = document.getElementById('recent-orders');
  if (ordersEl) {
    for (var i = 0; i < liveOrders.length; i++) {
      var o = liveOrders[i];
      if (o.timestamp) o.date = formatOrderTime(o.timestamp);
    }

    var ordersHtml = '';
    for (var j = 0; j < liveOrders.length; j++) {
      var o2 = liveOrders[j];
      var st = STATUS_LABELS[o2.status] || STATUS_LABELS.pending;
      var itemDetail = '';
      if (o2.items) {
        var chips = '';
        for (var k = 0; k < o2.items.length; k++) {
          var it = o2.items[k];
          chips += '<span class="dash-order-item-chip">' + it.emoji + ' ' + it.name + (it.qty > 1 ? ' x' + it.qty : '') + '</span>';
        }
        itemDetail = '<div class="dash-order-items">' + chips + '</div>';
      }
      var newDot = (o2.isNew && j === 0) ? '<span class="live-dot" title="Nuevo pedido"></span> ' : '';
      var idTag = o2.id ? ' <span class="dash-order-id">#' + o2.id + '</span>' : '';
      ordersHtml += '<div class="dash-order' + (o2.isNew && j === 0 ? ' new-order' : '') + '" role="listitem">' +
        '<div class="dash-order-emoji" aria-hidden="true">' + o2.emoji + '</div>' +
        '<div class="dash-order-info">' +
          '<div class="dash-order-name">' + o2.name + idTag + '</div>' +
          itemDetail +
          '<div class="dash-order-meta">' + newDot + o2.date + '</div>' +
        '</div>' +
        '<div class="dash-order-right">' +
          '<div class="dash-order-price">' + o2.price + '</div>' +
          '<span class="dash-order-badge ' + st.cls + '" onclick="cycleOrderStatus(\'' + o2.id + '\')" title="Clic para actualizar estado">' +
            st.icon + ' ' + st.text +
          '</span>' +
        '</div>' +
      '</div>';
    }
    ordersEl.innerHTML = ordersHtml;

    // New orders badge in panel header
    var header = ordersEl.closest ? ordersEl.closest('.dash-panel') : null;
    if (header) header = header.querySelector('.dash-panel-header');
    if (header) {
      var existing = header.querySelector('.dash-new-badge');
      if (existing) existing.remove();
      if (newOrdersCount > 0) {
        var badge = document.createElement('span');
        badge.className = 'dash-new-badge';
        badge.textContent = newOrdersCount + ' nuevo' + (newOrdersCount > 1 ? 's' : '');
        header.appendChild(badge);
      }
    }
  }

  var topEl = document.getElementById('top-products');
  if (topEl) {
    var topHtml = '';
    for (var m = 0; m < TOP_PRODUCTS.length; m++) {
      var prod = TOP_PRODUCTS[m];
      topHtml += '<div class="dash-featured-item">' +
        '<div class="dash-featured-rank">#' + (m+1) + '</div>' +
        '<div class="dash-featured-emoji">' + prod.emoji + '</div>' +
        '<div class="dash-featured-info">' +
          '<div class="dash-featured-name">' + prod.name + '</div>' +
          '<div class="dash-featured-sold">' + prod.sold + ' este mes</div>' +
        '</div>' +
      '</div>';
    }
    topEl.innerHTML = topHtml;
  }
}
