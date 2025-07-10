import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, User, ExternalLink, Eye, Download, Star } from 'lucide-react';
import { TabSearchField } from '@/components/common/TabSearchField';

export function LegalTextsCatalogTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('active');
  const [sortOrder, setSortOrder] = useState('newest');

  const mockData = [
    {
      id: '1',
      title: 'Code Civil Algérien',
      category: 'Code',
      status: 'active',
      publicationDate: '2023-01-15',
      author: 'Ministère de la Justice',
      views: 1234,
      downloads: 567,
      isFavorite: true,
      link: 'https://example.com/code-civil'
    },
    {
      id: '2',
      title: 'Loi de Finances 2024',
      category: 'Loi',
      status: 'active',
      publicationDate: '2024-02-20',
      author: 'Assemblée Populaire Nationale',
      views: 5678,
      downloads: 1234,
      isFavorite: false,
      link: 'https://example.com/loi-finances'
    },
    {
      id: '3',
      title: 'Décret Exécutif 23-45',
      category: 'Décret',
      status: 'inactive',
      publicationDate: '2023-11-01',
      author: 'Premier Ministre',
      views: 2345,
      downloads: 678,
      isFavorite: true,
      link: 'https://example.com/decret-executif'
    },
    {
      id: '4',
      title: 'Constitution Algérienne 2020',
      category: 'Constitution',
      status: 'active',
      publicationDate: '2020-12-30',
      author: 'Présidence de la République',
      views: 9876,
      downloads: 4321,
      isFavorite: false,
      link: 'https://example.com/constitution'
    },
    {
      id: '5',
      title: 'Ordonnance Présidentielle 24-01',
      category: 'Ordonnance',
      status: 'active',
      publicationDate: '2024-01-10',
      author: 'Président de la République',
      views: 3456,
      downloads: 789,
      isFavorite: true,
      link: 'https://example.com/ordonnance'
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Recherche dans le catalogue:', query);
    // Ici vous pouvez ajouter la logique de filtrage
  };

  return (
    <div className="space-y-6">
      {/* Champ de recherche avec reconnaissance vocale */}
      <TabSearchField
        placeholder="Rechercher des textes juridiques..."
        context="legal"
        onSearch={handleSearch}
      />

      <Card>
        <CardHeader>
          <CardTitle>
            Catalogue des Textes Juridiques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Catégories</h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('all')}
                  className="cursor-pointer"
                >
                  Tous
                </Badge>
                <Badge
                  variant={selectedCategory === 'code' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('code')}
                  className="cursor-pointer"
                >
                  Codes
                </Badge>
                <Badge
                  variant={selectedCategory === 'loi' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('loi')}
                  className="cursor-pointer"
                >
                  Lois
                </Badge>
                <Badge
                  variant={selectedCategory === 'decret' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('decret')}
                  className="cursor-pointer"
                >
                  Décrets
                </Badge>
                <Badge
                  variant={selectedCategory === 'constitution' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('constitution')}
                  className="cursor-pointer"
                >
                  Constitutions
                </Badge>
                <Badge
                  variant={selectedCategory === 'ordonnance' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('ordonnance')}
                  className="cursor-pointer"
                >
                  Ordonnances
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Statut</h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedStatus === 'active' ? 'default' : 'outline'}
                  onClick={() => setSelectedStatus('active')}
                  className="cursor-pointer"
                >
                  Actif
                </Badge>
                <Badge
                  variant={selectedStatus === 'inactive' ? 'default' : 'outline'}
                  onClick={() => setSelectedStatus('inactive')}
                  className="cursor-pointer"
                >
                  Inactif
                </Badge>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">Trier par</h4>
            <div className="flex gap-2">
              <Button
                variant={sortOrder === 'newest' ? 'default' : 'outline'}
                onClick={() => setSortOrder('newest')}
              >
                Plus récent
              </Button>
              <Button
                variant={sortOrder === 'oldest' ? 'default' : 'outline'}
                onClick={() => setSortOrder('oldest')}
              >
                Plus ancien
              </Button>
              <Button
                variant={sortOrder === 'popular' ? 'default' : 'outline'}
                onClick={() => setSortOrder('popular')}
              >
                Populaire
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Publié le: {item.publicationDate}
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <User className="w-3 h-3" />
                Auteur: {item.author}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {item.views}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    {item.downloads}
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Star className="w-4 h-4" />
                </Button>
              </div>
              <Button asChild>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir le texte
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
