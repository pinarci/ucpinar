"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="state-page" aria-labelledby="error-title"><div className="container"><p className="eyebrow">Bir sorun oluştu</p><h1 id="error-title">Bu sayfa şu anda yüklenemiyor.</h1><p>Lütfen tekrar deneyin.</p><button type="button" onClick={reset}>Tekrar dene</button></div></section>;
}
