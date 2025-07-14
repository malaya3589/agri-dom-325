
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { DynamicFieldList } from './DynamicFieldList';
import { FormStepProps } from './types';

export function Step5LegalBasisFiles({ 
  legalBasis = [],
  setLegalBasis
}: FormStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Ancrage juridique et fichiers</h3>
        <p className="text-gray-600">Ajoutez les références juridiques et les fichiers</p>
      </div>

      <DynamicFieldList
        title="+ Ancrage juridique"
        items={legalBasis}
        setItems={setLegalBasis || (() => {})}
        placeholder="Référence juridique (loi, décret, arrêté...)"
        multiline={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Label>Guide d'utilisation à télécharger (à uploader)</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
            <p className="text-blue-600 cursor-pointer mb-2">Choisir un fichier</p>
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              id="userGuide"
            />
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => document.getElementById('userGuide')?.click()}
            >
              Sélectionner un fichier
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <Label>Formulaire à télécharger (à uploader)</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
            <p className="text-blue-600 cursor-pointer mb-2">Choisir un fichier</p>
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              id="downloadableForm"
            />
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => document.getElementById('downloadableForm')?.click()}
            >
              Sélectionner un fichier
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
