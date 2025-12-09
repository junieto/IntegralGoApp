// src/services/supabaseAuth.ts

type LoginResponse = {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    email: string;
  };
};

export async function loginSupabase(
  email: string,
  password: string
  
): Promise<LoginResponse> {
  console.log("Entrando a loginSupabase con:", email, password);
  const response = await fetch("https://xmdowxranajdkiglhnnk.supabase.co/auth/v1/token?grant_type=password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtZG93eHJhbmFqZGtpZ2xobm5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyODQ5MDcsImV4cCI6MjA4MDg2MDkwN30.WON5Ibb0XgBuByqXzIfJor8JZnYElAD0aoKujoGCjh8"
    },
    body: JSON.stringify({ email, password })
  });
  console.log("Status:", response.status);
  if (!response.ok) {
    throw new Error(`Login failed: ${response.statusText}`);
  }

  return response.json();
}