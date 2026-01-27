

# Simplify Hero Urgency Indicator

## Problem
The current urgency indicator has too much visual noise:
- Pulsing red dot animation
- Multiple competing colors (red, white/muted, amber/highlight)
- Combined with the quiz progress dots below, it creates clutter

## Solution
Simplify to a clean, single-color urgency message without the animated dot.

---

## Implementation

### File: `src/components/HeroSection.tsx`

**Replace lines 66-82** (the current urgency indicator)

**Current (cluttered):**
```tsx
{/* Urgency Indicator */}
<motion.div 
  className="flex items-center gap-2 text-white/90 mt-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.8 }}
>
  <span className="relative flex h-2.5 w-2.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
  </span>
  <p className="text-xs sm:text-sm font-medium hero-text-shadow">
    <span className="text-red-400 font-bold">Only 7 spots left</span>
    <span className="text-white/70"> for January — </span>
    <span className="text-highlight font-semibold">book yours now</span>
  </p>
</motion.div>
```

**New (clean):**
```tsx
{/* Urgency Indicator - Clean version */}
<motion.p 
  className="text-xs sm:text-sm font-medium text-white/80 hero-text-shadow mt-3"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.8 }}
>
  ⏳ Only 7 spots left for January
</motion.p>
```

---

## Changes Summary

| Removed | Added |
|---------|-------|
| Pulsing red dot animation | Simple hourglass emoji |
| 3 different text colors | Single white/muted color |
| "book yours now" CTA | Removed (redundant) |
| `flex items-center gap-2` wrapper | Simple `<p>` tag |

---

## Visual Result

**Before:**
- Pulsing red dot competing for attention
- Red + white + amber text colors
- Feels chaotic with quiz dots below

**After:**
- Clean, subtle urgency text
- Single muted white color
- Small hourglass emoji for visual interest
- Harmonizes with rest of hero section

---

## Technical Notes

- Keeps Framer Motion fade-in animation for polish
- Reduces margin from `mt-4` to `mt-3` for tighter layout
- Text remains readable with `hero-text-shadow`
- No competing animations or colors

