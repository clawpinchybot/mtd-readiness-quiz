# UK Landlord Compliance Tracker V2 - Notion Template

## Product Overview

**Name:** UK Landlord Compliance Tracker - May 2026 Ready
**Price:** £15 (introductory) → £25 (after May 2026)
**Target:** UK private landlords with 1-10 properties
**Urgency:** Renters' Rights Act deadline - May 1, 2026 (less than 3 months away)

---

## ⚡ NEW: Renters' Rights Act 2025 Compliance

### Critical Deadlines

| Deadline | Date | Penalty if Missed |
|----------|------|-------------------|
| Last day to serve Section 21 | April 30, 2026 | N/A (can't use after) |
| All ASTs become periodic | May 1, 2026 | Automatic |
| Serve Information Sheet to tenants | May 31, 2026 | Up to £7,000 |
| Written terms for oral tenancies | May 31, 2026 | Up to £7,000 |
| Student HMO Ground 4A statement | May 31, 2026 | Up to £7,000 |

### What the Template Tracks

1. **RRA Information Sheet Status** - Have you served it to each tenant?
2. **Section 21 Deadline Tracker** - Properties where you might want to serve before April 30
3. **Tenancy Conversion Readiness** - Prepare for periodic tenancy conversion
4. **Ground 4A Student HMO Tracker** - For student landlords

---

## Value Proposition

**Beat the May 2026 deadline. Avoid £7,000+ in fines.**

Track all your property compliance in one place:
- **NEW: Renters' Rights Act deadlines** (May 2026)
- Gas Safety Certificates (annual)
- Electrical Installation Condition Reports (EICR) (every 5 years)
- Energy Performance Certificates (EPC) (every 10 years)
- Deposit Protection Scheme deadlines
- Right to Rent checks
- Smoke/CO alarm checks
- HMO licensing (if applicable)
- **NEW: MTD for Landlords readiness** (April 2026)

**UK-specific. Deadline-focused. Built for landlords who hate paperwork.**

---

## Target Market

- 2.6M private landlords in UK
- 83% own 1-4 properties (our sweet spot)
- **URGENT: May 2026 deadline approaching**
- Average fine for non-compliance: £5,000-30,000
- They're busy, anxious about the changes, need simple tools

---

## Template Structure

### Properties Database

| Field | Type | Purpose |
|-------|------|---------|
| Property Name | Title | Identifier |
| Address | Text | Full address |
| Postcode | Text | For filtering |
| Property Type | Select | Flat/House/HMO |
| Tenants | Relation | Link to tenant DB |
| Rent Amount | Number | Monthly rent |
| Rent Due Date | Select | 1st/15th/etc |
| Tenancy Type | Select | AST/Periodic (auto-converts May 1) |
| RRA Info Sheet Served | Checkbox | Required by May 31 |
| RRA Served Date | Date | When served |
| Section 21 Status | Select | Not needed/Served by Apr 30/N/A |
| Overall Compliance | Formula | Health check |

### RRA Deadline Tracker Database (NEW)

| Field | Type | Purpose |
|-------|------|---------|
| Property | Relation | Link to property |
| Tenant(s) | Relation | Who needs the info |
| Requirement | Select | Info Sheet/Oral Terms/Ground 4A |
| Due Date | Date | May 31, 2026 |
| Status | Formula | Pending/Done/OVERDUE |
| Served Date | Date | When completed |
| Notes | Text | Any issues |

### Compliance Tracker Database

| Field | Type | Purpose |
|-------|------|---------|
| Property | Relation | Link to property |
| Certificate Type | Select | Gas/EPC/EICR/etc |
| Issue Date | Date | When obtained |
| Expiry Date | Date | Auto-calculated |
| Days Until Expiry | Formula | Urgency indicator |
| Status | Formula | OK/Warning/Overdue |
| Contractor | Text | Who did the work |
| Cost | Number | How much |
| Document | File | PDF upload |
| Notes | Text | Any details |

### Tenants Database

| Field | Type | Purpose |
|-------|------|---------|
| Name | Title | Tenant name |
| Property | Relation | Where they live |
| Email | Email | Contact |
| Phone | Phone | Contact |
| Tenancy Start | Date | Move-in |
| Tenancy End | Date | Contract end (may end May 1) |
| Tenancy Type | Select | Fixed/Periodic |
| Deposit Amount | Number | Protected amount |
| DPS Scheme | Select | MyDeposits/TDS/DDS |
| DPS Reference | Text | Protection ID |
| Right to Rent | Checkbox | Verified |
| RtR Expiry | Date | If time-limited |
| RRA Info Received | Checkbox | NEW: Required |

### Dashboard Views

1. **🚨 RRA Deadline Countdown** - Properties needing action before May 31
2. **Properties Overview** - Gallery view of all properties
3. **Compliance Calendar** - Timeline of upcoming expiries
4. **Urgent Actions** - Filtered view of overdue/expiring soon
5. **Section 21 Tracker** - Properties to consider serving before Apr 30

---

## Formulas

### Days Until RRA Deadline
```
dateBetween(date("2026-05-31"), now(), "days")
```

### RRA Status
```
if(prop("RRA Info Sheet Served"), "✅ Done",
   if(dateBetween(date("2026-05-31"), now(), "days") < 0, "🔴 OVERDUE - £7,000 FINE RISK",
      if(dateBetween(date("2026-05-31"), now(), "days") < 30, "🟠 URGENT - " + format(dateBetween(date("2026-05-31"), now(), "days")) + " days left",
         "🟡 Pending - " + format(dateBetween(date("2026-05-31"), now(), "days")) + " days left")))
```

### Days Until Expiry
```
dateBetween(prop("Expiry Date"), now(), "days")
```

### Compliance Status
```
if(prop("Days Until Expiry") < 0, "🔴 OVERDUE", 
   if(prop("Days Until Expiry") < 30, "🟠 URGENT", 
      if(prop("Days Until Expiry") < 90, "🟡 WARNING", "🟢 OK")))
```

### Overall Property Status
```
if(prop("RRA Status") == "🔴 OVERDUE - £7,000 FINE RISK", "🔴 RRA OVERDUE",
   if(prop("Compliance").filter(current.prop("Status") == "🔴 OVERDUE").length() > 0, "🔴 Action Required",
      if(prop("RRA Status") == "🟠 URGENT", "🟠 RRA Deadline Soon",
         if(prop("Compliance").filter(current.prop("Status") == "🟠 URGENT").length() > 0, "🟠 Review Needed", "🟢 Compliant"))))
```

---

## Sales Channels

1. **Gumroad** - Primary (£15)
2. **Etsy** - Secondary (£18, Etsy takes 6.5%)
3. **Notion Template Gallery** - Free version (1 property) as lead magnet
4. **Landlord Facebook Groups** - Direct promotion
5. **Reddit r/UKLandlord** - Value-first posts

---

## Marketing Angles

1. **"May 2026 Deadline: Are You Ready?"** - Urgency focus
2. **"Avoid £7,000 in RRA fines"** - Pain point
3. **"Track everything, miss nothing"** - Benefit
4. **"Built for UK landlords, by someone who understands the panic"** - Empathy
5. **"5 minutes setup, deadline peace of mind"** - Quick win

---

## Launch Checklist

- [ ] Create Notion template workspace
- [ ] Build all databases with sample data
- [ ] Add formulas and views
- [ ] Create cover image (Canva) - "May 2026 Ready" badge
- [ ] Write Gumroad listing
- [ ] Set up Gumroad product
- [ ] Create free version (1 property limit)
- [ ] Post in landlord Facebook groups
- [ ] Submit to Notion template galleries
- [ ] Create TikTok showing deadline countdown

---

## Pricing Strategy

- **Free Tier:** 1 property (lead magnet) - includes RRA tracking
- **Paid Tier:** Unlimited properties (£15 intro)
- **After May 2026:** Price increase to £25

---

## Competitive Advantage

| Feature | This Template | NRLA | Landlord Vision |
|---------|---------------|------|-----------------|
| Price | £15 one-time | Free (membership) | £15/mo |
| RRA Deadline Tracking | ✅ | ❌ | ❌ |
| Ease of Use | Simple | Basic | Complex |
| Notion-native | ✅ | ❌ | ❌ |
| Mobile-friendly | ✅ | ✅ | ✅ |

---

*Created: 2026-02-25*
*Updated: 2026-02-25 (V2 with RRA)*
*Status: Ready to build in Notion*
*Urgency: HIGH - May 2026 deadline*
