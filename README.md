# Üçpınar V2

Üçpınar Kaynak Suyu kurumsal web sitesi için Next.js tabanlı ön yüz projesi.

## Yerel geliştirme

```bash
cd /Users/mustafa/Desktop/ucpinar
pnpm install
pnpm dev
```

## Kontroller

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm test
```

Şirket, bayi, rapor, iletişim ve medya verileri `src/content/site-content.ts` içinde merkezî ve typed olarak tutulur. Doğrulanmamış bilgiler `null` bırakılmıştır.

## Research preview

Local research preview `.env.local` içindeki `NEXT_PUBLIC_RESEARCH_PREVIEW=true` ile açılır. Production-safe varsayılanı `.env.example` içinde `false` olarak tanımlıdır. Kaynak ve doğrulama notları `docs/research-preview-sources.md` dosyasındadır.
