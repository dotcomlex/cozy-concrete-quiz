

# Quiz Component Update Plan

## Overview
Update the Quiz component with refined styling and layout changes based on the provided code structure.

---

## Changes to Implement

### 1. handleBack Function Update
**Current (line 75-79):**
```typescript
const handleBack = () => {
  if (step > 1) {
    setStep((step - 1) as QuizStep);
  }
};
```

**New:**
```typescript
const handleBack = () => {
  if (step > 1 && step < 5) {
    setStep((step - 1) as QuizStep);
  }
};
```

This prevents users from navigating back from Step 5 (Contact Form) using the handleBack function, though the back button UI remains.

---

### 2. OptionCard Component - Vertical Grid Style
**Current:** Horizontal layout with icon on left, text on right
**New:** Vertical grid style with icon on top, text below

Changes to the OptionCard component:
- Change flex direction to column
- Center the icon above the text
- Adjust padding and spacing for grid display
- Maintain the accent color and checkmark functionality

---

### 3. Budget Step Grid Layout
**Current:** Vertical stacked cards (`flex flex-col gap-3`)
**New:** 2x2 grid layout (`grid grid-cols-2 gap-3`)

This creates a more compact budget selection with 4 options in a 2x2 grid.

---

### 4. State Typing Simplification
**Current:** `const [step, setStep] = useState<QuizStep>(1);`
**New:** `const [step, setStep] = useState(1);`

This is a minor cleanup, keeping TypeScript inference without explicit type annotation.

---

## Files to Modify
- `src/components/Quiz.tsx`

## Technical Notes
- All webhook, validation, and Facebook Pixel logic remains unchanged
- Animation variants stay the same
- Progress dots and header badge remain unchanged
- Contact form (Step 5) and Success screen remain unchanged

