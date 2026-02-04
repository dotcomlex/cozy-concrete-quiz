

# Update Hero Section Copy

## Summary

Update the headline and subheadline text in the hero section with the new copy you provided.

---

## Text Changes

| Element | Current | New |
|---------|---------|-----|
| Headline | "...Save $2,000 On Their **Bath & Kitchen Remodel**" | "...Save $2,000 On Their **Remodel**" |
| Subheadline | "...$2,000 off your **project**." | "...$2,000 off your **kitchen or bathroom remodel**." |

---

## Technical Details

### File: `src/components/HeroSection.tsx`

**Change 1: Headline (lines 49-52)**

Update from:
```jsx
This New Winter Upgrade Program Is Helping Colorado Homeowners Save{" "}
<span className="text-highlight">$2,000</span> On Their Bath & Kitchen Remodel
```

To:
```jsx
This New Winter Upgrade Program Is Helping Colorado Homeowners Save{" "}
<span className="text-highlight">$2,000</span> On Their Remodel
```

**Change 2: Subheadline (lines 54-56)**

Update from:
```jsx
Limited spots available. Click below to see if you qualify for a free consultation and $2,000 off your project.
```

To:
```jsx
Limited spots available. Click below to see if you qualify for a free consultation and $2,000 off your kitchen or bathroom remodel.
```

---

## Files Modified

| File | Lines | Change |
|------|-------|--------|
| `src/components/HeroSection.tsx` | 49-52 | Simplify headline to "On Their Remodel" |
| `src/components/HeroSection.tsx` | 54-56 | Update subheadline to specify "kitchen or bathroom remodel" |

