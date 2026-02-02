

# Add Loading Screen to ZIP Code Auto-Advance

## Summary

Add a 2.5-second loading screen with rotating verification messages between Step 4 (ZIP entry) and Step 5 (Contact Form) for Colorado ZIP codes only.

---

## File to Modify

| File | Action | Changes |
|------|--------|---------|
| `src/components/Quiz.tsx` | MODIFY | Add loading state, CheckingMessages component, and loading screen UI |

---

## Implementation Steps

### Step 1: Add New State Variable

**Location:** Line 56 (after `errors` state)

**Add:**
```tsx
const [isCheckingZip, setIsCheckingZip] = useState(false);
```

---

### Step 2: Add CheckingMessages Component

**Location:** Before line 49 (before the Quiz component definition)

**Add:**
```tsx
// Rotating messages for ZIP verification
const CheckingMessages = ({ zipCode }: { zipCode: string }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  
  const messages = [
    `Checking availability in ${zipCode}...`,
    "Verifying service coverage...",
    "Confirming project capacity...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 800);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={messageIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-base sm:text-lg font-medium text-foreground">
        {messages[messageIndex]}
      </p>
      <p className="text-sm text-muted-foreground mt-2">
        Please wait a moment...
      </p>
    </motion.div>
  );
};
```

---

### Step 3: Modify handleNext Function

**Location:** Lines 99-108

**Current:**
```tsx
const handleNext = () => {
  if (step === 4 && data.zipCode.length >= 5) {
    if (isColoradoZipCode(data.zipCode)) {
      setIsDisqualified(false);
      setStep(5);
    } else {
      setIsDisqualified(true);
    }
  }
};
```

**New:**
```tsx
const handleNext = () => {
  if (step === 4 && data.zipCode.length >= 5 && !isCheckingZip) {
    if (isColoradoZipCode(data.zipCode)) {
      setIsDisqualified(false);
      setIsCheckingZip(true);
      
      // Show loading for 2.5 seconds, then advance
      setTimeout(() => {
        setIsCheckingZip(false);
        setStep(5);
      }, 2500);
    } else {
      setIsDisqualified(true);
    }
  }
};
```

---

### Step 4: Update Step 4 Condition

**Location:** Line 621

**Current:**
```tsx
{step === 4 && !isSubmitted && (
```

**New:**
```tsx
{step === 4 && !isSubmitted && !isCheckingZip && !isDisqualified && (
```

---

### Step 5: Add Loading Screen

**Location:** After Step 4 block (line 667), before Step 5 block (line 669)

**Add:**
```tsx
{/* ZIP Code Checking Loader */}
{isCheckingZip && !isSubmitted && !isDisqualified && (
  <motion.div
    key="checking-zip"
    variants={cardVariants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.25 }}
    className="py-8 text-center"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-16 h-16 mx-auto mb-6"
    >
      <div className="w-full h-full rounded-full border-4 border-slate-200 border-t-primary" />
    </motion.div>
    
    <CheckingMessages zipCode={data.zipCode} />
  </motion.div>
)}
```

---

## Flow Comparison

```text
CURRENT FLOW:
Step 4: Type "80233" → Click Continue → Instant jump to Step 5

NEW FLOW:
Step 4: Type "80233" → Click Continue
   ↓
LOADING (2.5s): "Checking availability in 80233..."
   ↓
Step 5: "Congrats! Your Area Qualifies!"
```

---

## What Does NOT Change

- Existing Step 4 UI - unchanged
- Existing Step 5 UI - unchanged
- ZIP validation logic - unchanged  
- Disqualification flow for non-Colorado ZIPs - unchanged
- All other quiz steps - unchanged

## What DOES Change

- Loading screen appears between Step 4 and Step 5
- 2.5 second delay with rotating messages
- Only for Colorado ZIP codes
- Adds perceived value/verification step

---

## Testing Checklist

- [ ] Type Colorado ZIP (80233) → See loading → Auto-advance to Step 5
- [ ] Loading shows rotating messages
- [ ] Non-Colorado ZIP → Shows disqualification (no loading)
- [ ] Back button still works during Step 4
- [ ] Everything else works exactly as before

