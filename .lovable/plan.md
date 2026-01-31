
# Critical Copy & UX Fixes Based on User Feedback

## Summary

This update addresses multiple copy and UX issues found during testing: homepage headline improvements, qualify page enhancements, quiz flow refinements including removing the 5th budget option, friendlier timeline clarification language, and showing the actual ZIP code on the contact form.

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/HeroSection.tsx` | Remove BREAKING badge, increase logo, update headline/subheadline, update CTA card copy, brighten image |
| `src/pages/QualifyPage.tsx` | Remove "Qualification Form" badge, add live activity indicator, update headline |
| `src/components/Quiz.tsx` | Remove 5th budget option, friendlier timeline clarification, single "Back to Home" button on disqualification, show actual ZIP in contact header |

---

## Part 1: Homepage Fixes (HeroSection.tsx)

### 1.1 Remove "BREAKING" Badge
Delete lines 45-50 containing the red "BREAKING" badge.

### 1.2 Increase Logo Size
**Current:** `h-16 sm:h-24 lg:h-36`
**New:** `h-20 sm:h-28 lg:h-44`

### 1.3 Update Headline
**Current:**
```text
New Winter Program Gives Colorado Homeowners $2,000 OFF Any Remodeling Project—Only 7 Spots Left
```

**New:**
```text
Save $2,000 On Your Kitchen, Bathroom, Or Any Remodeling Project
```
Add "LIMITED SPOTS AVAILABLE" badge below headline.

### 1.4 Update Subheadline
**Current:**
```text
Transform your kitchen, bathroom, or any space...Take a quick 5-question quiz...
```

**New:**
```text
Fill this quick form to see if you qualify for a free consultation and $2,000 off any remodeling project.
```

### 1.5 Update CTA Card
- Add "LIMITED SPOTS" urgency badge at top
- Change heading from "See If You Qualify" to "Save $2,000 On Your Remodel"
- Update button text from "Start Qualification Quiz" to "Check Availability"
- Redesign trust indicators to horizontal layout with cleaner styling
- Add `whitespace-nowrap` to prevent text wrapping on mobile

### 1.6 Brighten Hero Image
Add `brightness-110` to the image and reduce overlay opacity.

---

## Part 2: Qualify Page Fixes (QualifyPage.tsx)

### 2.1 Remove "Qualification Form" Badge
Delete the badge element at lines 30-32.

### 2.2 Add Live Activity Indicator
Add pulsing dot with text: "8 people are checking availability right now"

### 2.3 Update Headline
**Current:** "See if you qualify for $2,000 off"
**New:** "Save $2,000 On Your Remodel"

### 2.4 Update Subheadline
**Current:** "Answer a few quick questions to check your eligibility"
**New:** "Answer a few quick questions to see if you qualify"

---

## Part 3: Quiz Component Fixes (Quiz.tsx)

### 3.1 Remove 5th Budget Option (Lines 614-619)
Remove the "Not sure / Need guidance" option from the budget step. Only keep 4 options:
- $10,000 - $20,000
- $20,000 - $40,000
- $40,000 - $60,000
- $60,000+

Also update `getBudgetLabel()` helper to remove the "not-sure" case.

### 3.2 Update Timeline Clarification Language (Lines 431-501)
**Changes:**
- "Quick Clarification" → "Quick Question"
- "Would you like to move forward with a consultation?" → "Does that work for your timeline?"
- "Yes, I want to start within 60 days" → "Yes, that works for me"
- "Continue with qualification" → "Continue to next step"
- "No, I'm planning further out" → "No, I need more time"

### 3.3 Fix Timeline Disqualification Buttons (Lines 504-570)
**Changes:**
- Remove "Read Reviews" button
- Change to single "Back to Home" button that links to `/`
- Update heading from "We're Booking Soon!" to "Thanks For Your Interest!"

### 3.4 Show Actual ZIP Code on Contact Step (Lines 690-698)
**Current:** "Your Zip Code Qualifies For This Offer!"
**New:** "Congrats! Your Area ({data.zipCode}) Qualifies!"

Also update subheadline:
**Current:** "...schedule your 100% free estimate."
**New:** "...schedule your 100% free in-home consultation."

---

## Visual Summary

### Homepage Hero Before/After

| Element | Before | After |
|---------|--------|-------|
| Badge | "🚨 BREAKING" | Removed |
| Logo size | h-16/h-24/h-36 | h-20/h-28/h-44 |
| Headline | "New Winter Program Gives..." | "Save $2,000 On Your Kitchen..." |
| CTA button | "Start Qualification Quiz" | "Check Availability" |
| Image | Dark overlay | Brightened with brightness-110 |

### Quiz Flow Changes

| Step | Before | After |
|------|--------|-------|
| Budget options | 5 options | 4 options (removed "Not sure") |
| Timeline clarification | Formal language | Friendly language |
| Disqualification | 2 buttons (Gallery + Reviews) | 1 button (Back to Home) |
| Contact header | Generic ZIP message | Shows actual ZIP code |

---

## Benefits

- Cleaner, more professional homepage without "BREAKING" urgency
- Friendlier, less "qualification" focused language
- Streamlined budget options (removes low-value "not sure" responses)
- Single clear CTA on disqualification screen
- Personalized contact step with actual ZIP code
- Better mobile text wrapping with `whitespace-nowrap`
