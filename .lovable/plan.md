
# Improve Thank You Page Copy

## Overview
Update the success screen copy to be more casual and friendly, with a warmer tone that feels more personal.

---

## File to Modify

| File | Change |
|------|--------|
| `src/components/Quiz.tsx` | Update success screen headline and message |

---

## Current vs New Copy

### Headline (line 655-657)

| Current | New |
|---------|-----|
| "🎉 SUCCESS! Your $2,000 Discount is Reserved, {firstName}!" | "Awesome, {firstName}—you're all set! 🎉" |

### Subtext (line 659-661)

| Current | New |
|---------|-----|
| "We'll be contacting you very soon to schedule your free consultation." | "We'll be reaching out very soon to get more details on your project and schedule your free consultation. Talk soon!" |

---

## Code Changes

**File:** `src/components/Quiz.tsx` (lines 655-661)

```tsx
// Before:
<h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 leading-snug">
  🎉 SUCCESS! Your $2,000 Discount is Reserved, {data.firstName}!
</h3>

<p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-sm mx-auto">
  We'll be contacting you very soon to schedule your free consultation.
</p>

// After:
<h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 leading-snug">
  Awesome, {data.firstName}—you're all set! 🎉
</h3>

<p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-sm mx-auto">
  We'll be reaching out very soon to get more details on your project and schedule your free consultation. Talk soon!
</p>
```

---

## Summary

This makes the thank you page feel more friendly and conversational:
- Removes the "SUCCESS!" formality
- Leads with "Awesome" for a warm greeting
- Uses "you're all set" instead of formal discount language
- Adds "Talk soon!" for a personal closing
- Moves emoji to the end for better flow
