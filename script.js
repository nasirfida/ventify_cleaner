/* ===== VENTIFY DUCT CLEANING — script.js ===== */
'use strict';

// EmailJS Initialization - Public Key
(function() {
  emailjs.init("v64Evh3gFj26mZmON");
})();

/* =================================================
   0. FIREBASE CONFIGURATION
================================================= */
const firebaseConfig = {
  apiKey: "AIzaSyDlu7JKoKHU3hRmonbARWjqqGDLIjwAfOM",
  authDomain: "ventify-website.firebaseapp.com",
  projectId: "ventify-website",
  storageBucket: "ventify-website.firebasestorage.app",
  messagingSenderId: "380376032363",
  appId: "1:380376032363:web:2f4fba3ba364c7c2297d2e"
};

// Initialize Firebase (compat version)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/* =================================================
   1. TRANSLATIONS
================================================= */
const T = {
en:{
  /* NAV & COMMON */
  promo_txt:'Limited Time: $50 OFF your first cleaning.',promo_lnk:'Claim Offer →',
  nav_home:'Home',nav_svc:'Services ▾',nav_pricing:'Pricing',nav_gallery:'Gallery',
  nav_reviews:'Reviews',nav_blog:'Blog',nav_faq:'FAQ',nav_quote:'Free Quote',
  svc1:'Duct System Cleaning',svc2:'Furnace Cleaning',svc3:'Chimney Sweep',svc4:'Dryer Vent Cleaning',svc5:'Full Home Package',
  learn_more:'Learn More',get_quote:'Get My Free Quote',quote_btn:'Get Free Quote — Save $50',
  back_blog:'Back to Blog',

  /* TRUST BAR */
  tr1:'Licensed & Bonded',tr1s:'All 6 provinces',tr2:'NADCA Certified',tr2s:'National Standard',
  tr3:'4.4★ Rating',tr3s:'1,400+ reviews',tr4:'Same-Week Booking',tr4s:'Flexible slots',
  tr5:'No Hidden Fees',tr5s:'Price guaranteed',

  /* STATS */
  st1:'Homes Cleaned',st2:'Provinces Served',st3:'Google Rating',st4:'Years Experience',

  /* SERVICES */
  srv_tag:'Our Services',srv_h:'Complete Air System Care for Your Home',
  srv_sub:'One call, one crew. No subcontractors — Ventify-certified technicians only.',
  srv1_p:'Truck-mounted HEPA vacuum + rotary brush. Every duct, return & register — NADCA standard.',
  srv2_p:'Blower, heat exchanger & burners — deep-cleaned for safe, efficient Canadian winter operation.',
  srv3_p:'WETT-inspected creosote removal & flue inspection. Required by most Canadian insurers.',
  srv4_p:'Full duct run cleared. Reduces fire risk & cuts drying time by up to 40%.',

  /* PROCESS */
  proc_tag:'How It Works',proc_h:"Ventify's 6-Step Cleaning Protocol",proc_sub:'Every job, every time. No shortcuts.',
  p1h:'Pre-Inspection & Air Test',p1p:'Before-air readings, duct mapping & system assessment.',
  p2h:'Seal & Contain',p2p:'All registers sealed. Negative pressure applied. Your home protected.',
  p3h:'Rotary Brush Agitation',p3p:'Brushes loosen years of caked debris from duct walls.',
  p4h:'HEPA Vacuum Extraction',p4p:'Truck-mounted HEPA removes all debris — nothing stays in your home.',
  p5h:'Eco Sanitization',p5p:'Optional Benefect eco-sanitizer kills bacteria & mould spores.',
  p6h:'Post-Test & Report',p6p:'After-air readings documented. Full written report left with you.',

  /* WHY */
  why_tag:'Why Ventify?',why_h:'The Gold Standard in Canadian Duct Cleaning',
  why_p:"We didn't build Ventify to be another duct cleaning company. We built it to be the last one you'll ever call.",
  w1h:'NADCA-Certified Equipment',w1p:'Truck-mounted HEPA systems — not portable shop vacs. Real equipment, real results.',
  w2h:'Zero Hidden Fees — Guaranteed',w2p:'Your quote is your final invoice. No mid-job discoveries. No surprises.',
  w3h:'Only Direct-Hire Technicians',w3p:'No subcontractors. Every person at your door is a trained Ventify employee.',
  w4h:'100% Satisfaction Guarantee',w4p:'Not happy? We return and re-clean at zero cost. Simple.',

  /* QUOTE FORM */
  qf_h:'Get Your Free Quote',qf_sub:'Response within 2 hours · Mon–Sat 7am–8pm',
  qf_name:'Full Name',qf_phone:'Phone Number',qf_city:'City & Province',
  qf_svc:'Service Required',qf_plan:'Plan / Package',qf_sel:'Select a service...',
  qf_btn:'Request Free Quote — Save $50',qf_note:'🎁 First-time customers save $50. No credit card needed.',

  /* PRICING */
  pkg_tag:'Pricing',pkg_h:'Simple Packages. No Surprises.',
  pkg_sub:'Pick the plan that fits your home. Every package includes our satisfaction guarantee.',
  pkg_note:'All prices are starting prices.',pkg_off:'$50 off first booking.',
  view_all_pkg:'View Full Pricing →',
  prc_h1:'Simple, Transparent Pricing',prc_sub:'No hidden fees. No surprise add-ons. Your quote is your final price — guaranteed.',
  prc_tag:'Our Packages',prc_h2:'Choose the Right Plan for Your Home',
  prc_p:'All packages include NADCA-standard equipment, pre & post air quality testing, and our satisfaction guarantee.',
  prc_prov:'Select Your Province for Local Pricing:',
  prc_note:'All prices are starting prices. Final quote after free assessment.',
  prc_off:'$50 off first booking.',
  addon_h:'Add-On Services',

  /* GALLERY */
  gal_tag:'Before & After',gal_h:'Real Results from Real Canadian Homes',
  gal_p:'Unfiltered photos taken by our technicians on actual jobs across Canada.',
  gal_btn:'View Full Gallery →',gal_pg_h:'Before & After Gallery',
  gal_pg_p:'Real homes, real results. Photos taken by Ventify technicians on actual jobs — unfiltered.',

  /* REVIEWS */
  rev_tag:'Customer Reviews',rev_h:'8,000+ Happy Families Across Canada',
  rev_pg_h:'What Our Customers Say',rev_pg_p:'8,000+ Canadian families trust Ventify. Read their stories.',

  /* BLOG */
  blg_tag:'Expert Advice',blg_h:'Latest Articles from Our HVAC Experts',
  blg_btn:'View All Articles →',blg_pg_h:'HVAC Tips & Expert Advice',
  blg_pg_p:'Stay informed about Canadian home air quality, duct care, and energy savings.',

  /* CTA */
  cta_tag:'Limited Time Offer',cta_h:'Ready for Cleaner Air? Save $50 Today.',
  cta_p:'No coupon needed. Discount applied automatically for first-time customers across all 6 provinces.',
  cta_btn:'🎁 Claim My $50 Discount',

  /* SERVICE PAGES */
  duct_h1:'Residential Duct System Cleaning in Canada',
  duct_sub:'NADCA-certified, truck-mounted deep cleaning for every duct, register & return in your home.',
  duct_cta_h:'Book Duct Cleaning Today — Save $50',duct_cta_p:'Canada-wide service. Same-week appointments available.',
  fur_h1:'Professional Furnace Cleaning Across Canada',
  fur_sub:'Blower, heat exchanger, burners & filters — deep-cleaned and safety-inspected before Canadian winter arrives.',
  fur_cta_h:"Don't Wait for Winter — Book Now & Save $50",fur_cta_p:'Same-week appointments across Canada.',fur_cta_btn:'Get Free Furnace Cleaning Quote',
  chim_h1:'Professional Chimney Sweep & WETT Inspection',
  chim_sub:'Creosote removal, flue inspection & safety certificate. Most Canadian home insurance policies require annual chimney cleaning.',
  chim_cta_h:'Book Your Chimney Sweep — Save $50',chim_cta_p:'WETT inspection certificate provided for your insurer.',chim_cta_btn:'Book Chimney Sweep Now',
  dry_h1:"Dryer Vent Cleaning — Canada's #1 Fire Prevention Service",
  dry_sub:'Clogged dryer vents cause over 15,000 home fires in Canada annually. A simple cleaning protects your family and your home.',
  dry_cta_h:'Protect Your Home — Book Today & Save $50',dry_cta_p:'60-minute service. Same-week availability nationwide.',dry_cta_btn:'Book Dryer Vent Cleaning',
  faq_h1:'Frequently Asked Questions',faq_sub:"Canadian homeowners' most common questions — answered by our NADCA-certified experts.",

  /* FOOTER */
  foot_about:'Professional duct & HVAC cleaning for Canadian families. Licensed, bonded, fully insured across 6 provinces.',
  foot_hours:'⏰ Mon–Sat · 7am–8pm all time zones',foot_svc:'Services',foot_co:'Company',
  foot_areas:'Service Areas',cities_h:'Serving 55+ Cities — Duct Cleaning Near You',
  foot_copy:'© 2025 Ventify Duct Cleaning Inc. All rights reserved.'
},
fr:{
  promo_txt:'Offre limitée : 50 $ DE RABAIS sur votre premier nettoyage.',promo_lnk:'Réclamer →',
  nav_home:'Accueil',nav_svc:'Services ▾',nav_pricing:'Tarifs',nav_gallery:'Galerie',
  nav_reviews:'Avis',nav_blog:'Blogue',nav_faq:'FAQ',nav_quote:'Soumission gratuite',
  svc1:'Nettoyage des conduits',svc2:'Nettoyage de fournaise',svc3:'Ramonage de cheminée',svc4:'Nettoyage sèche-linge',svc5:'Forfait maison complète',
  learn_more:'En savoir plus',get_quote:'Obtenir ma soumission gratuite',quote_btn:'Soumission gratuite — Économisez 50 $',
  back_blog:'Retour au blogue',
  tr1:'Licencié et cautionné',tr1s:'6 provinces',tr2:'Certifié NADCA',tr2s:'Norme nationale',
  tr3:'Note 4,4★',tr3s:'1 400+ avis',tr4:'Réservation la semaine même',tr4s:'Plages flexibles',
  tr5:'Aucuns frais cachés',tr5s:'Prix garanti',
  st1:'Maisons nettoyées',st2:'Provinces desservies',st3:'Note Google',st4:"Ans d'expérience",
  srv_tag:'Nos services',srv_h:"Soins complets pour le système d'air de votre maison",
  srv_sub:'Un appel, une équipe. Aucun sous-traitant — uniquement des techniciens certifiés Ventify.',
  srv1_p:"Aspiration HEPA montée sur camion + brosse rotative. Chaque conduit et grille — norme NADCA.",
  srv2_p:'Soufflante, échangeur de chaleur et brûleurs — nettoyage en profondeur pour un hiver canadien sécuritaire.',
  srv3_p:"Élimination de créosote inspectée WETT & inspection du carneau. Requis par la plupart des assureurs.",
  srv4_p:'Conduit entier dégagé. Réduit le risque d\'incendie et le temps de séchage jusqu\'à 40 %.',
  proc_tag:'Comment ça fonctionne',proc_h:'Le protocole en 6 étapes de Ventify',proc_sub:'Chaque travail, chaque fois. Aucun raccourci.',
  p1h:"Inspection préalable et test d'air",p1p:"Lectures d'air initiales, cartographie des conduits.",
  p2h:'Scellement et confinement',p2p:'Tous les registres scellés. Pression négative appliquée.',
  p3h:'Agitation par brosse rotative',p3p:'Les brosses desserrent des années de débris accumulés.',
  p4h:'Extraction par aspirateur HEPA',p4p:'HEPA monté sur camion — rien ne reste dans votre maison.',
  p5h:'Désinfection écologique',p5p:'Désinfectant Benefect en option : élimine bactéries et moisissures.',
  p6h:'Test final et rapport',p6p:'Lectures après nettoyage documentées. Rapport écrit remis.',
  why_tag:'Pourquoi Ventify?',why_h:'La norme d\'excellence au Canada',
  why_p:"Nous n'avons pas créé Ventify pour être une autre entreprise de nettoyage. Nous l'avons créée pour être la dernière que vous appellerez.",
  w1h:'Équipement certifié NADCA',w1p:'Systèmes HEPA montés sur camion — pas de petits aspirateurs portables.',
  w2h:'Zéro frais caché — Garanti',w2p:'Votre soumission est votre facture finale. Aucune surprise.',
  w3h:'Techniciens uniquement à l\'interne',w3p:'Aucun sous-traitant. Chaque personne chez vous est un employé Ventify.',
  w4h:'Garantie de satisfaction 100 %',w4p:'Pas satisfait ? Nous revenons nettoyer gratuitement.',
  qf_h:'Obtenez votre soumission gratuite',qf_sub:'Réponse en 2 heures · Lun–Sam 7h–20h',
  qf_name:'Nom complet',qf_phone:'Numéro de téléphone',qf_city:'Ville et province',
  qf_svc:'Service requis',qf_plan:'Plan / forfait',qf_sel:'Sélectionnez un service...',
  qf_btn:'Demander une soumission — Économisez 50 $',qf_note:'🎁 Les nouveaux clients économisent 50 $. Aucune carte requise.',
  pkg_tag:'Tarifs',pkg_h:'Des forfaits simples. Aucune surprise.',
  pkg_sub:'Choisissez le plan adapté à votre maison. Chaque forfait inclut notre garantie de satisfaction.',
  pkg_note:'Tous les prix sont des prix de départ.',pkg_off:'50 $ de rabais sur la première réservation.',
  view_all_pkg:'Voir tous les tarifs →',
  prc_h1:'Tarification simple et transparente',prc_sub:'Aucuns frais cachés. Aucun supplément surprise. Votre soumission est votre prix final.',
  prc_tag:'Nos forfaits',prc_h2:'Choisissez le bon plan pour votre maison',
  prc_p:'Tous les forfaits incluent l\'équipement NADCA, tests de qualité d\'air avant/après et garantie satisfaction.',
  prc_prov:'Sélectionnez votre province pour les tarifs locaux :',
  prc_note:'Tous les prix sont des prix de départ. Soumission finale après évaluation gratuite.',
  prc_off:'50 $ de rabais sur la première réservation.',
  addon_h:'Services additionnels',
  gal_tag:'Avant & Après',gal_h:'De vrais résultats dans de vraies maisons canadiennes',
  gal_p:'Photos non retouchées prises par nos techniciens lors de travaux réels.',
  gal_btn:'Voir la galerie complète →',gal_pg_h:'Galerie Avant & Après',
  gal_pg_p:'Vraies maisons, vrais résultats. Photos prises par les techniciens Ventify — non filtrées.',
  rev_tag:'Avis clients',rev_h:'Plus de 8 000 familles satisfaites au Canada',
  rev_pg_h:'Ce que disent nos clients',rev_pg_p:'Plus de 8 000 familles canadiennes font confiance à Ventify.',
  blg_tag:'Conseils d\'experts',blg_h:'Derniers articles de nos experts en CVCA',
  blg_btn:'Voir tous les articles →',blg_pg_h:'Conseils CVCA & expertise',
  blg_pg_p:'Restez informé sur la qualité de l\'air, l\'entretien des conduits et les économies d\'énergie.',
  cta_tag:'Offre limitée',cta_h:'Prêt pour un air plus pur ? Économisez 50 $ aujourd\'hui.',
  cta_p:'Aucun coupon nécessaire. Rabais appliqué automatiquement pour les nouveaux clients dans 6 provinces.',
  cta_btn:'🎁 Réclamer mon rabais de 50 $',
  duct_h1:'Nettoyage des conduits résidentiels au Canada',
  duct_sub:'Nettoyage certifié NADCA, monté sur camion, pour chaque conduit, grille et retour de votre maison.',
  duct_cta_h:'Réservez le nettoyage des conduits — Économisez 50 $',duct_cta_p:'Service pancanadien. Rendez-vous disponibles la semaine même.',
  fur_h1:'Nettoyage professionnel de fournaise au Canada',
  fur_sub:'Soufflante, échangeur de chaleur, brûleurs et filtres — nettoyage en profondeur avant l\'hiver canadien.',
  fur_cta_h:"N'attendez pas l'hiver — Réservez maintenant et économisez 50 $",fur_cta_p:'Rendez-vous la semaine même partout au Canada.',fur_cta_btn:'Soumission nettoyage de fournaise',
  chim_h1:'Ramonage de cheminée professionnel & inspection WETT',
  chim_sub:'Élimination de créosote, inspection du carneau et certificat de sécurité pour votre assureur.',
  chim_cta_h:'Réservez votre ramonage — Économisez 50 $',chim_cta_p:'Certificat d\'inspection WETT fourni pour votre assureur.',chim_cta_btn:'Réserver le ramonage',
  dry_h1:'Nettoyage de la conduite de sèche-linge — Service de prévention incendie #1 au Canada',
  dry_sub:'Les conduits de sèche-linge obstrués causent plus de 15 000 incendies résidentiels au Canada chaque année.',
  dry_cta_h:'Protégez votre maison — Réservez et économisez 50 $',dry_cta_p:'Service en 60 minutes. Disponible la semaine même partout.',dry_cta_btn:'Réserver le nettoyage sèche-linge',
  faq_h1:'Questions fréquemment posées',faq_sub:'Les questions les plus courantes des propriétaires canadiens — répondues par nos experts.',
  foot_about:'Nettoyage professionnel des conduits et CVCA pour les familles canadiennes. Licencié, cautionné, pleinement assuré dans 6 provinces.',
  foot_hours:'⏰ Lun–Sam · 7h–20h tous les fuseaux horaires',foot_svc:'Services',foot_co:'Entreprise',
  foot_areas:'Zones desservies',cities_h:'Desservant 55+ villes — Nettoyage de conduits près de chez vous',
  foot_copy:'© 2025 Ventify Duct Cleaning Inc. Tous droits réservés.'
}};

