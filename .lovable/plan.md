

# Update Qualify Page Headline - Engaging Two-Line Design

## Summary

Update the `/qualify` page headline with the user's chosen copy and improved font styling for a cleaner, more engaging mobile experience.

---

## New Headline Copy

| Line | Text |
|------|------|
| **Question** | "Ready to Transform Your Home?" |
| **Value Prop** | "See If You Qualify for the Winter Upgrade Program and Save Thousands" |

---

## Font Styling Improvements

| Property | Current | New |
|----------|---------|-----|
| Font weight | `font-extrabold` (800) | `font-semibold` / `font-bold` - lighter, more elegant |
| Line height | `leading-tight` | `leading-snug` - better breathing room |
| Structure | Single h1 with awkward br | Two-line hierarchy with question + value prop |
| Highlight | None | "Winter Upgrade Program" in amber (`text-primary`) |

---

## Technical Implementation

### File: `src/pages/QualifyPage.tsx` (lines 61-70)

**Current:**
```jsx
{!quizStarted && (
  <>
    <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 leading-tight">
      See If You Qualify<br className="sm:hidden" />
      <span className="whitespace-nowrap"> for $2,000 Off</span>
    </h1>
    <p className="text-sm sm:text-base font-medium text-slate-700">
      Takes less than 30 seconds to complete
    </p>
  </>
)}
```

**New:**
```jsx
{!quizStarted && (
  <>
    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 mb-1 leading-snug">
      Ready to Transform Your Home?
    </p>
    <h1 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
      See If You Qualify for the{' '}
      <span className="text-primary">Winter Upgrade Program</span>
      <br className="sm:hidden" />
      {' '}and Save Thousands
    </h1>
    <p className="text-sm sm:text-base font-medium text-slate-600">
      Takes less than 30 seconds to complete
    </p>
  </>
)}
```

**Key improvements:**
- Engaging question as the lead-in (larger, lighter weight)
- Main value prop with "Winter Upgrade Program" highlighted in amber
- Controlled line break on mobile for natural reading
- Lighter font weights throughout for cleaner mobile appearance
- Better color hierarchy with `slate-700` for question, `slate-900` for main text

---

## Visual Result

**Mobile view:**
```text
Ready to Transform Your Home?
See If You Qualify for the
Winter Upgrade Program
and Save Thousands
```

**Desktop view:**
```text
Ready to Transform Your Home?
See If You Qualify for the Winter Upgrade Program and Save Thousands
```

---

## Files Modified

| File | Change |
|------|--------|
| `src/pages/QualifyPage.tsx` | Restructure headline with question + value prop, improve font styling, add amber highlight |

