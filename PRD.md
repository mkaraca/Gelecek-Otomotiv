# PRD (Product Requirements Document) - Orsa Gelecek Otomotiv

## 1. Genel Bakış
- **Ürün Adı:** Gelecek Otomotiv Web Sitesi  

---

## 2. Ürün Açıklaması
Bu proje bir otomobil bayi sitesidir. Mercedes Türkiye'nin web sitesi ile bağlantılı çalışmaktadır. Araç listeleri, online satış sayfaları, test sürüşü randevuları Mercedes Türkiye'nin web sitesindeki ilgili sayfalarda yapılmaktadır. Site içeriği daha çok kurum hakkında bilgiler ve model tanıtımları içerir. İçerikler CMS bağlantılı API servisleri ile güncellenir.  

---

## 3. Teknik Özellikler
- **Framework:** Next.js (App Router)  
- **Render Stratejisi:** SSG + ISR + On-demand ISR  
- **Dil:** JavaScript 
- **Stil:** CSS   
- **Animasyon Kütüphaneleri:**  AOS (scroll animasyonları)  
- **Görsel optimizasyon:** `next/image` (lazy load)  

---

## 4. Render Stratejileri: SSG & ISR

### 4.1 SSG (Static Site Generation)
- Sayfalar build zamanı **statik HTML** olarak oluşturulur.  
- **Avantajlar:**  
  - Çok hızlı açılır (CDN üzerinden statik dosya).  
  - SEO için idealdir (arama motorları hazır HTML görür).  
  - Sık değişmeyen sayfalar için mükemmel (örn. `Hakkımızda`, `İletişim`).  
- **Kısıtlar:**  
  - İçerik güncellemesi için siteyi yeniden build etmek gerekir.  

### 4.2 ISR (Incremental Static Regeneration)
- Next.js sayfaları ilk build sırasında statik olarak oluşturur.  
- Belirlenen `revalidate` süresi dolduğunda, ilk ziyaret eden kullanıcı sayfanın **arka planda yeniden oluşturulmasını** tetikler.  
- Kullanıcı eski sayfayı görmeye devam eder, yenisi hazır olunca CDN’e yazılır.  
- **Avantajlar:**  
  - API’den gelen dinamik içerikler (haberler, istatistikler) için uygundur.  
  - Sık deploy yapmadan içerik güncel kalır.  
  - CDN performansı korunur.

### 4.3 On-Demand ISR
- Yönetim panelinde içerik güncellendiğinde otomatik **revalidate webhook** çağrılır.  
- Böylece editör yeni haberi yayınladığında **anında canlıya alınabilir**.  

### 4.4 On-Demand ISR Örneği

Yeni bir haber yayınlandığında yönetim paneli tarafından aşağıdaki endpoint çağrılacaktır:

```http
POST /api/revalidate
Content-Type: application/json

{
  "token": "REVALIDATE_TOKEN",
  "path": "/haberler/yeni-haber"
}
```

---

## 5. Performans Hedefleri
- **Sayfa yükleme süresi:** < 3 saniye  
- **Mobil uyumluluk:** %100  
- **SEO uyumluluğu:** Metadata, OpenGraph, Schema.org  
- **Lighthouse Skoru:** 90+ (Performans, SEO, Erişilebilirlik, Best Practices)  

---

## 6. Dağıtım & Operasyon
Next.js özelliklerini tam çalıştırmak için ek gereksinimler vardır:  
- Node.js Runtime
- Build & Çalıştırma
- ISR (Incremental Static Regeneration)
- On-Demand ISR
- Statik İçerik + CDN
- Reverse Proxy / Load Balancer
- Ortam Değişkenleri