/* =================================================
   2. DATA — GALLERY
================================================= */
const GALLERY = [
  /* DUCT */
  {cat:'duct', type:'before', src:'images/gallery/duct/before-1.webp', alt:'Dirty clogged air duct before professional duct cleaning in Toronto Ontario Canada', label:'Duct — Before', sub:'Supply duct · Toronto, ON'},
  {cat:'duct', type:'after',  src:'images/gallery/duct/after-1.webp',  alt:'Clean air duct after NADCA-certified Ventify duct cleaning in Toronto', label:'Duct — After', sub:'Supply duct · Toronto, ON'},
  {cat:'duct', type:'before', src:'images/gallery/duct/before-2.webp', alt:'Dusty HVAC vent before professional air duct cleaning in Mississauga Ontario', label:'Return Duct — Before', sub:'Return duct · Mississauga, ON'},
  {cat:'duct', type:'after',  src:'images/gallery/duct/after-2.webp',  alt:'Spotless HVAC system after Ventify duct cleaning service in Mississauga', label:'Return Duct — After', sub:'Return duct · Mississauga, ON'},
  {cat:'duct', type:'neutral',src:'images/gallery/duct/equipment.webp', alt:'Ventify technician performing professional duct cleaning service in Calgary Alberta', label:'HEPA Equipment', sub:'Truck-mounted system · Calgary, AB'},

  /* FURNACE */
  {cat:'furnace', type:'before', src:'images/gallery/furnace/before-1.webp', alt:'Dirty furnace blower before professional furnace cleaning in Calgary Alberta', label:'Furnace Blower — Before', sub:'Blower wheel · Calgary, AB'},
  {cat:'furnace', type:'after',  src:'images/gallery/furnace/after-1.webp',  alt:'Clean furnace components after professional furnace cleaning in Calgary', label:'Furnace Blower — After', sub:'Blower wheel · Calgary, AB'},
  {cat:'furnace', type:'before', src:'images/gallery/furnace/before-2.webp', alt:'Clogged furnace filter before inspection and cleaning in Edmonton Alberta', label:'Furnace Filter — Before', sub:'Filter housing · Edmonton, AB'},
  {cat:'furnace', type:'after',  src:'images/gallery/furnace/after-2.webp',  alt:'Clean home air quality after complete furnace cleaning in Edmonton Alberta', label:'Post-Clean Home Air', sub:'After service · Edmonton, AB'},

  /* CHIMNEY */
  {cat:'chimney', type:'before', src:'images/gallery/chimney/before-1.webp', alt:'Canadian home chimney before professional chimney sweep service in Vancouver BC', label:'Chimney — Before', sub:'Exterior cap · Vancouver, BC'},
  {cat:'chimney', type:'after',  src:'images/gallery/chimney/after-1.webp',  alt:'Clean chimney flue after WETT-inspected chimney sweep service in Vancouver BC', label:'Chimney — After', sub:'Flue cleaned · Vancouver, BC'},
  {cat:'chimney', type:'before', src:'images/gallery/chimney/before-2.webp', alt:'Creosote buildup in fireplace before professional chimney sweep in Ottawa Ontario', label:'Firebox — Before', sub:'Firebox · Ottawa, ON'},
  {cat:'chimney', type:'after',  src:'images/gallery/chimney/after-2.webp',  alt:'Clean fireplace after professional chimney sweep and inspection in Ottawa Ontario', label:'Firebox — After', sub:'Firebox · Ottawa, ON'},

  /* DRYER */
  {cat:'dryer', type:'before', src:'images/gallery/dryer/before-1.webp', alt:'Lint-clogged dryer vent duct before professional dryer vent cleaning in Montreal Quebec', label:'Dryer Vent — Before', sub:'Vent duct · Montréal, QC'},
  {cat:'dryer', type:'after',  src:'images/gallery/dryer/after-1.webp',  alt:'Clear dryer vent after professional cleaning improving airflow in Montreal Quebec home', label:'Dryer Vent — After', sub:'Vent duct · Montréal, QC'},
  {cat:'dryer', type:'before', src:'images/gallery/dryer/before-2.webp', alt:'Blocked laundry room dryer vent before Ventify professional cleaning in Winnipeg Manitoba', label:'Exterior Cap — Before', sub:'Cap & screen · Winnipeg, MB'},
  {cat:'dryer', type:'after',  src:'images/gallery/dryer/after-2.webp',  alt:'Clear exterior dryer vent cap after professional cleaning in Winnipeg Manitoba', label:'Exterior Cap — After', sub:'Cap & screen · Winnipeg, MB'}
];

