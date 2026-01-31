

# Fix FAQ #6 - Remove False Deadline

## Summary

Remove the incorrect January 31st deadline from FAQ #6 answer to avoid displaying false/past information to users.

---

## File to Modify

| File | Action | Changes |
|------|--------|---------|
| `src/components/FAQSection.tsx` | MODIFY | Remove deadline sentence from FAQ #6 answer |

---

## Implementation

### File: `src/components/FAQSection.tsx`

**Location:** Lines 35-39 (FAQ #6 in the faqs array)

**Current:**
```tsx
{
  question: "What does the $2,000 Winter Upgrade Program discount apply to?",
  answer:
    "The $2,000 discount applies to any remodeling project - kitchens, bathrooms, basements, or combinations. Projects must be scheduled by January 31st to qualify for this limited-time offer.",
},
```

**New:**
```tsx
{
  question: "What does the $2,000 Winter Upgrade Program discount apply to?",
  answer:
    "The $2,000 discount applies to any remodeling project - kitchens, bathrooms, basements, or combinations.",
},
```

---

## What Changed

- Removed the sentence: "Projects must be scheduled by January 31st to qualify for this limited-time offer."
- Keeps the factual statement about what the discount applies to
- Eliminates false/past deadline from being displayed to users

---

## Verification

- [ ] FAQ #6 no longer mentions January 31st
- [ ] Answer still explains what the discount applies to (kitchens, bathrooms, basements, or combinations)

