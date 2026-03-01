# A/B Testing Framework for Sterling Products

**Purpose:** Systematic approach to optimizing conversions
**Goal:** Increase revenue through data-driven improvements
**Updated:** March 1, 2026

---

## 🎯 What to Test

### Priority 1: High-Impact, Low-Effort

**Headlines**
- Current: "MTD Readiness Calculator"
- Test A: "Will You Be Fined £3000 for MTD Non-Compliance?"
- Test B: "Check Your MTD Deadline in 30 Seconds"
- **Effort:** 5 minutes
- **Impact:** High (first impression)

**CTA Buttons**
- Current: "Calculate"
- Test A: "Check My Deadline"
- Test B: "Am I Compliant?"
- Test C: "Check Now (Free)"
- **Effort:** 5 minutes
- **Impact:** High (conversion driver)

**Price Display**
- Current: "£9"
- Test A: "£9 (one-time)"
- Test B: "£9 - No subscription needed"
- Test C: "£9 (save £170 vs hiring a consultant)"
- **Effort:** 5 minutes
- **Impact:** High (purchase decision)

---

### Priority 2: Medium-Impact, Medium-Effort

**Social Proof**
- Current: None
- Test A: "Used by 100+ UK businesses"
- Test B: "Featured on Product Hunt"
- Test C: Customer testimonial
- **Effort:** 15 minutes
- **Impact:** Medium (trust building)

**Value Proposition**
- Current: Basic description
- Test A: Bullet points of benefits
- Test B: Before/after comparison
- Test C: Video demo
- **Effort:** 30 minutes
- **Impact:** Medium (understanding value)

**Design Elements**
- Current: Current color scheme
- Test A: Different button color
- Test B: Different layout
- Test C: More whitespace
- **Effort:** 1 hour
- **Impact:** Medium (user experience)

---

### Priority 3: High-Impact, High-Effort

**Pricing Structure**
- Current: Single price
- Test A: Tiered pricing (Basic/Pro)
- Test B: Freemium model
- Test C: Annual discount
- **Effort:** 2-4 hours
- **Impact:** High (revenue optimization)

**Onboarding Flow**
- Current: Single page
- Test A: Multi-step wizard
- Test B: Video tutorial first
- Test C: Interactive demo
- **Effort:** 4-8 hours
- **Impact:** High (user activation)

---

## 🧪 A/B Testing Process

### Step 1: Define Hypothesis
```
Hypothesis: Changing the CTA from "Calculate" to "Check My Deadline"
will increase click-through rate by 20% because it's more personal
and creates urgency.

Success Metric: Click-through rate (CTR)
Minimum Sample Size: 100 visitors per variant
Duration: 7 days
```

### Step 2: Implement Test
**Option A: Manual A/B Testing (Free)**
```javascript
// Random assignment
const variant = Math.random() < 0.5 ? 'A' : 'B';

// Store in localStorage
localStorage.setItem('ab_test_variant', variant);

// Show different content
if (variant === 'A') {
  document.getElementById('cta').textContent = 'Calculate';
} else {
  document.getElementById('cta').textContent = 'Check My Deadline';
}

// Track in analytics
plausible('AB Test View', { props: { test: 'cta_test', variant } });
```

**Option B: Google Optimize (Free)**
1. Create account at optimize.google.com
2. Create experiment
3. Set up variants
4. Install snippet
5. Start experiment

**Option C: Third-Party Tools**
- VWO (Free plan available)
- Optimizely (Enterprise)
- AB Smartly (Open source)

### Step 3: Run Test
- **Duration:** Minimum 7 days (to account for day-of-week variations)
- **Sample Size:** At least 100 visitors per variant
- **Traffic Split:** 50/50 (or 80/20 for risky changes)

### Step 4: Analyze Results
```
Results after 7 days:
- Variant A (Control): 100 visitors, 10 clicks, 10% CTR
- Variant B (Test): 105 visitors, 18 clicks, 17.1% CTR
- Improvement: +71% CTR
- Statistical Significance: 95%+ (use calculator)

Decision: Implement Variant B
```