/* =================================================
   3. DATA — REVIEWS
================================================= */
const REVIEWS = [
  {name:'Sandra K.',city:'Mississauga, ON',init:'SK',rating:5,text:"Ventify came within 2 days of my call. The technician showed me before-and-after photos and my daughter's allergies improved noticeably the very next week. I can't recommend them enough."},
  {name:'Marc P.',city:'Calgary, AB',init:'MP',rating:5,text:"I've had three duct cleaning companies over the years. Ventify is the only one using real truck-mounted equipment. The before/after report they left was genuinely impressive."},
  {name:'Jennifer L.',city:'Winnipeg, MB',init:'JL',rating:5,text:"Our dryer was taking two cycles. After Ventify cleared the clogged vent, one cycle is now enough. My energy bill dropped immediately. Should have done this years ago."},
  {name:'David Nguyen',city:'Vancouver, BC',init:'DN',rating:5,text:"As someone with asthma, indoor air quality is critical for me. After Ventify's duct cleaning I noticed a dramatic reduction in dust accumulation on surfaces within days."},
  {name:'Marie-Claire B.',city:'Montréal, QC',init:'MB',rating:5,text:"Service bilingue excellent. Les techniciens sont arrivés à l'heure, ont expliqué chaque étape et ont laissé un rapport complet. Qualité professionnelle, prix honnête."},
  {name:'Robert T.',city:'Ottawa, ON',init:'RT',rating:5,text:"The chimney sweep service was thorough and professional. They found and cleared a partial bird's nest blockage I had no idea about. The WETT certificate was ready within the hour."},
  {name:'Amanda Chen',city:'Toronto, ON',init:'AC',rating:5,text:"New house, old ducts. Ventify cleaned them before we moved in and the amount of debris they removed was shocking. Our HVAC now runs quieter and our first heating bill was noticeably lower."},
  {name:'Kevin Walsh',city:'Edmonton, AB',init:'KW',rating:5,text:"Booked in October before winter. Technician was professional, on time, and incredibly thorough. The 6-step process is real — not just marketing copy. Will book annually from now on."},
  {name:'Priya Sharma',city:'Brampton, ON',init:'PS',rating:5,text:"My husband is a heavy sleeper but even he noticed the difference in air quality after Ventify's service. Our home feels fresher and our furnace runs much more quietly now."},
  {name:'James Macdonald',city:'Regina, SK',init:'JM',rating:5,text:"Saskatchewan winters are brutal and our furnace works overtime. Ventify's furnace cleaning made a real difference in efficiency. Heating costs dropped by about 15% this winter."}
];

/* =================================================
   4. DATA — PRICING (FROM FIRESTORE)
================================================= */
let provincePricing = {};
let currentZone = 'ON';

async function loadPricing() {
  try {
    const snapshot = await db.collection('pricing').get();
    provincePricing = {};
    snapshot.forEach(doc => {
      const data = doc.data();
      provincePricing[doc.id] = {
        name: data.province,
        silver: data.silver,
        gold: data.gold,
        premium: data.premium,
        chimney: data.chimney
      };
    });

    // Re-render pricing if visible
    if (document.getElementById('pricing-pkgs')) renderPricing();
    if (document.getElementById('home-pkg')) renderPricingPackages('home-pkg', true, currentZone);
  } catch (err) {
    console.error('Failed to load pricing:', err);
  }
}

