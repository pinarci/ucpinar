export const waterGuideFaq = [
  {
    question: "Suyun insan yaşamı açısından önemi nedir?",
    answer: "Su; vücut sıcaklığının düzenlenmesi, besinlerin taşınması ve normal fiziksel işlevlerin sürdürülmesi için gereklidir. İhtiyaç; yaşa, sağlık durumuna, hareket düzeyine ve hava sıcaklığına göre değişir.",
  },
  {
    question: "Günde kaç litre su tüketilmelidir?",
    answer: "EFSA, yetişkinler için yiyecek ve tüm içeceklerden gelen toplam suyu kadınlarda yaklaşık 2,0 L, erkeklerde 2,5 L düzeyinde yeterli alım olarak değerlendirir. Sıcak hava, yoğun egzersiz, gebelik, emzirme ve bazı sağlık durumları ihtiyacı değiştirebilir; kişisel tıbbi öneri için sağlık uzmanına danışılmalıdır.",
  },
  {
    question: "Kaç çeşit ambalajlı su vardır?",
    answer: "Sağlık Bakanlığı kaynaklarında Türkiye'deki ambalajlı sular üç ana adla sınıflandırılır: doğal kaynak suyu, doğal mineralli su ve içme suyu. Bu adlar suyun kaynağına, izin verilen işlemlere ve ilgili mevzuata göre farklı anlamlar taşır.",
  },
  {
    question: "Doğal kaynak suları birbirinden farklı mıdır?",
    answer: "Evet. Kaynağın geçtiği jeolojik yapı; kalsiyum, magnezyum ve diğer çözünmüş minerallerin düzeyini, dolayısıyla tadı ve sertliği etkileyebilir. Karşılaştırma yaparken yalnız tada değil, etiketteki bilgiler ile güncel analiz kayıtlarına birlikte bakılmalıdır.",
  },
  {
    question: "Suda sertlik ve yumuşaklık nedir? Hangisi tercih edilmelidir?",
    answer: "Sertlik başlıca kalsiyum ve magnezyum miktarıyla ilişkilidir. Sert su kireçlenme ve tat üzerinde fark yaratabilir; Dünya Sağlık Örgütü içme suyundaki sertlik için sağlık temelli bir sınır değer belirlememiştir. Tercih çoğunlukla tat ve kullanım alışkanlığına bağlıdır.",
  },
  {
    question: "Ambalajlı sularda tek kaynaktan dolum neden önemlidir?",
    answer: "Tek bir kaynağa dayalı dolum, kaynağın izlenmesini ve ürün bileşiminin dönemler arasında karşılaştırılmasını kolaylaştırabilir. Bununla birlikte kaliteyi gösteren asıl kayıt; mevzuata uygun izin, düzenli numune alma ve laboratuvar analizleridir.",
  },
  {
    question: "Arıtılmış su ne demektir?",
    answer: "Arıtılmış su; başlangıç suyundaki belirli mikroorganizmaları, parçacıkları veya kimyasalları azaltmak amacıyla filtrasyon, dezenfeksiyon, ters ozmoz ya da benzeri işlemlerden geçirilen sudur. Her yöntem aynı maddeleri gidermez; sistemin amacı ve doğrulanmış performansı önemlidir.",
  },
  {
    question: "Arıtılmış su ile doğal kaynak suyu arasındaki fark nedir?",
    answer: "Doğal kaynak suyu belirli bir yer altı kaynağından gelir ve mevzuatta izin verilen sınırlı işlemlerle ambalajlanır. Arıtılmış suda ise başlangıç suyunun özellikleri uygulanan işlemle değiştirilir. Bu fark tek başına birinin güvenli, diğerinin güvensiz olduğu anlamına gelmez; uygunluk analizlerle değerlendirilir.",
  },
  {
    question: "Su arıtma cihazı tanıtımlarındaki hızlı testler ne kadar bilgi verir?",
    answer: "TDS, pH, renk veya elektroliz gösterimleri suyun yalnız belirli fiziksel ya da kimyasal özelliklerini gösterir; tek başına mikrobiyolojik ve kimyasal güvenliği kanıtlamaz. Bir cihaz değerlendirilirken hedeflenen kirletici, bağımsız ürün sertifikası, bakım koşulları ve yetkili laboratuvar sonucu aranmalıdır.",
  },
  {
    question: "Damacana pompası koku veya tat değişikliğine yol açabilir mi?",
    answer: "Temizlenmeyen, ıslak bırakılan veya aşınan pompa ve hortum parçaları tat ya da koku değişikliğine yol açabilir. Pompa üretici talimatına göre temizlenip tamamen kurutulmalı, yıpranan parçalar değiştirilmeli ve damacana kapağının sağlam olduğu kontrol edilmelidir. Sorun sürerse su tüketilmeden bayiyle iletişime geçilmelidir.",
  },
  {
    question: "Su sebilleri koku veya tat değişikliğine yol açabilir mi?",
    answer: "Sebilin haznesi, muslukları ve varsa filtresi düzenli temizlenmediğinde tortu ve mikroorganizma birikimi oluşabilir. Cihaz üretici talimatına göre temizlenmeli, bakımı yapılmalı ve doğrudan güneşten korunmalıdır. Kalıcı tat, koku veya görünüm değişikliğinde kullanım durdurulup teknik servis ya da bayiyle görüşülmelidir.",
  },
] as const;

export const waterGuideSources = [
  {
    label: "EFSA · Su için beslenme referans değerleri",
    url: "https://www.efsa.europa.eu/en/press/news/nda100326",
  },
  {
    label: "T.C. Sağlık Bakanlığı · Ambalajlı su türleri",
    url: "https://istanbulism.saglik.gov.tr/TR-109717/ambalajli-sular.html",
  },
  {
    label: "Dünya Sağlık Örgütü · İçme suyunda sertlik",
    url: "https://www.who.int/docs/default-source/wash-documents/wash-chemicals/hardness-chemical-fact-sheet.pdf",
  },
  {
    label: "Dünya Sağlık Örgütü · Toplam çözünmüş madde",
    url: "https://www.who.int/publications/m/item/chemical-fact-sheets--total-dissolved-solids",
  },
  {
    label: "CDC · Ev tipi su filtresi seçimi",
    url: "https://www.cdc.gov/drinking-water/prevention/about-choosing-home-water-filters.html",
  },
  {
    label: "CDC · Su kullanan cihazların temizliği ve bakımı",
    url: "https://www.cdc.gov/drinking-water/prevention/preventing-waterborne-germs-at-home.html",
  },
] as const;
