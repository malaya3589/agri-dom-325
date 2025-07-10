
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, FileText, Users, Building, Clock, Star } from 'lucide-react';
import { TabSearchField } from '@/components/common/TabSearchField';

interface ProcedureCatalogTabProps {
  onAddProcedure?: () => void;
  onOpenApprovalQueue?: () => void;
}

export function ProcedureCatalogTab({ onAddProcedure, onOpenApprovalQueue }: ProcedureCatalogTabProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabSearch = (query: string) => {
    setSearchTerm(query);
    console.log('Procedure tab search:', query);
  };

  const procedures = [
    {
      id: 1,
      title: "Création d'entreprise SARL",
      description: "Procédure complète pour créer une société à responsabilité limitée",
      category: "Entreprise",
      duration: "15-30 jours",
      complexity: "Moyenne",
      popularity: 95
    },
    {
      id: 2,
      title: "Permis de construire",
      description: "Demande d'autorisation de construction pour bâtiment résidentiel",
      category: "Urbanisme",
      duration: "2-3 mois",
      complexity: "Élevée",
      popularity: 87
    },
    {
      id: 3,
      title: "Carte nationale d'identité",
      description: "Renouvellement ou première demande de CNI",
      category: "État Civil",
      duration: "7-14 jours",
      complexity: "Faible",
      popularity: 92
    }
  ];

  const filteredProcedures = procedures.filter(procedure =>
    procedure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    procedure.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    procedure.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Nouveau champ de recherche avec reconnaissance vocale */}
      <TabSearchField
        placeholder="Rechercher des procédures administratives..."
        onSearch={handleTabSearch}
        suggestions={[
          "Création d'entreprise",
          "Permis de construire",
          "Carte d'identité",
          "Passeport",
          "Acte de naissance",
          "Certificat de résidence",
          "Agrément commercial",
          "Licence d'importation"
        ]}
      />

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">248</div>
            <div className="text-sm text-gray-600">Procédures</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">1,542</div>
            <div className="text-sm text-gray-600">Utilisateurs</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Building className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">47</div>
            <div className="text-sm text-gray-600">Organismes</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600">12.5</div>
            <div className="text-sm text-gray-600">Jours (moy.)</div>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">
          {filteredProcedures.length} procédure(s) trouvée(s)
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={onOpenApprovalQueue}
            className="bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100"
          >
            File d'approbation
          </Button>
          <Button onClick={onAddProcedure}>
            <Plus className="w-4 h-4 mr-2" />
            Ajouter une procédure
          </Button>
        </div>
      </div>

      {/* Liste des procédures */}
      <div className="space-y-4">
        {filteredProcedures.map((procedure) => (
          <Card key={procedure.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{procedure.title}</h3>
                    <Badge variant="secondary">{procedure.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{procedure.popularity}%</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{procedure.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>Durée: {procedure.duration}</span>
                    </div>
                    <div>
                      Complexité: <Badge variant={
                        procedure.complexity === 'Faible' ? 'default' :
                        procedure.complexity === 'Moyenne' ? 'secondary' : 'destructive'
                      }>{procedure.complexity}</Badge>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="ml-4">
                  Voir détails
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
