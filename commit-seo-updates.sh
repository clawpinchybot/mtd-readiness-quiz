#!/bin/bash

# Sterling Products - SEO Update Commit Script
# Run this from workspace-sterling directory

echo "🚀 Preparing to commit SEO improvements..."

# Add all modified files
git add sterling-products/jobflow-deploy/index.html
git add sterling-products/landlord-compliance-tracker/index.html
git add sterling-products/section21-checker/index.html
git add /home/openclaw/.openclaw/workspace/sterling-products/mtd-readiness-calculator/index.html
git add marketing/
git add SEO-IMPROVEMENTS.md
git add SEO-IMPLEMENTATION-COMPLETE.md
git add SESSION-SUMMARY-2026-03-01.md
git add LEWIS-READ-FIRST.md
git add LEWIS-ACTION-NOW.md
git add LEWIS-QUICK-REFERENCE.md
git add MEMORY.md
git add HEARTBEAT.md
git add PROGRESS-LOG.md

# Create commit
echo "📝 Creating commit..."
git commit -m "feat: Add comprehensive SEO tags and marketing materials

SEO Improvements:
- Added meta tags to all 4 deployed products
- Added Open Graph tags for social media
- Added Twitter card tags
- Added canonical URLs

Marketing Materials:
- Reddit posts for all products
- Email outreach templates
- Marketing calendar for March 2026
- Screenshot generator tool

Documentation:
- Session summary (2-hour work session)
- Quick reference card for Lewis
- SEO implementation guide

Products updated:
- JobFlow
- Landlord Compliance Tracker
- Section 21 Deadline Checker
- MTD Readiness Calculator"

echo "✅ Commit created!"
echo ""
echo "Next steps:"
echo "1. Review the commit: git show"
echo "2. Push to GitHub: git push origin main"
echo "3. Wait 1-2 minutes for GitHub Pages to rebuild"
echo "4. Test social media previews with Facebook/Twitter validators"
