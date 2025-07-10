
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Target, Bot, LineChart, PieChart, FileText, FileSpreadsheet, Download } from 'lucide-react';

export function PerformanceAnalysis() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Analyse de Performance
          </CardTitle>
          <CardDescription>
            Analysez vos performances détaillées avec l'assistance IA
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Contrôles */}
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <Select defaultValue="month">
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Cette semaine</SelectItem>
                  <SelectItem value="month">Ce mois</SelectItem>
                  <SelectItem value="quarter">Ce trimestre</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les métriques</SelectItem>
                  <SelectItem value="performance">Performance</SelectItem>
                  <SelectItem value="usage">Utilisation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Bot className="w-4 h-4 mr-2" />
              Analyse IA
            </Button>
          </div>

          {/* Graphiques */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Évolution des Performances</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="w-12 h-12 mx-auto mb-2 text-blue-600" />
                    <p className="text-sm text-gray-600">Graphique des performances</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Répartition par Domaine</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="w-12 h-12 mx-auto mb-2 text-purple-600" />
                    <p className="text-sm text-gray-600">Graphique de répartition</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Export et Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Export et Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <FileText className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
                <Button variant="outline" className="flex-1">
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Export Excel
                </Button>
                <Button variant="outline" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Export JSON
                </Button>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
