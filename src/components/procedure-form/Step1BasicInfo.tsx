
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormStepProps } from './types';

export function Step1BasicInfo({ form }: FormStepProps) {
  // Données simulées de la nomenclature - à remplacer par les vraies données
  const procedureCategories = [
    "Autorisation administrative",
    "Certificat",
    "Licence",
    "Permis",
    "Déclaration",
    "Enregistrement"
  ];

  const organizations = [
    "Ministère de l'Intérieur",
    "Ministère de la Justice",
    "Ministère de l'Économie",
    "Ministère de la Santé",
    "Ministère de l'Éducation",
    "Wilaya",
    "APC",
    "CNRC"
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Informations générales</h3>
        <p className="text-gray-600">Définissez les informations de base de la procédure</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Nom de la procédure *</Label>
        <Input
          id="name"
          placeholder="Nom de la procédure"
          {...form.register('name', { required: 'Le nom est requis' })}
        />
        {form.formState.errors.name && (
          <p className="text-sm text-red-600">{form.formState.errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          placeholder="Description détaillée de la procédure"
          className="min-h-24"
          {...form.register('description', { required: 'La description est requise' })}
        />
        {form.formState.errors.description && (
          <p className="text-sm text-red-600">{form.formState.errors.description.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="procedureCategory">Catégorie de procédure *</Label>
        <Select onValueChange={(value) => form.setValue('procedureCategory', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner une catégorie" />
          </SelectTrigger>
          <SelectContent>
            {procedureCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {form.formState.errors.procedureCategory && (
          <p className="text-sm text-red-600">{form.formState.errors.procedureCategory.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="sectorAdministration">Secteur et/ou administration *</Label>
        <Select onValueChange={(value) => form.setValue('sectorAdministration', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner une organisation" />
          </SelectTrigger>
          <SelectContent>
            {organizations.map((org) => (
              <SelectItem key={org} value={org}>
                {org}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {form.formState.errors.sectorAdministration && (
          <p className="text-sm text-red-600">{form.formState.errors.sectorAdministration.message}</p>
        )}
      </div>
    </div>
  );
}
