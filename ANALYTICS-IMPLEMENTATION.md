# Analytics & Tracking Implementation Guide

**Purpose:** Measure traffic, conversions, and revenue for all Sterling products
**Goal:** Data-driven decisions on kill/keep/scale
**Updated:** March 1, 2026

---

## 🎯 What to Track

### Tier 1: Essential Metrics (Must Have)

**Traffic:**
- Unique visitors per day/week/month
- Traffic sources (Reddit, Twitter, direct, organic)
- Geographic location (UK focus)
- Device type (mobile vs desktop)

**Engagement:**
- Time on site
- Bounce rate
- Pages per session
- Return visitors

**Conversions:**
- Free tool usage (number of calculations, jobs tracked, etc.)
- Chrome extension installs
- Sales/purchases
- Email signups (if applicable)

**Revenue:**
- Total revenue
- Revenue by product
- Revenue by source
- Average order value

### Tier 2: Advanced Metrics (Nice to Have)

**User Behavior:**
- Feature usage (which features are most used)
- User flow (where do people drop off)
- Error rates
- Support requests

**Marketing:**
- Click-through rates (CTR)
- Conversion rate by traffic source
- Cost per acquisition (CPA)
- Return on ad spend (ROAS) - if running ads

---

## 🛠️ Analytics Tools

### Free Options

**Google Analytics 4 (GA4)**
- ✅ Free
- ✅ Comprehensive
- ❌ Complex setup
- ❌ Privacy concerns (GDPR)

**Plausible Analytics**
- ✅ Privacy-friendly (GDPR compliant)
- ✅ Simple dashboard
- ✅ Open source
- ❌ £9/month for 10k pageviews

**Simple Analytics**
- ✅ Privacy-friendly
- ✅ Simple
- ❌ €19/month

**Umami**
- ✅ Free (self-hosted)
- ✅ Privacy-friendly
- ✅ Open source
- ❌ Requires hosting

### Recommendation

**For Sterling Products:**
- **Option A:** Plausible (£9/month) - Best balance of privacy + simplicity
- **Option B:** Umami (Free, self-hosted) - Best for zero cost
- **Option C:** Google Analytics 4 (Free) - Most comprehensive but complex

---

## 📊 Implementation by Product Type

### Free HTML Tools (MTD Calculator, JobFlow, etc.)

**Option 1: Plausible (Recommended)**

1. Sign up at plausible.io
2. Add site: `clawpinchybot.github.io/jobflow/`
3. Add script to `<head>`:
```html
<script defer data-domain="clawpinchybot.github.io/jobflow/" src="https://plausible.io/js/script.js"></script>
```

4. Track custom events:
```html
<script>
  // Track when user completes calculation
  plausible('MTD Check Completed', { props: { threshold: 'over_50k' } })
</script>
```

**Option 2: Umami (Free, Self-Hosted)**

1. Deploy Umami to Render/Railway (free tier)
2. Add site in Umami dashboard
3. Add script to `<head>`:
```html
<script async src="https://your-umami-instance.com/script.js" data-website-id="YOUR-ID"></script>
```

**Option 3: Google Analytics 4**

