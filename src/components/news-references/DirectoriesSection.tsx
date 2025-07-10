import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TabFormField } from '@/components/common/TabFormField';
import { Building, GraduationCap, Scale, UserCheck, FileText } from 'lucide-react';

export function DirectoriesSection() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="institutions" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="institutions" className="gap-2">
            <Building className="w-4 h-4" />
            Institutions
          </TabsTrigger>
          <TabsTrigger value="facultes" className="gap-2">
            <GraduationCap className="w-4 h-4" />
            Facultés de Droit
          </TabsTrigger>
          <TabsTrigger value="tribunaux" className="gap-2">
            <Scale className="w-4 h-4" />
            Tribunaux
          </TabsTrigger>
          <TabsTrigger value="avocats" className="gap-2">
            <UserCheck className="w-4 h-4" />
            Avocats
          </TabsTrigger>
          <TabsTrigger value="notaires" className="gap-2">
            <FileText className="w-4 h-4" />
            Notaires
          </TabsTrigger>
        </TabsList>

        
        <TabsContent value="institutions" className="mt-6 space-y-6">
          <div className="flex gap-3 justify-center mb-6">
            <Button className="gap-2">
              <Building className="w-4 h-4" />
              Ajouter
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Enrichir
            </Button>
          </div>

          <TabFormField
            placeholder="Rechercher une institution..."
            onSearch={(query) => console.log('Recherche institutions:', query)}
            showActions={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Building className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Ministère de la Justice</CardTitle>
                    <p className="text-sm text-gray-600">Ministère</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span>8, Place Bir Hakem, El-Biar, Alger</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <span>+213 (0)21 92 15 77</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">✉️</span>
                    <span>contact@mjustice.dz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">🌐</span>
                    <span className="text-blue-600">www.mjustice.dz</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Building className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Conseil d'État</CardTitle>
                    <p className="text-sm text-gray-600">Juridiction Administrative</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span>Route de l'Université, Ben Aknoun, Alger</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <span>+213 (0)21 91 25 34</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">✉️</span>
                    <span>info@conseil-etat.dz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">🌐</span>
                    <span className="text-blue-600">www.conseil-etat.dz</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Scale className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Cour Suprême</CardTitle>
                    <p className="text-sm text-gray-600">Juridiction Suprême</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span>11, Chemin Ibn Badis, Kouba, Alger</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <span>+213 (0)21 28 46 52</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">✉️</span>
                    <span>coursupreme@mjustice.dz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">🌐</span>
                    <span className="text-blue-600">www.cour-supreme.dz</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">École Supérieure de la Magistrature</CardTitle>
                    <p className="text-sm text-gray-600">Formation</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span>Route de Ouled Fayet, Alger</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <span>+213 (0)21 37 82 15</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">✉️</span>
                    <span>esm@mjustice.dz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">🌐</span>
                    <span className="text-blue-600">www.esm.dz</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="facultes" className="mt-6 space-y-6">
          <div className="flex gap-3 justify-center mb-6">
            <Button className="gap-2">
              <Building className="w-4 h-4" />
              Ajouter
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Enrichir
            </Button>
          </div>

          <TabFormField
            placeholder="Rechercher une faculté de droit..."
            onSearch={(query) => console.log('Recherche facultés:', query)}
            showActions={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Faculté de Droit - Université d'Alger 1</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span>2, Rue Didouche Mourad, Alger</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <span>+213 (0)21 63 51 24</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">✉️</span>
                    <span>droit@univ-alger.dz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">🌐</span>
                    <span className="text-blue-600">www.univ-alger.dz</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Droit Public</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Droit Privé</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Droit International</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Faculté de Droit - Université d'Oran</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span>BP 1524, Es-Senia, Oran</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <span>+213 (0)41 51 82 36</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">✉️</span>
                    <span>fdroit@univ-oran.dz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">🌐</span>
                    <span className="text-blue-600">www.univ-oran.dz</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Droit des Affaires</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Droit Social</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Droit Pénal</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Faculté de Droit - Université de Constantine</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span>Route d'Ain El Bey, Constantine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <span>+213 (0)31 81 41 89</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">✉️</span>
                    <span>droit@umc.edu.dz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">🌐</span>
                    <span className="text-blue-600">www.umc.edu.dz</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">Droit Constitutionnel</span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">Droit Administratif</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded">Droit Civil</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Faculté de Droit - Université de Tizi Ouzou</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span>15000 Tizi Ouzou</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <span>+213 (0)26 21 55 78</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">✉️</span>
                    <span>fdroit@ummto.dz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">🌐</span>
                    <span className="text-blue-600">www.ummto.dz</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Droits de l'Homme</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Droit de l'Environnement</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Droit Rural</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tribunaux" className="mt-6 space-y-6">
          <div className="flex gap-3 justify-center mb-6">
            <Button className="gap-2">
              <Building className="w-4 h-4" />
              Ajouter
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Enrichir
            </Button>
          </div>

          <TabFormField
            placeholder="Rechercher un tribunal..."
            onSearch={(query) => console.log('Recherche tribunaux:', query)}
            showActions={true}
          />

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tribunal de Première Instance d'Alger</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">📍</span>
                      <span>2, Rue Larbi Ben M'hidi, Alger Centre</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">📞</span>
                      <span>+213 (0)21 63 25 18</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Civil et Pénal</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Alger Centre</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cour d'Alger</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">📍</span>
                      <span>8, Boulevard Colonel Amirouche, Alger</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">📞</span>
                      <span>+213 (0)21 64 37 29</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Appel</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Wilaya d'Alger</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tribunal Administratif d'Alger</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">📍</span>
                      <span>Cité Administrative, Bab Ezzouar, Alger</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">📞</span>
                      <span>+213 (0)21 43 18 76</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Administratif</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Alger et environs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="avocats" className="mt-6 space-y-6">
          {/* Boutons d'action ajoutés */}
          <div className="flex gap-3 justify-center mb-6">
            <Button className="gap-2">
              <UserCheck className="w-4 h-4" />
              Ajouter
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Enrichir
            </Button>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold">Recherchez des avocats par spécialité et région</h3>
          </div>

          <TabFormField
            placeholder="Spécialité ou wilaya..."
            onSearch={(query) => console.log('Recherche avocats:', query)}
            showActions={true}
          />

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Droit Civil</CardTitle>
                <p className="text-sm text-gray-600">1250 avocats - Alger</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Consulter</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Droit Pénal</CardTitle>
                <p className="text-sm text-gray-600">890 avocats - Oran</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Consulter</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Droit Commercial</CardTitle>
                <p className="text-sm text-gray-600">756 avocats - Constantine</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Consulter</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Droit du Travail</CardTitle>
                <p className="text-sm text-gray-600">634 avocats - Annaba</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Consulter</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Droit Administratif</CardTitle>
                <p className="text-sm text-gray-600">567 avocats - Sétif</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Consulter</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Droit de la Famille</CardTitle>
                <p className="text-sm text-gray-600">489 avocats - Tlemcen</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Consulter</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Droit Fiscal</CardTitle>
                <p className="text-sm text-gray-600">423 avocats - Blida</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Consulter</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Droit Immobilier</CardTitle>
                <p className="text-sm text-gray-600">387 avocats - Batna</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Consulter</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notaires" className="mt-6 space-y-6">
          {/* Boutons d'action ajoutés */}
          <div className="flex gap-3 justify-center mb-6">
            <Button className="gap-2">
              <FileText className="w-4 h-4" />
              Ajouter
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Enrichir
            </Button>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold">Trouvez un notaire près de chez vous</h3>
          </div>

          <TabFormField
            placeholder="Nom ou spécialité..."
            onSearch={(query) => console.log('Recherche notaires:', query)}
            showActions={true}
          />

          
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Etude Notariale Benaissa</CardTitle>
                  </div>
                  <Button variant="outline" size="sm">Contacter</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span>12, Rue Didouche Mourad, Alger</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <span>+213 (0)21 63 45 72</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Immobilier</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Successions</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Sociétés</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Etude Notariale Brahimi</CardTitle>
                  </div>
                  <Button variant="outline" size="sm">Contacter</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span>45, Boulevard Zighout Youcef, Oran</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <span>+213 (0)41 32 18 96</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Contrats</span>
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Authentifications</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Ventes</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Etude Notariale Khelifi</CardTitle>
                  </div>
                  <Button variant="outline" size="sm">Contacter</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span>78, Rue Larbi Ben M'hidi, Constantine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <span>+213 (0)31 94 27 53</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded">Donations</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">Partages</span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">Hypothèques</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Etude Notariale Meziane</CardTitle>
                  </div>
                  <Button variant="outline" size="sm">Contacter</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍</span>
                    <span>33, Avenue de l'Indépendance, Annaba</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <span>+213 (0)38 82 64 19</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded">Testaments</span>
                  <span className="px-2 py-1 bg-lime-100 text-lime-700 text-xs rounded">Mariages</span>
                  <span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded">Divorces</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
