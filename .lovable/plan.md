

# Phase 8: Add Missing Sections to Homepage

## Summary

The FAQSection component is correctly implemented with all 6 FAQs (including the updated #4 and #5), but it is **not being displayed on the homepage**. Additionally, ProcessSection and FinalCTASection are also missing from the page flow.

---

## Issue Found

### Current Index.tsx Structure
```text
1. HeroSection
2. TrustBadgesSection
3. GallerySection
4. ReviewsSection
5. Footer
```

### Expected Structure (per original design)
```text
1. HeroSection
2. TrustBadgesSection
3. GallerySection
4. ProcessSection        ← MISSING
5. ReviewsSection
6. FinalCTASection       ← MISSING
7. FAQSection            ← MISSING
8. Footer
```

---

## File to Modify

| File | Action | Changes |
|------|--------|---------|
| `src/pages/Index.tsx` | MODIFY | Add imports and components for ProcessSection, FinalCTASection, and FAQSection |

---

## Implementation Details

### Step 1: Add Lazy Imports

Add these lazy imports after line 7:

```tsx
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
```

### Step 2: Add Components to JSX

Update the return statement to include all sections in the correct order:

```tsx
const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<div className="h-24 bg-gray-50" />}>
        <TrustBadgesSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted" />}>
        <GallerySection />
      </Suspense>
      <Suspense fallback={<div className="h-96 section-gradient-dark" />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 section-gradient-dark" />}>
        <ReviewsSection />
      </Suspense>
      <Suspense fallback={<div className="h-64 section-gradient-dark" />}>
        <FinalCTASection />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-muted/50" />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
};
```

---

## Complete Updated Index.tsx

```tsx
import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";

// Lazy load below-the-fold sections for faster initial load
const TrustBadgesSection = lazy(() => import("@/components/TrustBadgesSection"));
const GallerySection = lazy(() => import("@/components/GallerySection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const ReviewsSection = lazy(() => import("@/components/ReviewsSection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<div className="h-24 bg-gray-50" />}>
        <TrustBadgesSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted" />}>
        <GallerySection />
      </Suspense>
      <Suspense fallback={<div className="h-96 section-gradient-dark" />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 section-gradient-dark" />}>
        <ReviewsSection />
      </Suspense>
      <Suspense fallback={<div className="h-64 section-gradient-dark" />}>
        <FinalCTASection />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-muted/50" />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
```

---

## Visual Flow After Fix

```text
┌─────────────────────────────┐
│       HeroSection           │  Orange mountains + CTA
├─────────────────────────────┤
│    TrustBadgesSection       │  Trust logos carousel
├─────────────────────────────┤
│      GallerySection         │  Before/after + inline CTA
├─────────────────────────────┤
│     ProcessSection          │  4-step process (dark)
├─────────────────────────────┤
│     ReviewsSection          │  Testimonials + inline CTA
├─────────────────────────────┤
│    FinalCTASection          │  Final push (dark)
├─────────────────────────────┤
│       FAQSection            │  6 FAQs (light gray)
├─────────────────────────────┤
│         Footer              │  Copyright + logo
└─────────────────────────────┘
```

---

## FAQ Content Verification

The FAQSection.tsx already has the correct 6 FAQs:

| # | Question | Status |
|---|----------|--------|
| 1 | What types of remodeling projects do you handle? | Correct |
| 2 | What does the free in-home consultation include? | Correct |
| 3 | Are you licensed and insured? | Correct |
| 4 | What areas do you serve? | Correct (mentions Colorado cities) |
| 5 | Can you help with design and material selection? | Correct (mentions mockup designs) |
| 6 | What does the $2,000 Winter Upgrade Program discount apply to? | Correct |

---

## Verification Checklist

After implementation, scroll through homepage and verify:

- [ ] Hero Section displays at top
- [ ] Trust Badges carousel visible
- [ ] Gallery Section shows project photos with CTA
- [ ] Process Section shows 4 steps (dark background)
- [ ] Reviews Section shows testimonials with CTA
- [ ] Final CTA Section appears (dark background)
- [ ] **FAQ Section displays with 6 questions** (light gray background)
- [ ] Footer at bottom

