
import { UseFormReturn } from 'react-hook-form';

export interface ProcedureStep {
  id: string;
  title: string;
  description: string;
}

export interface ProcedureFormData {
  name: string;
  description: string;
  procedureCategory: string;
  sectorAdministration: string;
  steps: string[];
  conditions: string[];
  requiredDocuments: string[];
  requiredDocumentsType: 'existing' | 'text';
  complementaryDocuments: string[];
  complementaryDocumentsType: 'existing' | 'text';
  targetCategory: string;
  submissionLocation: string;
  validityType: 'periodic' | 'open';
  validityStartDate: string;
  validityEndDate: string;
  processingDuration: string;
  feeType: 'gratuit' | 'payant';
  feeAmount: string;
  digitization: boolean;
  digitizationDate: string;
  electronicPortalLink: string;
  mobileAppLink: string;
  thirdPartySubmission: boolean;
  withdrawalTime: string;
  withdrawalMethod: string;
  documentValidity: string;
  hasAppeal: boolean;
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
