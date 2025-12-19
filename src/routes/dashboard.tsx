import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Dashboard() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? "");
    });
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <h1>Dashboard</h1>
      <p>Signed in as {email}</p>
    </div>
  );
}
