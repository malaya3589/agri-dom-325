
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { FormStepProps } from './types';

export function Step4Modalities({ form }: FormStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Modalités de la procédure</h3>
        <p className="text-gray-600">Définissez les modalités et conditions</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="targetCategory">Catégorie Ciblée</Label>
        <Select onValueChange={(value) => form.setValue('targetCategory', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner la catégorie ciblée" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="citoyen">Citoyen</SelectItem>
            <SelectItem value="administration">Administration</SelectItem>
            <SelectItem value="entreprises">Entreprises</SelectItem>
            <SelectItem value="investisseur">Investisseur</SelectItem>
            <SelectItem value="associations">Associations</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="submissionLocation">Où déposer le dossier - Administration concernée</Label>
        <Input
          id="submissionLocation"
          placeholder="Administration concernée"
          {...form.register('submissionLocation')}
        />
      </div>

      <div className="space-y-4">
        <Label>Validité de la procédure</Label>
        <RadioGroup
          value={form.watch('validityType') || 'periodic'}
          onValueChange={(value: 'periodic' | 'open') => form.setValue('validityType', value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="periodic" id="periodic" />
            <Label htmlFor="periodic">Périodique</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="open" id="open" />
            <Label htmlFor="open">Ouverte</Label>
          </div>
        </RadioGroup>
        
        {form.watch('validityType') === 'periodic' && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="validityStartDate">Du</Label>
              <Input
                id="validityStartDate"
                type="date"
                {...form.register('validityStartDate')}
              />
            </div>
            <div>
              <Label htmlFor="validityEndDate">Au</Label>
              <Input
                id="validityEndDate"
                type="date"
                {...form.register('validityEndDate')}
              />
            </div>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="processingDuration">Durée du traitement (jours)</Label>
        <Input
          id="processingDuration"
          type="number"
          placeholder="Nombre de jours"
          {...form.register('processingDuration')}
        />
      </div>

      <div className="space-y-4">
        <Label>Frais</Label>
        <RadioGroup
          value={form.watch('feeType') || 'gratuit'}
          onValueChange={(value: 'gratuit' | 'payant') => form.setValue('feeType', value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="gratuit" id="gratuit" />
            <Label htmlFor="gratuit">Gratuit</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="payant" id="payant" />
            <Label htmlFor="payant">Payant</Label>
          </div>
        </RadioGroup>
        
        {form.watch('feeType') === 'payant' && (
          <Input
            placeholder="Montant en DA"
            {...form.register('feeAmount')}
          />
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="digitization"
            checked={form.watch('digitization') || false}
            onCheckedChange={(checked) => form.setValue('digitization', checked)}
          />
          <Label htmlFor="digitization">Numérisation de la procédure</Label>
        </div>

        {form.watch('digitization') && (
          <div className="space-y-4 pl-6 border-l-2 border-muted">
            <div>
              <Label htmlFor="digitizationDate">Date de la numérisation</Label>
              <Input
                id="digitizationDate"
                type="date"
                {...form.register('digitizationDate')}
              />
            </div>
            <div>
              <Label htmlFor="electronicPortalLink">Lien du portail électronique</Label>
              <Input
                id="electronicPortalLink"
                type="url"
                placeholder="https://..."
                {...form.register('electronicPortalLink')}
              />
            </div>
            <div>
              <Label htmlFor="mobileAppLink">Lien de l'application mobile (si elle existe)</Label>
              <Input
                id="mobileAppLink"
                type="url"
                placeholder="https://..."
                {...form.register('mobileAppLink')}
              />
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="thirdPartySubmission"
            checked={form.watch('thirdPartySubmission') || false}
            onCheckedChange={(checked) => form.setValue('thirdPartySubmission', checked)}
          />
          <Label htmlFor="thirdPartySubmission">Dépôt par une tierce personne</Label>
        </div>

        <div>
          <Label htmlFor="withdrawalTime">Quand retirer l'acte ou le service administratif demandé</Label>
          <Input
            id="withdrawalTime"
            placeholder="Délai de retrait"
            {...form.register('withdrawalTime')}
          />
        </div>

        <div>
          <Label htmlFor="withdrawalMethod">Comment retirer l'acte ou le service administratif demandé</Label>
          <Textarea
            id="withdrawalMethod"
            placeholder="Modalités de retrait"
            rows={2}
            {...form.register('withdrawalMethod')}
          />
        </div>

        <div>
          <Label htmlFor="documentValidity">Validité de l'acte ou du service administratif demandé</Label>
          <Input
            id="documentValidity"
            placeholder="Durée de validité"
            {...form.register('documentValidity')}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="hasAppeal"
            checked={form.watch('hasAppeal') || false}
            onCheckedChange={(checked) => form.setValue('hasAppeal', checked)}
          />
          <Label htmlFor="hasAppeal">Recours</Label>
        </div>

        {form.watch('hasAppeal') && (
          <div className="space-y-4 pl-6 border-l-2 border-muted">
            <div>
              <Label htmlFor="appealLocation">Où déposer</Label>
              <Input
                id="appealLocation"
                placeholder="Lieu de dépôt du recours"
                {...form.register('appealLocation')}
              />
            </div>
            <div>
              <Label htmlFor="appealDeadline">Les délais</Label>
              <Input
                id="appealDeadline"
                placeholder="Délais de recours"
                {...form.register('appealDeadline')}
              />
            </div>
            <div>
              <Label htmlFor="appealFees">Les frais</Label>
              <Input
                id="appealFees"
                placeholder="Frais de recours"
                {...form.register('appealFees')}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
