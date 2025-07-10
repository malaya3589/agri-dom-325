
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Upload, Users, Heart } from 'lucide-react';

export function LegalTextsContribute() {
  const contributeOptions = [
    {
      id: 1,
      title: "Ajouter un texte juridique",
      description: "Contribuez en ajoutant de nouveaux textes juridiques à la base de données",
      icon: Plus,
      action: "Ajouter un texte",
      color: "emerald"
    },
    {
      id: 2,
      title: "Importer des documents",
      description: "Importez des documents PDF ou Word pour enrichir la collection",
      icon: Upload,
      action: "Importer",
      color: "blue"
    },
    {
      id: 3,
      title: "Rejoindre la communauté",
      description: "Participez aux discussions et partagez vos connaissances juridiques",
      icon: Users,
      action: "Rejoindre",
      color: "purple"
    },
    {
      id: 4,
      title: "Faire un don",
      description: "Soutenez le développement et la maintenance de cette plateforme",
      icon: Heart,
      action: "Faire un don",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: { bg: "bg-emerald-100", text: "text-emerald-600", button: "bg-emerald-600 hover:bg-emerald-700" },
      blue: { bg: "bg-blue-100", text: "text-blue-600", button: "bg-blue-600 hover:bg-blue-700" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", button: "bg-purple-600 hover:bg-purple-700" },
      red: { bg: "bg-red-100", text: "text-red-600", button: "bg-red-600 hover:bg-red-700" }
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">Contribuez à la base de données des textes juridiques</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {contributeOptions.map((option) => {
          const IconComponent = option.icon;
          const colorClasses = getColorClasses(option.color);
          return (
            <Card key={option.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full ${colorClasses.bg} mb-3`}>
                    <IconComponent className={`w-6 h-6 ${colorClasses.text}`} />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-center">
                  <p className="text-sm text-gray-600">{option.description}</p>
                  <Button 
                    className={`w-full ${colorClasses.button}`}
                  >
                    {option.action}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
