# Üçpınar Content Sources

Bu belge Phase 3 içerik entegrasyonunda kullanılan kaynakların ve production kullanım kararlarının kaydıdır. `NewInfos/` authoritative kaynak arşividir; orijinaller değiştirilmez. Web kopyaları yalnız `public/` altında tutulur.

## Source levels

| Level | Kullanım |
|---|---|
| `userProvided` | Marka sahibi/kullanıcı tarafından doğrudan sağlanan bilgi veya asset |
| `officialDocument` | Resmî kurum belgesi; güncel public fact için en güçlü seviye |
| `archivedCompanyWebsite` | Üçpınar'ın Wayback üzerinden alınmış eski kurumsal anlatısı |
| `historicalPress` | Ulus ve Zafer gibi tarihsel basın kayıtları |
| `researchCandidate` | Güncelliği marka/bayi tarafından teyit edilmesi gereken web araştırması |
| `legacyCandidate` | Eski siteye ait bayi veya iletişim verisi; current kabul edilmez |
| `previewOnly` | Temsili veya hakları production için kesinleşmemiş görsel |

## NewInfos audit

| Source file | Category | İçerik | Production kararı |
|---|---|---|---|
| `ANALZ_20240301.pdf` | `currentOfficial` | 01.03.2024, protokol 2024-796-1, 19 L damacana | Belge kartı; arşivde yalnız 1/3 sayfa mevcut |
| `ANALZ_20240605.pdf` | `currentOfficial` | 12.06.2024, protokol 2024-2463-1, tesis adresi, 15-19 L dolum hattı, 19 L | Belge kartı; arşivde yalnız 1/3 sayfa mevcut |
| `ANALZ_20240711.pdf` | `currentOfficial` | 11.07.2024, protokol 2024-2839-1, tesis adresi, 15-19 L dolum hattı, 19 L | Belge kartı; arşivde yalnız 1/3 sayfa mevcut |
| `analiz_20240917.pdf` | `currentOfficial` | 17.09.2024, protokol 2024-4158-1, 19 L damacana | Belge kartı; arşivde yalnız 1/3 sayfa mevcut |
| `analiz_20241001.pdf` | `currentOfficial` | 01.10.2024, protokol 2024-4428-1, 19 L damacana | Belge kartı; arşivde yalnız 1/3 sayfa mevcut |
| `ANALZ_20241105.pdf` | `currentOfficial` | 12.11.2024, protokol 2024-5157-1, tesis adresi, dolum hattı, 19 L; tam 3 sayfa | Belge kartı ve nötr metadata |
| `analiz 2025-01-27.pdf` | `currentOfficial` | 27.01.2025, protokol 2025-314-1, Üçpınar Kaynağı, tesis adresi, güncel tüzel unvan; tam 2 sayfa | Güncel featured rapor ve current facts için canonical resmî kaynak |
| `SU HAKKINDA HERŞEY.docx` | `historicalCompanySource`, `legacyDealerData`, `outdatedHealthInformation` | Eski site tarihçesi, tarihsel unvan, 37 bayi kaydı, eski telefonlar, SUDER/BPA metinleri | Yalnız kontrollü tarihçe; bayi/telefon/sağlık metinleri public current içerik değil |
| `su14.jpg` | `outdatedHealthInformation` | 24.10.2008 Sağlık Bakanlığı BPA açıklaması | Public current sağlık içeriği değil |
| `su15.jpg` | `outdatedHealthInformation` | 19.09.2011 BPA/damacana açıklaması | Public current sağlık içeriği değil |

NewInfos içinde yeni logo, ürün renderı veya temiz gazete arşivi bulunmadı. Bu roller için daha önce kullanıcı tarafından sağlanan ve kaynak kaydı bulunan mevcut assetler korundu.

## Fact register

