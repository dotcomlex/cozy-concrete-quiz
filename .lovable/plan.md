

# Remove Contractor Referral Links

## Summary

Remove the "Looking for a contractor in your area?" section with HomeAdvisor, Angi, and Thumbtack links from the disqualification screen. You're not sharing leads with competitors.

---

## File to Modify

| File | Change |
|------|--------|
| `src/components/Quiz.tsx` | Delete the referral links section (lines 726-735) |

---

## What Gets Removed

The entire gray box containing:
- "Looking for a contractor in your area?" text
- HomeAdvisor link
- Angi link  
- Thumbtack link

---

## Before vs After

**Before:**
```
We Only Serve Colorado

Thank you for your interest...

┌─────────────────────────────────┐
│ Looking for a contractor...?   │
│ HomeAdvisor  Angi  Thumbtack   │
└─────────────────────────────────┘

Think this is an error? Your ZIP...
```

**After:**
```
We Only Serve Colorado

Thank you for your interest...

Think this is an error? Your ZIP...
```

---

## Technical Change

Delete lines 726-735 in `Quiz.tsx`:

```tsx
// DELETE THIS ENTIRE BLOCK:
<div className="bg-muted/50 rounded-lg p-4 mb-4">
  <p className="text-xs text-muted-foreground">
    <strong>Looking for a contractor in your area?</strong>
  </p>
  <div className="flex gap-3 justify-center mt-2">
    <a href="https://www.homeadvisor.com" ...>HomeAdvisor</a>
    <a href="https://www.angi.com" ...>Angi</a>
    <a href="https://www.thumbtack.com" ...>Thumbtack</a>
  </div>
</div>
```

---

## Result

Out-of-state users will see a clean disqualification message without being directed to your competitors.

