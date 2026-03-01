# SEO Improvements for Deployed Products

**Purpose:** Add meta tags, Open Graph, and structured data to improve discoverability

**Impact:** Better social media previews, improved SEO, more clicks from Reddit/social shares

---

## JobFlow (job-tracker/index.html)

**Current Issues:**
- No meta description
- No Open Graph tags
- No Twitter cards
- No structured data

**Add to `<head>`:**

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Free job tracker for UK sole traders. Track quotes, jobs, and invoices. Never lose track of outstanding payments again.">
<meta name="keywords" content="job tracker, UK sole trader, invoice tracking, quote management, self-employed, MTD">
<meta name="author" content="Sterling">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://clawpinchybot.github.io/jobflow/">
<meta property="og:title" content="JobFlow - Free Job Tracker for UK Sole Traders">
<meta property="og:description" content="Track quotes, jobs, and invoices. Never lose track of outstanding payments again. 100% free, works offline.">
<meta property="og:image" content="https://clawpinchybot.github.io/jobflow/screenshot.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://clawpinchybot.github.io/jobflow/">
<meta property="twitter:title" content="JobFlow - Free Job Tracker for UK Sole Traders">
<meta property="twitter:description" content="Track quotes, jobs, and invoices. Never lose track of outstanding payments again. 100% free, works offline.">
<meta property="twitter:image" content="https://clawpinchybot.github.io/jobflow/screenshot.png">

<!-- Canonical URL -->
<link rel="canonical" href="https://clawpinchybot.github.io/jobflow/">
```

**Structured Data (JSON-LD):**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "JobFlow",
  "description": "Free job tracker for UK sole traders",
  "url": "https://clawpinchybot.github.io/jobflow/",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Sole Traders"
  }
}
</script>
```

---

## MTD Calculator (mtd-calculator/index.html)

**Add to `<head>`:**

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Free MTD readiness checker. Find out if you need to comply with Making Tax Digital for Income Tax (April 2026). Check your deadline and requirements.">
<meta name="keywords" content="MTD, Making Tax Digital, HMRC, self-assessment, sole trader, April 2026, tax compliance">
<meta name="author" content="Sterling">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://clawpinchybot.github.io/mtd-calculator/">
<meta property="og:title" content="MTD Readiness Calculator - Are You Ready for Making Tax Digital 2026?">
<meta property="og:description" content="Free checker: Find out if you need to comply with Making Tax Digital for Income Tax. Check your deadline in 30 seconds.">
<meta property="og:image" content="https://clawpinchybot.github.io/mtd-calculator/screenshot.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://clawpinchybot.github.io/mtd-calculator/">
<meta property="twitter:title" content="MTD Readiness Calculator - Are You Ready for Making Tax Digital 2026?">
<meta property="twitter:description" content="Free checker: Find out if you need to comply with Making Tax Digital for Income Tax. Check your deadline in 30 seconds.">
<meta property="twitter:image" content="https://clawpinchybot.github.io/mtd-calculator/screenshot.png">

<!-- Canonical URL -->
<link rel="canonical" href="https://clawpinchybot.github.io/mtd-calculator/">
```

**Structured Data:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "MTD Readiness Calculator",
  "description": "Free tool to check Making Tax Digital compliance requirements",
  "url": "https://clawpinchybot.github.io/mtd-calculator/",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP"
  }
}
</script>
```

---

## Landlord Tracker (landlord-tracker/index.html)

**Add to `<head>`:**

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Free UK landlord compliance tracker. Track EICR, Gas Safety, EPC deadlines. Never miss a compliance deadline again. Avoid fines up to £30,000.">
<meta name="keywords" content="landlord compliance, EICR, gas safety, EPC, rental property, UK landlord, compliance tracker">
<meta name="author" content="Sterling">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://clawpinchybot.github.io/landlord-tracker/">
<meta property="og:title" content="UK Landlord Compliance Tracker - Free Safety Certificate Manager">
<meta property="og:description" content="Track EICR, Gas Safety, EPC & more. Never miss a deadline. Avoid fines up to £30,000. 100% free.">
<meta property="og:image" content="https://clawpinchybot.github.io/landlord-tracker/screenshot.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://clawpinchybot.github.io/landlord-tracker/">
<meta property="twitter:title" content="UK Landlord Compliance Tracker - Free Safety Certificate Manager">
<meta property="twitter:description" content="Track EICR, Gas Safety, EPC & more. Never miss a deadline. Avoid fines up to £30,000. 100% free.">
<meta property="twitter:image" content="https://clawpinchybot.github.io/landlord-tracker/screenshot.png">

<!-- Canonical URL -->
<link rel="canonical" href="https://clawpinchybot.github.io/landlord-tracker/">
```

---

## Section 21 Checker (section21-checker/index.html)

**Add to `<head>`:**

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Section 21 deadline checker. April 30, 2026 is your last chance to serve notice. Check if you need to act before 'no-fault' eviction is abolished.">
<meta name="keywords" content="Section 21, Renters' Rights Act, landlord eviction, April 2026, no-fault eviction, Form 6A">
<meta name="author" content="Sterling">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://clawpinchybot.github.io/section21-checker/">
<meta property="og:title" content="Section 21 Deadline Checker - April 30, 2026 is Your Last Chance">
<meta property="og:description" content="Check if you need to serve Section 21 before 'no-fault' eviction is abolished on May 1, 2026. Free tool.">
<meta property="og:image" content="https://clawpinchybot.github.io/section21-checker/screenshot.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://clawpinchybot.github.io/section21-checker/">
<meta property="twitter:title" content="Section 21 Deadline Checker - April 30, 2026 is Your Last Chance">
<meta property="twitter:description" content="Check if you need to serve Section 21 before 'no-fault' eviction is abolished on May 1, 2026. Free tool.">
<meta property="twitter:image" content="https://clawpinchybot.github.io/section21-checker/screenshot.png">

<!-- Canonical URL -->
<link rel="canonical" href="https://clawpinchybot.github.io/section21-checker/">
```

---

## Implementation Notes

**Screenshots Needed:**
- Create screenshot.png for each product (1200x630px for OG images)
- Show the product in action with clear UI
- Add text overlay with key benefit

**Testing:**
- Use Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Use Twitter Card Validator: https://cards-dev.twitter.com/validator
- Use Google Rich Results Test: https://search.google.com/test/rich-results

**Expected Impact:**
- Better social media previews = more clicks from Reddit/Twitter
- Structured data = potential rich snippets in Google
- Meta descriptions = better click-through rates from search

---

*Created: 2026-03-01*
*Next: Lewis to add these tags to deployed HTML files and create screenshots*
