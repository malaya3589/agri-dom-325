
/**
 * Module de sécurité amélioré - Version optimisée et consolidée
 */

import { z } from 'zod';

// Validation sécurisée avec Zod
export const secureValidation = {
  schemas: {
    searchInput: z.string()
      .min(1, "Le terme de recherche ne peut pas être vide")
      .max(200, "Le terme de recherche est trop long")
      .regex(/^[a-zA-Z0-9\s\-\_\.\,\;\:\!\?\'\"\(\)\[\]]+$/, "Caractères non autorisés détectés"),

    fileName: z.string()
      .min(1, "Le nom de fichier ne peut pas être vide")
      .max(255, "Le nom de fichier est trop long")
      .regex(/^[a-zA-Z0-9\s\-\_\.]+$/, "Nom de fichier contient des caractères non autorisés"),

    email: z.string()
      .email("Format d'email invalide")
      .max(254, "Email trop long"),

    url: z.string()
      .url("URL invalide")
      .max(2048, "URL trop longue")
  },

  validate<T>(schema: z.ZodSchema<T>, data: unknown): { 
    success: true; data: T 
  } | { 
    success: false; error: string 
  } {
    try {
      const result = schema.parse(data);
      return { success: true, data: result };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { success: false, error: error.errors[0]?.message || "Données invalides" };
      }
      return { success: false, error: "Erreur de validation" };
    }
  }
};

// Sanitisation sécurisée
export const secureSanitizer = {
  html: (input: string): string => {
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  },

  filename: (filename: string): string => {
    return filename.replace(/[<>:"/\\|?*\x00-\x1f]/g, '_');
  },

  input: (input: string): string => {
    return input.trim().replace(/[<>]/g, '');
  }
};

// Utilitaires de sécurité
export const securityUtils = {
  generateToken: (length: number = 32): string => {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  },

  validateFileUpload: (file: File): { valid: boolean; error?: string } => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png'
    ];

    if (file.size > maxSize) {
      return { valid: false, error: 'Fichier trop volumineux (max 10MB)' };
    }

    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: 'Type de fichier non autorisé' };
    }

    return { valid: true };
  },

  checkPermission: (userRole: string, requiredRole: string): boolean => {
    const roleHierarchy = {
      'admin': 4,
      'manager': 3,
      'editor': 2,
      'viewer': 1
    };
    
    const userLevel = roleHierarchy[userRole as keyof typeof roleHierarchy] || 0;
    const requiredLevel = roleHierarchy[requiredRole as keyof typeof roleHierarchy] || 0;
    
    return userLevel >= requiredLevel;
  }
};

export default {
  validation: secureValidation,
  sanitizer: secureSanitizer,
  utils: securityUtils
};
