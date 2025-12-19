import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import type { JSX } from "react";

export function AppLayout(): JSX.Element {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
