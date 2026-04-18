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
function renderDashboard() {
  const ordersEl = document.getElementById('recent-orders');
  ordersEl.innerHTML = RECENT_ORDERS.map(o => `
    <div class="dash-order">
      <div class="dash-order-emoji">${o.emoji}</div>
      <div class="dash-order-info">
        <div class="dash-order-name">${o.name}</div>
        <div class="dash-order-meta">${o.date}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
        <div class="dash-order-price">${o.price}</div>
        <span class="dash-order-badge badge-${o.status}">${o.status==='delivered'?'✓ Entregado':o.status==='transit'?'🚚 En camino':'⏳ Pendiente'}</span>
      </div>
    </div>`).join('');
  const topEl = document.getElementById('top-products');
  topEl.innerHTML = TOP_PRODUCTS.map((p,i) => `
    <div class="dash-featured-item">
      <div class="dash-featured-rank">#${i+1}</div>
      <div class="dash-featured-emoji">${p.emoji}</div>
      <div class="dash-featured-info">
        <div class="dash-featured-name">${p.name}</div>
        <div class="dash-featured-sold">${p.sold} este mes</div>
      </div>
    </div>`).join('');
  // Animate stats
  animateCounter('stat-orders', 0, 142, 1200);
}
function animateCounter(id, from, to, dur) {
  const el = document.getElementById(id);
  if (!el) return;
@@ -1005,468 +978,470 @@
  btn.setAttribute('aria-expanded', String(isOpen));
  btn.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
}
document.querySelectorAll('#nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
    document.getElementById('hamburger-btn').setAttribute('aria-expanded', 'false');
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
