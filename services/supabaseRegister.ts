type RegisterResponse = {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    email: string;
  };
};

export async function registerSupabase({
  name,
  phone,
  birthdate,
  email,
  password
}: {
  name: string;
  phone: string;
  birthdate: string;
  email: string;
  password: string;
}): Promise<RegisterResponse> {
  console.log("Entrando a registerSupabase con:", {
    name,
    phone,
    birthdate,
    email
  });

  // 1️⃣ REGISTRO EN AUTH
  const response = await fetch(
    "https://xmdowxranajdkiglhnnk.supabase.co/auth/v1/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtZG93eHJhbmFqZGtpZ2xobm5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyODQ5MDcsImV4cCI6MjA4MDg2MDkwN30.WON5Ibb0XgBuByqXzIfJor8JZnYElAD0aoKujoGCjh8"
      },
      body: JSON.stringify({
        email,
        password,
        data: {
          nombre: name,
          telefono: phone,
          nacimiento: birthdate
        }
      })
    }
  );

  console.log("Status:", response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.log("Error:", errorText);
    throw new Error(`Register failed: ${response.statusText}`);
  }

  const data: RegisterResponse = await response.json();

  // INSERTAR EN TABLA "usuarios"
  const insertResponse = await fetch(
    "https://xmdowxranajdkiglhnnk.supabase.co/rest/v1/Pacientes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtZG93eHJhbmFqZGtpZ2xobm5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyODQ5MDcsImV4cCI6MjA4MDg2MDkwN30.WON5Ibb0XgBuByqXzIfJor8JZnYElAD0aoKujoGCjh8",
        "Authorization": `Bearer ${data.access_token}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({
        id: data.user.id,
        nombre: name,
        telefono: phone,
        nacimiento: birthdate
      })
    }
  );

  console.log("Insert usuarios status:", insertResponse.status);

  if (!insertResponse.ok) {
    const errorText = await insertResponse.text();
    console.log("Error insertando en usuarios:", errorText);
    throw new Error("Error guardando datos en la tabla usuarios");
  }

  return data;
}