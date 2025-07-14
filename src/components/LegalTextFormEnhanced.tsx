
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { LegalTextFormHeader } from './legal/LegalTextFormHeader';
import { LegalTextFormInputMethodSelector } from './legal/LegalTextFormInputMethodSelector';
import { LegalTextFormOCRSection } from './legal/LegalTextFormOCRSection';
import { LegalTextFormContainer } from './legal/LegalTextFormContainer';
import { LegalTextFormProvider } from './legal/LegalTextFormProvider';
import { DynamicFormRenderer } from './forms/DynamicFormRenderer';
import { useFormLibrary } from '@/hooks/useFormLibrary';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

interface LegalTextFormEnhancedProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialOCRText?: string;
  initialInputMethod?: 'manual' | 'ocr';
}

export function LegalTextFormEnhanced({ 
  onClose, 
  onSubmit, 
  initialOCRText,
  initialInputMethod = 'manual'
}: LegalTextFormEnhancedProps) {
  const { toast } = useToast();
  const { getLegalTextFormForType } = useFormLibrary();
  const [inputMethod, setInputMethod] = useState<'manual' | 'ocr'>(initialInputMethod);
  const [showOCRScanner, setShowOCRScanner] = useState(false);
  const [initialFormData, setInitialFormData] = useState<any>({});
  const [selectedTextType, setSelectedTextType] = useState<string>('');
  const [dynamicFormData, setDynamicFormData] = useState<any>({});

  useEffect(() => {
    if (initialOCRText) {
      import('@/utils/ocrFormFiller').then(({ extractLegalTextData }) => {
        const extractedData = extractLegalTextData(initialOCRText);
        console.log('Pré-remplissage avec OCR:', extractedData);
        setInitialFormData(extractedData);
      }).catch(() => {
        setInitialFormData({ content: initialOCRText });
      });
    }
  }, [initialOCRText]);

  const handleOCRTextExtracted = (extractedText: string) => {
    import('@/utils/ocrFormFiller').then(({ extractLegalTextData }) => {
      const extractedData = extractLegalTextData(extractedText);
      console.log('Données extraites par OCR:', extractedData);
      setInitialFormData(extractedData);
    }).catch(() => {
      setInitialFormData({ content: extractedText });
    });
    setShowOCRScanner(false);
    setInputMethod('manual');
  };

  const handleAutoFill = () => {
    // Ouvrir la modal d'auto-remplissage IA
    const event = new CustomEvent('open-ai-autofill', {
      detail: { context: 'legal-text' }
    });
    window.dispatchEvent(event);
  };

  const handleFormSubmit = (data: any) => {
    // Combiner les données du formulaire dynamique et du formulaire classique
    const finalData = { ...data, ...dynamicFormData, textType: selectedTextType };
    onSubmit(finalData);
    toast({
      title: "Texte juridique ajouté",
      description: `Le texte "${data.title || data.nom || 'document'}" a été ajouté avec succès.`,
    });
  };

  const handleDynamicFieldChange = (fieldName: string, value: any) => {
    setDynamicFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const selectedTemplate = selectedTextType ? getLegalTextFormForType(selectedTextType) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <LegalTextFormHeader onClose={onClose} onAutoFill={handleAutoFill} />
        
        <LegalTextFormInputMethodSelector 
          inputMethod={inputMethod}
          onInputMethodChange={setInputMethod}
        />

        {inputMethod === 'ocr' && (
          <LegalTextFormOCRSection
            showOCRScanner={showOCRScanner}
            onShowOCRScanner={setShowOCRScanner}
            onOCRTextExtracted={handleOCRTextExtracted}
          />
        )}

        {inputMethod === 'manual' && (
          <>
            {/* Sélection du type de texte juridique */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm mb-8">
              <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  Type de Texte Juridique
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <Label htmlFor="text-type" className="text-sm font-medium text-gray-700">
                    Sélectionnez le type de texte juridique *
                  </Label>
                  <Select value={selectedTextType} onValueChange={setSelectedTextType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un type de texte juridique" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="loi">Loi</SelectItem>
                      <SelectItem value="ordonnance">Ordonnance</SelectItem>
                      <SelectItem value="decret">Décret</SelectItem>
                      <SelectItem value="arrete">Arrêté</SelectItem>
                      <SelectItem value="circulaire">Circulaire</SelectItem>
                      <SelectItem value="decision">Décision</SelectItem>
                      <SelectItem value="constitution">Constitution</SelectItem>
                      <SelectItem value="reglement">Règlement</SelectItem>
                      <SelectItem value="instruction">Instruction</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Formulaire dynamique adapté au type */}
            {selectedTemplate && (
              <DynamicFormRenderer
                template={selectedTemplate}
                formData={dynamicFormData}
                onFieldChange={handleDynamicFieldChange}
                className="mb-8"
              />
            )}

            {/* Formulaire classique */}
            <LegalTextFormProvider initialData={initialFormData}>
              <LegalTextFormContainer 
                onClose={onClose}
                onSubmit={handleFormSubmit}
              />
            </LegalTextFormProvider>
          </>
        )}
      </div>
    </div>
  );
}
