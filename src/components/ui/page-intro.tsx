import { Container } from "@/components/ui/container";

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <header className={`page-intro${description ? "" : " page-intro--compact"}`}>
      <Container>
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h1>{title}</h1>
        {description ? <p className="page-intro__lede">{description}</p> : null}
      </Container>
    </header>
  );
}