const SERVICE_LABELS = {
  duct: {en:'Duct System Cleaning',fr:'Nettoyage des conduits'},
  furnace: {en:'Furnace Cleaning',fr:'Nettoyage de fournaise'},
  chimney: {en:'Chimney Sweep',fr:'Ramonage de cheminée'},
  dryer: {en:'Dryer Vent Cleaning',fr:'Nettoyage sèche-linge'},
  home: {en:'Full Home Package',fr:'Forfait maison complète'}
};

function getPlanOptions(serviceKey) {
  if (!serviceKey) return [];
  const packageServices = ['duct','home'];
  if (packageServices.includes(serviceKey)) {
    return [
      { value:'silver', label:'🥈 Silver' },
      { value:'gold', label:'🥇 Gold' },
      { value:'premium', label:'💎 Premium' }
    ];
  }
  return [
    { value:'standard', label:'Standard (Silver Price)' }
  ];
}

function updatePlanDropdown(serviceSelect) {
  const planSelect = document.getElementById('qf-plan');
  if (!planSelect) return;
  const serviceKey = serviceSelect ? serviceSelect.value : '';
  const options = getPlanOptions(serviceKey);
  if (!serviceKey || options.length === 0) {
    planSelect.innerHTML = '<option value="">Select a service first</option>';
    planSelect.disabled = true;
    return;
  }
  planSelect.disabled = false;
  if (options.length === 1) {
    planSelect.innerHTML = `<option value="${options[0].value}" selected>${options[0].label}</option>`;
    return;
  }
  planSelect.innerHTML = '<option value="">Select a plan...</option>' + options.map(o => `<option value="${o.value}">${o.label}</option>`).join('');
}

function initializePlanDropdowns() {
  document.addEventListener('change', function(event) {
    if (event.target && event.target.id === 'qf-service') {
      updatePlanDropdown(event.target);
    }
  });
  const homeServiceSelect = document.getElementById('qf-service');
  if (homeServiceSelect) {
    updatePlanDropdown(homeServiceSelect);
  }
}

// Blog posts loaded from Firestore
let blogPosts = [];

async function loadBlogPosts() {
  try {
    const snapshot = await db.collection('blogPosts')
      .where('published', '==', true)
      .orderBy('id', 'desc')
      .get();

    blogPosts = [];
    snapshot.forEach(doc => {
      blogPosts.push(doc.data());
    });

    // Re-render if the blog page or teaser is currently visible
    if (document.getElementById('blog-grid')) renderBlogGrid();
    if (document.getElementById('blog-teaser')) renderBlogTeaser();
  } catch (err) {
    console.error('Blog posts could not be loaded:', err);
  }
}

/* =================================================
   6. DATA — FAQ
================================================= */
const FAQ_DATA = {
en:[
  {q:'How often should I clean my air ducts in Canada?',a:'Health Canada and NADCA recommend every 3–5 years for average households. Homes with pets, smokers, allergy sufferers, or recent renovations should clean every 2–3 years. Canadian homes sealed for 5–7 months of winter make indoor air quality especially critical.'},
  {q:'What is NADCA and why does it matter?',a:'NADCA (National Air Duct Cleaners Association) sets the North American standard for HVAC cleaning. NADCA-certified companies must use HEPA-filtered, negative-pressure equipment and follow the ACR (Assessment, Cleaning & Restoration) standards. Not all companies are NADCA-certified — Ventify is.'},
  {q:'Best time of year to clean ducts in Canada?',a:'Early fall (September–October) is ideal — clear all summer pollen before your furnace begins its 5–7 month run. Spring (March–May) is second-best. Ventify offers same-week service year-round across all 6 provinces.'},
  {q:'How long does a typical duct cleaning take?',a:'A standard residential cleaning takes 2.5–4 hours depending on home size. A Gold or Platinum package (duct + furnace + dryer vent) typically takes 4–6 hours. We never rush — our technicians will not leave until the work meets our standard.'},
  {q:'Is Ventify licensed and insured in my province?',a:'Yes. Ventify holds full provincial licensing, $5M liability insurance, and WCB/WSIB coverage in Ontario, Alberta, BC, Quebec, Manitoba, and Saskatchewan. Documentation provided upon request.'},
  {q:'Can you clean ducts in Canadian winter (-30°C)?',a:'Yes. Our equipment configurations minimize cold air exposure and we service homes throughout Canadian winters. The only limitation is extreme weather events below -40°C with wind chill, for technician safety.'},
  {q:'Does duct cleaning help with humidity issues in winter?',a:'Yes — clean ducts allow your humidifier and dehumidifier to work more efficiently. Dirty ducts restrict airflow that carries moisture, creating uneven humidity levels that cause condensation and potential mould growth.'},
  {q:'My furnace is new — do I still need duct cleaning?',a:'Almost certainly yes. A new furnace attached to old ducts still circulates through all the debris in those ducts. If your home had renovation work, TSSA (Ontario) requires professional duct cleaning. New builds also accumulate significant construction dust before occupancy.'},
  {q:'Why are some companies charging $99 for duct cleaning?',a:"A complete, NADCA-standard residential duct cleaning cannot be done for $99. Companies advertising this price are typically using low-powered portable vacuums, not cleaning all vents, or using bait-and-switch pricing where the final invoice is 3–5× the quoted price. Ventify's pricing reflects real equipment, real technicians, and no hidden fees."},
  {q:'Do you offer French-language service in Quebec?',a:'Oui, absolument. Ventify offers full bilingual (English and French) service in Quebec. Our technicians serving Montréal, Laval, Québec City, Gatineau, and surrounding areas are bilingual. Use the FR toggle in our navigation to switch this website to French.'}
],
fr:[
  {q:'À quelle fréquence faut-il nettoyer les conduits au Canada ?',a:"Santé Canada et la NADCA recommandent tous les 3 à 5 ans pour les ménages ordinaires. Les maisons avec animaux, fumeurs ou rénovations récentes devraient nettoyer tous les 2 à 3 ans."},
  {q:"Qu'est-ce que la NADCA et pourquoi est-ce important ?",a:"La NADCA établit la norme nord-américaine pour le nettoyage des systèmes CVCA. Les entreprises certifiées NADCA doivent utiliser des systèmes HEPA à pression négative montés sur camion."},
  {q:'Quel est le meilleur moment pour nettoyer les conduits au Canada ?',a:"Le début de l'automne (septembre–octobre) est idéal — éliminez les pollens d'été avant que votre fournaise ne démarre sa course de 5 à 7 mois. Le printemps (mars–mai) est le deuxième meilleur moment."},
  {q:'Combien de temps dure un nettoyage typique des conduits ?',a:'Un nettoyage résidentiel standard prend 2,5 à 4 heures selon la taille de la maison. Un forfait Or ou Platine (conduits + fournaise + sèche-linge) prend 4 à 6 heures.'},
  {q:'Ventify est-il licencié et assuré dans ma province ?',a:'Oui. Ventify détient une licence provinciale complète, une assurance responsabilité de 5 M$ et la couverture CNESST dans toutes les provinces desservies.'},
  {q:'Pouvez-vous nettoyer les conduits en hiver canadien (-30°C) ?',a:"Oui. Nos configurations d'équipement minimisent l'exposition à l'air froid. La seule limitation concerne les événements météorologiques extrêmes sous -40°C avec refroidissement éolien."},
  {q:"Le nettoyage des conduits aide-t-il avec les problèmes d'humidité en hiver ?",a:"Oui — des conduits propres permettent à votre humidificateur et déshumidificateur de fonctionner plus efficacement. Des conduits sales restreignent le flux d'air porteur d'humidité."},
  {q:'Ma fournaise est neuve — ai-je quand même besoin d\'un nettoyage des conduits ?',a:'Presque certainement oui. Une nouvelle fournaise raccordée à de vieux conduits fait toujours circuler l\'air à travers tous les débris de ces conduits.'},
  {q:'Pourquoi certaines entreprises facturent-elles 99 $ pour le nettoyage des conduits ?',a:"Un nettoyage résidentiel complet aux normes NADCA ne peut pas être effectué pour 99 $. Ces entreprises utilisent généralement de petits aspirateurs portables peu puissants."},
  {q:'Offrez-vous un service en français au Québec ?',a:"Oui, absolument. Ventify offre un service entièrement bilingue (anglais et français) au Québec. Nos techniciens desservant Montréal, Laval, Québec, Gatineau et les environs sont bilingues."}
]};

/* =================================================
   7. LANGUAGE SYSTEM
================================================= */
let lang = 'en';

