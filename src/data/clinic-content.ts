import type { Locale } from '@/lib/i18n'

export const NAV_LABELS: Record<
  Locale,
  {
    home: string
    about: string
    services: string
    team: string
    gallery: string
    tariffs: string
    international: string
    blog: string
    projectEu: string
    contact: string
    bookCta: string
    calculator: string
  }
> = {
  ro: {
    home: 'Acasă',
    about: 'Despre noi',
    services: 'Servicii',
    team: 'Echipa',
    gallery: 'Galerie',
    tariffs: 'Tarife',
    international: 'Pacienți internaționali',
    blog: 'Blog',
    projectEu: 'Proiect UE',
    contact: 'Contact',
    bookCta: 'Programare / Video',
    calculator: 'Calculator costuri',
  },
  en: {
    home: 'Home',
    about: 'About Us',
    services: 'Procedures',
    team: 'The Doctors',
    gallery: 'Smile Gallery',
    tariffs: 'Fees',
    international: 'Dental Tourism',
    blog: 'Blog',
    projectEu: 'EU Project',
    contact: 'Contact',
    bookCta: 'Virtual Consultation',
    calculator: 'Cost Estimator',
  },
  fr: {
    home: 'Accueil',
    about: 'La Clinique',
    services: 'Soins & Tarifs',
    team: 'Équipe Médicale',
    gallery: 'Galerie',
    tariffs: 'Tarifs',
    international: 'Patients Internationaux',
    blog: 'Blog',
    projectEu: 'Projet UE',
    contact: 'Contact',
    bookCta: 'Téléconsultation',
    calculator: 'Simulateur de Coût',
  },
}

export const FOOTER_LABELS: Record<
  Locale,
  {
    tagline: string
    euProjectLink: string
    navigationTitle: string
    contactTitle: string
    hoursTitle: string
    weekdays: string
    weekend: string
    rights: string
    euNotice: string
  }
> = {
  ro: {
    tagline:
      'Tradiție stomatologică din 1991. Clinică, radiologie digitală și laborator propriu de tehnică dentară în centrul Bucureștiului.',
    euProjectLink: 'Proiect cofinanțat UE — MySMIS 339392 →',
    navigationTitle: 'Navigare',
    contactTitle: 'Contact & Locație',
    hoursTitle: 'Program Clinică',
    weekdays: 'Luni – Vineri: 09:00 – 20:00 (de confirmat)',
    weekend: 'Sâmbătă – Duminică: Închis (de confirmat)',
    rights: 'Toate drepturile rezervate.',
    euNotice: 'Proiect cofinanțat de Uniunea Europeană prin PR București-Ilfov 2021–2027.',
  },
  en: {
    tagline:
      'Dental excellence since 1991. Clinical dentistry, digital radiology, and in-house dental laboratory in central Bucharest.',
    euProjectLink: 'EU Co-Funded Project — MySMIS 339392 →',
    navigationTitle: 'Navigation',
    contactTitle: 'Contact & Location',
    hoursTitle: 'Opening Hours',
    weekdays: 'Monday – Friday: 09:00 – 20:00 (TBC)',
    weekend: 'Saturday – Sunday: Closed (TBC)',
    rights: 'All rights reserved.',
    euNotice: 'Project co-funded by the European Union via PR București-Ilfov 2021–2027.',
  },
  fr: {
    tagline:
      'Tradition dentaire depuis 1991. Clinique, radiologie numérique et laboratoire de prothèse dentaire intégré au cœur de Bucarest.',
    euProjectLink: 'Projet cofinancé par l’UE — MySMIS 339392 →',
    navigationTitle: 'Navigation',
    contactTitle: 'Contact & Accès',
    hoursTitle: 'Horaires',
    weekdays: 'Lundi – Vendredi : 09h00 – 20h00 (à confirmer)',
    weekend: 'Samedi – Dimanche : Fermé (à confirmer)',
    rights: 'Tous droits réservés.',
    euNotice: 'Projet cofinancé par l’Union Européenne via PR București-Ilfov 2021–2027.',
  },
}

export const COOKIE_LABELS: Record<
  Locale,
  {
    message: string
    essentialOnly: string
    acceptAll: string
  }
