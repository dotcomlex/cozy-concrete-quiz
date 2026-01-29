
# Fix Mobile Auto-Zoom on Input Fields

## The Problem
On iOS Safari, when you tap an input field with a font size smaller than 16px, the browser automatically zooms in to make the text easier to read. Your quiz inputs currently use `text-[15px]` which triggers this behavior.

## The Solution
Change the font size of all input fields from `text-[15px]` to `text-base` (which equals 16px). This prevents iOS from auto-zooming while maintaining a clean, readable appearance.

---

## File to Modify

| File | Change |
|------|--------|
| `src/components/Quiz.tsx` | Update font size on 4 input fields from `text-[15px]` to `text-base` |

---

## Code Changes

### 1. ZIP Code Input (line 462)

```tsx
// Before:
className="pl-10 h-12 text-[15px] rounded-xl border-2 focus:border-primary"

// After:
className="pl-10 h-12 text-base rounded-xl border-2 focus:border-primary"
```

### 2. Name Input (line 534)

```tsx
// Before:
className={`pl-10 h-12 text-[15px] rounded-xl border-2 transition-all ${...}`}

// After:
className={`pl-10 h-12 text-base rounded-xl border-2 transition-all ${...}`}
```

### 3. Phone Input (line 556)

```tsx
// Before:
className={`pl-10 h-12 text-[15px] rounded-xl border-2 transition-all ${...}`}

// After:
className={`pl-10 h-12 text-base rounded-xl border-2 transition-all ${...}`}
```

### 4. Email Input (line 582)

```tsx
// Before:
className={`pl-10 h-12 text-[15px] rounded-xl border-2 transition-all ${...}`}

// After:
className={`pl-10 h-12 text-base rounded-xl border-2 transition-all ${...}`}
```

---

## Why This Works

| Font Size | iOS Behavior |
|-----------|--------------|
| Less than 16px | Auto-zooms on focus |
| 16px or larger | No zoom |

`text-base` in Tailwind equals `font-size: 1rem` which is 16px by default, exactly at the threshold to prevent iOS auto-zoom.

---

## Summary

This is a simple 4-line change that will eliminate the auto-zoom issue on all mobile devices (particularly iOS Safari) while keeping the inputs looking virtually identical.
