

# Quiz Mobile Optimization Plan

## Overview
Clean up the quiz by removing the redundant "Winter Upgrade Program" badge and improving typography/sizing for a better mobile experience.

---

## Changes to Implement

### 1. Remove "Winter Upgrade Program" Badge
**File:** `src/components/Quiz.tsx`
**Lines:** 279-287

Remove the entire header badge section from the quiz card. The user already knows about the program from the hero headline, so this is redundant visual clutter.

**Delete:**
```jsx
{/* Header Badge - show on Steps 1-4 only */}
{step < 5 && !isSubmitted && (
  <div className="text-center mb-7">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border border-primary/20">
      <Sparkles className="w-3.5 h-3.5" />
      Winter Upgrade Program
    </div>
  </div>
)}
```

---

### 2. Improve Quiz Typography for Mobile
**File:** `src/components/Quiz.tsx`

**Question Headlines (lines 300, 346, 399, 448)**
- Current: `text-xl sm:text-2xl`
- New: `text-lg sm:text-xl` (slightly smaller for better mobile fit)

**OptionCard Label (line 210)**
- Current: `text-sm sm:text-base`  
- New: `text-[13px] sm:text-sm` (tighter mobile sizing)

**OptionCard Icon Container (line 200)**
- Current: `w-14 h-14`
- New: `w-11 h-11 sm:w-12 sm:h-12` (smaller on mobile)

**OptionCard Icon (line 205)**
- Current: `w-6 h-6`
- New: `w-5 h-5 sm:w-6 sm:h-6` (proportional to container)

**OptionCard/BudgetCard Padding (lines 194, 238)**
- Current: `p-4 sm:p-5`
- New: `p-3 sm:p-4` (tighter padding for mobile)

---

### 3. Reduce Quiz Card Padding
**File:** `src/components/Quiz.tsx`
**Line:** 278

- Current: `p-6 sm:p-8`
- New: `p-4 sm:p-6` (more compact on mobile)

---

### 4. Tighten Progress Dots Spacing
**File:** `src/components/Quiz.tsx`
**Line:** 263

- Current: `mb-6`
- New: `mb-4` (reduce gap between dots and card)

---

### 5. Reduce Grid Gap for Mobile
**File:** `src/components/Quiz.tsx`
**Lines:** 303, 349, 402

- Current: `gap-3`
- New: `gap-2 sm:gap-3` (tighter grid on mobile)

---

## Visual Impact

**Before:**
- Large badge taking up space
- Oversized fonts on mobile
- Generous padding feels cramped on small screens

**After:**
- Clean, focused quiz with no redundant elements
- Properly scaled typography for mobile thumbs
- Compact but comfortable touch targets (still 44px+ height)

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/Quiz.tsx` | Remove badge, adjust typography sizes, reduce padding |

---

## Technical Notes

- All touch targets remain at least 44px (iOS/Android accessibility standard)
- Font sizes use Tailwind's responsive prefixes for optimal scaling
- Webhook and validation logic unchanged
- Animations remain smooth
- Progress dots and trust footer unchanged

