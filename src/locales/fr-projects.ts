/** French copy for portfolio projects (URLs & assets stay in projects.js) */
export const frProjectCopy: Record<
  string,
  {
    subtitle: string
    description: string
    whatIBuilt: string
    tags: string[]
    technologies: { name: string; note: string }[]
  }
> = {
  'taxigo-paris': {
    subtitle: 'Développement web WordPress',
    description:
      'Site WordPress marketing et réservation pour un service taxi et van à Paris—transferts aéroports (CDG, Orly, Beauvais), longues distances et mise à disposition—avec pages services claires, formulaires de contact et réservation, et une présentation rassurante pour voyageurs et locaux.',
    whatIBuilt:
      'Structure éditoriale et hiérarchie de contenu pour les offres clés (aéroports, chauffeur à disposition, longue distance, transport d’animaux en cage), appels à l’action vers réservation ou appel, navigation multilingue et intégration de formulaires WordPress pour demandes sans friction. Mise en avant de la fiabilité, du confort et de la flotte Mercedes alignée sur la marque.',
    tags: [
      'Pages services & landing',
      'Réservation & contact',
      'Multilingue (FR / EN / ES)',
      'Mise en page mobile-first',
    ],
    technologies: [
      { name: 'WordPress', note: 'Thème, pages et contenu gérés par le client.' },
      { name: 'Formulaires & réservations', note: 'Parcours de réservation et demandes intégrés aux pages clés.' },
      { name: 'UI responsive', note: 'Typographie, sections et visuels lisibles sur tous les écrans.' },
      { name: 'Structure SEO', note: 'Titres et textes orientés recherche locale.' },
    ],
  },
  'br-auto-langogne': {
    subtitle: 'Développement web WordPress',
    description:
      'Site WordPress pour un concessionnaire Renault & Dacia agréé et garage multimarque à Langogne—stock d’occasion filtrable (marque, modèle, année), pages services (vente, mécanique, carrosserie, garanties, pare-brise, camping-cars) et message de confiance local pour acheteurs et clients.',
    whatIBuilt:
      'Parcours axé sur le catalogue et la crédibilité du garage : navigation à facettes pour les véhicules, blocs expertise et transparence, pages atelier, contact et localisation, partenaires—pour passer rapidement de la recherche à l’appel ou la visite. Mise à jour du stock côté client dans WordPress.',
    tags: [
      'Catalogue & filtres véhicules',
      'Services garage & concession',
      'Confiance locale & CTA',
      'Mobile-first',
    ],
    technologies: [
      { name: 'WordPress', note: 'Pages et contenu éditables en interne.' },
      { name: 'UX inventaire', note: 'Listings et filtres pour le parc occasion.' },
      { name: 'Pages services', note: 'Offres réparation, garanties, après-vente structurées.' },
      { name: 'Structure SEO', note: 'Textes et titres orientés Langogne et Renault/Dacia.' },
    ],
  },
  'la-menagere-paris': {
    subtitle: 'Développement web WordPress',
    description:
      'Vitrine WordPress « grossiste » couvrant agroalimentaire, ameublement, déco, électroménager, bâtiment et quincaillerie—navigation catégories profonde, blocs par univers, message prix usine, FAQ et contact pour pros et particuliers, sur le modèle d’une marketplace très large.',
    whatIBuilt:
      'Architecture multi-verticales : menus et pages catégories (alimentaire, mobilier, déco, gros électroménager, construction, quincaillerie), mises en avant maisons conteneur et lessives bio. Sections confiance (prix usine, livraison, satisfaction), FAQ, à propos, avis, newsletter—tenu par le client dans WordPress.',
    tags: [
      'Navigation & mega-menu',
      'Positionnement grossiste multi-secteurs',
      'FAQ, avis & confiance',
      'Newsletter & contact',
    ],
    technologies: [
      { name: 'WordPress', note: 'Thème, menus et pages évolutifs.' },
      { name: 'UX catalogue', note: 'Parcours découverte type « tout sous un toit ».' },
      { name: 'Capture de leads', note: 'Newsletter et contact B2B / grand public.' },
      { name: 'Structure SEO', note: 'Titres et sections alignés sur l’intention grossiste.' },
    ],
  },
  'europex-carte-grise': {
    subtitle: 'Développement web WordPress',
    description:
      'Site WordPress pour EUROPEX, partenaire agréé par le ministère de l’Intérieur pour la carte grise / immatriculation autour de Poitiers. Parcours pour de nombreux cas (changement de titulaire, adresse, duplicata, import, leasing, etc.), simulateur de tarif (département, véhicule, CO₂, CV) et parcours confiance et contact.',
    whatIBuilt:
      'UX et contenus autour de démarches sensibles : sélecteur de démarches aligné sur les cas réels, simulateur de frais (taxes régionales, redevances, options), grilles de services (immatriculation, adresse, titulaire, duplicata, cas particuliers), blocs réassurance (agrément, sécurité, RGPD, suivi). Ancrage local Poitiers et alentours pour SEO et conversion appel / mail / WhatsApp.',
    tags: [
      'Matrice de démarches',
      'Simulateur & transparence tarifaire',
      'Message prestataire agréé',
      'SEO local (Poitiers / Vienne)',
    ],
    technologies: [
      { name: 'WordPress', note: 'Pages et mises à jour par l’équipe.' },
      { name: 'Tarification interactive', note: 'Saisies utilisateur → estimation détaillée avant dossier.' },
      { name: 'Parcours formulaires', note: 'Département, catégorie véhicule et champs techniques.' },
      { name: 'Contenu conformité', note: 'Cadre clair pour un service agréé et les données.' },
    ],
  },
  'salome-levy-photography': {
    subtitle: 'Développement web WordPress',
    description:
      'Portfolio WordPress pour une photographe pro à Saint-Étienne—mariage, famille & maternité, mode et portraits créatifs, ainsi que corporate et événements. Mise en avant émotionnelle et authentique, typo forte, grands visuels, parcours particuliers / pros et accès client + contact clairs.',
    whatIBuilt:
      'Structure marketing autour du portfolio : hero rotatif, récits dédiés particuliers vs professionnels (mariage, famille, mode, corporate, événements, pub), à propos affirmant la voix de l’artiste, contact pour prises de rendez-vous locaux. SEO, schema organisation / réseaux, et avis tiers pour la preuve sociale à côté des galeries.',
    tags: [
      'Slider hero & visuel',
      'Double audience : perso & pro',
      'Typo & ambiance de marque',
      'Ancrage local (Saint-Étienne)',
    ],
    technologies: [
      { name: 'WordPress', note: 'Pages, galeries et contenu gérés par la cliente.' },
      { name: 'Portfolio & lightbox', note: 'Grand format et parcours découverte.' },
      { name: 'Données structurées', note: 'Balisage Organization / WebSite pour le référencement.' },
      { name: 'Confiance & conversion', note: 'Avis et CTA vers contact / espace client.' },
    ],
  },
}
