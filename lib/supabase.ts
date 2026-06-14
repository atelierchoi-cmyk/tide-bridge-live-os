import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function getUsableEnvValue(value: string | undefined) {
  const normalized = value?.trim().toLowerCase();

  if (!value || !normalized) return null;

  const isPlaceholder = [
    'placeholder',
    'example',
    'your-project-url',
    'your-anon-key',
    'your-service-role-key',
    'changeme'
  ].some((placeholder) => normalized.includes(placeholder));

  return isPlaceholder ? null : value.trim();
}

function getUsableSupabaseUrl(value: string | undefined) {
  const usableValue = getUsableEnvValue(value);

  if (!usableValue) return null;

  try {
    const url = new URL(usableValue);
    return url.protocol === 'https:' || url.protocol === 'http:' ? usableValue : null;
  } catch {
    return null;
  }
}

const usableSupabaseUrl = getUsableSupabaseUrl(supabaseUrl);
const usableSupabaseAnonKey = getUsableEnvValue(supabaseAnonKey);
const usableServiceRoleKey = getUsableEnvValue(serviceRoleKey);

export const hasSupabaseEnv = Boolean(usableSupabaseUrl && (usableSupabaseAnonKey || usableServiceRoleKey));

export function getSupabaseBrowserClient() {
  if (!usableSupabaseUrl || !usableSupabaseAnonKey) return null;
  return createClient(usableSupabaseUrl, usableSupabaseAnonKey);
}

export function getSupabaseAdminClient() {
  if (!usableSupabaseUrl || !usableServiceRoleKey) return null;
  return createClient(usableSupabaseUrl, usableServiceRoleKey, {
    auth: {
      persistSession: false
    }
  });
}
