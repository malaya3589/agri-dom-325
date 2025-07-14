
export interface LegalTextTemplate {
  type: string;
  name: string;
  fields: LegalTextField[];
}

export interface LegalTextField {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'date' | 'file' | 'dynamic-list' | 'number';
  required?: boolean;
  options?: string[];
  placeholder?: string;
  conditional?: {
    field: string;
    values: string[];
  };
}

// Nomenclature data
export const SECTORS = [
  'Commerce', 'Civil', 'Procédure Administratif', 'Pénal', 'Social', 'Santé', 
  'Éducation', 'Transport', 'Environnement', 'Agriculture'
];

export const ORGANIZATIONS = [
  'Ministère de l\'Intérieur', 'Ministère des Finances', 'Ministère de la Justice',
  'Ministère de la Santé', 'Ministère de l\'Éducation', 'Ministère du Commerce',
  'Ministère de l\'Agriculture', 'Ministère des Transports', 'Wilaya', 'Commune',
  'Direction des Impôts', 'Tribunal', 'Office National des Statistiques'
];

export const COUNTRIES = [
  'Algérie', 'France', 'Allemagne', 'Espagne', 'Italie', 'Maroc', 'Tunisie',
  'Égypte', 'États-Unis', 'Canada', 'Royaume-Uni', 'Russie', 'Chine'
];

