
# Add Website Link to Thank You Page

## Overview
Add a friendly text with a link to the main website on the success/thank you page so users can explore more about the company.

---

## File to Modify

| File | Change |
|------|--------|
| `src/components/Quiz.tsx` | Add website link text after the main message |

---

## Code Changes

**File:** `src/components/Quiz.tsx` (after line 661, before the security badge)

```tsx
// Add this new paragraph after the existing message:
<p className="text-xs sm:text-sm text-muted-foreground mb-4">
  In the meantime, feel free to check out our website:{' '}
  <a 
    href="https://14erenovations.com/home" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-primary hover:underline font-medium"
  >
    14erenovations.com
  </a>
</p>
```

---

## Result Preview

The thank you page will now show:

```text
Awesome, [First Name]—you're all set! 🎉

We'll be reaching out very soon to get more details on your 
project and schedule your free consultation. Talk soon!

In the meantime, feel free to check out our website: 14erenovations.com

🛡️ Your information is secure
```

---

## Summary

| Element | Details |
|---------|---------|
| Text | "In the meantime, feel free to check out our website:" |
| Link text | "14erenovations.com" |
| Link URL | https://14erenovations.com/home |
| Styling | Smaller text, primary color link with hover underline |
| Opens in | New tab (`target="_blank"`) |