function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent === l.toUpperCase()));
  document.getElementById('html-root').setAttribute('lang', l === 'fr' ? 'fr-CA' : 'en-CA');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (T[l][k] !== undefined) el.textContent = T[l][k];
  });
  // Re-render dynamic content
  renderFaq();
  renderBlogGrid();
  renderBlogTeaser();
}

/* =================================================
   19. BROWSER HISTORY & INITIAL LOAD
================================================= */
// Handle browser back/forward navigation
window.addEventListener('popstate', function(event) {
  const hash = window.location.hash.substring(1) || 'home';
  goPage(hash);
});

// Handle initial page load based on URL hash
document.addEventListener('DOMContentLoaded', function() {
  const hash = window.location.hash.substring(1) || 'home';
  goPage(hash);
});

/* =================================================
   8. PAGE ROUTING
================================================= */
function goPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('page-' + id);
  if (pg) {
    pg.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  closeDd();
  // Update URL hash
  history.pushState(null, '', '#' + id);
  // Lazy render per page
  if (id === 'pricing') renderPricing();
  if (id === 'gallery') renderGallery('all');
  if (id === 'reviews') renderReviewsPage();
  if (id === 'blog') renderBlogGrid();
  if (id === 'faq') renderFaq();
  if (id === 'duct') renderDuctPage();
  if (id === 'furnace') renderFurnacePage();
  if (id === 'chimney') renderChimneyPage();
  if (id === 'dryer') renderDryerPage();
}

/* =================================================
   9. MOBILE MENU & DROPDOWN
================================================= */
function toggleMenu() {
  const btn = document.getElementById('ham-btn');
  const menu = document.getElementById('mobile-menu');
  const isOpen = btn.classList.toggle('open');
  menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
}

function toggleDd(id) {
  const dd = document.getElementById(id);
  const toggle = document.getElementById('srv-dd-toggle');
  const wasOpen = dd.classList.contains('open');
  closeDd();
  if (!wasOpen) {
    dd.classList.add('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  } else {
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }
}

function closeDd() {
  document.querySelectorAll('.nav-dd.open').forEach(d => {
    d.classList.remove('open');
  });
  const toggle = document.getElementById('srv-dd-toggle');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

function handleDdKey(event, id) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleDd(id);
  }
}

// Global keydown listener for Escape
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeDd();
  }
});

document.addEventListener('click', e => {
  if (!e.target.closest('.nav-dd')) closeDd();
});

/* =================================================
   11. FORM SUBMISSION HANDLING
================================================= */
async function handleNewQuoteSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const name = form.querySelector('#qf-name')?.value.trim() || '';
  const email = form.querySelector('#qf-email')?.value.trim() || '';
  const address = form.querySelector('#qf-address')?.value.trim() || '';
  const phone = form.querySelector('#qf-phone')?.value.trim() || '';
  const houseSize = form.querySelector('#qf-house-size')?.value || '';
  const furnaces = form.querySelector('#qf-furnaces')?.value || '';
  const mainService = form.querySelector('#qf-main-service')?.value || '';
  const date = form.querySelector('#qf-date')?.value.trim() || '';
  const timeSlot = form.querySelector('#qf-timeslot')?.value || '';
  const message = form.querySelector('#qf-message')?.value.trim() || '';

  const extras = [];
  if (form.querySelector('#add-furnace')?.checked) extras.push('furnace');
  if (form.querySelector('#add-ac')?.checked) extras.push('ac');
  if (form.querySelector('#add-chimney')?.checked) extras.push('chimney');
  if (form.querySelector('#add-dryer')?.checked) extras.push('dryer');

  if (!name || !address || !phone || !houseSize || !furnaces || !mainService || !date || !timeSlot) {
    alert('Please fill all required fields.');
    return;
  }

  let packageTier = 'custom';
  if (houseSize !== 'over3000' && furnaces !== '0') {
    packageTier = 'available';
  }

  const formData = {
    name,
    email,
    address,
    phone,
    houseSize,
    furnaces,
    mainService,
    extras,
    date,
    timeSlot,
    message,
    packageTier,
    timestamp: new Date().toISOString()
  };

  try {
    await db.collection('contacts').add(formData);

    // EmailJS notification - send to ventifycleaner@gmail.com
    const templateParams = {
      name: name,
      phone: phone,
      email: email,
      address: address,
      service: mainService,
      date: date,
      timeslot: timeSlot,
      extras: extras.join(', ') || 'None',
      message: message || 'No message'
    };

    emailjs.send('service_508yzob', 'template_qy234r1', templateParams)
      .then(function(response) {
        console.log('Email sent successfully!', response.status);
      }, function(error) {
        console.error('Email failed...', error);
      });

    form.innerHTML = `
      <div style="text-align:center;padding:20px;">
        <h3 style="color:var(--navy);margin-bottom:10px;">Thank you!</h3>
        <p>We'll contact you within 2 hours to schedule your free quote.</p>
        <p style="font-size:0.9rem;color:#666;margin-top:10px;">No obligation • Same-week availability</p>
      </div>`;
  } catch (err) {
    console.error('Form submission error:', err);
    alert('Something went wrong. Please try again.');
  }
}

function renderNewQuoteForm(includeId = false) {
  return `
    <form class="qform" ${includeId ? 'id="main-quote-form"' : ''} onsubmit="handleNewQuoteSubmit(event)">
      <h3 data-i18n="qf_h">Get Your Free Quote</h3>
      <p data-i18n="qf_sub">Response within 2 hours · Mon–Sat 7am–8pm</p>

      <!-- Contact Info -->
      <div class="fg"><label data-i18n="qf_name">Full Name *</label><input type="text" id="qf-name" placeholder="e.g. Sarah Thompson" required></div>
      <div class="fg"><label>Email Address</label><input type="email" id="qf-email" placeholder="you@example.com"></div>
      <div class="fg"><label>Full Address *</label><input type="text" id="qf-address" placeholder="123 Main St, Toronto, ON" required></div>
      <div class="fg"><label data-i18n="qf_phone">Phone Number *</label><input type="tel" id="qf-phone" placeholder="(416) 555-0100" required></div>

      <!-- Home Details -->
      <div class="fg"><label>House Size (sq.ft) *</label>
        <select id="qf-house-size" required>
          <option value="">Select size...</option>
          <option value="under1500">Under 1,500 sq.ft</option>
          <option value="1500-2500">1,500 – 2,500 sq.ft</option>
          <option value="2500-3000">2,500 – 3,000 sq.ft</option>
          <option value="over3000">Over 3,000 sq.ft</option>
        </select>
      </div>

      <div class="fg"><label>Number of Furnaces *</label>
        <select id="qf-furnaces" required>
          <option value="">Select...</option>
          <option value="0">0 (No furnace)</option>
          <option value="1">1 Furnace</option>
          <option value="2">2 Furnaces</option>
        </select>
      </div>

      <!-- Main Service -->
      <div class="fg"><label>Main Service *</label>
        <select id="qf-main-service" required>
          <option value="">Select primary service...</option>
          <option value="duct">Duct Cleaning</option>
          <option value="dryer">Dryer Vent Cleaning</option>
          <option value="chimney">Chimney Sweep</option>
        </select>
      </div>

      <!-- Additional Services (checkboxes) -->
      <div class="fg"><label>Add Extra Services?</label>
        <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:4px">
          <label><input type="checkbox" id="add-furnace" value="furnace"> Furnace Cleaning</label>
          <label><input type="checkbox" id="add-ac" value="ac"> AC Cleaning</label>
          <label><input type="checkbox" id="add-chimney" value="chimney"> Chimney Sweep</label>
          <label><input type="checkbox" id="add-dryer" value="dryer"> Dryer Vent Cleaning</label>
        </div>
      </div>

      <!-- Preferred Date & Time Slot -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
        <div class="fg"><label>Preferred Date (Day & Month) *</label>
          <input type="text" id="qf-date" placeholder="e.g. 15 June" required>
        </div>
        <div class="fg"><label>Preferred Time Slot *</label>
          <select id="qf-timeslot" required>
            <option value="">Select...</option>
            <option value="morning">Morning (8am–12pm)</option>
            <option value="afternoon">Afternoon (12pm–4pm)</option>
            <option value="evening">Evening (4pm–7pm)</option>
          </select>
        </div>
      </div>

      <!-- Optional Message -->
      <div class="fg"><label>Your Message (optional)</label>
        <textarea id="qf-message" rows="2" placeholder="Any specific concerns..."></textarea>
      </div>

      <button class="btn btn-orange" style="width:100%;justify-content:center;padding:16px" data-i18n="qf_btn">
        🎁 Request Free Quote — Save $50
      </button>
      <p class="qform-offer" data-i18n="qf_note">First-time customers save <strong>$50</strong>. No credit card needed.</p>
    </form>`;
}

