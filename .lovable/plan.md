

# Update Hero Headline

## Overview
Replace the current headline with the new, more direct copy that leads with the program name and includes the urgency in the headline itself.

---

## Implementation

### File: `src/components/HeroSection.tsx`

**Replace headline (lines 56-60):**

Current:
```tsx
<h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-white leading-tight hero-text-shadow">
  Colorado homeowners can now get{" "}
  <span className="text-highlight">$2,000 OFF</span>{" "}
  any remodeling project through our Winter Upgrade Program!
</h1>
```

New:
```tsx
<h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-white leading-tight hero-text-shadow">
  New Winter Program Gives Colorado Homeowners{" "}
  <span className="text-highlight">$2,000 OFF</span>{" "}
  Any Remodeling Project—Only 7 Spots Left
</h1>
```

---

## Changes Summary

| Element | Before | After |
|---------|--------|-------|
| Lead-in | "Colorado homeowners can now get" | "New Winter Program Gives Colorado Homeowners" |
| Offer | "$2,000 OFF" (highlighted) | "$2,000 OFF" (highlighted) - unchanged |
| Project text | "any remodeling project" | "Any Remodeling Project" (title case) |
| Ending | "through our Winter Upgrade Program!" | "—Only 7 Spots Left" |

---

## Notes

- The urgency ("Only 7 Spots Left") is now integrated into the headline itself, making it more impactful
- The separate urgency indicator below the subheadline can remain as reinforcement, or be removed since it's now in the headline
- Title case used for "Any Remodeling Project" to match the headline style
- Em dash (—) used before "Only" for proper typography

