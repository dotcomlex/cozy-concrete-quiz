

# Homepage + Quiz Friction Reduction - Surgical Edits

## Summary

Implement 13 targeted changes to reduce friction and update messaging across the homepage and quiz. This includes new hero copy, unified CTAs, quiz step removal, simplified phone validation, and a live viewers badge.

---

## Changes Overview

| # | Component | Change |
|---|-----------|--------|
| 1 | HeroSection.tsx | Update headline to news-style copy |
| 2 | HeroSection.tsx | Update subheadline to "Only available in select zip codes" |
| 3 | HeroSection.tsx | CTA already says "See If I Qualify Now" (no change needed) |
| 4 | GallerySection.tsx | Update CTA to "See If I Qualify Now" |
| 5 | FAQSection.tsx | Update CTA to "See If I Qualify Now" |
| 6-11 | Quiz.tsx | Already has budget removed and 4 steps (verified from code) |
| 12 | Quiz.tsx | Phone validation already simplified (verified) |
| 13 | QualifyPage.tsx | Replace spots badge with live viewers counter |

---

## Change 1: Hero Headline

**File:** `src/components/HeroSection.tsx` (line 49-50)

**Current:**
```tsx
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight hero-text-shadow-strong mb-4">
  Save <span className="text-highlight">$2,000</span> On Your Colorado Remodel - See If You Qualify!
</h1>
```

**New:**
```tsx
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight hero-text-shadow-strong mb-4">
  Attention Colorado Homeowners: This New Winter Program Helps You Save Over{" "}
  <span className="text-highlight">$2,000</span> On Your Remodeling Project
</h1>
```

---

## Change 2: Hero Subheadline

**File:** `src/components/HeroSection.tsx` (lines 53-55)

**Current:**
```tsx
<p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed hero-text-shadow-strong max-w-2xl mx-auto">
  Limited winter spots available. Click below to see if you qualify for a free consultation and $2,000 off your project.
</p>
```

**New:**
```tsx
<p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed hero-text-shadow-strong max-w-2xl mx-auto">
  Only available in select zip codes. Click below to see if you qualify.
</p>
```

---

## Change 3: Hero CTA Button

**Status:** Already updated to "See If I Qualify Now" (line 73) - no change needed

---

## Change 4: Gallery Section CTA

**File:** `src/components/GallerySection.tsx` (line 124)

**Current:**
```tsx
See If You Qualify
```

**New:**
```tsx
See If I Qualify Now
```

---

## Change 5: FAQ Section CTA

**File:** `src/components/FAQSection.tsx` (line 85)

**Current:**
```tsx
See If You Qualify
```

**New:**
```tsx
See If I Qualify Now
```

---

## Changes 6-12: Quiz.tsx

**Status:** Already implemented from previous edits:
- Budget question already removed
- Quiz already has 4 steps (verified: `QuizStep = 1 | 2 | 3 | 4`)
- Progress dots already show `[1, 2, 3, 4]`
- ZIP step is step 3, contact form is step 4
- Phone validation already simplified (no sequential/pattern checks)

No changes needed for Quiz.tsx

---

## Change 13: Qualify Page Badge - Live Viewers

**File:** `src/pages/QualifyPage.tsx`

### State Variable (line 8)

**Current:**
```tsx
const [spotsLeft, setSpotsLeft] = useState(12);
```

**New:**
```tsx
const [liveViewers, setLiveViewers] = useState(() => Math.floor(Math.random() * (80 - 50 + 1)) + 50);
```

### useEffect Logic (lines 10-26)

**Current:**
```tsx
useEffect(() => {
  const interval = setInterval(() => {
    setSpotsLeft(prev => {
      if (prev > 8) {
        return Math.random() > 0.3 ? prev - 1 : prev;
      } 
      else {
        return Math.random() > 0.8 ? Math.min(10, prev + 1) : prev;
      }
    });
  }, 4000);
  return () => clearInterval(interval);
}, []);
```

**New:**
```tsx
useEffect(() => {
  const interval = setInterval(() => {
    setLiveViewers(prev => {
      const change = Math.floor(Math.random() * 7) - 3; // -3 to +3
      const newCount = prev + change;
      return Math.max(45, Math.min(85, newCount));
    });
  }, 3500);
  return () => clearInterval(interval);
}, []);
```

### Badge Display (lines 48-58)

**Current:**
```tsx
<div className="inline-flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 shadow-xl border-2 border-white/50 bg-red-500">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
  </span>
  {spotsLeft <= 8 
    ? `Only ${spotsLeft} spots left today!` 
    : `Only ${spotsLeft} spots left today`
  }
</div>
```

**New:**
```tsx
<div className="inline-flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 shadow-xl border-2 border-white/50 bg-orange-500">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
  </span>
  {liveViewers} people checking availability right now
</div>
```

---

## Files Modified

| File | Changes |
|------|---------|
| `src/components/HeroSection.tsx` | Headline + subheadline copy updates |
| `src/components/GallerySection.tsx` | CTA text update |
| `src/components/FAQSection.tsx` | CTA text update |
| `src/pages/QualifyPage.tsx` | Replace spots with live viewers badge |

---

## Testing Checklist

- [ ] Hero headline: "Attention Colorado Homeowners: This New Winter Program Helps You Save Over $2,000 On Your Remodeling Project"
- [ ] Hero subheadline: "Only available in select zip codes. Click below to see if you qualify."
- [ ] Hero CTA: "See If I Qualify Now" (already done)
- [ ] Gallery CTA: "See If I Qualify Now"
- [ ] FAQ CTA: "See If I Qualify Now"
- [ ] Qualify page badge shows "X people checking availability right now"
- [ ] Live viewers number fluctuates between 45-85
- [ ] Pulsing white dot animates on badge
- [ ] Badge has orange background color

