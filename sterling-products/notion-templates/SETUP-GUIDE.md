# UK Landlord Compliance Tracker - Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create the Workspace

1. Create new Notion page: "🏠 Property Portfolio"
2. Add cover image: Search "houses" in Unsplash
3. Add icon: 🏠

### Step 2: Create Properties Database

Create a database called "Properties" with these columns:

| Column Name | Type | Options |
|-------------|------|---------|
| Property | Title | - |
| Address | Text | - |
| Postcode | Text | - |
| Type | Select | Flat, House, HMO, Studio |
| Bedrooms | Number | - |
| Monthly Rent | Number | - |
| Purchase Price | Number | - |
| Status | Select | Occupied, Vacant, Renovating |

### Step 3: Create Compliance Tracker

Create a database called "Compliance" with these columns:

| Column Name | Type | Options/Formula |
|-------------|------|-----------------|
| Item | Title | - |
| Property | Relation | → Properties |
| Type | Select | Gas Safety, EPC, EICR, Smoke Alarm, CO Alarm, PAT Test, Legionella, HMO License |
| Issued | Date | - |
| Expires | Date | - |
| Days Left | Formula | `dateBetween(prop("Expires"), now(), "days")` |
| Status | Formula | `if(prop("Days Left") < 0, "🔴 OVERDUE", if(prop("Days Left") < 30, "🟠 URGENT", if(prop("Days Left") < 90, "🟡 Soon", "🟢 OK")))` |
| Contractor | Text | - |
| Cost | Number | - |
| Document | Files | - |
| Notes | Text | - |

### Step 4: Create Tenants Database

Create a database called "Tenants" with these columns:

| Column Name | Type | Options |
|-------------|------|---------|
| Name | Title | - |
| Property | Relation | → Properties |
| Email | Email | - |
| Phone | Phone | - |
| Tenancy Start | Date | - |
| Tenancy End | Date | - |
| Monthly Rent | Number | - |
| Deposit | Number | - |
| Deposit Scheme | Select | MyDeposits, TDS, DPS, Capita |
| DPS Reference | Text | - |
| Right to Rent | Checkbox | - |
| RtR Checked | Date | - |

### Step 5: Add Views to Compliance DB

1. **📅 Calendar View** - Show by Expires date
2. **🚨 Urgent** - Filter: Days Left < 30
3. **✅ All Good** - Filter: Status = 🟢 OK
4. **📋 By Property** - Grouped by Property

### Step 6: Create Dashboard

Add these linked views to your main page:

```
## 🚨 Action Required
[Linked view: Compliance → Urgent]

## 📅 This Month
[Linked view: Compliance Calendar]

## 🏠 Properties
[Linked view: Properties Gallery]
```

---

## UK Compliance Reference

### Mandatory Requirements (All Properties)

| Requirement | Frequency | Fine if Missed |
|-------------|-----------|----------------|
| Gas Safety Certificate | Annual | £6,000 |
| EPC | Every 10 years | £5,000 |
| EICR (Electrical) | Every 5 years | £30,000 |
| Smoke Alarm | Check at tenancy start | £5,000 |
| CO Alarm (if gas/solid fuel) | Check at tenancy start | £5,000 |
| Deposit Protection | Within 30 days | 3x deposit |
| Right to Rent | Before tenancy | £3,000/landlord, £1,000/agent |

### HMO Additional Requirements

| Requirement | Frequency | Fine if Missed |
|-------------|-----------|----------------|
| HMO License | 5 years | £20,000 |
| Fire Risk Assessment | Annual | £10,000 |
| Additional alarms | Per regulation | Varies |

---

## Sample Data for Testing

### Properties
- 123 High Street, Manchester, M1 1AA (Flat, 2 bed, £950/mo)
- 456 Oak Avenue, Leeds, LS1 2BB (House, 3 bed, £1,200/mo)

### Compliance Items
- Gas Safety: Issued 2025-01-15, Expires 2026-01-15
- EPC: Issued 2023-06-20, Expires 2033-06-20
- EICR: Issued 2024-03-10, Expires 2029-03-10

---

## Customization Tips

1. **Add mortgage tracking** - Create a "Finances" database
2. **Add maintenance log** - Create a "Repairs" database
3. **Add income tracking** - Link to rent payments
4. **Multi-property filtering** - Use Postcode area filtering

---

*This guide is included with the UK Landlord Compliance Tracker template.*
*For support: [your-email]*
