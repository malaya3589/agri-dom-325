
import { useState } from 'react';
import { FileText } from 'lucide-react';
import { StandardizedSectionTemplate } from './common/StandardizedSectionTemplate';
import { LegalTextsTabs } from './LegalTextsTabs';
import { LegalTextFormEnhanced } from './LegalTextFormEnhanced';
import { useModals } from './modals/ModalManager';

interface LegalTextsSectionsProps {
  section: string;
  language: string;
}

export function LegalTextsSections({ section, language }: LegalTextsSectionsProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [ocrExtractedText, setOcrExtractedText] = useState<string>('');
  const { openModal } = useModals();

  const handleAddLegalText = () => {
    setShowAddForm(true);
  };

  const handleOCRTextExtracted = (text: string) => {
    console.log('Texte OCR reçu dans LegalTextsSections:', text);
    setOcrExtractedText(text);
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  const handleLegalTextSubmitted = (data: any) => {
    setShowAddForm(false);
    openModal('notification', {
      type: 'success',
      title: 'Texte juridique ajouté',
      message: 'Le texte juridique a été ajouté avec succès.'
    });
  };

  const getSectionTitle = () => {
    const titles = {
      fr: {
        'legal-catalog': 'Catalogue des Textes Juridiques',
        'legal-enrichment': 'Alimentation de la Banque de Données',
        'legal-search': 'Recherche de Textes Juridiques'
      },
      ar: {
        'legal-catalog': 'كتالوج النصوص القانونية',
        'legal-enrichment': 'إثراء قاعدة البيانات',
        'legal-search': 'البحث في النصوص القانونية'
      },
      en: {
        'legal-catalog': 'Legal Texts Catalog',
        'legal-enrichment': 'Database Enrichment',
        'legal-search': 'Legal Texts Search'
      }
    };
    return titles[language as keyof typeof titles]?.[section as keyof typeof titles['fr']] || 'Textes Juridiques';
  };

  const getSectionDescription = () => {
    const descriptions = {
      fr: {
        'legal-catalog': 'Consultez et gérez l\'ensemble des textes juridiques algériens disponibles dans la plateforme.',
        'legal-enrichment': 'Ajoutez et enrichissez la base de données avec de nouveaux textes juridiques.',
        'legal-search': 'Recherchez efficacement dans la collection complète de textes juridiques.'
      },
      ar: {
        'legal-catalog': 'استعرض وأدر جميع النصوص القانونية الجزائرية المتاحة في المنصة.',
        'legal-enrichment': 'أضف وأثر قاعدة البيانات بنصوص قانونية جديدة.',
        'legal-search': 'ابحث بكفاءة في المجموعة الكاملة من النصوص القانونية.'
      },
      en: {
        'legal-catalog': 'Browse and manage all Algerian legal texts available on the platform.',
        'legal-enrichment': 'Add and enrich the database with new legal texts.',
        'legal-search': 'Search efficiently through the complete collection of legal texts.'
      }
    };
    return descriptions[language as keyof typeof descriptions]?.[section as keyof typeof descriptions['fr']];
  };

  if (showAddForm) {
    return (
      <LegalTextFormEnhanced 
        onClose={handleCloseForm} 
        onSubmit={handleLegalTextSubmitted}
        initialOCRText={ocrExtractedText}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FileText className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">{getSectionTitle()}</h1>
        </div>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
          {getSectionDescription()}
        </p>
      </div>

      <LegalTextsTabs 
        section={section} 
        onAddLegalText={handleAddLegalText}
        onOCRTextExtracted={handleOCRTextExtracted}
      />
    </div>
  );
}
