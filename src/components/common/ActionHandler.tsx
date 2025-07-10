
import React from 'react';
import { useGlobalActions } from '@/hooks/useGlobalActions';
import { UnifiedModalManager } from '@/components/modals/UnifiedModalManager';

interface ActionHandlerProps {
  children: React.ReactNode;
}

export function ActionHandler({ children }: ActionHandlerProps) {
  const actions = useGlobalActions();

  // Attacher les gestionnaires d'actions globales à window pour un accès facile
  React.useEffect(() => {
    (window as any).actionHandlers = {
      ...actions,
      
      // Actions étendues pour les nouvelles fonctionnalités
      handleAnalysisComparative: (data: any[] = []) => actions.handleAnalysis('comparative', data),
      handleAnalysisPerformance: (data: any[] = []) => actions.handleAnalysis('performance', data),
      handleAnalysisTrends: (data: any[] = []) => actions.handleAnalysis('trends', data),
      
      // Actions de gestion
      handleAddDomain: () => actions.handleManagement('domain'),
      handleAddTextType: () => actions.handleManagement('textType'),
      handleAddCategory: () => actions.handleManagement('category'),
      handleAddOrganization: () => actions.handleManagement('organization'),
      handleAddSource: () => actions.handleManagement('source'),
      handleAddRole: () => actions.handleManagement('role'),
      handleAddPermission: () => actions.handleManagement('permission'),
      handleAddPolicy: () => actions.handleManagement('policy'),
      
      // Actions d'import par lot
      handleBatchImportZip: () => actions.handleImport(['.zip']),
      handleBatchImportCsv: () => actions.handleImport(['.csv']),
      handleBatchImportExcel: () => actions.handleImport(['.xlsx', '.xls']),
      handleBatchImportJson: () => actions.handleImport(['.json']),
      
      // Actions de navigation
      handleViewProcedures: () => {
        const event = new CustomEvent('navigate-to-section', { detail: 'procedures-catalog' });
        window.dispatchEvent(event);
      },
      
      handleViewTexts: () => {
        const event = new CustomEvent('navigate-to-section', { detail: 'legal-catalog' });
        window.dispatchEvent(event);
      }
    };
  }, [actions]);

  return (
    <>
      {children}
      <UnifiedModalManager />
    </>
  );
}
