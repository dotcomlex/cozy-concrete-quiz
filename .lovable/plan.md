


# Simplify Qualify Page Headline - Mobile-First Clean Design

## Problem

The current headline structure has multiple issues on mobile:
1. **Too many competing colors** - gray question, black text, amber highlight, lighter gray subtext
2. **Awkward line breaks** - "Winter Upgra" breaks to "Program" creating ugly visual
3. **Too many visual layers** - 4-5 separate lines overwhelming the user
4. **Overcomplicated hierarchy** - trying to do too much with styling

---

## Solution: Simplified Single-Color Headline

Consolidate to a cleaner, simpler structure with one dominant color and minimal hierarchy.

---

## New Headline Structure

**Option: Clean Single Line with Subtle Emphasis**

```text
See If You Qualify for the
Winter Upgrade Program
and Save Thousands
```

All in **slate-900** (dark text) with just the amber accent on "Winter Upgrade Program" - but keeping font weight consistent.

---

## Technical Implementation

### File: `src/pages/QualifyPage.tsx` (lines 61-75)

**Current (too complex):**
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

**New (simplified):**
```jsx
{!quizStarted && (
  <>
    <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-relaxed">
      See If You Qualify for the<br />
      Winter Upgrade Program
    </h1>
    <p className="text-sm text-slate-600">
      Takes less than 30 seconds
    </p>
  </>
)}
```

---

## Key Changes

| Aspect | Before | After |
|--------|--------|-------|
| **Lines of text** | 4 (question, qualify, program, subtext) | 2 (headline, subtext) |
| **Colors** | 4 (slate-700, slate-900, primary/amber, slate-600) | 2 (slate-900, slate-600) |
| **Font weights** | Mixed (semibold, bold, medium) | Consistent (bold, regular) |
| **Line breaks** | Complex conditional `<br className="sm:hidden" />` | Simple `<br />` for all |
| **Text sizes** | 5 different sizes | 2 sizes only |

---

## Visual Result

**Mobile (clean, readable):**
```text
See If You Qualify for the
Winter Upgrade Program

Takes less than 30 seconds
```

- Removed the "Ready to Transform Your Home?" question (was adding clutter)
- Removed amber highlight (was creating color competition)
- Removed "and Save Thousands" (streamlined message)
- Simple two-line headline with consistent styling

---

## Files Modified

| File | Change |
|------|--------|
| `src/pages/QualifyPage.tsx` | Simplify headline to 2-color, 2-line clean structure |


