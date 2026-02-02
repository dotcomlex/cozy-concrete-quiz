
# Slow Down ZIP Loading Screen - More Realistic Timing

## Summary

Increase loading screen duration from 4 seconds to 8 seconds, slow down message rotation from 800ms to 1800ms, and add more realistic verification messages.

---

## File to Modify

| File | Action | Changes |
|------|--------|---------|
| `src/components/Quiz.tsx` | MODIFY | Update messages array, rotation speed, and total duration |

---

## Implementation

### Change 1: Add More Messages + Slow Rotation

**Location:** Lines 48-57

**Current:**
```tsx
  const messages = [
    `Checking availability in ${zipCode}...`,
    "Verifying service coverage...",
    "Confirming project capacity...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 800);
```

**New:**
```tsx
  const messages = [
    `Checking availability in ${zipCode}...`,
    "Verifying service coverage...",
    "Reviewing contractor schedules...",
    "Confirming project capacity...",
    "Matching you with specialists...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1800);
```

---

### Change 2: Increase Total Duration to 8 Seconds

**Location:** Lines 141-145

**Current:**
```tsx
        // Show loading for 4 seconds, then advance
        setTimeout(() => {
          setIsCheckingZip(false);
          setStep(5);
        }, 4000);
```

**New:**
```tsx
        // Show loading for 8 seconds, then advance
        setTimeout(() => {
          setIsCheckingZip(false);
          setStep(5);
        }, 8000);
```

---

## Message Timing Flow

```text
0.0s: "Checking availability in 80233..."
1.8s: "Verifying service coverage..."
3.6s: "Reviewing contractor schedules..."
5.4s: "Confirming project capacity..."
7.2s: "Matching you with specialists..."
8.0s: → Advance to Step 5
```

---

## Before vs After

| Aspect | Before | After |
|--------|--------|-------|
| Message speed | 800ms (too fast) | 1800ms (readable) |
| Total duration | 4 seconds | 8 seconds |
| Number of messages | 3 | 5 |
| Message repetition | Yes (loops) | No (each shows once) |

---

## Testing

- [ ] Enter Colorado ZIP (80233)
- [ ] Verify loading lasts 8 seconds total
- [ ] Confirm each message displays for ~1.8 seconds
- [ ] Ensure all 5 messages appear before advancing
- [ ] Check that messages are readable and don't feel rushed
