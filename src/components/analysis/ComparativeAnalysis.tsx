
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GitCompareArrows, Play } from 'lucide-react';

export function ComparativeAnalysis() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitCompareArrows className="w-5 h-5 text-purple-600" />
            Analyse Comparative
          </CardTitle>
          <CardDescription>
            Comparez les performances entre différentes périodes avec l'aide de l'IA
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Configuration de la comparaison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Type de comparaison</label>
              <Select defaultValue="periods">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="periods">Périodes</SelectItem>
                  <SelectItem value="departments">Départements</SelectItem>
                  <SelectItem value="metrics">Métriques</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Période 1</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner période 1" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="q1-2024">Q1 2024</SelectItem>
                  <SelectItem value="q2-2024">Q2 2024</SelectItem>
                  <SelectItem value="q3-2024">Q3 2024</SelectItem>
                  <SelectItem value="q4-2024">Q4 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Période 2</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner période 2" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="q1-2024">Q1 2024</SelectItem>
                  <SelectItem value="q2-2024">Q2 2024</SelectItem>
                  <SelectItem value="q3-2024">Q3 2024</SelectItem>
                  <SelectItem value="q4-2024">Q4 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Bouton de lancement */}
          <div className="text-center">
            <Button className="bg-purple-600 hover:bg-purple-700" size="lg">
              <Play className="w-5 h-5 mr-2" />
              Lancer la comparaison
            </Button>
          </div>

          {/* Métriques à comparer */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Métriques à comparer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Performance", "Utilisation", "Satisfaction", "Conformité", "Efficacité", "Qualité", "Temps de réponse", "Taux de succès"].map((metric) => (
                  <div key={metric} className="flex items-center gap-2">
                    <input type="checkbox" id={metric} defaultChecked className="rounded" />
                    <label htmlFor={metric} className="text-sm">{metric}</label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
