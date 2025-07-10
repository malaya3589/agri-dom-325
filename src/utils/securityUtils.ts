
import { securityMonitor, unifiedValidation, unifiedSanitizer, unifiedSecurityUtils } from './unifiedSecurity';

/**
 * Utilitaires de sécurité optimisés et simplifiés
 */

// Validation sécurisée des entrées
export const secureValidation = {
  email: unifiedValidation.email,
  phone: unifiedValidation.phone,
  strongPassword: unifiedValidation.strongPassword,
  input: (input: string, context: string = 'general') => {
    return securityMonitor.validateInput(input, context);
  }
};

// Sanitisation sécurisée
export const secureSanitize = {
  html: unifiedSanitizer.html,
  filename: unifiedSanitizer.filename,
  url: unifiedSanitizer.url
};

// Génération de tokens sécurisés
export const generateSecureToken = unifiedSecurityUtils.generateSecureToken;

// Validation de fichiers
export const validateFileUpload = unifiedSecurityUtils.validateFileUpload;
