

# Add Urgency Messaging to Hero Section

## Overview
Add a subtle but compelling urgency indicator below the subheadline to create exclusivity and FOMO (fear of missing out) for the Winter Upgrade Program.

---

## Implementation

### File: `src/components/HeroSection.tsx`

**Add urgency element after the subheadline (line 64), before the closing `</div>`:**

```tsx
{/* Urgency Indicator */}
<motion.div 
  className="flex items-center gap-2 text-white/90"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.8 }}
>
  <span className="relative flex h-2.5 w-2.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
  </span>
  <p className="text-xs sm:text-sm font-medium">
    <span className="text-red-400 font-bold">Only 7 spots left</span>
    <span className="text-white/70"> for January — </span>
    <span className="text-highlight font-semibold">book yours now</span>
  </p>
</motion.div>
```

---

## Design Elements

| Element | Style | Purpose |
|---------|-------|---------|
| Pulsing red dot | `animate-ping` with layered circles | Draws attention, signals "live" status |
| "Only 7 spots left" | Red text, bold | Creates scarcity/urgency |
| "for January" | Muted white | Time-bound context |
| "book yours now" | Highlight color (amber) | CTA reinforcement |

---

## Visual Behavior

1. **Pulsing Dot**: A small red circle with an animated ping effect (similar to a "live" indicator)
2. **Fade-in Animation**: The urgency text fades in slightly after the headline (0.8s delay) for a staggered, polished effect
3. **Mobile-Optimized**: Small text (`text-xs`) on mobile, slightly larger (`text-sm`) on desktop

---

## Why This Works

- **Scarcity**: "Only 7 spots" creates immediate FOMO
- **Time-bound**: "for January" adds deadline pressure
- **Visual pulse**: The animated dot catches the eye without being obnoxious
- **Subtle placement**: Below subheadline, before the quiz — right in the decision-making zone

---

## Technical Notes

- Uses existing Tailwind animation utilities (`animate-ping`)
- Leverages Framer Motion already imported in the file
- No new dependencies required
- Consistent with existing text shadow styling for readability

