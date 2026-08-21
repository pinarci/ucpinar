import { Container } from "@/components/ui/container";

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <header className="page-intro">
      <Container>
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro__lede">{description}</p>
      </Container>
    </header>
  );
}
