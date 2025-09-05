# PRD (Product Requirements Document) - Orsa Gelecek Otomotiv

## 1. Genel Bakış
- **Ürün Adı:** Gelecek Otomotiv Web Sitesi  
- **Versiyon:** 1.0  
- **Hazırlayan:** Mehmet Karaca  
- **Tarih:** 5 Eylül 2025  

---

## 2. Ürün Açıklaması
Bu bir bayi sitesidir. Mercedes-Benz araçlarının sergilendiği, müşterilerin araçları inceleyebildiği ve test sürüşü için randevu alabildiği sayfalara bağlantılar bulunmaktadır.  
Bu bağlantılar müşterileri Mercedes Türkiye'nin web sitesindeki ilgili sayfalara yönlendirmektedir.  

- Site içeriği **seyrek güncellenir**.  
- Yönetim paneli altyapısı hazırdır.  
- API servisleri geliştirme aşamasındadır.  

---

## 3. Sayfa Yapısı

| Sayfa                 | İçerik                         | Render Stratejisi   | Revalidate |
|-----------------------|--------------------------------|---------------------|------------|
| `/` Ana sayfa         | Video slider, haberler, istatistikler | **SSG + ISR**       | 6–12 saat |
| `/haberler`           | Haber listesi                  | **SSG + ISR**       | 6–12 saat |
| `/haberler/[slug]`    | Haber detay sayfası            | **SSG + On-demand ISR** | 24 saat veya webhook |
| `/hakkimizda`         | Statik içerik                  | **SSG**             | Yok        |
| `/iletisim`           | Form + harita                  | **SSG**             | Yok        |


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
- **Kullanım Örnekleri:**  
  - Ana sayfadaki istatistikler: `revalidate: 21600` (6 saat).  
  - Haber listesi: `revalidate: 43200` (12 saat).  

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

## 5. Teknik Özellikler
- **Framework:** Next.js (App Router)  
- **Render Stratejisi:** SSG + ISR + On-demand ISR  
- **Dil:** JavaScript (opsiyonel TypeScript)  
- **Stil:** CSS Modules  
- **Animasyon Kütüphaneleri:**  
  - AOS (scroll animasyonları)  
- **Görsel optimizasyon:** `next/image` (WebP/AVIF, lazy load)  

---

## 6. Performans Hedefleri
- **Sayfa yükleme süresi:** < 3 saniye  
- **Mobil uyumluluk:** %100  
- **SEO uyumluluğu:** Metadata, OpenGraph, Schema.org (NewsArticle)  
- **Lighthouse Skoru:** 90+ (Performans, SEO, Erişilebilirlik, Best Practices)  

---

## 7. Güvenlik
- SSL Sertifikası  
- KVKK uyumlu veri koruma (iletişim/randevu formlarında **açık rıza kutusu**)  
- Güvenli form işlemleri:  
  - CSRF koruması  
  - reCAPTCHA v3 (bot koruması)  
  - Server-side validasyon  

---

## 8. Erişilebilirlik
- Semantik HTML (`<header>`, `<main>`, `<footer>`)  
- Klavye erişilebilirliği (slider kontrolü dahil)  
- Kontrast ve odak halkaları  

---

## 9. Gelecek Güncellemeler
- **Canlı sohbet desteği** (3. parti entegrasyonu, `afterInteractive` script yükleme)  
- **Çoklu dil desteği** (isteğe bağlı, `next-intl` veya i18n routes)  

---

## 10. Dağıtım & Operasyon

### 10.1 Vercel (Önerilen)
- Kolay ISR desteği (native)  
- Preview deploy (PR bazlı)  
- Otomatik CDN önbellekleme  
- `.env` değişken yönetimi (dashboard üzerinden)  

### 10.2 Vercel Harici Hosting Gereklilikleri
Next.js SSR/ISR özelliklerini tam çalıştırmak için ek gereksinimler vardır:  

1. **Node.js Runtime**  
   - Node.js 18+ (LTS)  
   - Paket yöneticisi: npm veya pnpm  

2. **Build & Çalıştırma**  
   - Build komutu:  
     ```bash
     npm run build
     ```
   - Çalıştırma (standalone):  
     ```bash
     npm run start
     ```
   - `output: standalone` ayarı `next.config.js` içine eklenmeli:  
     ```js
     module.exports = {
       output: 'standalone',
     }
     ```

3. **ISR (Incremental Static Regeneration)**  
   - Node.js process **sürekli çalışır** durumda olmalı.  
   - CDN önbellekleme desteklenmeli.  
   - Container resetlenirse ISR cache sıfırlanır → yeni içerik için yeniden build gerekir.  

4. **On-Demand ISR**  
   - API route (`/api/revalidate`) çalışacak şekilde Node.js runtime’ı açık olmalı.  
   - Admin paneli, güncelleme sonrası bu endpoint’e `POST` atmalı.  

5. **Statik İçerik + CDN**  
   - `/public` içeriği CDN ile dağıtılmalı.  
   - AWS (S3 + CloudFront), Netlify veya Azure CDN gibi çözümler uygundur.  

6. **Reverse Proxy / Load Balancer**  
   - Nginx veya Caddy ile Node.js uygulamasına reverse proxy kurulmalı.  

7. **Ortam Değişkenleri**  
   - `NEXT_PUBLIC_API_BASE_URL`  
   - `REVALIDATE_TOKEN`  
   - `NEXT_PUBLIC_SITE_URL`  

---

## 11. CI/CD
- **Kod Kalitesi:** ESLint (ve opsiyonel TypeScript check)  
- **Performans:** Lighthouse CI raporu  
- **Deployment:**  
  - Vercel’de otomatik  
  - Harici ortamda Docker ile önerilir:  
    ```dockerfile
    FROM node:18-alpine
    WORKDIR /app
    COPY package*.json ./
    RUN npm ci
    COPY . .
    RUN npm run build
    CMD ["npm", "start"]
    ```
