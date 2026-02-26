# UK Landlord Compliance Tracker - Notion Template

## Product Overview

**Name:** UK Landlord Compliance Tracker
**Price:** £12 (introductory) → £19 (regular)
**Target:** UK private landlords with 1-5 properties
**Pain Point:** Missing compliance deadlines = fines up to £30,000

---

## Value Proposition

**Never miss a compliance deadline again.**

Track all your property compliance in one place:
- Gas Safety Certificates (annual)
- Electrical Installation Condition Reports (EICR) (every 5 years)
- Energy Performance Certificates (EPC) (every 10 years)
- Deposit Protection Scheme deadlines
- Right to Rent checks
- Smoke/CO alarm checks
- HMO licensing (if applicable)

**UK-specific. Built for landlords who hate paperwork.**

---

## Target Market

- 2.6M private landlords in UK
- 83% own 1-4 properties (our sweet spot)
- Average fine for non-compliance: £5,000-30,000
- They're busy, not organized
- They use spreadsheets or nothing currently

---

## Competitive Advantage

| Competitor | Price | UK-Specific | Ease of Use |
|------------|-------|-------------|-------------|
| Landlord Vision | £15/mo | Yes | Complex |
| NRLA Templates | Free | Yes | Basic spreadsheets |
| Generic Notion templates | £5-15 | No | Varies |
| **This template** | £12 one-time | **Yes** | **Simple** |

---

## Sales Channels

1. **Gumroad** - Primary (£12)
2. **Etsy** - Secondary (£15, Etsy takes 6.5%)
3. **Notion Template Gallery** - Free version as lead magnet

---

## Marketing Angles

1. "Avoid £30,000 in fines"
2. "All your properties, one dashboard"
3. "Built by landlords, for landlords"
4. "5 minutes setup, peace of mind all year"

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
| Compliance Status | Formula | Overall health |

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
| Tenancy End | Date | Contract end |
| Deposit Amount | Number | Protected amount |
| DPS Scheme | Select | MyDeposits/TDS/DDS |
| DPS Reference | Text | Protection ID |
| Right to Rent | Checkbox | Verified |
| RtR Expiry | Date | If time-limited |

### Dashboard Views

1. **Properties Overview** - Gallery view of all properties
2. **Compliance Calendar** - Timeline of upcoming expiries
3. **Urgent Actions** - Filtered view of overdue/expiring soon
4. **Monthly Checklist** - What to check this month

---

## Formulas

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
if(prop("Compliance").filter(current.prop("Status") == "🔴 OVERDUE").length() > 0, "🔴 Action Required",
   if(prop("Compliance").filter(current.prop("Status") == "🟠 URGENT").length() > 0, "🟠 Review Needed", "🟢 Compliant"))
```

---

## Launch Checklist

- [ ] Create Notion template workspace
- [ ] Build all databases with sample data
- [ ] Add formulas and views
- [ ] Create cover image (Canva)
- [ ] Write Gumroad listing
- [ ] Set up Gumroad product
- [ ] Create free version (1 property limit)
- [ ] Post in landlord Facebook groups
- [ ] Submit to Notion template galleries

---

## Pricing Strategy

- **Free Tier:** 1 property (lead magnet)
- **Paid Tier:** Unlimited properties (£12)
- **Bundle:** + Contractor Tracker (+£8)

---

*Created: 2026-02-25*
*Status: Ready to build in Notion*
