import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Login from "./routes/login";
import Dashboard from "./routes/dashboard";
import { RequireAuth } from "./routes/require-auth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
