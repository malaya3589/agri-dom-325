
import { UseFormReturn } from 'react-hook-form';

export interface ProcedureStep {
  id: string;
  title: string;
  description: string;
}

export interface ProcedureFormData {
  name: string;
  description: string;
  type: string;
  procedureCategory: string;
  sector: string;
  sectorAdministration: string;
  steps: string[];
  conditions: string[];
  requiredDocuments: string[];
  requiredDocumentsType: 'existing' | 'text';
  complementaryDocuments: string[];
  complementaryDocumentsType: 'existing' | 'text';
  targetCategory: string;
  submissionLocation: string;
  responsibleAdmin: string;
  validityType: 'periodic' | 'open';
  validityStart: string;
  validityEnd: string;
  validityStartDate: string;
  validityEndDate: string;
  processingDuration: string;
  cost: string;
  feeType: 'gratuit' | 'payant';
  feeAmount: string;
  digitization: boolean;
  digitalProcedure: boolean;
  digitizationDate: string;
  electronicPortalLink: string;
  mobileAppLink: string;
  thirdPartySubmission: boolean;
  withdrawalTime: string;
  withdrawalMethod: string;
  withdrawalConditions: string;
  withdrawalMethods: string;
  documentValidity: string;
  validityDuration: string;
  hasAppeal: boolean;
  appealPossible: boolean;
  appealLocation: string;
  appealDeadline: string;
  appealFees: string;
  legalBasis: string[];
  userGuide: File | null;
  downloadableForm: File | null;
  frequentQuestions: string;
  contactAddress: string;
  phoneNumber: string;
  greenNumber: string;
  email: string;
}

export interface FormStepProps {
  form: UseFormReturn<ProcedureFormData>;
  procedureSteps?: ProcedureStep[];
  setProcedureSteps?: (steps: ProcedureStep[]) => void;
  requiredDocs?: string[];
  setRequiredDocs?: (docs: string[]) => void;
  complementaryDocs?: string[];
  setComplementaryDocs?: (docs: string[]) => void;
  steps?: string[];
  setSteps?: (steps: string[]) => void;
  conditions?: string[];
  setConditions?: (conditions: string[]) => void;
  legalBasis?: string[];
  setLegalBasis?: (basis: string[]) => void;
}

export const targetCategories = [
  "Citoyen",
  "Administration",
  "Entreprises",
  "Investisseur",
  "Associations"
];

export const procedureTypes = [
  "Autorisation",
  "Certificat",
  "Licence",
  "Permis",
  "Déclaration",
  "Enregistrement"
];
