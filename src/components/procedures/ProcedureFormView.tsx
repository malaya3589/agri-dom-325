
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Save, ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Step1BasicInfo } from '../procedure-form/Step1BasicInfo';
import { Step2StepsConditions } from '../procedure-form/Step2StepsConditions';
import { Step3DocumentsRequired } from '../procedure-form/Step3DocumentsRequired';
import { Step4Modalities } from '../procedure-form/Step4Modalities';
import { Step5LegalBasisFiles } from '../procedure-form/Step5LegalBasisFiles';
import { Step6AdditionalInfo } from '../procedure-form/Step6AdditionalInfo';
import { ProcedureFormData } from '../procedure-form/types';

interface ProcedureFormViewProps {
  onBack: () => void;
  onSubmit: (data: any) => void;
}

const steps = [
  { id: 1, title: "Informations générales", component: Step1BasicInfo },
  { id: 2, title: "Étapes et conditions", component: Step2StepsConditions },
  { id: 3, title: "Documents requis", component: Step3DocumentsRequired },
  { id: 4, title: "Modalités", component: Step4Modalities },
  { id: 5, title: "Ancrage juridique", component: Step5LegalBasisFiles },
  { id: 6, title: "Informations complémentaires", component: Step6AdditionalInfo }
];

export function ProcedureFormView({ onBack, onSubmit }: ProcedureFormViewProps) {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [stepStates, setStepStates] = useState({
    steps: [] as string[],
    conditions: [] as string[],
    requiredDocs: [] as string[],
    complementaryDocs: [] as string[],
    legalBasis: [] as string[]
  });

  const form = useForm<ProcedureFormData>({
    defaultValues: {
      name: '',
      description: '',
      procedureCategory: '',
      sectorAdministration: '',
      targetCategory: '',
      submissionLocation: '',
      validityType: 'periodic',
      validityStartDate: '',
      validityEndDate: '',
      processingDuration: '',
      feeType: 'gratuit',
      feeAmount: '',
      digitization: false,
      digitizationDate: '',
      electronicPortalLink: '',
      mobileAppLink: '',
      thirdPartySubmission: false,
      withdrawalTime: '',
      withdrawalMethod: '',
      documentValidity: '',
      hasAppeal: false,
      appealLocation: '',
      appealDeadline: '',
      appealFees: '',
      frequentQuestions: '',
      contactAddress: '',
      phoneNumber: '',
      greenNumber: '',
      email: '',
      requiredDocumentsType: 'text',
      complementaryDocumentsType: 'text',
      userGuide: null,
      downloadableForm: null,
      steps: [],
      conditions: [],
      requiredDocuments: [],
      complementaryDocuments: [],
      legalBasis: []
    }
  });

  const progress = (currentStep / steps.length) * 100;
  const CurrentStepComponent = steps[currentStep - 1].component;

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = form.handleSubmit((data) => {
    const finalData = {
      ...data,
      ...stepStates
    };
    console.log('Données de la procédure:', finalData);
    onSubmit(finalData);
    toast({
      title: "Procédure ajoutée",
      description: `La procédure "${finalData.name}" a été ajoutée avec succès.`,
    });
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={onBack} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Ajouter une nouvelle procédure administrative
              </h1>
              <p className="text-gray-600 mt-1">Étape {currentStep} sur {steps.length}: {steps[currentStep - 1].title}</p>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progression</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Steps Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep === step.id
                      ? 'bg-blue-600 text-white'
                      : currentStep > step.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-1 mx-2 ${
                    currentStep > step.id ? 'bg-green-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-blue-50 to-emerald-50">
            <CardTitle className="text-xl text-gray-900">
              {steps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit}>
              <CurrentStepComponent
                form={form}
                steps={stepStates.steps}
                setSteps={(steps) => setStepStates(prev => ({ ...prev, steps }))}
                conditions={stepStates.conditions}
                setConditions={(conditions) => setStepStates(prev => ({ ...prev, conditions }))}
                requiredDocs={stepStates.requiredDocs}
                setRequiredDocs={(requiredDocs) => setStepStates(prev => ({ ...prev, requiredDocs }))}
                complementaryDocs={stepStates.complementaryDocs}
                setComplementaryDocs={(complementaryDocs) => setStepStates(prev => ({ ...prev, complementaryDocs }))}
                legalBasis={stepStates.legalBasis}
                setLegalBasis={(legalBasis) => setStepStates(prev => ({ ...prev, legalBasis }))}
              />
            </form>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Précédent
          </Button>

          <div className="flex gap-2">
            {currentStep === steps.length ? (
              <Button type="submit" onClick={handleSubmit} className="gap-2 bg-green-600 hover:bg-green-700">
                <Save className="w-4 h-4" />
                Enregistrer la procédure
              </Button>
            ) : (
              <Button type="button" onClick={nextStep} className="gap-2">
                Suivant
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
