import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Stride</h1>
      <p>Your progress, simplified.</p>

      <div style={{ marginTop: 16 }}>
        <Link to="/login">Log in</Link> <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}
