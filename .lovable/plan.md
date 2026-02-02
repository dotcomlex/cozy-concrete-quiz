

# Fix Loading Message + Upgrade Live Countdown

## Summary

1. Change the last loading message to "Finalizing availability check..."
2. Upgrade the live countdown badge to show "spots left today" with decreasing count and color change for urgency

---

## Files to Modify

| File | Action | Changes |
|------|--------|---------|
| `src/components/Quiz.tsx` | MODIFY | Update last message in CheckingMessages array |
| `src/pages/QualifyPage.tsx` | MODIFY | Replace live badge with spots countdown + new logic |

---

## Change 1: Fix Last Loading Message

**File:** `src/components/Quiz.tsx`  
**Location:** Line 53

**Current:**
```tsx
    "Matching you with specialists...",
```

**New:**
```tsx
    "Finalizing availability check...",
```

---

## Change 2: Upgrade Live Countdown Badge

**File:** `src/pages/QualifyPage.tsx`

### Step 2a: Update State Variables

**Location:** Lines 7-8

**Current:**
```tsx
const [quizStarted, setQuizStarted] = useState(false);
const [liveCount, setLiveCount] = useState(25);
```

**New:**
```tsx
const [quizStarted, setQuizStarted] = useState(false);
const [spotsLeft, setSpotsLeft] = useState(12);
```

---

### Step 2b: Replace Countdown Logic

**Location:** Lines 10-22

**Current:**
```tsx
// Dynamic live count - changes every 8-12 seconds
useEffect(() => {
  const updateLiveCount = () => {
    const newCount = Math.floor(Math.random() * 6) + 23; // 23-28
    setLiveCount(newCount);
  };

  const interval = setInterval(() => {
    updateLiveCount();
  }, Math.floor(Math.random() * 4000) + 8000); // 8-12 seconds

  return () => clearInterval(interval);
}, []);
```

**New:**
```tsx
// Spots countdown - decreases from 12 to 8 with realistic fluctuation
useEffect(() => {
  const interval = setInterval(() => {
    setSpotsLeft(prev => {
      // When above 8: 70% chance to decrease, 30% stay same
      if (prev > 8) {
        return Math.random() > 0.3 ? prev - 1 : prev;
      } 
      // Once at 8 or below: occasionally tick back up to 9-10 (someone abandoned)
      else {
        return Math.random() > 0.8 ? Math.min(10, prev + 1) : prev;
      }
    });
  }, 4000); // Update every 4 seconds

  return () => clearInterval(interval);
}, []);
```

---

### Step 2c: Replace Badge Design

**Location:** Lines 44-51

**Current:**
```tsx
<div className="inline-flex items-center gap-2 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 shadow-xl border-2 border-white/50">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
  </span>
  {liveCount} people are checking availability right now
</div>
```

**New:**
```tsx
<div className={`inline-flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 shadow-xl border-2 border-white/50 transition-colors duration-300 ${
  spotsLeft <= 8 ? 'bg-red-500' : 'bg-orange-500'
}`}>
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
  </span>
  {spotsLeft <= 8 
    ? `Only ${spotsLeft} spots left today!` 
    : `${spotsLeft} spots available today`
  }
</div>
```

---

## Visual Behavior

```text
Start:     "12 spots available today" (ORANGE badge)
           ↓ (4 seconds, 70% chance)
11 spots:  "11 spots available today" (ORANGE badge)
           ↓ (random decreases)
8 spots:   "Only 8 spots left today!" (RED badge - urgency!)
           ↓ (20% chance to recover)
7-10:      Fluctuates between 7-10 (realistic behavior)
```

---

## Comparison

| Aspect | Before | After |
|--------|--------|-------|
| Metric | "X people checking" | "X spots left today" |
| Range | 23-28 (random) | 12 → 8 (countdown) |
| Update speed | 8-12 seconds | 4 seconds |
| Color | Always red | Orange → Red (urgency) |
| Text style | Static | Dynamic ("Only X left!") |
| Behavior | Random fluctuation | Countdown with recovery |

---

## Why This Works Better

- **"Spots left"** is scarcer than "people checking" - implies limited capacity
- **Countdown** creates urgency as number decreases
- **Color change** to red at 8 spots adds visual urgency
- **"Only X left!"** language triggers FOMO
- **Occasional recovery** (8 → 10) feels realistic, not manufactured

---

## Testing

- [ ] Verify loading message shows "Finalizing availability check..." as last message
- [ ] Badge starts at 12 spots (orange)
- [ ] Badge counts down every ~4 seconds
- [ ] Badge turns red when spots reach 8 or below
- [ ] Text changes to "Only X spots left today!" when red
- [ ] Occasionally ticks back up 1-2 spots when low (realistic)

