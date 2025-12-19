import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSession } from "@/hooks/useSession";
import type { JSX } from "react";

export default function Dashboard(): JSX.Element {
  const { user } = useSession();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Welcome back{user?.email ? `, ${user.email}` : ""}.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Today</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Log weight, calories, and steps.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progress</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Weekly trends and streaks.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Coach</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Daily guidance and insights.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
