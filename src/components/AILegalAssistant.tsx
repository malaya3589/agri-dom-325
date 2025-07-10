
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';  
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bot, Search, Clock, FileText, BarChart3, Users, Sparkles, History, Brain, Zap, Target, TrendingUp } from 'lucide-react';
import { SectionHeader } from './common/SectionHeader';
import { ConversationalAIAssistant } from './ai/ConversationalAIAssistant';
import { PredictiveJuridicalAnalysis } from './ai/PredictiveJuridicalAnalysis';
import { SpecializedNLP } from './ai/SpecializedNLP';
import { EnhancedContextualRecommendations } from './ai/EnhancedContextualRecommendations';

export function AILegalAssistant() {
  const [activeTab, setActiveTab] = useState('assistant');

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <SectionHeader
        title="Assistant IA Juridique Avancé"
        description="Suite complète d'outils d'intelligence artificielle pour l'analyse juridique"
        icon={Bot}
        iconColor="text-green-600"
      />

      {/* Onglets principaux pour les différentes fonctionnalités */}
      <Card>
        <CardHeader>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="assistant" className="gap-2">
                <Bot className="w-4 h-4" />
                Assistant
              </TabsTrigger>
              <TabsTrigger value="search" className="gap-2">
                <Search className="w-4 h-4" />
                Recherche IA
              </TabsTrigger>
              <TabsTrigger value="predictive" className="gap-2">
                <TrendingUp className="w-4 h-4" />
                Analyse Prédictive
              </TabsTrigger>
              <TabsTrigger value="nlp" className="gap-2">
                <Zap className="w-4 h-4" />
                NLP Avancé
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="gap-2">
                <Target className="w-4 h-4" />
                Recommandations
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsContent value="assistant" className="space-y-6">
          <ConversationalAIAssistant />
        </TabsContent>

        <TabsContent value="search" className="space-y-6">
          {/* Contenu de recherche IA */}
          <div className="text-center py-8">
            <p className="text-gray-600">Fonctionnalités de recherche IA avancée</p>
          </div>
        </TabsContent>

        <TabsContent value="predictive">
          <PredictiveJuridicalAnalysis />
        </TabsContent>

        <TabsContent value="nlp">
          <SpecializedNLP />
        </TabsContent>

        <TabsContent value="recommendations">
          <EnhancedContextualRecommendations />
        </TabsContent>
      </Tabs>
    </div>
  );
}
