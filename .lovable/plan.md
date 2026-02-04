
# Fix ZIP Code Not Being Sent to Webhook

## Problem

The ZIP code is being lost when sending to the webhook due to a **stale closure bug** in the Step 5 contact form inputs.

When users type in the Name, Phone, or Email fields, each `onChange` handler uses:
```tsx
setData({ ...data, fieldName: value })
```

The `data` variable captured in these closures can be **stale** (from an earlier render), which causes the ZIP code to be overwritten with an empty string.

---

## Root Cause

```text
Step 4: User enters ZIP "80233" -> data.zipCode = "80233"
           |
           v
Step 5 renders, input onChange handlers capture 'data'
           |
           v
User types in Name field -> setData({ ...data, firstName: "John" })
           |
           v
PROBLEM: 'data' in this closure might be stale, zipCode gets lost!
```

---

## Solution

Change all three input `onChange` handlers in Step 5 to use the **functional update pattern**:

```tsx
// From (buggy):
setData({ ...data, firstName: e.target.value })

// To (fixed):
setData(prev => ({ ...prev, firstName: e.target.value }))
```

This ensures each update uses the **latest state** (`prev`) instead of a potentially stale closure.

---

## File to Modify

| File | Lines | Change |
|------|-------|--------|
| `src/components/Quiz.tsx` | 767-768 | Fix firstName onChange |
| `src/components/Quiz.tsx` | 789-790 | Fix phone onChange |
| `src/components/Quiz.tsx` | 815-816 | Fix email onChange |

---

## Exact Changes

### 1. Name Input (Line 767-768)

**Current:**
```tsx
onChange={(e) => {
  setData({ ...data, firstName: e.target.value });
```

**Fixed:**
```tsx
onChange={(e) => {
  setData(prev => ({ ...prev, firstName: e.target.value }));
```

---

### 2. Phone Input (Line 789-790)

**Current:**
```tsx
onChange={(e) => {
  setData({ ...data, phone: formatPhoneNumber(e.target.value) });
```

**Fixed:**
```tsx
onChange={(e) => {
  setData(prev => ({ ...prev, phone: formatPhoneNumber(e.target.value) }));
```

---

### 3. Email Input (Line 815-816)

**Current:**
```tsx
onChange={(e) => {
  setData({ ...data, email: e.target.value });
```

**Fixed:**
```tsx
onChange={(e) => {
  setData(prev => ({ ...prev, email: e.target.value }));
```

---

## Why This Fixes It

| Before | After |
|--------|-------|
| `{ ...data, field: value }` uses captured closure | `prev => ({ ...prev, field: value })` uses latest state |
| ZIP code can be overwritten by stale data | ZIP code is preserved from previous state |
| React bug: stale closure | React best practice: functional updates |

---

## No Other Changes

As requested, this fix:
- Only touches the 3 input `onChange` handlers in Step 5
- Does not modify the payload construction
- Does not modify the webhook URL
- Does not modify any other logic

---

## Testing

After fix, verify:
- [ ] Enter ZIP code 80233 on Step 4
- [ ] Fill in Name, Phone, Email on Step 5
- [ ] Submit form
- [ ] Check webhook receives `zip_code: "80233"` in payload
