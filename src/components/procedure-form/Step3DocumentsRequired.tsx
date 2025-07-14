
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DynamicFieldList } from './DynamicFieldList';
import { FormStepProps } from './types';

export function Step3DocumentsRequired({ 
  form,
  requiredDocs = [], 
  setRequiredDocs,
  complementaryDocs = [],
  setComplementaryDocs
}: FormStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Documents requis</h3>
        <p className="text-gray-600">Définissez les documents nécessaires</p>
      </div>

      {/* Documents demandés */}
      <div className="space-y-4">
        <h4 className="font-medium">+ Documents demandés</h4>
        <RadioGroup
          value={form.watch('requiredDocumentsType') || 'text'}
          onValueChange={(value: 'existing' | 'text') => form.setValue('requiredDocumentsType', value)}
          className="mb-3"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="existing" id="existing-docs" />
            <Label htmlFor="existing-docs">Sélection de la liste des procédures existantes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="text" id="new-docs" />
            <Label htmlFor="new-docs">Texte pour les nouveaux (s'il n'existe pas)</Label>
          </div>
        </RadioGroup>

        <DynamicFieldList
          title="Documents requis"
          items={requiredDocs}
          setItems={setRequiredDocs || (() => {})}
          placeholder="Nom du document requis"
        />
      </div>

      {/* Documents complémentaires */}
      <div className="space-y-4">
        <h4 className="font-medium">+ Documents Complémentaires</h4>
        <RadioGroup
          value={form.watch('complementaryDocumentsType') || 'text'}
          onValueChange={(value: 'existing' | 'text') => form.setValue('complementaryDocumentsType', value)}
          className="mb-3"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="existing" id="existing-complementary" />
            <Label htmlFor="existing-complementary">Sélection pour les procédures existantes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="text" id="new-complementary" />
            <Label htmlFor="new-complementary">Texte pour les nouveaux</Label>
          </div>
        </RadioGroup>

        <DynamicFieldList
          title="Documents complémentaires"
          items={complementaryDocs}
          setItems={setComplementaryDocs || (() => {})}
          placeholder="Nom du document complémentaire"
        />
      </div>
    </div>
  );
}