| Field | Value | Source file | Source type | Date | Strength | Current / historical | Production use | Conflict notes |
|---|---|---|---|---|---|---|---|---|
| Brand | Üçpınar Kaynak Suyu | `analiz 2025-01-27.pdf` + user input | `officialDocument` + `userProvided` | 27.01.2025 | Strong | Current | Evet | Yok |
| Current legal name | ÜÇPINAR KAYNAK SUYU GIDA İNŞ. TEK. TURZ. OTO SAN. TİC. LTD. ŞTİ. | `analiz 2025-01-27.pdf` | `officialDocument` | 27.01.2025 | Strong | Current | Footer/veri modeli | 2024 yazım farkları canonical yapılmadı |
| Historical legal name | ÜÇPINAR Kaynak Suyu Sanayi ve Ticaret Ltd. Şti. | `SU HAKKINDA HERŞEY.docx` | `archivedCompanyWebsite` | Tarihsiz arşiv | Historical | Historical | Yalnız metadata/docs | Current unvanla birleştirilmedi |
| Facility address | Esenboğa Yolu 16. Km., Sarayköy, Pursaklar / Ankara | 2025 raporu; 2024-06, 07, 11 raporları | `officialDocument` | 2024-2025 | Strong + corroborating | Current | Homepage, iletişim, analizler | Koordinat türetilmedi |
| Source / monitoring point | Üçpınar Kaynağı | `analiz 2025-01-27.pdf` | `officialDocument` | 27.01.2025 | Strong | Current | Homepage ve analizler | Yok |
| Product | 19 L Damacana Su; Orijinal Damacana, Etiketli, 19 L | 2024 analiz raporları | `officialDocument` | 2024 | Corroborating | Current | Homepage ürün bölümü | 2025 kaynak numunesi 1 L + 5 L PET'tir; 19 L desteği 2024 belgelerinden gelir |
| Filling line | 15-19 L'lik dolum hattı | 2024-06, 07, 11 raporları | `officialDocument` | 2024 | Corroborating | Current | Veri modeli ve rapor kartları | Büyük marketing claim yapılmadı |
| Distribution | Bayi ağı üzerinden tüketiciye ulaşır | Kullanıcı girdisi | `userProvided` | Phase 1 | Strong | Current | Homepage ve bayiler | Bayi kayıtlarının kendisi ayrıca doğrulanır |
| Founding year | User: 1944; archived site: 1943; resolved: `null` | User input + `SU HAKKINDA HERŞEY.docx` | `userProvided` + `archivedCompanyWebsite` | Historical | Conflict | Unresolved | Public copy: “1940'lı yıllardan bugüne” | 1943 veya 1944 seçilmedi |
| Historical claims | Ankara'nın ilk / Türkiye'nin dördüncü; tam otomatik; el değmeden | `SU HAKKINDA HERŞEY.docx` | `archivedCompanyWebsite` | Historical | Historical | Historical | Yalnız metadata; homepage claim değil | Güncel teknik doğrulamaya çevrilmedi |
| Legacy dealers | 37 bölge/telefon kaydı | `SU HAKKINDA HERŞEY.docx` | `legacyCandidate` | Historical | Restricted | Historical | Public current bayi listesine alınmadı | Bazı eski sabit hatlar alan kodsuzdur; aynen korundu |
| Legacy contacts | Bayilik ve kurumsal bayi: 0 530 880 67 80 | `SU HAKKINDA HERŞEY.docx` | `legacyCandidate` | Historical | Restricted | Historical | Public iletişimde kullanılmadı | Güncellik doğrulanmadı |
| Product visual | `/product/ucpinar-19l-damacana-nobackground.png` | Kullanıcı tarafından sağlanan mevcut asset | `userProvided` | Phase 2 | Strong as approved visual | Current visual | Hero ve ürün bölümü | `assetType: brandProductRender`; `isPhotographicEvidence: false` |

## Analysis archive and legal caution

Public kopyalar `public/documents/analizler/` altındadır ve NewInfos orijinalleriyle SHA-256 düzeyinde aynıdır. Kartlar rapor tarihi esas alınarak azalan tarih sırasındadır.

Raporlardaki açıklamalar, belgenin kısmen kullanılamayacağını, laboratuvar izni olmadan çoğaltılamayacağını ve özel istek raporlarının reklam amacıyla kullanılamayacağını belirtir. Bu nedenle:

- `permissionReview: true` tüm raporlarda korunur.
- Sonuçlar reklam grafiğine, sağlık faydasına veya rakip karşılaştırmasına dönüştürülmez.
- pH, iletkenlik, sodyum ve diğer ölçümler homepage marketing statı olarak kullanılmaz.
- Public sunum tam PDF bağlantısı, kurum, tarih, protokol ve nötr durum özetiyle sınırlıdır.
- Production launch öncesinde belge yayın/çoğaltma izni ayrıca gözden geçirilmelidir.

## Production safety

- Current telefon, e-posta, çalışma saati, koordinat ve yönetici adı için resmî kaynak bulunmadı; bu alanlar `null` bırakıldı.
- Eski bayi ve telefonlar yalnız `legacyDealerCandidates` / `legacyContactCandidates` olarak saklanır.
- Generic tesis görselleri `previewOnly`, `representsCompanyFacility: false` olarak kalır ve ordinary production içerikte render edilmez.
- 2008/2011 BPA ve eski SUDER içerikleri `outdatedHealthInformation` olarak saklanır; homepage veya güncel sağlık tavsiyesi değildir.
