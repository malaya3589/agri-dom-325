
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Suggestion {
  id: string;
  text: string;
  type: 'recent' | 'suggestion' | 'template' | 'legal_term';
  category?: string;
}

interface VoiceSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  context?: 'search' | 'legal' | 'procedure' | 'general';
  className?: string;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  suggestions?: Suggestion[];
  showVoiceButton?: boolean;
}

export function VoiceSearchInput({
  value,
  onChange,
  placeholder = "Rechercher...",
  context = 'general',
  className,
  onKeyPress,
  suggestions = [],
  showVoiceButton = true
}: VoiceSearchInputProps) {
  const [isListening, setIsListening] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const recognitionRef = useRef<any>(null);

  // Memoize the speech recognition setup to prevent recreation on every render
  const initializeSpeechRecognition = useCallback(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.warn('Speech recognition not supported');
      return null;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'fr-FR';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onChange(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    return recognition;
  }, [onChange]);

  // Initialize speech recognition only once
  useEffect(() => {
    if (showVoiceButton && !recognitionRef.current) {
      recognitionRef.current = initializeSpeechRecognition();
    }
  }, [showVoiceButton, initializeSpeechRecognition]);

  const toggleVoiceSearch = useCallback(() => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  }, [isListening]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setShowSuggestions(newValue.length > 0 && suggestions.length > 0);
  }, [onChange, suggestions.length]);

  const handleSuggestionClick = useCallback((suggestion: Suggestion) => {
    onChange(suggestion.text);
    setShowSuggestions(false);
  }, [onChange]);

  const filteredSuggestions = suggestions.filter(s => 
    s.text.toLowerCase().includes(value.toLowerCase())
  ).slice(0, 5);

  return (
    <div className="relative">
      <div className="relative">
        <Input
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          className={cn("pr-20", className)}
        />
        
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
          {showVoiceButton && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={toggleVoiceSearch}
              disabled={!recognitionRef.current}
              className={cn(
                "h-8 w-8 p-0",
                isListening ? "text-red-500" : "text-gray-500"
              )}
            >
              {isListening ? (
                <MicOff className="h-4 w-4" />
              ) : (
                <Mic className="h-4 w-4" />
              )}
            </Button>
          )}
          
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-gray-500"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Suggestions dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          {filteredSuggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm">{suggestion.text}</span>
                <span className="text-xs text-gray-400 capitalize">
                  {suggestion.type}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
