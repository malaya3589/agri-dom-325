
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormStepProps } from './types';

export function Step6AdditionalInfo({ form }: FormStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Informations complémentaires</h3>
        <p className="text-gray-600">Ajoutez les derniers détails</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="frequent-questions">Questions fréquemment posées</Label>
        <Textarea
          id="frequent-questions"
          placeholder="Questions et réponses fréquentes..."
          className="min-h-24"
          {...form.register('frequentQuestions')}
        />
      </div>

      <div className="space-y-6">
        <h4 className="font-semibold text-lg">Contact</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="contact-address">Adresse</Label>
            <Textarea
              id="contact-address"
              placeholder="Adresse complète..."
              {...form.register('contactAddress')}
            />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">N° Téléphone</Label>
              <Input
                id="phone"
                placeholder="+213 XX XX XX XX"
                {...form.register('phoneNumber')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="contact@administration.dz"
                {...form.register('email')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="green-number">N° Vert</Label>
              <Input
                id="green-number"
                placeholder="3030"
                {...form.register('greenNumber')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