> = {
  ro: {
    message:
      'Folosim cookie-uri strict necesare și, cu acordul dvs., instrumente de analiză anonimizată (Consent Mode v2). Nu transmitem niciodată date medicale sau detalii ale programărilor către platforme terțe.',
    essentialOnly: 'Doar esențiale',
    acceptAll: 'Acceptă toate',
  },
  en: {
    message:
      'We use strictly necessary cookies and, with your consent, anonymized analytics (Consent Mode v2). Health data and appointment details are never shared with advertising platforms.',
    essentialOnly: 'Essential only',
    acceptAll: 'Accept all',
  },
  fr: {
    message:
      'Nous utilisons des cookies strictement nécessaires et, avec votre accord, des outils d’analyse anonymisés (Consent Mode v2). Aucune donnée de santé n’est transmise aux régies publicitaires.',
    essentialOnly: 'Essentiels uniquement',
    acceptAll: 'Tout accepter',
  },
}

export interface ProcedureCard {
  slug: string
  title: string
  subtitle: string
  description: string
}

export const FEATURED_PROCEDURES: Record<Locale, ProcedureCard[]> = {
  ro: [
    {
      slug: 'implantologie',
      title: 'Implantologie Dentară',
      subtitle: 'Reabilitare funcțională și estetică',
      description:
        'Soluții moderne de înlocuire a dinților lipsă prin implanturi dentare și planificare digitală, adaptate fiecărui caz clinic în urma evaluării.',
    },
    {
      slug: 'estetica-dentara',
      title: 'Estetică & Fațete Dentare',
      subtitle: 'Armonie naturală a zâmbetului',
      description:
        'Fațete ceramice, albire profesională și restaurări fizionomice concepute personalizat pentru un aspect natural și echilibrat.',
    },
    {
      slug: 'protetica-laborator',
      title: 'Protetică & Laborator Propriu',
      subtitle: 'Flux integrat 3-în-1',
      description:
        'Coroane pe zirconiu și ceramică integrală realizate în colaborare directă cu laboratorul nostru propriu de tehnică dentară, optimizând timpul petrecut în clinică.',
    },
    {
      slug: 'chirurgie-minim-invaziva',
      title: 'Chirurgie & Endodonție',
      subtitle: 'Precizie și confort clinic',
      description:
        'Intervenții chirurgicale, tratamente endodontice asistate și protocoale orientate spre reducerea disconfortului și a timpului de recuperare.',
    },
  ],
  en: [
    {
      slug: 'implantology',
      title: 'Implant Dentistry',
      subtitle: 'Durable functional restoration',
      description:
        'Modern dental implant solutions and digital treatment planning tailored to each patient following a thorough clinical evaluation.',
    },
    {
      slug: 'cosmetic-dentistry',
      title: 'Aesthetic Dentistry & Veneers',
      subtitle: 'Natural, balanced smiles',
      description:
        'Custom porcelain veneers, professional whitening, and aesthetic composite restorations designed for natural harmony.',
    },
    {
      slug: 'prosthetics-inhouse-lab',
      title: 'Prosthetics & In-House Lab',
      subtitle: '3-in-1 integrated workflow',
      description:
        'Zirconia and all-ceramic crowns crafted seamlessly alongside our on-site dental laboratory to minimize treatment turnaround time.',
    },
    {
      slug: 'minimally-invasive-surgery',
      title: 'Minimally Invasive Surgery',
      subtitle: 'Precision & patient comfort',
      description:
        'Oral surgery, endodontic therapy, and periodontal care focused on clinical safety, clarity, and gentle recovery.',
    },
  ],
  fr: [
    {
      slug: 'implantologie',
      title: 'Implantologie Dentaire',
      subtitle: 'Réhabilitation fonctionnelle durable',
      description:
        'Solutions implantaires modernes et planification clinique personnalisée après examen complet et imagerie numérique.',
    },
    {
      slug: 'esthetique-dentaire',
      title: 'Esthétique & Facettes Céramiques',
      subtitle: 'Harmonie naturelle du sourire',
      description:
        'Facettes en céramique, éclaircissement professionnel et restaurations esthétiques sur mesure pour un rendu naturel.',
    },
    {
      slug: 'prothese-laboratoire',
      title: 'Prothèse & Laboratoire Intégré',
      subtitle: 'Parcours clinique 3-en-1',
      description:
        'Couronnes en zircone et tout-céramique réalisées en lien direct avec notre laboratoire interne, réduisant les délais pour les patients voyageant à Bucarest.',
    },
    {
      slug: 'chirurgie-endodontie',
      title: 'Chirurgie & Endodontie',
      subtitle: 'Précision et sérénité',
      description:
        'Interventions chirurgicales, soins endodontiques et parodontologie selon des protocoles rigoureux d’hygiène et de confort.',
    },
  ],
}

