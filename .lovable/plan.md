

# Update CTA Language to "Qualify" Messaging

## Summary

Align all CTA buttons and the /qualify page headline with "qualify" language to match your successful Facebook lead form messaging. Keep the "Takes less than 30 seconds" subheadline.

---

## Engaging Headline Options for /qualify Page

Instead of plain "Do You Qualify?", here are more engaging options:

| Option | Why It Works |
|--------|--------------|
| **"See If You Qualify for $2,000 Off"** | Adds the benefit right in the headline - reminds them of the reward |
| **"Could You Save $2,000 on Your Remodel?"** | Question format creates curiosity, benefit-focused |
| **"Unlock Your $2,000 Savings"** | Gamification feel, action-oriented, assumes success |
| **"Your $2,000 Discount Is Waiting"** | Creates urgency, assumes they'll get it |

**Recommended**: "See If You Qualify for $2,000 Off" - keeps the qualify language consistent with your Facebook ads while adding the benefit.

---

## All CTA Changes

| Location | Current | New |
|----------|---------|-----|
| Hero button (`HeroSection.tsx`) | "Check Availability Now" | "See If You Qualify" |
| Floating CTA (`FloatingCTA.tsx`) | "Claim $2,000 Discount" | "See If You Qualify" |
| Gallery inline CTA | "Check Availability Now" | "See If You Qualify" |
| Reviews inline CTA | "Check Availability Now" | "See If You Qualify" |
| Final CTA section | Various | "See If You Qualify" |
| /qualify page headline | "Check Availability" | "See If You Qualify for $2,000 Off" |

---

## Technical Implementation

### File: `src/pages/QualifyPage.tsx` (lines 58-63)

**Current:**
```jsx
<h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
  Check Availability
</h1>
<p className="text-sm sm:text-base font-medium text-slate-700">
  Takes less than 30 seconds to complete
</p>
```

**New:**
```jsx
<h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
  See If You Qualify for $2,000 Off
</h1>
<p className="text-sm sm:text-base font-medium text-slate-700">
  Takes less than 30 seconds to complete
</p>
```

### File: `src/components/HeroSection.tsx` (line 72)

**Current:** `Check Availability Now`
**New:** `See If You Qualify`

### File: `src/components/FloatingCTA.tsx` (line 28)

**Current:** `Claim $2,000 Discount`
**New:** `See If You Qualify`

### File: `src/components/GallerySection.tsx`

Update inline CTA button text to "See If You Qualify"

### File: `src/components/ReviewsSection.tsx`

Update inline CTA button text to "See If You Qualify"

### File: `src/components/FinalCTASection.tsx`

Update CTA button text to "See If You Qualify"

---

## Files Modified

| File | Change |
|------|--------|
| `src/pages/QualifyPage.tsx` | Update headline to "See If You Qualify for $2,000 Off" |
| `src/components/HeroSection.tsx` | Update button to "See If You Qualify" |
| `src/components/FloatingCTA.tsx` | Update button to "See If You Qualify" |
| `src/components/GallerySection.tsx` | Update inline CTA button |
| `src/components/ReviewsSection.tsx` | Update inline CTA button |
| `src/components/FinalCTASection.tsx` | Update CTA button |

