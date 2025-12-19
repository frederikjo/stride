import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  async function sendLink() {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    });

    setMsg(error ? error.message : "Check your email for the login link.");
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>Login</h1>

      <input
        placeholder="email@domain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={sendLink}>Send magic link</button>

      {msg && <p>{msg}</p>}
    </div>
  );
}
