import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TestComponent() {
  return (
    <div className="p-4 bg-background">
      <Card className="p-6 bg-card">
        <CardContent>
          <h2 className="text-primary">Тестовый компонент</h2>
          <Button className="mt-4">Нажми меня</Button>
        </CardContent>
      </Card>
    </div>
  );
}
