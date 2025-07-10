
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TabFormField } from '@/components/common/TabFormField';
import { Newspaper, Plus, Upload, TrendingUp, Calendar } from 'lucide-react';

export function NewsSection() {
  return (
    <div className="space-y-6">
      {/* Actions principales */}
      <div className="flex gap-4 justify-center">
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter actualité
        </Button>
        <Button variant="outline">
          <Upload className="w-4 h-4 mr-2" />
          Enrichir la base
        </Button>
      </div>

      {/* Champ de formulaire avec fonctionnalités */}
      <TabFormField
        placeholder="Rechercher dans les actualités juridiques..."
        onSearch={(query) => console.log('Recherche actualités:', query)}
        onAdd={() => console.log('Ajouter actualité')}
        onFilter={() => console.log('Filtrer actualités')}
        onSort={() => console.log('Trier actualités')}
        onExport={() => console.log('Exporter actualités')}
        onRefresh={() => console.log('Actualiser actualités')}
        showActions={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-red-600" />
              Actualités Récentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-l-red-500 pl-4">
                <h4 className="font-semibold">Nouvelle loi sur le commerce électronique</h4>
                <p className="text-sm text-gray-600">Mise à jour des réglementations</p>
                <span className="text-xs text-gray-500">Il y a 2 heures</span>
              </div>
              <div className="border-l-4 border-l-orange-500 pl-4">
                <h4 className="font-semibold">Réforme du code de procédure civile</h4>
                <p className="text-sm text-gray-600">Nouvelles dispositions</p>
                <span className="text-xs text-gray-500">Hier</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              Agenda Juridique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                <span className="text-sm font-medium">Conférence droit digital</span>
                <span className="text-xs text-blue-600">15 Jan</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                <span className="text-sm font-medium">Formation nouveau code</span>
                <span className="text-xs text-green-600">20 Jan</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
