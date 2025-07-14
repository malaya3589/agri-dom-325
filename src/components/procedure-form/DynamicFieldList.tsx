
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, X } from 'lucide-react';

interface DynamicFieldListProps {
  title: string;
  items: string[];
  setItems: (items: string[]) => void;
  placeholder: string;
  multiline?: boolean;
}

export function DynamicFieldList({ title, items, setItems, placeholder, multiline = false }: DynamicFieldListProps) {
  const addItem = () => {
    setItems([...items, '']);
  };

  const updateItem = (index: number, value: string) => {
    const updated = [...items];
    updated[index] = value;
    setItems(updated);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">{title}</h4>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addItem}
          className="gap-2"
        >
          <Plus className="w-4 h-4" />
          Ajouter
        </Button>
      </div>

      {items.length === 0 ? (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500">
          <p>Aucun élément ajouté. Cliquez sur "Ajouter" pour commencer.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              {multiline ? (
                <Textarea
                  placeholder={placeholder}
                  value={item}
                  onChange={(e) => updateItem(index, e.target.value)}
                  className="flex-1"
                  rows={2}
                />
              ) : (
                <Input
                  placeholder={placeholder}
                  value={item}
                  onChange={(e) => updateItem(index, e.target.value)}
                  className="flex-1"
                />
              )}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeItem(index)}
                className="mt-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
