// src/lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchData(endpoint: string, options?: RequestInit) {
  if (!API_BASE_URL) {
    throw new Error('API_BASE_URL no está definido');
  }

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Error ${res.status}: ${errorBody}`);
  }

  return res.json();
}