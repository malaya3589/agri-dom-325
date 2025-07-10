import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ClipboardList, Clock, Building, Users, ExternalLink, Star, Download } from 'lucide-react';
import { TabSearchField } from '@/components/common/TabSearchField';

export function ProcedureCatalogTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mockData, setMockData] = useState([
    {
      id: '1',
      title: 'Demande de Passeport Biométrique',
      institution: 'Ministère de l\'Intérieur',
      category: 'Citoyenneté',
      lastUpdate: '2024-05-03',
      views: 125,
      downloads: 32,
      rating: 4.5,
      isFavorite: false
    },
    {
      id: '2',
      title: 'Inscription Universitaire',
      institution: 'Ministère de l\'Enseignement Supérieur',
      category: 'Éducation',
      lastUpdate: '2024-04-28',
      views: 189,
      downloads: 57,
      rating: 4.2,
      isFavorite: true
    },
    {
      id: '3',
      title: 'Création d\'Entreprise EURL',
      institution: 'Ministère de l\'Industrie',
      category: 'Commerce',
      lastUpdate: '2024-04-15',
      views: 210,
      downloads: 78,
      rating: 4.8,
      isFavorite: false
    },
    {
      id: '4',
      title: 'Demande de Permis de Construire',
      institution: 'APC de Annaba',
      category: 'Urbanisme',
      lastUpdate: '2024-03-20',
      views: 95,
      downloads: 22,
      rating: 3.9,
      isFavorite: false
    },
    {
      id: '5',
      title: 'Affiliation à la CNAS',
      institution: 'CNAS',
      category: 'Sécurité Sociale',
      lastUpdate: '2024-02-10',
      views: 155,
      downloads: 45,
      rating: 4.5,
      isFavorite: true
    }
  ]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Recherche dans les procédures:', query);
    // Ici vous pouvez ajouter la logique de filtrage
  };

  return (
    <div className="space-y-6">
      {/* Champ de recherche avec reconnaissance vocale */}
      <TabSearchField
        placeholder="Rechercher des procédures administratives..."
        context="procedure"
        onSearch={handleSearch}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.map((item) => (
          <Card key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <Star className={`w-4 h-4 ${item.isFavorite ? 'text-yellow-500' : 'text-gray-300'}`} />
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500 mb-4">
                <Clock className="inline-block w-4 h-4 mr-1" />
                Mis à jour le {item.lastUpdate}
              </div>
              <div className="flex items-center text-xs text-gray-600 mb-2">
                <Building className="inline-block w-4 h-4 mr-1" />
                Institution: {item.institution}
              </div>
              <div className="flex items-center text-xs text-gray-600 mb-2">
                <Users className="inline-block w-4 h-4 mr-1" />
                Catégorie: {item.category}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Eye className="inline-block w-4 h-4 mr-1" />
                  <span className="text-xs text-gray-500">{item.views} vues</span>
                </div>
                <div className="flex items-center">
                  <Download className="inline-block w-4 h-4 mr-1" />
                  <span className="text-xs text-gray-500">{item.downloads} téléchargements</span>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Consulter
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