export const ALL_SPECIALTIES: Record<Locale, { title: string; summary: string }[]> = {
  ro: [
    {
      title: 'Estetică și cosmetică dentară',
      summary: 'Fațete ceramice, albire profesională, reconstrucții estetice minim invazive.',
    },
    {
      title: 'Chirurgie și Implantologie',
      summary: 'Implanturi dentare, extracții complexe, adiții osoase și chirurgie orală.',
    },
    {
      title: 'Protetică Dentară',
      summary: 'Coroane și punți pe zirconiu sau ceramică integrală cu laborator propriu.',
    },
    {
      title: 'Endodonție',
      summary: 'Tratamente și retratamente de canal realizate cu precizie clinică.',
    },
    {
      title: 'Ortodonție',
      summary: 'Corectarea anomaliilor dento-maxilare și a ocluziei pentru copii și adulți.',
    },
    {
      title: 'Parodontologie',
      summary: 'Profilaxie, detartraj cu ultrasunete, tratamente parodontale și mentenanță.',
    },
    {
      title: 'Profilaxie și Pedodonție',
      summary: 'Controale periodice, sigilări, fluorizări și îngrijire blândă pentru copii.',
    },
    {
      title: 'Radiologie Digitală & Tehnică Dentară',
      summary: 'Imagistică digitală integrată și laborator propriu în aceeași locație.',
    },
  ],
  en: [
    {
      title: 'Cosmetic & Aesthetic Dentistry',
      summary: 'Porcelain veneers, professional whitening, and minimally invasive smile design.',
    },
    {
      title: 'Oral Surgery & Implantology',
      summary: 'Dental implants, wisdom tooth extractions, bone grafting, and surgical care.',
    },
    {
      title: 'Prosthodontics & Crowns',
      summary: 'Zirconia and all-ceramic crowns crafted with our on-site dental laboratory.',
    },
    {
      title: 'Endodontics',
      summary: 'Root canal therapy and retreatment performed with high clinical precision.',
    },
    {
      title: 'Orthodontics',
      summary: 'Alignment and bite correction for adolescents and adults.',
    },
    {
      title: 'Periodontics',
      summary: 'Ultrasonic scaling, periodontal therapy, and long-term gum maintenance.',
    },
    {
      title: 'Prevention & Pediatric Care',
      summary: 'Routine check-ups, sealants, and gentle care for younger patients.',
    },
    {
      title: 'Digital Radiology & In-House Lab',
      summary: 'On-site digital diagnostics and dental laboratory under one roof.',
    },
  ],
  fr: [
    {
      title: 'Esthétique et Cosmétique Dentaire',
      summary: 'Facettes en céramique, blanchiment professionnel et design du sourire.',
    },
    {
      title: 'Chirurgie Orale et Implantologie',
      summary: 'Implants dentaires, extractions complexes et greffes osseuses.',
    },
    {
      title: 'Prothèse Dentaire',
      summary: 'Couronnes zircone et tout-céramique en synergie avec notre laboratoire.',
    },
    {
      title: 'Endodontie',
      summary: 'Traitements et retraitements canalaires réalisés avec précision.',
    },
    {
      title: 'Orthodontie',
      summary: 'Correction de l’alignement dentaire et de l’occlusion.',
    },
    {
      title: 'Parodontologie',
      summary: 'Détartrage ultrasonique, soins parodontaux et suivi préventif.',
    },
    {
      title: 'Prophylaxie et Pédodontie',
      summary: 'Bilans réguliers et soins adaptés aux enfants.',
    },
    {
      title: 'Radiologie Numérique & Laboratoire',
      summary: 'Imagerie intégrée et laboratoire de prothèse sur place.',
    },
  ],
}

