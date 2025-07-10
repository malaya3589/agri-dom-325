
import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Clock, Star, Command, Search } from 'lucide-react';
import { useVoiceRecognition } from '@/hooks/useVoiceRecognition';
import { cn } from '@/lib/utils';

interface SuggestionItem {
  id: string;
  text: string;
  type: 'recent' | 'suggestion' | 'template' | 'legal_term';
  category?: string;
}

interface TabSearchFieldProps {
  placeholder?: string;
  context?: 'legal' | 'procedure' | 'analysis' | 'general';
  onSearch?: (query: string) => void;
  className?: string;
}

export function TabSearchField({ 
  placeholder = "Rechercher...",
  context = 'general',
  onSearch,
  className 
}: TabSearchFieldProps) {
  const [value, setValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SuggestionItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  
  const { 
    isListening, 
    transcript, 
    isSupported, 
    error, 
    startListening, 
    stopListening, 
    resetTranscript 
  } = useVoiceRecognition({
    continuous: false,
    interimResults: true,
    language: 'fr-FR'
  });

  // Suggestions par contexte
  const defaultSuggestions: Record<string, SuggestionItem[]> = {
    legal: [
      { id: '1', text: 'Code civil algérien', type: 'legal_term', category: 'Code' },
      { id: '2', text: 'Loi de finances 2024', type: 'legal_term', category: 'Loi' },
      { id: '3', text: 'Décret exécutif', type: 'legal_term', category: 'Décret' },
      { id: '4', text: 'Constitution algérienne', type: 'legal_term', category: 'Constitution' },
      { id: '5', text: 'jurisprudence récente', type: 'suggestion' }
    ],
    procedure: [
      { id: '1', text: 'Demande de passeport', type: 'template', category: 'Identité' },
      { id: '2', text: 'Inscription universitaire', type: 'template', category: 'Éducation' },
      { id: '3', text: 'Création d\'entreprise', type: 'template', category: 'Commerce' },
      { id: '4', text: 'Permis de construire', type: 'template', category: 'Urbanisme' }
    ],
    analysis: [
      { id: '1', text: 'rapport de conformité', type: 'suggestion' },
      { id: '2', text: 'analyse comparative', type: 'suggestion' },
      { id: '3', text: 'tableau de bord', type: 'suggestion' }
    ],
    general: [
      { id: '1', text: 'rechercher dans', type: 'suggestion' },
      { id: '2', text: 'documentation officielle', type: 'suggestion' }
    ]
  };

  // Mettre à jour la valeur depuis la reconnaissance vocale
  useEffect(() => {
    if (transcript && transcript.trim() !== '') {
      setValue(prev => prev + (prev ? ' ' : '') + transcript);
    }
  }, [transcript]);

  // Filtrer les suggestions
  useEffect(() => {
    const allSuggestions = defaultSuggestions[context] || [];
    
    if (value.length > 0) {
      const filtered = allSuggestions
        .filter(item => 
          item.text.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5);
      
      setFilteredSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    }
    setSelectedIndex(-1);
  }, [value, context]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) {
      if (e.key === 'Enter' && value.trim()) {
        handleSearch();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          setValue(filteredSuggestions[selectedIndex].text);
          setShowSuggestions(false);
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSuggestionClick = (suggestion: SuggestionItem) => {
    setValue(suggestion.text);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      resetTranscript();
      startListening();
    }
  };

  const handleSearch = () => {
    if (value.trim() && onSearch) {
      onSearch(value.trim());
    }
  };

  const getSuggestionIcon = (type: SuggestionItem['type']) => {
    switch (type) {
      case 'recent': return <Clock className="w-3 h-3" />;
      case 'template': return <Command className="w-3 h-3" />;
      case 'legal_term': return <Star className="w-3 h-3" />;
      default: return <Search className="w-3 h-3" />;
    }
  };

  return (
    <div className={cn("relative mb-6", className)}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => value.length > 0 && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder={placeholder}
          className={cn(
            "w-full px-4 py-3 pr-20 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
            isListening ? "border-red-300 bg-red-50" : "bg-white"
          )}
        />
        
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {isSupported && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleVoiceToggle}
              className={cn(
                "h-8 w-8 p-0",
                isListening ? "text-red-600 bg-red-100 hover:bg-red-200" : "text-gray-400 hover:text-gray-600"
              )}
              title={isListening ? "Arrêter l'écoute" : "Reconnaissance vocale"}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </Button>
          )}
          
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleSearch}
            className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600"
            title="Rechercher"
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Indicateur de reconnaissance vocale */}
      {isListening && (
        <div className="absolute top-full left-0 right-0 z-40 mt-1">
          <Card className="p-2 bg-red-50 border-red-200">
            <div className="flex items-center gap-2 text-red-700 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Écoute en cours... Parlez maintenant
            </div>
          </Card>
        </div>
      )}

      {/* Erreur de reconnaissance vocale */}
      {error && (
        <div className="absolute top-full left-0 right-0 z-40 mt-1">
          <Card className="p-2 bg-red-50 border-red-200">
            <div className="text-red-700 text-sm">{error}</div>
          </Card>
        </div>
      )}
      
      {/* Suggestions */}
      {showSuggestions && !isListening && (
        <Card 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 z-50 mt-1 max-h-64 overflow-y-auto bg-white border shadow-lg"
        >
          <div className="p-2">
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
                className={cn(
                  "flex items-center gap-2 p-2 rounded cursor-pointer transition-colors",
                  index === selectedIndex 
                    ? "bg-green-50 text-green-700" 
                    : "hover:bg-gray-50"
                )}
              >
                {getSuggestionIcon(suggestion.type)}
                <span className="flex-1">{suggestion.text}</span>
                {suggestion.category && (
                  <Badge variant="outline" className="text-xs">
                    {suggestion.category}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
