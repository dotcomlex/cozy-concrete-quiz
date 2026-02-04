

# Fix Missed CTA Button and Mobile Headline Sizing

## Summary

Fix two issues: (1) The FAQ section CTA button still says "Check Availability Now" - it was missed in the previous update, and (2) the /qualify page headline is wrapping awkwardly on mobile, creating a poor visual appearance.

---

## Issues Identified

| Issue | Location | Problem |
|-------|----------|---------|
| Missed CTA update | `FAQSection.tsx` line 85 | Still shows "Check Availability Now" |
| Headline wrapping | `QualifyPage.tsx` line 63-64 | "See If You Qualify for $2,000 Off" breaks awkwardly on small screens |

---

## Solutions

### 1. Update FAQ Section CTA Button

**File**: `src/components/FAQSection.tsx` (line 85)

Change from:
```jsx
Check Availability Now
```

To:
```jsx
See If You Qualify
```

### 2. Fix Mobile Headline Sizing

The current headline text is too long for mobile screens, causing an ugly wrap where "$2,000 Off" breaks to a second line awkwardly.

**File**: `src/pages/QualifyPage.tsx` (lines 63-65)

**Current:**
```jsx
<h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
  See If You Qualify for $2,000 Off
</h1>
```

**Solution - Use smaller text on mobile and add controlled line break:**
```jsx
<h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 leading-tight">
  See If You Qualify<br className="sm:hidden" />
  <span className="whitespace-nowrap"> for $2,000 Off</span>
</h1>
```

This approach:
- Reduces base font size from `text-2xl` to `text-xl` on mobile
- Adds `leading-tight` for better line spacing
- Uses a hidden line break on mobile to control where the text wraps
- Wraps "$2,000 Off" in `whitespace-nowrap` to keep the price and "Off" together

---

## Files Modified

| File | Change |
|------|--------|
| `src/components/FAQSection.tsx` | Update button text to "See If You Qualify" |
| `src/pages/QualifyPage.tsx` | Improve headline sizing and structure for mobile |