/* =================================================
   12. HERO SLIDER
================================================= */
const HERO_SLIDES = [
  { prov:'Ontario', bg:'images/hero/ontario.webp', h1:'Toronto\'s #1 Rated<br><em>Duct Cleaning</em> Service', sub:'Licensed, NADCA-certified technicians serving Toronto, Mississauga, Ottawa, Hamilton & 30+ Ontario cities.', stats:[{v:'2,800+',l:'Ontario Homes Cleaned'},{v:'4.4★',l:'Google Rating'},{v:'$50 Off',l:'First-Time Customers'}]},
  { prov:'Alberta', bg:'images/hero/alberta.webp', h1:'Calgary & Edmonton\'s<br>Trusted <em>HVAC Cleaners</em>', sub:'Prairie-grade cleaning for extreme winter climates. Serving Calgary, Edmonton, Red Deer & all Alberta communities.', stats:[{v:'1,800+',l:'Alberta Homes Cleaned'},{v:'4.4★',l:'Google Rating'},{v:'-40°C',l:'We Know AB Winters'}]},
  { prov:'British Columbia', bg:'images/hero/bc.webp', h1:'Vancouver\'s Coastal<br>Air Quality <em>Experts</em>', sub:'Coastal moisture means mould risk. We prevent it with professional duct & dryer vent cleaning across BC.', stats:[{v:'1,200+',l:'BC Homes Cleaned'},{v:'4.4★',l:'Google Rating'},{v:'Mould Safe',l:'Coastal Specialists'}]},
  { prov:'Quebec / Québec', bg:'images/hero/quebec.webp', h1:'Montréal & Québec City<br><em>Air Duct Specialists</em>', sub:'Bilingual service for Québec homeowners. Serving Montréal, Laval, Gatineau, Québec City & surrounding areas.', stats:[{v:'1,000+',l:'QC Homes Cleaned'},{v:'4.4★',l:'Google Rating'},{v:'Bilingue',l:'EN & FR Service'}]},
  { prov:'Manitoba', bg:'images/hero/manitoba.webp', h1:'Winnipeg\'s Deepest<br><em>Duct Cleaning</em> Service', sub:"Canada's coldest city needs Canada's best furnace & duct care. Serving Winnipeg, Brandon & all of Manitoba.", stats:[{v:'600+',l:'MB Homes Cleaned'},{v:'4.4★',l:'Google Rating'},{v:'-45°C',l:'Built for MB Winters'}]},
  { prov:'Saskatchewan', bg:'images/hero/saskatchewan.webp', h1:'Regina & Saskatoon<br><em>HVAC Cleaning</em> Experts', sub:'Prairie dust, extreme winters, and sealed homes demand the best duct care. We deliver it across Saskatchewan.', stats:[{v:'500+',l:'SK Homes Cleaned'},{v:'4.4★',l:'Google Rating'},{v:'Prairie',l:'Dust Specialists'}]}
];

let curSlide = 0, heroTimer;

function buildHero() {
  const wrap = document.getElementById('hero-slides');
  const dots = document.getElementById('hero-dots');
  if (!wrap || !dots) return;
  wrap.innerHTML = HERO_SLIDES.map((s, i) => `
    <div class="hero-slide">
      <div class="slide-bg" style="background-image:url('${s.bg}')"></div>
      <div class="slide-content">
        <div class="slide-province"><span></span> 🍁 Now Serving ${s.prov}</div>
        <h1>${s.h1}</h1>
        <p class="slide-sub">${s.sub}</p>
        <div class="slide-actions">
          <button class="btn btn-orange" onclick="showQuote()" data-i18n="hero_cta">Get Free Quote — Save $50</button>
          <a href="tel:+12896089407" class="btn btn-ghost">📞 289-608-9407</a>
        </div>
        <div class="slide-stats">${s.stats.map(st=>`<div class="slide-stat"><strong>${st.v}</strong><span>${st.l}</span></div>`).join('')}</div>
      </div>
    </div>`).join('');
  dots.innerHTML = HERO_SLIDES.map((_, i) => `<button class="hero-dot ${i===0?'active':''}" onclick="goSlide(${i})"></button>`).join('');
}

function goSlide(n) {
  curSlide = (n + HERO_SLIDES.length) % HERO_SLIDES.length;
  document.getElementById('hero-slides').style.transform = `translateX(-${curSlide * 100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === curSlide));
}
function slideHero(dir) { clearInterval(heroTimer); goSlide(curSlide + dir); startHeroAuto(); }
function startHeroAuto() { heroTimer = setInterval(() => goSlide(curSlide + 1), 5500); }

/* =================================================
   11. TICKER
================================================= */
function buildTicker() {
  const items = ['Ontario 🍁','Alberta 🍁','British Columbia 🍁','Québec 🍁','Manitoba 🍁','Saskatchewan 🍁'];
  const stats = ['2,800+ Homes','1,800+ Homes','1,200+ Homes','1,000+ Homes','600+ Homes','500+ Homes'];
  const t = document.getElementById('ticker');
  if (!t) return;
  const html = [...items,...items].map((p,i)=>`<div class="ticker-item">${p} — ${stats[i%6]}<div class="ticker-dot"></div></div>`).join('');
  t.innerHTML = html;
}

/* =================================================
   12. REVIEW CAROUSEL
================================================= */
let revIdx = 0, revTimer, revPerView = 3;
let revIdxPg = 0, revTimerPg;

function getRevPerView() { return window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3; }

function buildRevCard(r) {
  return `<div class="rev-slide">
    <div class="rev-card">
      <div class="stars">${'★'.repeat(r.rating)}</div>
      <blockquote>"${r.text}"</blockquote>
      <div style="display:flex;align-items:center;gap:12px">
        <div class="rev-ava">${r.init}</div>
        <div><div class="rev-name">${r.name}</div><div class="rev-city">${r.city}</div></div>
      </div>
    </div>
  </div>`;
}

function renderReviews(trackId, dotsId) {
  const track = document.getElementById(trackId);
  const dots = document.getElementById(dotsId);
  if (!track) return;
  track.innerHTML = REVIEWS.map(r => buildRevCard(r)).join('');
  const ppv = getRevPerView();
  const pages = Math.ceil(REVIEWS.length / ppv);
  if (dots) dots.innerHTML = Array.from({length:pages},(_,i)=>`<button class="rev-dot ${i===0?'active':''}" onclick="goRevTo(${i},'${trackId}','${dotsId}')"></button>`).join('');
}

function goRevTo(idx, trackId, dotsId) {
  const ppv = getRevPerView();
  const track = document.getElementById(trackId);
  if (!track) return;
  const maxIdx = Math.ceil(REVIEWS.length / ppv) - 1;
  idx = Math.max(0, Math.min(idx, maxIdx));
  track.style.transform = `translateX(-${idx * (100 / ppv * ppv)}%)`;
  // Actually shift by full visible width
  const slideW = 100 / ppv;
  track.style.transform = `translateX(-${idx * ppv * slideW}%)`;
  if (dotsId) {
    document.querySelectorAll(`#${dotsId} .rev-dot`).forEach((d,i)=>d.classList.toggle('active',i===idx));
  }
  return idx;
}

function slideRev(dir) {
  clearInterval(revTimer);
  const ppv = getRevPerView();
  const pages = Math.ceil(REVIEWS.length / ppv);
  revIdx = (revIdx + dir + pages) % pages;
  revIdx = goRevTo(revIdx, 'rev-track', 'rev-dots');
  startRevAuto();
}

function slideRevPage(dir) {
  clearInterval(revTimerPg);
  const ppv = getRevPerView();
  const pages = Math.ceil(REVIEWS.length / ppv);
  revIdxPg = (revIdxPg + dir + pages) % pages;
  revIdxPg = goRevTo(revIdxPg, 'rev-track-pg', 'rev-dots-pg');
  startRevPageAuto();
}

function startRevAuto() { revTimer = setInterval(() => slideRev(1), 4500); }
function startRevPageAuto() { revTimerPg = setInterval(() => slideRevPage(1), 4000); }

function renderReviewsPage() {
  renderReviews('rev-track-pg','rev-dots-pg');
  revIdxPg = 0;
  startRevPageAuto();
  // All reviews grid below
  const grid = document.getElementById('rev-all-grid');
  if (grid) grid.innerHTML = REVIEWS.map(r=>`<div class="rev-card"><div class="stars">${'★'.repeat(r.rating)}</div><blockquote>"${r.text}"</blockquote><div style="display:flex;align-items:center;gap:12px"><div class="rev-ava">${r.init}</div><div><div class="rev-name">${r.name}</div><div class="rev-city">${r.city}</div></div></div></div>`).join('');
}