export const LEGAL_TEXT_TEMPLATES: LegalTextTemplate[] = [
  {
    type: 'constitution',
    name: 'Constitution',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'header', label: 'En-tête', type: 'textarea', required: true },
      { name: 'preambles', label: 'Préambule (plusieurs paragraphe)', type: 'dynamic-list', required: true },
      { name: 'title', label: 'Titre', type: 'text', required: true },
      { name: 'chapters', label: 'Chapitre', type: 'dynamic-list', required: true },
      { name: 'articleNumber', label: 'N° Article', type: 'text', required: true },
      { name: 'oaths', label: 'Serments', type: 'textarea', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'accord-international',
    name: 'Accord International',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'creationDate', label: 'Date de création (d\'entrée en vigueur)', type: 'date', required: true },
      { name: 'title', label: 'Titre', type: 'text', required: true },
      { name: 'agreementType', label: 'Type de l\'accord', type: 'select', options: ['Accord International', 'Convention Internationale'], required: true },
      { name: 'agreementNature', label: 'Types l\'accord', type: 'select', options: ['Bilatérale', 'Multilatérale'], required: true },
      { name: 'signatureDate', label: 'Date de signature', type: 'date', required: true },
      { name: 'parties', label: 'Parties', type: 'dynamic-list', required: true },
      { name: 'treatyReferences', label: 'Réf Recueil de traité', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'convention-internationale',
    name: 'Convention Internationale',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'creationDate', label: 'Date de création (d\'entrée en vigueur)', type: 'date', required: true },
      { name: 'title', label: 'Titre', type: 'text', required: true },
      { name: 'agreementType', label: 'Type de l\'accord', type: 'select', options: ['Accord International', 'Convention Internationale'], required: true },
      { name: 'agreementNature', label: 'Types l\'accord', type: 'select', options: ['Bilatérale', 'Multilatérale'], required: true },
      { name: 'signatureDate', label: 'Date de signature', type: 'date', required: true },
      { name: 'parties', label: 'Parties', type: 'dynamic-list', required: true },
      { name: 'treatyReferences', label: 'Réf Recueil de traité', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'code',
    name: 'Code',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'textType', label: 'Type de Texte', type: 'select', options: SECTORS, required: true },
      { name: 'lawType', label: 'Type de Loi', type: 'select', options: ['Constitutionnelle', 'Organique', 'Loi'], required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'date', label: 'Date', type: 'date', required: true },
      { name: 'title', label: 'Titre', type: 'text', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'reason', label: 'Motif', type: 'select', options: ['Nouveau', 'Modifier', 'Compléter', 'Abroger', 'Rectifier'], required: true },
      { name: 'oldDecreeRef', label: 'Référence de l\'ancien décret', type: 'text', conditional: { field: 'reason', values: ['Modifier', 'Compléter', 'Abroger', 'Rectifier'] } },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'chapters', label: 'Chapitre', type: 'dynamic-list', required: true },
      { name: 'sections', label: 'Section', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'loi-organique',
    name: 'Loi Organique',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'textType', label: 'Type de Texte', type: 'select', options: SECTORS, required: true },
      { name: 'lawType', label: 'Type de Loi', type: 'select', options: ['Constitutionnelle', 'Organique', 'Loi'], required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'date', label: 'Date', type: 'date', required: true },
      { name: 'title', label: 'Titre', type: 'text', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'reason', label: 'Motif', type: 'select', options: ['Nouveau', 'Modifier', 'Compléter', 'Abroger', 'Rectifier'], required: true },
      { name: 'oldDecreeRef', label: 'Référence de l\'ancien décret', type: 'text', conditional: { field: 'reason', values: ['Modifier', 'Compléter', 'Abroger', 'Rectifier'] } },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'chapters', label: 'Chapitre', type: 'dynamic-list', required: true },
      { name: 'sections', label: 'Section', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'loi',
    name: 'Loi',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'textType', label: 'Type de Texte', type: 'select', options: SECTORS, required: true },
      { name: 'lawType', label: 'Type de Loi', type: 'select', options: ['Constitutionnelle', 'Organique', 'Loi'], required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'date', label: 'Date', type: 'date', required: true },
      { name: 'title', label: 'Titre', type: 'text', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'reason', label: 'Motif', type: 'select', options: ['Nouveau', 'Modifier', 'Compléter', 'Abroger', 'Rectifier'], required: true },
      { name: 'oldDecreeRef', label: 'Référence de l\'ancien décret', type: 'text', conditional: { field: 'reason', values: ['Modifier', 'Compléter', 'Abroger', 'Rectifier'] } },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'chapters', label: 'Chapitre', type: 'dynamic-list', required: true },
      { name: 'sections', label: 'Section', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'ordonnance',
    name: 'Ordonnance',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'ordinanceDate', label: 'Date de l\'Ordonnance', type: 'date', required: true },
      { name: 'subject', label: 'Sujet', type: 'textarea', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'reason', label: 'Motif', type: 'select', options: ['Nouveau', 'Modifier', 'Compléter', 'Abroger', 'Rectifier'], required: true },
      { name: 'oldOrdinanceRef', label: 'Référence de l\'ancienne ordonnance', type: 'text', conditional: { field: 'reason', values: ['Modifier', 'Compléter', 'Abroger', 'Rectifier'] } },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'articles', label: 'Articles', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'decret-legislatif',
    name: 'Décret Législatif',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'decreeType', label: 'Type de Décret', type: 'select', options: ['Législatif', 'Présidentiel', 'Exécutif'], required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'decreeDate', label: 'Date de Décret', type: 'date', required: true },
      { name: 'subject', label: 'Sujet', type: 'textarea', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'reason', label: 'Motif', type: 'select', options: ['Nouveau', 'Modifier', 'Compléter', 'Abroger', 'Rectifier'], required: true },
      { name: 'oldDecreeRef', label: 'Référence de l\'ancien décret', type: 'text', conditional: { field: 'reason', values: ['Modifier', 'Compléter', 'Abroger', 'Rectifier'] } },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'articles', label: 'Articles', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'decret-presidentiel',
    name: 'Décret Présidentiel',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'decreeType', label: 'Type de Décret', type: 'select', options: ['Législatif', 'Présidentiel', 'Exécutif'], required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'decreeDate', label: 'Date de Décret', type: 'date', required: true },
      { name: 'subject', label: 'Sujet', type: 'textarea', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'reason', label: 'Motif', type: 'select', options: ['Nouveau', 'Modifier', 'Compléter', 'Abroger', 'Rectifier'], required: true },
      { name: 'oldDecreeRef', label: 'Référence de l\'ancien décret', type: 'text', conditional: { field: 'reason', values: ['Modifier', 'Compléter', 'Abroger', 'Rectifier'] } },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'articles', label: 'Articles', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'decret-executif',
    name: 'Décret Exécutif',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'decreeType', label: 'Type de Décret', type: 'select', options: ['Législatif', 'Présidentiel', 'Exécutif'], required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'decreeDate', label: 'Date de Décret', type: 'date', required: true },
      { name: 'subject', label: 'Sujet', type: 'textarea', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'reason', label: 'Motif', type: 'select', options: ['Nouveau', 'Modifier', 'Compléter', 'Abroger', 'Rectifier'], required: true },
      { name: 'oldDecreeRef', label: 'Référence de l\'ancien décret', type: 'text', conditional: { field: 'reason', values: ['Modifier', 'Compléter', 'Abroger', 'Rectifier'] } },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'articles', label: 'Articles', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'arrete',
    name: 'Arrêté',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'decreeType', label: 'Type de Décret', type: 'select', options: ['Arrêté', 'Arrêté interministérielle', 'Décision'], required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'creationDate', label: 'Date de création (d\'entrée en vigueur)', type: 'date', required: true },
      { name: 'subject', label: 'Sujet', type: 'textarea', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'chapters', label: 'Chapitre', type: 'dynamic-list', required: true },
      { name: 'sections', label: 'Section', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'arrete-interministerielle',
    name: 'Arrêté interministérielle',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'decreeType', label: 'Type de Décret', type: 'select', options: ['Arrêté', 'Arrêté interministérielle', 'Décision'], required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'creationDate', label: 'Date de création (d\'entrée en vigueur)', type: 'date', required: true },
      { name: 'subject', label: 'Sujet', type: 'textarea', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'chapters', label: 'Chapitre', type: 'dynamic-list', required: true },
      { name: 'sections', label: 'Section', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'arrete-ministerielle',
    name: 'Arrêté ministérielle',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'decreeType', label: 'Type de Décret', type: 'select', options: ['Arrêté', 'Arrêté interministérielle', 'Décision'], required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'creationDate', label: 'Date de création (d\'entrée en vigueur)', type: 'date', required: true },
      { name: 'subject', label: 'Sujet', type: 'textarea', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'chapters', label: 'Chapitre', type: 'dynamic-list', required: true },
      { name: 'sections', label: 'Section', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'decision',
    name: 'Décision',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'decreeType', label: 'Type de Décret', type: 'select', options: ['Arrêté', 'Arrêté interministérielle', 'Décision'], required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'creationDate', label: 'Date de création (d\'entrée en vigueur)', type: 'date', required: true },
      { name: 'subject', label: 'Sujet', type: 'textarea', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'chapters', label: 'Chapitre', type: 'dynamic-list', required: true },
      { name: 'sections', label: 'Section', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'circulaire',
    name: 'Circulaire',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'decreeType', label: 'Type de Décret', type: 'select', options: ['Circulaire', 'circulaire interministérielle'], required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'circularDate', label: 'Date de Circulaire', type: 'date', required: true },
      { name: 'subject', label: 'Sujet', type: 'textarea', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'relativeReference', label: 'Référence relative', type: 'text' },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'articles', label: 'Articles', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'reglement',
    name: 'Règlements',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'decreeType', label: 'Type de Décret', type: 'select', options: ['Arrêté', 'Arrêté interministérielle', 'Décision'], required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'creationDate', label: 'Date de création (d\'entrée en vigueur)', type: 'date', required: true },
      { name: 'subject', label: 'Sujet', type: 'textarea', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'chapters', label: 'Chapitre', type: 'dynamic-list', required: true },
      { name: 'sections', label: 'Section', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  },
  {
    type: 'instruction',
    name: 'Instruction',
    fields: [
      { name: 'journalNumber', label: 'Journal N°', type: 'text', required: true },
      { name: 'journalDate', label: 'Date du Journal', type: 'date', required: true },
      { name: 'pageNumber', label: 'N° de Page', type: 'number', required: true },
      { name: 'decreeType', label: 'Type de Décret', type: 'select', options: ['Arrêté', 'Arrêté interministérielle', 'Décision'], required: true },
      { name: 'refNumber', label: 'N° Réf', type: 'text', required: true },
      { name: 'creationDate', label: 'Date de création (d\'entrée en vigueur)', type: 'date', required: true },
      { name: 'subject', label: 'Sujet', type: 'textarea', required: true },
      { name: 'sector', label: 'Secteur', type: 'select', options: SECTORS, required: true },
      { name: 'references', label: 'Références', type: 'dynamic-list', required: true },
      { name: 'chapters', label: 'Chapitre', type: 'dynamic-list', required: true },
      { name: 'sections', label: 'Section', type: 'dynamic-list', required: true },
      { name: 'attachments', label: 'Pièce Jointe', type: 'file' }
    ]
  }
];

export function getLegalTextTemplate(type: string): LegalTextTemplate | undefined {
  return LEGAL_TEXT_TEMPLATES.find(template => template.type === type);
}

export function getAllLegalTextTypes(): string[] {
  return LEGAL_TEXT_TEMPLATES.map(template => template.type);
}