export const TEAM_MEMBERS = [
  {
    name: 'Dr. Radu-Eremia Opran',
    role: {
      ro: 'Medic Dentist Specialist • Competențe Implantologie • Administrator',
      en: 'Specialist Dental Surgeon • Implantology • Managing Director',
      fr: 'Chirurgien-Dentiste Spécialiste • Implantologie • Directeur',
    },
    languages: 'RO, EN, FR (de confirmat)',
    bio: {
      ro: 'Continuă tradiția Clinicii Opran fondate în 1991 de Dr. Matei Opran, coordonând tratamentele complexe de implantologie și reabilitare orală.',
      en: 'Carrying forward the Opran Clinic tradition founded in 1991 by Dr. Matei Opran, leading implantology and complex oral rehabilitation cases.',
      fr: 'Poursuivant la tradition de la Clinique Opran fondée en 1991 par le Dr Matei Opran, il coordonne les plans d’implantologie et de réhabilitation.',
    },
  },
  {
    name: 'Dr. Adriana-Ioana Sterie',
    role: {
      ro: 'Medic Dentist • Coordonator Calitate & Proiect',
      en: 'Dental Surgeon • Quality & Clinical Coordinator',
      fr: 'Chirurgien-Dentiste • Coordinatrice Clinique',
    },
    languages: 'RO, EN (de confirmat)',
    bio: {
      ro: 'Dedicată tratamentelor personalizate și comunicării clare cu pacienții în fiecare etapă a planului de tratament.',
      en: 'Dedicated to personalized care and transparent communication at every step of the patient treatment journey.',
      fr: 'Dédiée aux soins personnalisés et à une communication claire à chaque étape du parcours de soins.',
    },
  },
  {
    name: 'Dr. Mariana Smădu',
    role: {
      ro: 'Medic Primar Ortodont • Competențe Radiologie-Diagnostic (2014 — de confirmat)',
      en: 'Senior Orthodontist • Diagnostic Radiology (2014 archive — TBC)',
      fr: 'Orthodontiste Senior • Radiologie Diagnostique (archive 2014 — à confirmer)',
    },
    languages: 'RO (de confirmat)',
    bio: {
      ro: 'Profil preluat din arhiva clinicii pentru confirmare și actualizare în Etapa I.',
      en: 'Profile carried over from legacy clinic archive pending 2026 roster confirmation.',
      fr: 'Profil repris de l’archive historique de la clinique, en attente de confirmation 2026.',
    },
  },
]

export const DEMO_TARIFFS: Record<
  Locale,
  { id: string; category: string; name: string; priceRon: number; priceEur: number }[]
> = {
  ro: [
    { id: 'consult', category: 'Diagnostic', name: 'Consultație stomatologică & plan tratament', priceRon: 200, priceEur: 40 },
    { id: 'scaling', category: 'Profilaxie', name: 'Detartraj ultrasunete + periaj profesional', priceRon: 350, priceEur: 70 },
    { id: 'filling', category: 'Odontoterapie', name: 'Obturație fizionomică compozit', priceRon: 400, priceEur: 80 },
    { id: 'endo', category: 'Endodonție', name: 'Tratament endodontic dinte pluriradicular', priceRon: 950, priceEur: 190 },
    { id: 'veneer', category: 'Estetică', name: 'Fațetă ceramică E-max (per dinte)', priceRon: 2200, priceEur: 440 },
    { id: 'crown', category: 'Protetică', name: 'Coroană ceramică pe zirconiu', priceRon: 1900, priceEur: 380 },
    { id: 'implant', category: 'Implantologie', name: 'Implant dentar (etapa chirurgicală)', priceRon: 3500, priceEur: 700 },
    { id: 'whitening', category: 'Estetică', name: 'Albire dentară profesională în cabinet', priceRon: 1400, priceEur: 280 },
  ],
  en: [
    { id: 'consult', category: 'Diagnostics', name: 'Comprehensive dental exam & treatment plan', priceRon: 200, priceEur: 40 },
    { id: 'scaling', category: 'Prevention', name: 'Ultrasonic scaling & professional polishing', priceRon: 350, priceEur: 70 },
    { id: 'filling', category: 'Restorative', name: 'Aesthetic composite filling', priceRon: 400, priceEur: 80 },
    { id: 'endo', category: 'Endodontics', name: 'Multi-rooted root canal therapy', priceRon: 950, priceEur: 190 },
    { id: 'veneer', category: 'Aesthetics', name: 'E-max porcelain veneer (per tooth)', priceRon: 2200, priceEur: 440 },
    { id: 'crown', category: 'Prosthetics', name: 'Zirconia ceramic crown', priceRon: 1900, priceEur: 380 },
    { id: 'implant', category: 'Implantology', name: 'Dental implant (surgical phase)', priceRon: 3500, priceEur: 700 },
    { id: 'whitening', category: 'Aesthetics', name: 'In-office professional teeth whitening', priceRon: 1400, priceEur: 280 },
  ],
  fr: [
    { id: 'consult', category: 'Diagnostic', name: 'Bilan dentaire complet & plan de traitement', priceRon: 200, priceEur: 40 },
    { id: 'scaling', category: 'Prophylaxie', name: 'Détartrage ultrasonique & polissage', priceRon: 350, priceEur: 70 },
    { id: 'filling', category: 'Soins conservateurs', name: 'Restauration esthétique en composite', priceRon: 400, priceEur: 80 },
    { id: 'endo', category: 'Endodontie', name: 'Traitement endodontique pluriradiculaire', priceRon: 950, priceEur: 190 },
    { id: 'veneer', category: 'Esthétique', name: 'Facette céramique E-max (par dent)', priceRon: 2200, priceEur: 440 },
    { id: 'crown', category: 'Prothèse', name: 'Couronne céramo-zircone', priceRon: 1900, priceEur: 380 },
    { id: 'implant', category: 'Implantologie', name: 'Implant dentaire (phase chirurgicale)', priceRon: 3500, priceEur: 700 },
    { id: 'whitening', category: 'Esthétique', name: 'Éclaircissement dentaire au fauteuil', priceRon: 1400, priceEur: 280 },
  ],
}