### Step 5: Implement Winner
- Replace control with winning variant
- Document results
- Plan next test

---

## 📊 Statistical Significance Calculator

**Use this formula or online calculator:**
- https://www.optimizely.com/sample-size-calculator/
- https://www.vwo.com/tools/ab-test-significance-calculator/

**Rule of Thumb:**
- ✅ 95%+ confidence = Implement winner
- ⚠️ 90-95% confidence = Run longer
- ❌ <90% confidence = No significant difference

---

## 🎯 Test Queue for Sterling Products

### Week 1: MTD Calculator

**Test 1: Headline**
- Control: "MTD Readiness Calculator"
- Variant A: "Will You Be Fined for MTD Non-Compliance?"
- Variant B: "Check Your MTD Deadline in 30 Seconds"
- Metric: Bounce rate
- Duration: 7 days

**Test 2: CTA Button**
- Control: "Calculate"
- Variant A: "Check My Deadline"
- Variant B: "Am I Compliant?"
- Metric: Click-through rate
- Duration: 7 days

---

### Week 2: GDPR Cookie Auditor (After Launch)

**Test 1: Price Display**
- Control: "£9"
- Variant A: "£9 (one-time, no subscription)"
- Variant B: "£9 - Save £170 vs hiring a consultant"
- Metric: Conversion rate
- Duration: 7 days

**Test 2: Value Prop**
- Control: Current description
- Variant A: "Avoid £17.5M GDPR fines"
- Variant B: "Audit any website in 30 seconds"
- Metric: Click-through to purchase
- Duration: 7 days

---

### Week 3: Landlord Tracker

**Test 1: Headline**
- Control: "UK Landlord Compliance Tracker"
- Variant A: "Never Miss a Compliance Deadline Again"
- Variant B: "Avoid £30,000 Fines - Track Your Compliance"
- Metric: Bounce rate
- Duration: 7 days

**Test 2: Social Proof**
- Control: None
- Variant A: "Trusted by 50+ UK landlords"
- Variant B: "Featured in Property118"
- Metric: Signups/usage
- Duration: 7 days

---

### Week 4: JobFlow

**Test 1: Value Prop**
- Control: "Simple Job Tracker"
- Variant A: "Free Job Tracker - Save 5 Hours/Week"
- Variant B: "Track Jobs, Get Paid Faster"
- Metric: User activation
- Duration: 7 days

**Test 2: Feature Highlight**
- Control: Current features list
- Variant A: "Used by 100+ UK sole traders"
- Variant B: "MTD-compliant export for your accountant"
- Metric: Repeat usage
- Duration: 7 days

---

## 📝 Test Documentation Template

```markdown
# A/B Test: [Test Name]

## Hypothesis
Changing [element] from [current] to [proposed] will [expected outcome]
because [reasoning].

## Variants
- **Control:** [Current version]
- **Variant A:** [Test version A]
- **Variant B:** [Test version B] (if applicable)

## Metrics
- **Primary:** [Main success metric]
- **Secondary:** [Additional metrics]

## Setup
- **Start Date:** [Date]
- **End Date:** [Date]
- **Traffic Split:** 50/50
- **Minimum Sample:** 100 visitors per variant

## Results
- **Control:** [X] visitors, [Y] conversions, [Z]% rate
- **Variant A:** [X] visitors, [Y] conversions, [Z]% rate
- **Improvement:** [+/-X]%
- **Statistical Significance:** [X]%

## Decision
[Implement winner / Run longer / No significant difference]

## Next Steps
[Action items based on results]
```

---

## 🔧 Implementation Code

### Simple A/B Test Framework