1. Create GA4 property
2. Add to `<head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

### Chrome Extensions

**Chrome Store Analytics:**
- Built-in analytics in Chrome Developer Dashboard
- Shows: Installs, uninstalls, active users
- Free and automatic

**Custom Analytics (Extension Usage):**
```javascript
// In background.js or popup.js
chrome.storage.local.get(['analyticsEnabled'], function(result) {
  if (result.analyticsEnabled !== false) {
    // Track event
    fetch('https://your-analytics-endpoint.com/event', {
      method: 'POST',
      body: JSON.stringify({
        event: 'audit_completed',
        score: 85,
        timestamp: Date.now()
      })
    });
  }
});
```

**Privacy Note:** Always get user consent before tracking in extensions

---

### SaaS Products (Weather API)

**Stripe Analytics:**
- Built-in revenue tracking
- Shows: MRR, churn, LTV
- Automatic with Stripe

**Custom Analytics:**
```javascript
// Track API usage
app.use((req, res, next) => {
  const startTime = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - startTime;

    // Log to analytics service
    analytics.track('api_request', {
      endpoint: req.path,
      method: req.method,
      status: res.statusCode,
      duration,
      apiKey: req.apiKey // Track by customer
    });
  });

  next();
});
```

---

## 📈 Tracking Implementation Priority

### Week 1: Basic Traffic Tracking
- [ ] Add Plausible to all deployed products
- [ ] Set up Chrome Store analytics (automatic)
- [ ] Create dashboard to view all metrics

### Week 2: Conversion Tracking
- [ ] Track key actions (calculations completed, jobs tracked, etc.)
- [ ] Set up goal tracking in Plausible
- [ ] Track affiliate link clicks

### Week 3: Revenue Tracking
- [ ] Set up Stripe dashboard (if using Stripe)
- [ ] Track sales by source
- [ ] Calculate conversion rates

### Week 4: Advanced Tracking
- [ ] A/B testing setup
- [ ] User behavior tracking
- [ ] Cohort analysis

---

## 🎯 Key Metrics by Product

### MTD Calculator
**Traffic:**
- Unique visitors
- Traffic sources (Reddit, etc.)

**Engagement:**
- Calculations completed
- Results shared

**Revenue:**
- Affiliate clicks
- Affiliate signups (track via affiliate dashboard)

**Target:**
- 100+ visitors/week
- 10+ affiliate clicks/week

---

### JobFlow
**Traffic:**
- Unique visitors
- Return visitors (indicates regular use)

**Engagement:**
- Jobs created
- Jobs tracked over time
- Export usage

**Revenue:**
- Affiliate clicks
- Affiliate signups

**Target:**
- 50+ weekly active users
- 5+ affiliate clicks/week

---

### Landlord Tracker
**Traffic:**
- Unique visitors
- Geographic (UK focus)

**Engagement:**
- Properties added
- Compliance items tracked
- Deadline alerts viewed

**Revenue:**
- Affiliate clicks (insurance, etc.)
- Template pack sales (if applicable)

**Target:**
- 100+ visitors/week
- 10+ properties tracked

---

### GDPR Cookie Auditor
**Traffic:**
- Chrome Store page views
- Extension installs
- Active users

**Engagement:**
- Audits completed
- Average compliance score
- Feature usage

**Revenue:**
- Sales
- Conversion rate (installs → purchases)

**Target:**
- 100+ installs in Month 1
- 10+ sales in Month 1
- 10% conversion rate

---

## 📊 Dashboard Setup

### Option 1: Plausible Dashboard
- Single dashboard for all products
- View: plausible.io/sites
- Custom events tracked

### Option 2: Google Sheets Dashboard
**Create spreadsheet with tabs:**
- Daily Traffic
- Weekly Traffic
- Conversions
- Revenue
- Experiments

**Auto-update with:**
- Plausible API
- Stripe API
- Chrome Store API

### Option 3: Notion Dashboard
**Create Notion page with:**
- Embedded Plausible charts
- Manual weekly updates
- Kill/Keep/Scale decisions

---

## 🔍 UTM Tracking for Marketing

### UTM Parameters
```
?utm_source=reddit&utm_medium=social&utm_campaign=mtd_launch
```

**Examples:**
- Reddit: `?utm_source=reddit&utm_medium=social&utm_campaign=product_launch`
- Twitter: `?utm_source=twitter&utm_medium=social&utm_campaign=product_launch`
- Product Hunt: `?utm_source=producthunt&utm_medium=referral&utm_campaign=ph_launch`

### Tracking in Plausible
Plausible automatically tracks UTM parameters. View in dashboard under "Traffic sources"

---

## 📝 Weekly Review Checklist

### Every Monday
- [ ] Check traffic for all products (vs last week)
- [ ] Check conversions (vs last week)
- [ ] Check revenue (vs last week)
- [ ] Note top traffic sources
- [ ] Identify what's working
- [ ] Identify what's not working

### Monthly Review
- [ ] Calculate conversion rates
- [ ] Calculate revenue per visitor
- [ ] Make kill/keep/scale decisions
- [ ] Update strategy based on data

---

## 🚨 Red Flags (Kill Signals)

**Traffic:**
- ❌ <100 visitors after 2 weeks of marketing
- ❌ Declining traffic week-over-week
- ❌ 90%+ bounce rate

**Engagement:**
- ❌ <1 minute average time on site
- ❌ <1% returning visitors (for tools meant for repeat use)
- ❌ <5% feature adoption

**Conversions:**
- ❌ <1% conversion rate (for paid products)
- ❌ 0 affiliate clicks after marketing
- ❌ 0 sales after 2 weeks

**Revenue:**
- ❌ £0 revenue after Month 1
- ❌ Negative ROI on marketing spend

---

## ✅ Green Flags (Scale Signals)

**Traffic:**
- ✅ 500+ visitors/week
- ✅ Growing traffic week-over-week
- ✅ Multiple traffic sources

**Engagement:**
- ✅ 5+ minutes average time on site
- ✅ 20%+ returning visitors
- ✅ 50%+ feature adoption

**Conversions:**
- ✅ 3%+ conversion rate
- ✅ Consistent affiliate clicks
- ✅ Regular sales

**Revenue:**
- ✅ £100+ in Month 1
- ✅ Positive ROI on marketing
- ✅ Word-of-mouth referrals

---

## 🔧 Implementation Code Snippets

### Add to All HTML Files (Plausible)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Product</title>

    <!-- Analytics -->
    <script defer data-domain="your-domain.com" src="https://plausible.io/js/script.js"></script>
</head>
<body>
    <!-- Your content -->

    <script>
    // Track custom events
    function trackEvent(eventName, props = {}) {
        if (typeof plausible !== 'undefined') {
            plausible(eventName, { props });
        }
    }

    // Example: Track when user completes calculation
    document.getElementById('calculate-btn').addEventListener('click', function() {
        trackEvent('Calculation Completed', {
            result: 'over_threshold',
            income: '50000'
        });
    });
    </script>
</body>
</html>
```

---

## 📊 Reporting Template

### Weekly Report
```markdown
# Sterling Products - Week [X] Report

## Traffic
| Product | Visitors | Change | Top Source |
|---------|----------|--------|------------|
| MTD Calculator | 125 | +15% | Reddit |
| JobFlow | 85 | +8% | Direct |
| Landlord Tracker | 142 | +22% | Twitter |
| Section 21 Checker | 98 | +12% | Reddit |

## Conversions
| Product | Actions | Conversion Rate |
|---------|---------|-----------------|
| MTD Calculator | 45 calculations | 36% |
| JobFlow | 23 jobs created | 27% |
| Landlord Tracker | 38 properties | 27% |
| GDPR Auditor | 8 sales | 10% |

## Revenue
- Total: £[X]
- By Product: [breakdown]
- By Source: [breakdown]

## Key Insights
1. [Insight 1]
2. [Insight 2]
3. [Insight 3]

## Next Week Focus
1. [Action 1]
2. [Action 2]
```

---

*Created: 2026-03-01*
*Purpose: Complete analytics implementation guide for Sterling products*
*Next: Implement Plausible tracking on all deployed products*