export const DEMO_TESTIMONIALS = [
  {
    author: 'Robert Koets — Olanda',
    quote:
      'All that I can say about this Clinic is to congratulate them on blending Touring with Dentistry. The quick response convinced me to proceed into this two-way win trip.',
  },
  {
    author: 'Dan Pastia — România',
    quote:
      'Am întâlnit la Clinica Opran un important accent pus pe aspectul oricărui tip de lucrare și aceeași preocupare pentru deplina informare asupra procedurilor implicate.',
  },
]

export const PROJECT_EU_DATA = {
  title: 'Modernizare tehnologică Clinica Stomatologică Opran',
  beneficiary: 'CLINICA STOMATOLOGICA OPRAN S.R.L.',
  mysmis: 'MySMIS 339392',
  program: 'Programul Regional București-Ilfov 2021–2027 (Prioritatea 1, Obiectiv specific RSO1.3, Acțiunea 1.8, apel PR BI P1/1.8/1/2024)',
  location: 'Municipiul București, Sector 1, Str. Știrbei Vodă nr. 94, et. 1, ap. 2',
  period: '01.10.2026 – 30.09.2027 (Contract de finanțare semnat la 07.10.2026)',
  totalValue: '1.433.499,77 lei',
  eligibleValue: '1.424.811,72 lei',
  euContribution: '455.935,06 lei – valoarea eligibilă nerambursabilă din partea Uniunii Europene (Fondul European de Dezvoltare Regională)',
  nationalContribution: '683.902,59 lei – valoarea eligibilă nerambursabilă din bugetul de stat',
  ownContribution: '284.974,07 lei – contribuția proprie a Beneficiarului la cheltuielile eligibile; 8.688,05 lei – cheltuieli neeligibile suportate de Beneficiar',
  generalObjective:
    'Creșterea competitivității și sustenabilității CLINICA STOMATOLOGICĂ OPRAN S.R.L. prin modernizarea infrastructurii medicale, achiziția de echipamente de ultimă generație, adoptarea unor soluții sustenabile și eficiente energetic și dezvoltarea vizibilității clinicii pe piețele internaționale.',
  specificObjectives: [
    'Modernizarea și extinderea capacității tehnologice prin achiziția de echipamente stomatologice de ultimă generație;',
    'Tranziția către un model de funcționare mai sustenabil și eficient energetic, cu consum redus de resurse;',
    'Internaționalizarea clinicii prin certificarea sistemului de management al calității ISO 9001, dezvoltarea prezenței digitale și promovarea pe piețele externe.',
  ],
  expectedResults:
    'Achiziția și integrarea în activitatea clinicii a 26 de echipamente și dotări stomatologice moderne, grupate în 25 de poziții de investiție (două unituri dentare, autoclav, compresor, fiziodispenser, aparat de piezochirurgie, sisteme de aspirație, aparat de imagistică intraorală cu senzori, două scanere intraorale, echipamente pentru endodonție, cameră intraorală cu monitor, sistem de obturare gutapercă, microscop, micromotor, baie cu ultrasunete, lupe, lămpi de fotopolimerizare, laser dentar și sistem de iluminat LED).',
  pressReleaseUrl:
    'https://comunicate-proiecte.ro/comunicate-presa/clinica-stomatologica-opran-srl-release-339392',
}
