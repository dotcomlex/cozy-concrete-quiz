

# Replace FAQ Footer with CTA Button

## Summary

Remove the "Still have questions?" text box and replace it with the same "Check Availability Now" CTA button used elsewhere on the homepage.

---

## File to Modify

| File | Action | Changes |
|------|--------|---------|
| `src/components/FAQSection.tsx` | MODIFY | Replace CTA footer div with styled button matching homepage pattern |

---

## Implementation

### Step 1: Add Required Imports

Add these imports at the top of FAQSection.tsx:

```tsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
```

### Step 2: Replace CTA Footer

**Current (Lines 78-86):**
```tsx
{/* CTA Footer */}
<div className="text-center mt-12 p-6 bg-slate-100 rounded-xl">
  <p className="text-slate-700 font-medium mb-2">
    Still have questions?
  </p>
  <p className="text-slate-600">
    Call us at <span className="font-semibold text-primary">(720) 989-9883</span> or complete the form above to get your free consultation.
  </p>
</div>
```

**New:**
```tsx
{/* Inline CTA - matches hero button style */}
<div className="flex justify-center mt-10 sm:mt-12">
  <motion.div className="animate-subtle-rock">
    <Link to="/qualify">
      <Button 
        variant="cta" 
        size="xl" 
        className="group shadow-2xl text-lg px-8 py-6 animate-cta-glow"
      >
        Check Availability Now
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </Link>
  </motion.div>
</div>
```

---

## What Changes

| Before | After |
|--------|-------|
| Gray box with "Still have questions?" text | Orange CTA button with arrow |
| Phone number display | Link to /qualify page |
| Static design | Animated button with glow effect |

---

## Verification

- [ ] "Still have questions?" text removed
- [ ] "Check Availability Now" button appears
- [ ] Button has orange gradient and glow animation
- [ ] Button links to /qualify page
- [ ] Button has subtle rocking animation
- [ ] Matches the CTA buttons in Gallery and Reviews sections