/* =================================================
   13. PRICING
================================================= */
function renderPricingPackages(containerId, minimal, zone = currentZone) {
  const p = provincePricing[zone] || provincePricing[currentZone];
  if (!p) {
    console.warn(`Pricing not found for zone: ${zone || currentZone}`);
    return;
  }
  const l = T[lang];
  const packageServices = {
    silver:['All ducts & vents','Sanitization spray','Free inspection'],
    gold:['All ducts & vents','Sanitization spray','Free inspection','AC cleaning','Furnace cleaning'],
    premium:['All ducts & vents','Sanitization spray','Free inspection','AC cleaning','Furnace cleaning','Brushing deep cleaning']
  };
  const pkgs = [
    { name:'🥈 Silver', key:'silver', price:p.silver, featured:false, btnClass:'btn-outline', btnLabel: lang==='fr'?'Réserver Silver':'Book Silver' },
    { name:'🥇 Gold', key:'gold', price:p.gold, featured:true, btnClass:'btn-orange', btnLabel: lang==='fr'?'Réserver Gold':'Book Gold' },
    { name:'💎 Premium', key:'premium', price:p.premium, featured:false, btnClass:'btn-navy', btnLabel: lang==='fr'?'Réserver Premium':'Book Premium' }
  ];
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = pkgs.map(pk => {
    const originalPrice = pk.price + 50;
    const priceHtml = `<div class="pkg-price"><span class="old-price">$${originalPrice}</span><span>$${pk.price}</span><span class="discount-badge">$50 OFF</span></div>`;
    const featuresHtml = minimal ? '' : `<div class="pkg-features">${packageServices[pk.key].map(f=>`<div class="pkg-feat feat-yes"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>${f}</div>`).join('')}</div>`;
    return `
      <div class="pkg${pk.featured?' featured':''}">
        ${pk.featured?`<div class="pkg-badge">${lang==='fr'?'⭐ Meilleur rapport qualité-prix':'⭐ Best Value'}</div>`:''}
        <div class="pkg-name">${pk.name}</div>
        ${minimal ? '' : `<p class="pkg-desc">${lang==='fr'?'Package includes our most popular services':'Package includes our most popular services'}</p>`}
        ${priceHtml}
        ${minimal ? '' : featuresHtml}
        <button class="btn ${pk.btnClass}" style="width:100%;justify-content:center;margin-top:${minimal?'16px':'10px'}" onclick="showQuote()">${pk.btnLabel}</button>
      </div>`;
  }).join('');
}

function renderPricing() {
  const sel = document.getElementById('prov-selector');
  if (sel && sel.children.length === 0) {
    Object.entries(provincePricing).forEach(([code, pdata]) => {
      const btn = document.createElement('button');
      btn.className = 'prov-pill' + (code === currentZone ? ' active' : '');
      btn.textContent = pdata.name;
      btn.onclick = () => {
        currentZone = code;
        document.querySelectorAll('.prov-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPricingPackages('pricing-pkgs', false, currentZone);
        renderPricingPackages('home-pkg', true, currentZone);
      };
      sel.appendChild(btn);
    });
  }
  renderPricingPackages('pricing-pkgs', false, currentZone);
  // Addons
  const addons = document.getElementById('addons');
  if (addons && addons.children.length === 0) {
    const a = [
      {name:'Eco Sanitization',desc:'Benefect botanical sanitizer kills 99.99% of bacteria & mould.',from:'$79'},
      {name:'Duct Sealant',desc:'Aeroseal duct sealing after cleaning. Eliminate leaks and maximize efficiency.',from:'$299'},
      {name:'HEPA Filter Upgrade',desc:'Premium MERV-13 filter installation and setup.',from:'$49'},
      {name:'Video Scope Inspection',desc:'Full camera inspection of all main duct runs with recorded footage.',from:'$149'}
    ];
    addons.innerHTML = a.map(x => `<div style="background:var(--white);border-radius:var(--r);padding:20px;border:1.5px solid var(--border)"><strong style="font-size:1.05rem;font-family:'Fraunces',serif;color:var(--navy)">${x.name}</strong><p style="font-size:.85rem;margin-top:6px">${x.desc}</p><p style="color:var(--orange);font-weight:700;font-size:.9rem;margin-top:10px">From ${x.from}</p></div>`).join('');
  }
}

/* =================================================
   14. GALLERY
================================================= */
const GAL_CATS = ['all','duct','furnace','chimney','dryer'];
const GAL_LABELS_EN = {all:'All Photos',duct:'Duct Cleaning',furnace:'Furnace',chimney:'Chimney',dryer:'Dryer Vent'};
const GAL_LABELS_FR = {all:'Toutes les photos',duct:'Nettoyage conduits',furnace:'Fournaise',chimney:'Cheminée',dryer:'Sèche-linge'};
let activeGalCat = 'all';

function renderGalFilters() {
  const el = document.getElementById('gal-filters');
  if (!el || el.children.length > 0) return;
  const labels = lang === 'fr' ? GAL_LABELS_FR : GAL_LABELS_EN;
  GAL_CATS.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'gal-btn' + (cat === 'all' ? ' active' : '');
    btn.textContent = labels[cat];
    btn.onclick = () => {
      activeGalCat = cat;
      document.querySelectorAll('.gal-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(cat);
    };
    el.appendChild(btn);
  });
}

function renderGallery(cat) {
  renderGalFilters();
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  const items = cat === 'all' ? GALLERY : GALLERY.filter(g => g.cat === cat);
  const initialCount = 12;
  const visibleItems = items.slice(0, initialCount);

  grid.innerHTML = visibleItems.map(g => `
    <div class="gal-item gal-${g.type}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy">
      <div class="gal-label">${g.label}<span>${g.sub}</span></div>
    </div>`).join('');

  // Add Load More button if there are more items
  if (items.length > initialCount) {
    const loadMoreBtn = document.createElement('div');
    loadMoreBtn.style.cssText = 'text-align:center;margin-top:40px;';
    loadMoreBtn.innerHTML = `<button class="btn btn-outline" onclick="loadMoreGallery('${cat}', ${initialCount})">Load More Images →</button>`;
    grid.appendChild(loadMoreBtn);
  }

  // Store current state for Load More
  grid.dataset.category = cat;
  grid.dataset.shown = initialCount;
  grid.dataset.total = items.length;
}

function loadMoreGallery(cat, currentShown) {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  const items = cat === 'all' ? GALLERY : GALLERY.filter(g => g.cat === cat);
  const batchSize = 12;
  const nextBatch = items.slice(currentShown, currentShown + batchSize);
  const newShown = currentShown + nextBatch.length;

  // Add new items
  const fragment = document.createDocumentFragment();
  nextBatch.forEach(g => {
    const item = document.createElement('div');
    item.className = `gal-item gal-${g.type}`;
    item.innerHTML = `
      <img src="${g.src}" alt="${g.alt}" loading="lazy">
      <div class="gal-label">${g.label}<span>${g.sub}</span></div>
    `;
    fragment.appendChild(item);
  });
  grid.insertBefore(fragment, grid.lastElementChild);

  // Update Load More button or remove it
  if (newShown >= items.length) {
    grid.lastElementChild.remove();
  } else {
    grid.lastElementChild.querySelector('button').onclick = () => loadMoreGallery(cat, newShown);
  }

  grid.dataset.shown = newShown;
}

function renderHomeGallery() {
  const el = document.getElementById('home-gallery');
  if (!el) return;
  const sample = GALLERY.slice(0, 6);
  el.innerHTML = sample.map(g => `
    <div class="gal-item gal-${g.type}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy">
      <div class="gal-label">${g.label}<span>${g.sub}</span></div>
    </div>`).join('');
}

/* =================================================
   15. BLOG
================================================= */
function renderBlogGrid() {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;
  if (blogPosts.length === 0) {
    grid.innerHTML = '<p style="text-align:center;padding:40px;">No blog posts found.</p>';
    return;
  }
  grid.innerHTML = blogPosts.map(p => {
    const d = p[lang] || p.en;
    return `<div class="blog-card" onclick="showBlogArticle(${p.id})">
      <img src="${p.img}" alt="${d.title}" loading="lazy">
      <div class="blog-body">
        <p class="blog-meta">${p.date} · ${p.cat} · ${p.read}</p>
        <h3>${d.title}</h3>
        <p>${d.excerpt}</p>
        <span class="blog-read" data-i18n="learn_more">Read Article →</span>
      </div>
    </div>`;
  }).join('');
}