```javascript
class ABTest {
  constructor(testName, variants) {
    this.testName = testName;
    this.variants = variants;
    this.variant = this.getVariant();
  }

  getVariant() {
    // Check if already assigned
    let variant = localStorage.getItem(`ab_${this.testName}`);

    if (!variant) {
      // Random assignment
      variant = this.variants[Math.floor(Math.random() * this.variants.length)];
      localStorage.setItem(`ab_${this.testName}`, variant);
    }

    return variant;
  }

  track(event) {
    // Track in Plausible
    plausible(event, {
      props: {
        test: this.testName,
        variant: this.variant
      }
    });
  }

  apply(elementId, content) {
    // Apply variant content
    document.getElementById(elementId).textContent = content[this.variant];
  }
}

// Usage
const headlineTest = new ABTest('headline_test', ['control', 'variant_a', 'variant_b']);

headlineTest.track('Test View');

headlineTest.apply('headline', {
  control: 'MTD Readiness Calculator',
  variant_a: 'Will You Be Fined for MTD Non-Compliance?',
  variant_b: 'Check Your MTD Deadline in 30 Seconds'
});
```

---

## 📊 Test Results Tracking

### Google Sheets Template

**Create spreadsheet with columns:**
- Test Name
- Start Date
- End Date
- Control Visitors
- Control Conversions
- Control Rate
- Variant Visitors
- Variant Conversions
- Variant Rate
- Improvement %
- Significance %
- Decision
- Notes

### Automatic Tracking (Advanced)

```javascript
// Send test results to Google Sheets via API
async function logTestResults(testData) {
  const response = await fetch('YOUR_GOOGLE_SCRIPT_URL', {
    method: 'POST',
    body: JSON.stringify(testData)
  });
  return response.json();
}

// Call after test completes
logTestResults({
  testName: 'headline_test',
  controlVisitors: 100,
  controlConversions: 10,
  variantVisitors: 105,
  variantConversions: 18,
  date: new Date().toISOString()
});
```

---

## 🎯 Expected Improvements

### Conservative Estimates

**Headlines:** +10-30% CTR
**CTA Buttons:** +15-40% CTR
**Price Display:** +10-25% Conversions
**Social Proof:** +15-35% Trust
**Design:** +5-20% Engagement

### Cumulative Effect

If you run 4 tests per month with average 20% improvement:
- Month 1: 1.2x conversion rate
- Month 2: 1.44x conversion rate (1.2 × 1.2)
- Month 3: 1.73x conversion rate
- Month 6: 3x conversion rate

**Example:**
- Baseline: 100 visitors, 2% conversion = 2 sales
- After 6 months: 100 visitors, 6% conversion = 6 sales
- **Revenue increase: 3x**

---

## 🚫 Common A/B Testing Mistakes

❌ **Don't:**
- Test too many variables at once
- Stop test too early (<7 days)
- Ignore statistical significance
- Test without hypothesis
- Test trivial changes (e.g., button shade)
- Run tests during holidays/launches

✅ **Do:**
- Test one variable at a time
- Run tests for full 7 days minimum
- Wait for 95%+ significance
- Document hypothesis and results
- Test high-impact changes
- Run tests during normal periods

---

## 📅 Monthly A/B Testing Schedule

### Week 1: Hypothesis Generation
- Review analytics data
- Identify conversion bottlenecks
- Generate 3-5 test ideas
- Prioritize by impact/effort

### Week 2: Test Implementation
- Set up 1-2 tests
- Create variants
- Start running
- Monitor for issues

### Week 3: Test Running
- Let tests run
- Monitor daily
- Don't peek at results (avoid bias)

### Week 4: Analysis & Implementation
- Analyze results
- Calculate significance
- Implement winners
- Document learnings
- Plan next month's tests

---

## 🎯 Success Metrics by Product

### Free Tools
- **Primary:** Usage rate (e.g., calculations completed)
- **Secondary:** Affiliate clicks

### Paid Products
- **Primary:** Conversion rate (visitors → buyers)
- **Secondary:** Revenue per visitor

### SaaS
- **Primary:** Signup rate
- **Secondary:** Activation rate, churn rate

---

*Created: 2026-03-01*
*Purpose: Systematic A/B testing framework for conversion optimization*
*Next: Implement first test on MTD Calculator headline*
