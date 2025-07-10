import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TabFormField } from '@/components/common/TabFormField';
import { BookOpen, Library, Archive, Search, BookMarked, Newspaper, GraduationCap, Video, Download, Eye } from 'lucide-react';

export function LibraryTabs() {
  return (
    <Tabs defaultValue="ouvrages" className="w-full">
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger value="ouvrages" className="gap-2">
          <BookOpen className="w-4 h-4" />
          Ouvrages
        </TabsTrigger>
        <TabsTrigger value="theses" className="gap-2">
          <GraduationCap className="w-4 h-4" />
          Thèses
        </TabsTrigger>
        <TabsTrigger value="revues" className="gap-2">
          <BookMarked className="w-4 h-4" />
          Revues
        </TabsTrigger>
        <TabsTrigger value="journaux" className="gap-2">
          <Newspaper className="w-4 h-4" />
          Journaux
        </TabsTrigger>
        <TabsTrigger value="articles" className="gap-2">
          <BookOpen className="w-4 h-4" />
          Articles
        </TabsTrigger>
        <TabsTrigger value="videos" className="gap-2">
          <Video className="w-4 h-4" />
          Vidéos
        </TabsTrigger>
      </TabsList>

      <TabsContent value="ouvrages" className="mt-6 space-y-6">
        <TabFormField
          placeholder="Rechercher dans les ouvrages juridiques..."
          onSearch={(query) => console.log('Recherche ouvrages:', query)}
          showActions={true}
        />

        {/* Liste complète d'ouvrages */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Catalogue des Ouvrages (15)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Populaires (4) */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Manuel de Droit Civil Algérien</h4>
                      <Badge variant="secondary" className="text-xs">Civil</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Commentaire complet du Code Civil avec jurisprudence</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>650 pages • PDF</span>
                      <span>Mis à jour: 2024</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg text-green-600">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Précis de Droit Commercial</h4>
                      <Badge variant="secondary" className="text-xs">Commercial</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Guide pratique du droit des affaires en Algérie</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>480 pages • PDF</span>
                      <span>Mis à jour: 2023</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Droit Constitutionnel Algérien</h4>
                      <Badge variant="secondary" className="text-xs">Constitutionnel</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Analyse des institutions constitutionnelles</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>520 pages • PDF</span>
                      <span>Mis à jour: 2024</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-50 rounded-lg text-red-600">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Droit Pénal Spécial</h4>
                      <Badge variant="secondary" className="text-xs">Pénal</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Étude des infractions et des sanctions</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>390 pages • PDF</span>
                      <span>Mis à jour: 2023</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Autres ouvrages */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Droit du Travail en Algérie</h4>
                      <Badge variant="secondary" className="text-xs">Social</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Relations individuelles et collectives</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>445 pages • PDF</span>
                      <span>Mis à jour: 2024</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Droit de l'Environnement</h4>
                      <Badge variant="secondary" className="text-xs">Environnement</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Protection de l'environnement et développement durable</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>368 pages • PDF</span>
                      <span>Mis à jour: 2024</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Documents récents (4) */}
          <div className="mt-8">
            <h4 className="text-base font-semibold text-gray-900 mb-4">Documents Récemment Ajoutés</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="space-y-1">
                  <h5 className="font-medium text-sm">Précis de Droit Fiscal</h5>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Fiscal</Badge>
                    <span className="text-xs text-gray-500">15 Jan 2024</span>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="text-xs">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Ouvrir
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="space-y-1">
                  <h5 className="font-medium text-sm">Droit des Sociétés</h5>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Commercial</Badge>
                    <span className="text-xs text-gray-500">28 Déc 2023</span>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="text-xs">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Ouvrir
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="space-y-1">
                  <h5 className="font-medium text-sm">Droit International Privé</h5>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">International</Badge>
                    <span className="text-xs text-gray-500">10 Nov 2023</span>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="text-xs">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Ouvrir
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="space-y-1">
                  <h5 className="font-medium text-sm">Droit Bancaire</h5>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Bancaire</Badge>
                    <span className="text-xs text-gray-500">05 Nov 2023</span>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="text-xs">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Ouvrir
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Library className="w-5 h-5 text-blue-600" />
                Collections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Code Civil Algérien</span>
                      <p className="text-xs text-gray-500">Commentaires et analyses</p>
                    </div>
                    <span className="text-xs text-blue-600">245 docs</span>
                  </div>
                </div>
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Droit Commercial</span>
                      <p className="text-xs text-gray-500">Code de commerce et lois</p>
                    </div>
                    <span className="text-xs text-blue-600">189 docs</span>
                  </div>
                </div>
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Droit Administratif</span>
                      <p className="text-xs text-gray-500">Fonction publique et administration</p>
                    </div>
                    <span className="text-xs text-blue-600">312 docs</span>
                  </div>
                </div>
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Droit Pénal</span>
                      <p className="text-xs text-gray-500">Code pénal et procédure pénale</p>
                    </div>
                    <span className="text-xs text-blue-600">156 docs</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Archive className="w-5 h-5 text-green-600" />
                Archives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-2 bg-green-50 rounded">
                  <span className="text-sm font-medium text-green-700">Ouvrages historiques</span>
                  <p className="text-xs text-green-600">Documents pré-indépendance</p>
                </div>
                <div className="p-2 bg-blue-50 rounded">
                  <span className="text-sm font-medium text-blue-700">Collection Benhoura</span>
                  <p className="text-xs text-blue-600">Fonds spécialisé en droit musulman</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Archive className="w-4 h-4 mr-2" />
                Consulter les archives
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-purple-600" />
                Recherche Avancée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Par auteur :</span> Mohamed Bedjaoui, Amar Mahiou
                </div>
                <div className="text-sm">
                  <span className="font-medium">Par éditeur :</span> OPU, ENAG, Dahlab
                </div>
                <div className="text-sm">
                  <span className="font-medium">Par année :</span> 1962-2024
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Search className="w-4 h-4 mr-2" />
                Recherche avancée
              </Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="theses" className="mt-6 space-y-6">
        <TabFormField
          placeholder="Rechercher dans les thèses de doctorat..."
          onSearch={(query) => console.log('Recherche thèses:', query)}
          showActions={true}
        />

        {/* Liste complète de thèses */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Catalogue des Thèses (12)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Le Droit de l'Environnement en Algérie</h4>
                      <Badge variant="secondary" className="text-xs">Environnement</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Thèse de doctorat - Université d'Alger 1</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Dr. Amina Benali • 2024</span>
                      <span>Mention: Très Honorable</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">L'Arbitrage Commercial International</h4>
                      <Badge variant="secondary" className="text-xs">Commercial</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Thèse de doctorat - Université d'Oran</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Dr. Karim Medjani • 2023</span>
                      <span>Mention: Très Honorable</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nouvelles thèses ajoutées */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Le Droit des Sociétés en Algérie</h4>
                      <Badge variant="secondary" className="text-xs">Sociétés</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Thèse de doctorat - Université de Constantine</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Dr. Salim Benaissa • 2024</span>
                      <span>Mention: Très Honorable</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-pink-50 rounded-lg text-pink-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Droit International Public et Souveraineté</h4>
                      <Badge variant="secondary" className="text-xs">International</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Thèse de doctorat - Université d'Alger 1</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Dr. Leila Mansouri • 2024</span>
                      <span>Mention: Très Honorable</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Documents récents pour thèses (4) */}
          <div className="mt-8">
            <h4 className="text-base font-semibold text-gray-900 mb-4">Thèses Récemment Soutenues</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="space-y-1">
                  <h5 className="font-medium text-sm">La Responsabilité Médicale en Algérie</h5>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Médical</Badge>
                    <span className="text-xs text-gray-500">20 Jan 2024</span>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="text-xs">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Ouvrir
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="space-y-1">
                  <h5 className="font-medium text-sm">Droit de la Concurrence et Monopoles</h5>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Concurrence</Badge>
                    <span className="text-xs text-gray-500">18 Jan 2024</span>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="text-xs">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Ouvrir
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="space-y-1">
                  <h5 className="font-medium text-sm">Protection des Consommateurs</h5>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Consommation</Badge>
                    <span className="text-xs text-gray-500">15 Jan 2024</span>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="text-xs">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Ouvrir
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="space-y-1">
                  <h5 className="font-medium text-sm">Droit Minier et Ressources Naturelles</h5>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Minier</Badge>
                    <span className="text-xs text-gray-500">12 Jan 2024</span>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="text-xs">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Ouvrir
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Library className="w-5 h-5 text-blue-600" />
                Collections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Université d'Alger 1</span>
                      <p className="text-xs text-gray-500">Faculté de Droit</p>
                    </div>
                    <span className="text-xs text-blue-600">145 thèses</span>
                  </div>
                </div>
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Université d'Oran</span>
                      <p className="text-xs text-gray-500">Droit des affaires</p>
                    </div>
                    <span className="text-xs text-blue-600">67 thèses</span>
                  </div>
                </div>
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Université de Constantine</span>
                      <p className="text-xs text-gray-500">Droit constitutionnel</p>
                    </div>
                    <span className="text-xs text-blue-600">32 thèses</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Archive className="w-5 h-5 text-green-600" />
                Archives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-2 bg-green-50 rounded">
                  <span className="text-sm font-medium text-green-700">Thèses soutenues 2020-2024</span>
                  <p className="text-xs text-green-600">Dernières soutenances</p>
                </div>
                <div className="p-2 bg-yellow-50 rounded">
                  <span className="text-sm font-medium text-yellow-700">En cours de numérisation</span>
                  <p className="text-xs text-yellow-600">Archives 1970-2000</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Archive className="w-4 h-4 mr-2" />
                Consulter les archives
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-purple-600" />
                Recherche Avancée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Par directeur :</span> Recherche par encadrant
                </div>
                <div className="text-sm">
                  <span className="font-medium">Par spécialité :</span> Filtrage par domaine
                </div>
                <div className="text-sm">
                  <span className="font-medium">Par mention :</span> Très honorable, honorable
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Search className="w-4 h-4 mr-2" />
                Recherche avancée
              </Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="revues" className="mt-6 space-y-6">
        <TabFormField
          placeholder="Rechercher dans les revues juridiques..."
          onSearch={(query) => console.log('Recherche revues:', query)}
          showActions={true}
        />

        {/* Exemples de revues */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Derniers Numéros</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-50 rounded-lg text-red-600">
                    <BookMarked className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Revue Algérienne de Droit - N°48</h4>
                      <Badge variant="secondary" className="text-xs">Trimestriel</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Numéro spécial sur la réforme du Code Civil</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>T4 2024 • 120 pages</span>
                      <span>ISSN: 1112-3664</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                    <BookMarked className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Revue de Jurisprudence - N°156</h4>
                      <Badge variant="secondary" className="text-xs">Cour Suprême</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Arrêts marquants en droit pénal et civil</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>2024 • 95 pages</span>
                      <span>Publication officielle</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Library className="w-5 h-5 text-blue-600" />
                Collections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Revue Algérienne de Droit</span>
                      <p className="text-xs text-gray-500">Publication trimestrielle</p>
                    </div>
                    <span className="text-xs text-blue-600">48 numéros</span>
                  </div>
                </div>
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Revue de Jurisprudence</span>
                      <p className="text-xs text-gray-500">Cour Suprême</p>
                    </div>
                    <span className="text-xs text-blue-600">156 numéros</span>
                  </div>
                </div>
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Revue du Conseil d'État</span>
                      <p className="text-xs text-gray-500">Droit administratif</p>
                    </div>
                    <span className="text-xs text-blue-600">23 numéros</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Archive className="w-5 h-5 text-green-600" />
                Archives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-2 bg-green-50 rounded">
                  <span className="text-sm font-medium text-green-700">Collection complète 1962-2024</span>
                  <p className="text-xs text-green-600">Toutes les publications</p>
                </div>
                <div className="p-2 bg-blue-50 rounded">
                  <span className="text-sm font-medium text-blue-700">Numéros spéciaux</span>
                  <p className="text-xs text-blue-600">Réformes et colloques</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Archive className="w-4 h-4 mr-2" />
                Consulter les archives
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-purple-600" />
                Recherche Avancée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Par thématique :</span> Civil, pénal, administratif
                </div>
                <div className="text-sm">
                  <span className="font-medium">Par période :</span> Filtrage par année
                </div>
                <div className="text-sm">
                  <span className="font-medium">Par auteur :</span> Recherche par contributeur
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Search className="w-4 h-4 mr-2" />
                Recherche avancée
              </Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="journaux" className="mt-6 space-y-6">
        <TabFormField
          placeholder="Rechercher dans les journaux officiels..."
          onSearch={(query) => console.log('Recherche journaux:', query)}
          showActions={true}
        />

        {/* Exemples de journaux */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Publications Récentes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Journal Officiel RADP N°02</h4>
                      <Badge variant="secondary" className="text-xs">Officiel</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Loi de finances complémentaire 2024</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>15 Janvier 2024</span>
                      <span>45 pages</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Bulletin Officiel des Finances</h4>
                      <Badge variant="secondary" className="text-xs">Finances</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Nouvelles dispositions fiscales 2024</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Décembre 2023</span>
                      <span>28 pages</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Library className="w-5 h-5 text-blue-600" />
                Collections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Journal Officiel RADP</span>
                      <p className="text-xs text-gray-500">République Algérienne</p>
                    </div>
                    <span className="text-xs text-blue-600">1234 numéros</span>
                  </div>
                </div>
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Bulletin Officiel des Finances</span>
                      <p className="text-xs text-gray-500">Ministère des Finances</p>
                    </div>
                    <span className="text-xs text-blue-600">456 numéros</span>
                  </div>
                </div>
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Recueil des Décisions</span>
                      <p className="text-xs text-gray-500">Conseil Constitutionnel</p>
                    </div>
                    <span className="text-xs text-blue-600">89 numéros</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Archive className="w-5 h-5 text-green-600" />
                Archives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-2 bg-green-50 rounded">
                  <span className="text-sm font-medium text-green-700">Archives 1962-2024</span>
                  <p className="text-xs text-green-600">Collection complète numérisée</p>
                </div>
                <div className="p-2 bg-red-50 rounded">
                  <span className="text-sm font-medium text-red-700">Numéros extraordinaires</span>
                  <p className="text-xs text-red-600">Lois importantes et décrets</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Archive className="w-4 h-4 mr-2" />
                Consulter les archives
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-purple-600" />
                Recherche Avancée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Par type :</span> Lois, décrets, arrêtés
                </div>
                <div className="text-sm">
                  <span className="font-medium">Par ministère :</span> Source institutionnelle
                </div>
                <div className="text-sm">
                  <span className="font-medium">Par date :</span> Période de publication
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Search className="w-4 h-4 mr-2" />
                Recherche avancée
              </Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="articles" className="mt-6 space-y-6">
        <TabFormField
          placeholder="Rechercher dans les articles juridiques..."
          onSearch={(query) => console.log('Recherche articles:', query)}
          showActions={true}
        />

        {/* Exemples d'articles */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Articles Récents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-50 rounded-lg text-cyan-600">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">La Digitalisation de la Justice</h4>
                      <Badge variant="secondary" className="text-xs">Doctrine</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Analyse des enjeux de la transformation numérique</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Prof. Sarah Medjahed • 2024</span>
                      <span>15 pages</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-pink-50 rounded-lg text-pink-600">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Commentaire d'Arrêt - Cour Suprême</h4>
                      <Badge variant="secondary" className="text-xs">Jurisprudence</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Arrêt du 12/12/2023 - Responsabilité contractuelle</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Dr. Mohamed Tahar • 2024</span>
                      <span>8 pages</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Consulter
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Library className="w-5 h-5 text-blue-600" />
                Collections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Articles doctrinaux</span>
                      <p className="text-xs text-gray-500">Analyses et commentaires</p>
                    </div>
                    <span className="text-xs text-blue-600">678 articles</span>
                  </div>
                </div>
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Commentaires d'arrêts</span>
                      <p className="text-xs text-gray-500">Jurisprudence commentée</p>
                    </div>
                    <span className="text-xs text-blue-600">423 articles</span>
                  </div>
                </div>
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Notes de jurisprudence</span>
                      <p className="text-xs text-gray-500">Analyses des décisions</p>
                    </div>
                    <span className="text-xs text-blue-600">234 articles</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Archive className="w-5 h-5 text-green-600" />
                Archives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-2 bg-green-50 rounded">
                  <span className="text-sm font-medium text-green-700">Par grands auteurs</span>
                  <p className="text-xs text-green-600">Professeurs et magistrats</p>
                </div>
                <div className="p-2 bg-purple-50 rounded">
                  <span className="text-sm font-medium text-purple-700">Articles récents</span>
                  <p className="text-xs text-purple-600">Publications 2020-2024</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Archive className="w-4 h-4 mr-2" />
                Consulter les archives
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-purple-600" />
                Recherche Avancée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Par domaine :</span> Civil, pénal, commercial
                </div>
                <div className="text-sm">
                  <span className="font-medium">Par type :</span> Doctrine, commentaire, note
                </div>
                <div className="text-sm">
                  <span className="font-medium">Par revue :</span> Source de publication
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Search className="w-4 h-4 mr-2" />
                Recherche avancée
              </Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="videos" className="mt-6 space-y-6">
        <TabFormField
          placeholder="Rechercher dans les contenus vidéo..."
          onSearch={(query) => console.log('Recherche vidéos:', query)}
          showActions={true}
        />

        {/* Exemples de vidéos */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Vidéos Populaires</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-violet-50 rounded-lg text-violet-600">
                    <Video className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Conférence: Réforme du Code Civil</h4>
                      <Badge variant="secondary" className="text-xs">Conférence</Badge>
                    </div>
                    <p className="text-xs text-gray-600">Université d'Alger 1 - Faculté de Droit</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Prof. Ahmed Bouali • 1h 45min</span>
                      <span>Mars 2024</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Regarder
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                    <Video className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm text-gray-900">Formation Continue - Magistrats</h4>
                      <Badge variant="secondary" className="text-xs">Formation</Badge>
                    </div>
                    <p className="text-xs text-gray-600">École Supérieure de la Magistrature</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Session 2024 • 2h 15min</span>
                      <span>Janvier 2024</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Eye className="w-3 h-3 mr-1" />
                        Regarder
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Library className="w-5 h-5 text-blue-600" />
                Collections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Conférences universitaires</span>
                      <p className="text-xs text-gray-500">Facultés de droit</p>
                    </div>
                    <span className="text-xs text-blue-600">45 vidéos</span>
                  </div>
                </div>
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Formations continues</span>
                      <p className="text-xs text-gray-500">École de la magistrature</p>
                    </div>
                    <span className="text-xs text-blue-600">67 vidéos</span>
                  </div>
                </div>
                <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">Webinaires professionnels</span>
                      <p className="text-xs text-gray-500">Ordre des avocats</p>
                    </div>
                    <span className="text-xs text-blue-600">23 vidéos</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Archive className="w-5 h-5 text-green-600" />
                Archives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-2 bg-green-50 rounded">
                  <span className="text-sm font-medium text-green-700">Colloques historiques</span>
                  <p className="text-xs text-green-600">Événements majeurs</p>
                </div>
                <div className="p-2 bg-orange-50 rounded">
                  <span className="text-sm font-medium text-orange-700">Cours magistraux</span>
                  <p className="text-xs text-orange-600">Enregistrements pédagogiques</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Archive className="w-4 h-4 mr-2" />
                Consulter les archives
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-purple-600" />
                Recherche Avancée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Par durée :</span> Courts, moyens, longs
                </div>
                <div className="text-sm">
                  <span className="font-medium">Par qualité :</span> HD, 4K, audio seul
                </div>
                <div className="text-sm">
                  <span className="font-medium">Par langue :</span> Arabe, français, berbère
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Search className="w-4 h-4 mr-2" />
                Recherche avancée
              </Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}