function renderBlogTeaser() {
  const el = document.getElementById('blog-teaser');
  if (!el) return;
  if (blogPosts.length === 0) return;
  el.innerHTML = blogPosts.slice(0, 3).map(p => {
    const d = p[lang] || p.en;
    return `<div class="blog-card" onclick="goPage('blog');setTimeout(()=>showBlogArticle(${p.id}),300)">
      <img src="${p.img}" alt="${d.title}" loading="lazy">
      <div class="blog-body">
        <p class="blog-meta">${p.date} · ${p.cat}</p>
        <h3>${d.title}</h3>
        <p>${d.excerpt.substring(0, 100)}...</p>
        <span class="blog-read">Read Article →</span>
      </div>
    </div>`;
  }).join('');
}

function showBlogArticle(id) {
  const post = blogPosts.find(p => p.id === id);
  if (!post) return;
  const d = post[lang] || post.en;
  document.getElementById('blog-list-view').classList.add('hidden');
  document.getElementById('blog-article-view').classList.remove('hidden');
  document.getElementById('blog-article-body').innerHTML = `
    <div class="blog-article">
      <span class="art-tag">${post.cat}</span>
      <h1 style="margin-top:16px">${d.title}</h1>
      <div class="article-meta">
        <span>📅 ${post.date}</span>
        <span>⏱ ${post.read}</span>
        <span>✍️ Ventify Expert Team</span>
      </div>
      <img src="${post.img}" alt="${d.title}">
      <div>${d.content}</div>
      <div style="margin-top:48px;background:var(--ice);border-radius:var(--rlg);padding:36px;text-align:center">
        <h3 style="margin-bottom:12px">Ready to breathe cleaner air?</h3>
        <p style="margin-bottom:24px">Book a professional duct cleaning today — first-time customers save $50.</p>
        <button class="btn btn-orange" onclick="showQuote()" data-i18n="quote_btn">Get Free Quote — Save $50</button>
      </div>
    </div>`;
  window.scrollTo({top: 0, behavior:'smooth'});
}

function showBlogList() {
  document.getElementById('blog-list-view').classList.remove('hidden');
  document.getElementById('blog-article-view').classList.add('hidden');
  window.scrollTo({top: 0, behavior:'smooth'});
}

/* =================================================
   16. FAQ
================================================= */
function renderFaq() {
  const el = document.getElementById('faq-content');
  if (!el) return;
  const data = FAQ_DATA[lang] || FAQ_DATA.en;
  el.innerHTML = `<h2 style="margin-bottom:32px" data-i18n="faq_h1">${T[lang].faq_h1||'Frequently Asked Questions'}</h2>` +
    data.map((item, i) => `
    <div class="faq-item">
      <div class="faq-q" onclick="toggleFaq(this)" onkeydown="handleFaqKey(event, this)" role="button" tabindex="0" aria-expanded="false" aria-controls="faq-ans-${i}">
        <span class="faq-num">${i+1}</span>
        <span class="faq-qt">${item.q}</span>
        <span class="faq-arrow"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>
      </div>
      <div class="faq-ans" id="faq-ans-${i}"><p>${item.a}</p></div>
    </div>`).join('');
}

function toggleFaq(qEl) {
  const item = qEl.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');

  // Update ARIA attributes
  document.querySelectorAll('.faq-q').forEach(q => {
    q.setAttribute('aria-expanded', 'false');
  });
  if (!wasOpen) {
    qEl.setAttribute('aria-expanded', 'true');
  }
}

function handleFaqKey(event, qEl) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleFaq(qEl);
  }
}

/* =================================================
   17. SERVICE PAGE CONTENT BUILDERS
================================================= */
function serviceQform(titleEN, titleFR, fields, extraClass, serviceType) {
  const t = lang === 'fr' ? titleFR : titleEN;
  const serviceLabel = T[lang].qf_svc || 'Service Required';
  const serviceDisplay = serviceType ? (lang === 'fr' ? SERVICE_LABELS[serviceType].fr : SERVICE_LABELS[serviceType].en) : '';
  const serviceField = serviceType ? `
    <div class="fg"><label>${serviceLabel}</label>
      <select id="qf-service" disabled>
        <option value="${serviceType}">${serviceDisplay}</option>
      </select>
    </div>` : '';
  const planOptionsData = serviceType ? getPlanOptions(serviceType) : [];
  const planOptions = planOptionsData.length === 1
    ? `<option value="${planOptionsData[0].value}" selected>${planOptionsData[0].label}</option>`
    : `<option value="">Select a plan...</option>${planOptionsData.map(o => `<option value="${o.value}">${o.label}</option>`).join('')}`;
  const planField = `
    <div class="fg"><label>${T[lang].qf_plan || 'Plan / Package'}</label>
      <select id="qf-plan" ${serviceType ? '' : 'disabled'}>
        ${serviceType ? planOptions : '<option value="">Select a service first</option>'}
      </select>
    </div>`;
  return `<form class="qform" style="${extraClass||''}" onsubmit="handleNewQuoteSubmit(event)">
    <h3>${t}</h3>
    <p>${lang==='fr'?'Soumission gratuite · Disponible la semaine même':'Free quote · Same-week availability'}</p>
    ${serviceField}
    ${planField}
    ${fields.map(f=>{
      const fieldId = `qf-${f.l.toLowerCase().replace(/\s+/g,'-')}`;
      return `<div class="fg"><label>${f.l}</label>${f.t==='select'?`<select id="${fieldId}">${f.opts.map(o=>`<option value="${o.value||o}">${o.label||o}</option>`).join('')}</select>`:`<input type="${f.t||'text'}" id="${fieldId}" placeholder="${f.ph}" />`}</div>`;
    }).join('')}
    <button class="btn btn-orange" style="width:100%;justify-content:center;padding:16px">${T[lang].qf_btn}</button>
    <p class="qform-offer">${T[lang].qf_note}</p>
  </form>`;
}

function checkList(items) {
  return `<div class="check-list">${items.map(i=>`<div class="check-item"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>${i}</div>`).join('')}</div>`;
}

function renderDuctPage() {
  const el = document.getElementById('page-duct-content');
  if (!el || el.innerHTML) return;

  const template = document.getElementById('template-duct');
  const content = template.content.cloneNode(true);
  el.appendChild(content);

  // Add the quote form
  const quoteEl = document.getElementById('page-duct-quote');
  if (quoteEl) {
    quoteEl.innerHTML = renderNewQuoteForm();
  }
}

function renderFurnacePage() {
  const el = document.getElementById('page-furnace-content');
  if (!el || el.innerHTML) return;

  const template = document.getElementById('template-furnace');
  const content = template.content.cloneNode(true);
  el.appendChild(content);

  // Add the quote form
  const quoteEl = document.getElementById('page-furnace-quote');
  if (quoteEl) {
    quoteEl.innerHTML = renderNewQuoteForm();
  }
}

function renderChimneyPage() {
  const el = document.getElementById('page-chimney-content');
  if (!el || el.innerHTML) return;

  const template = document.getElementById('template-chimney');
  const content = template.content.cloneNode(true);
  el.appendChild(content);

  // Add the quote form
  const quoteEl = document.getElementById('page-chimney-quote');
  if (quoteEl) {
    quoteEl.innerHTML = renderNewQuoteForm();
  }
}

function renderDryerPage() {
  const el = document.getElementById('page-dryer-content');
  if (!el || el.innerHTML) return;

  const template = document.getElementById('template-dryer');
  const content = template.content.cloneNode(true);
  el.appendChild(content);

  // Add the quote form
  const quoteEl = document.getElementById('page-dryer-quote');
  if (quoteEl) {
    quoteEl.innerHTML = renderNewQuoteForm();
  }
}

/* =================================================
   18. UTILITY
================================================= */
function showQuote() {
  goPage('home');
  setTimeout(() => {
    const el = document.getElementById('quote-anchor');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 200);
}

/* =================================================
   19. INIT
================================================= */
// Navbar hide on scroll down, show on scroll up
let lastScrollTop = 0;
const navbar = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
    // Scrolling down: hide navbar
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up: show navbar
    navbar.style.transform = 'translateY(0)';
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 960) {
    document.getElementById('mobile-menu').classList.remove('open');
    document.getElementById('ham-btn').classList.remove('open');
  }
});

// INIT
buildHero();
startHeroAuto();
buildTicker();
renderReviews('rev-track', 'rev-dots');
startRevAuto();
renderHomeGallery();
initializePlanDropdowns();
renderPricingPackages('home-pkg', true);
renderBlogTeaser();
loadBlogPosts();
loadPricing();
