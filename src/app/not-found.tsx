import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";

export default function NotFound() {
  return <section className="state-page"><Container><p className="eyebrow">404 · Sayfa bulunamadı</p><h1>Aradığınız sayfaya ulaşılamıyor.</h1><p>Sayfa taşınmış veya henüz yayına alınmamış olabilir.</p><TextLink href="/" variant="primary">Ana sayfaya dön</TextLink></Container></section>;
}
