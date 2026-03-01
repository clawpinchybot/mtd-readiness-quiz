# HEARTBEAT.md

# Keep this file empty (or with only comments) to skip heartbeat API calls.

# Add tasks below when you want the agent to check something periodically.

## Deployed Products Review
- MTD Calculator (mtd-calculator.uk) — ✅ disclaimer added 2026-02-26
- JobFlow (clawpinchybot.github.io/jobflow) — ✅ live, localStorage fine for typical usage (5-10MB limit)
- **PEEP Generator — 🔴 AWAITING LEWIS DECISION: decommission or pivot**
- Landlord Tracker — ✅ disclaimer added 2026-02-26
- Section 21 Checker — ✅ deployed and working (2026-02-27)

## Ready to Submit (Lewis Action)
- GDPR Cookie Auditor — needs screenshots + icons
- QuoteQuick — needs testing on MyBuilder/Checkatrade
- MTD Expense Tracker — in development, target March 2026

## ⚠️ CRITICAL: Before Building ANY Product
1. **Run `PRODUCT-VALIDATION-CHECKLIST.md`** — No exceptions
2. **Check free alternatives** — gov.uk, Martin Lewis, competitors
3. **Ask: "Would I actually pay for this?"** — Be brutally honest
4. **Red flags = don't build** — Free data online, broke audience, no differentiation

**Failed products (don't repeat):**
- UK Salary Calculator — free alternatives (listentotaxman.com)
- UK Student Finance Calculator — free gov.uk tools, students have no money
- UK Council Tax Checker — free gov.uk checker
- UK Compliance Checker — all info free on gov.uk

**Lesson:** Data aggregation/display tools rarely work as paid products.

## Review Cycle
- 2 weeks post-launch: evaluate traffic, usage, monetisation
- Kill if: no traffic after marketing, or monetisation path unclear
- Scale if: any revenue or strong usage signals
- **Always check:** Could this product create liability? If yes → reassess

## After Every Change
- **Update PROJECTS.md** — Sterling section must reflect current status
- **Status:** ✅ Updated 2026-03-01 (verified against actual files)

## Before Building ANY Product
- **Run validation checklist** — See `PRODUCT-VALIDATION-CHECKLIST.md`
- Check free alternatives (gov.uk, Martin Lewis, etc.)
- Ask: "Would I actually pay for this?"

## Mission Control Integration
- **Mission Control reads from:** `/mission-control/data/projects.json`
- **Updated:** 2026-02-27 - All Sterling products now visible in Mission Control /projects page
- **Status:** ✅ Synchronized and rebuilt
