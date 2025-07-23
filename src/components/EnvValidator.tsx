// src/components/EnvValidator.tsx
import React from 'react';

const EnvValidator = () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const isValidUrl = (url?: string): boolean => {
    try {
      if (!url) return false;
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div style={{ padding: '1rem', background: '#fff3cd', border: '1px solid #ffeeba' }}>
      <h3>🧪 Validación de Entorno</h3>
      <p>
        <strong>NEXT_PUBLIC_API_BASE_URL:</strong>{' '}
        {apiBaseUrl || <span style={{ color: 'red' }}>No definida</span>}
      </p>
      <p>
        Estado:{' '}
        {isValidUrl(apiBaseUrl)
          ? <span style={{ color: 'green' }}>✅ Válida</span>
          : <span style={{ color: 'red' }}>❌ Inválida o ausente</span>
        }
      </p>
    </div>
  );
};

export default EnvValidator;
