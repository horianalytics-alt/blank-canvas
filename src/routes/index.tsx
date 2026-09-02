import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novo Projeto" },
      { name: "description", content: "Página inicial em branco para começar a construir." },
      { property: "og:title", content: "Novo Projeto" },
      { property: "og:description", content: "Página inicial em branco para começar a construir." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <p className="text-sm text-muted-foreground">Página em branco</p>
    </main>
  );
}
