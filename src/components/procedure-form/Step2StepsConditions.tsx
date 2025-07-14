
import { DynamicFieldList } from './DynamicFieldList';
import { FormStepProps } from './types';

export function Step2StepsConditions({ 
  steps = [], 
  setSteps,
  conditions = [],
  setConditions
}: FormStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Étapes et conditions</h3>
        <p className="text-gray-600">Définissez les étapes de la procédure et les conditions d'utilisation</p>
      </div>

      <DynamicFieldList
        title="+ Étapes (avec démonstration si disponible)"
        items={steps}
        setItems={setSteps || (() => {})}
        placeholder="Décrire une étape de la procédure..."
        multiline={true}
      />

      <DynamicFieldList
        title="+ Conditions d'utilisation du service"
        items={conditions}
        setItems={setConditions || (() => {})}
        placeholder="Condition d'utilisation..."
        multiline={true}
      />
    </div>
  );
}
