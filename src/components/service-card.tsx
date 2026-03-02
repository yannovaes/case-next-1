import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServiceCard({ titulo, descricao }: { titulo: string; descricao: string }) {
  return (
    <Card className="flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>
          {/* Colocamos o H3 aqui dentro. Ele herda os estilos do Title e resolve o SEO. */}
          <h3 className="text-primary text-base leading-tight">
            {titulo}
          </h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {descricao}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-meta-highlight text-primary hover:bg-meta-highlight/10">
          Saiba Mais
        </Button>
      </CardFooter>
    </Card>
  );
}