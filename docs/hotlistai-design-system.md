# HOTLISTAI — DESIGN SYSTEM

A complete visual reference for the HotlistAI brand identity.

---

## Color System

### Primary Colors

```
Background (Light):  #FAFAFA
Background (Dark):   #0A0A0A
Foreground (Light):  #171717
Foreground (Dark):   #EDEDED
```

### Grayscale Palette

```
Gray 50:   #FAFAFA
Gray 100:  #F5F5F5
Gray 200:  #E5E5E5
Gray 300:  #D4D4D4
Gray 400:  #A3A3A3
Gray 500:  #737373
Gray 600:  #525252
Gray 700:  #404040
Gray 800:  #262626
Gray 900:  #171717
Gray 950:  #0A0A0A
```

### Accent Colors

```
Primary:   #1A1A1A (Near Black)
Border:    #E5E5E5 (Light) / #262626 (Dark)
Ring:      #171717 (Focus states)
Muted:     #F5F5F5 (Light) / #262626 (Dark)
```

### Color Usage Rules

- **Maximum 3-5 colors per design**
- Black and white are the foundation
- Neutrals for hierarchy and depth
- No gradients unless explicitly needed
- High contrast always (WCAG AAA when possible)

---

## Typography

### Font Families

**Primary (Sans-serif):**
```
Geist Sans
font-family: 'Geist', sans-serif
```

**Monospace:**
```
Geist Mono
font-family: 'Geist Mono', monospace
```

### Type Scale

```
text-xs:    0.75rem  (12px)
text-sm:    0.875rem (14px)
text-base:  1rem     (16px)
text-lg:    1.125rem (18px)
text-xl:    1.25rem  (20px)
text-2xl:   1.5rem   (24px)
text-3xl:   1.875rem (30px)
text-4xl:   2.25rem  (36px)
text-5xl:   3rem     (48px)
text-6xl:   3.75rem  (60px)
text-7xl:   4.5rem   (72px)
text-8xl:   6rem     (96px)
text-9xl:   8rem     (128px)
```

### Font Weights

```
font-light:     300
font-normal:    400
font-medium:    500
font-semibold:  600
font-bold:      700
```

### Line Height

```
Body text:      leading-relaxed (1.625)
Headings:       leading-tight (1.25)
Large display:  leading-none (1)
```

### Typography Rules

- Maximum 2 font families total
- Body text: 16px minimum
- Line height: 1.4-1.6 for readability
- Use `text-balance` for headlines
- Use `text-pretty` for paragraphs
- Letter spacing: default (no custom tracking)

---

## Spacing System

### Base Scale (Tailwind)

```
0:    0px
px:   1px
0.5:  2px
1:    4px
2:    8px
3:    12px
4:    16px
5:    20px
6:    24px
8:    32px
10:   40px
12:   48px
16:   64px
20:   80px
24:   96px
32:   128px
40:   160px
48:   192px
56:   224px
64:   256px
```

### Section Spacing

```
Small:    py-12 (48px)
Medium:   py-16 (64px)
Large:    py-24 (96px)
XL:       py-32 (128px)
```

### Component Spacing

```
Button padding:     px-6 py-3
Input padding:      px-4 py-2
Card padding:       p-6
Container padding:  px-4 md:px-6
Gap default:        gap-4
```

### Spacing Rules

- Use Tailwind spacing scale (no arbitrary values like `p-[16px]`)
- Prefer `gap` over margin for flex/grid spacing
- Never mix margin/padding with gap on same element
- Consistent padding on similar components

---

## Layout System

### Container

```
max-w-7xl (1280px)
mx-auto
px-4 md:px-6
```

### Breakpoints

```
sm:   640px
md:   768px
lg:   1024px
xl:   1280px
2xl:  1536px
```

### Layout Method Priority

**1. Flexbox (90% of layouts)**
```
flex
items-center
justify-between
gap-4
```

**2. CSS Grid (complex 2D layouts)**
```
grid
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
gap-6
```

**3. Absolute positioning (rare, only when necessary)**

### Layout Rules

- Mobile-first responsive design
- Start with `flex` for most layouts
- Use `grid` only for complex 2D arrangements
- Avoid floats and absolute positioning
- Always test on mobile, tablet, desktop

---

## Border Radius

```
rounded-none:   0px
rounded-sm:     2px
rounded:        4px
rounded-md:     6px
rounded-lg:     8px
rounded-xl:     12px
rounded-2xl:    16px
rounded-3xl:    24px
rounded-full:   9999px
```

### Radius Usage

```
Buttons:      rounded-md (6px)
Cards:        rounded-lg (8px)
Inputs:       rounded-md (6px)
Images:       rounded-lg (8px)
Avatars:      rounded-full
```

---

## Shadows

```
shadow-sm:    0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow:       0 1px 3px 0 rgb(0 0 0 / 0.1)
shadow-md:    0 4px 6px -1px rgb(0 0 0 / 0.1)
shadow-lg:    0 10px 15px -3px rgb(0 0 0 / 0.1)
shadow-xl:    0 20px 25px -5px rgb(0 0 0 / 0.1)
```

### Shadow Usage

```
Cards:          shadow-sm
Hover cards:    shadow-md
Modals:         shadow-xl
Dropdowns:      shadow-lg
None by default (flat aesthetic)
```

---

## Buttons

### Primary Button

```tsx
className="
  bg-foreground 
  text-background 
  hover:bg-foreground/90 
  px-6 py-3 
  rounded-md 
  font-medium 
  transition-colors
"
```

### Secondary Button

```tsx
className="
  bg-transparent 
  border border-foreground 
  text-foreground 
  hover:bg-foreground 
  hover:text-background 
  px-6 py-3 
  rounded-md 
  font-medium 
  transition-colors
"
```

### Ghost Button

```tsx
className="
  bg-transparent 
  text-foreground 
  hover:bg-muted 
  px-4 py-2 
  rounded-md 
  font-medium 
  transition-colors
"
```

### Button Sizes

```
Small:    px-4 py-2 text-sm
Default:  px-6 py-3 text-base
Large:    px-8 py-4 text-lg
```

---

## Input Fields

### Text Input

```tsx
className="
  w-full 
  px-4 py-2 
  border border-border 
  rounded-md 
  bg-background 
  text-foreground 
  focus:outline-none 
  focus:ring-2 
  focus:ring-ring
"
```

### Textarea

```tsx
className="
  w-full 
  px-4 py-2 
  border border-border 
  rounded-md 
  bg-background 
  text-foreground 
  min-h-[120px] 
  focus:outline-none 
  focus:ring-2 
  focus:ring-ring
"
```

---

## Cards

### Standard Card

```tsx
className="
  p-6 
  border border-border 
  rounded-lg 
  bg-background 
  hover:shadow-md 
  transition-shadow
"
```

### Feature Card

```tsx
className="
  p-8 
  border border-border 
  rounded-lg 
  bg-background 
  space-y-4
"
```

---

## Icons

### Size Scale

```
Small:    w-4 h-4  (16px)
Default:  w-5 h-5  (20px)
Medium:   w-6 h-6  (24px)
Large:    w-8 h-8  (32px)
```

### Icon Rules

- Use lucide-react icons
- Consistent sizing within sections
- Match icon color to text color
- No emojis as icons

---

## Logo

### Formats

**Wordmark:**
- Primary usage
- Full "HotlistAI Labs" or "HotlistAI"

**Icon:**
- Bookmark/arrow mark
- Use when wordmark doesn't fit

### Logo Usage

```
Light backgrounds:  Dark logo
Dark backgrounds:   Light logo
Minimum size:       120px wide (wordmark)
Clear space:        Equal to height of logo
```

### Logo Rules

- Never distort or skew
- Never add effects (shadows, gradients)
- Never change colors
- Always maintain clear space

---

## Imagery

### Style Guidelines

- Minimal, clean
- High contrast
- No stock photos
- Abstract when needed
- Product screenshots: clean UI only

### Image Treatments

```
Border radius:  rounded-lg
Aspect ratios:  16:9 (landscape), 1:1 (square), 4:5 (portrait)
Filters:        None (keep images natural)
Overlays:       Black overlay at 40% for text
```

### Placeholder Images

```
/placeholder.svg?height=400&width=600&query=abstract+pattern
```

---

## Animations

### Transition Timing

```
Fast:     transition-all duration-150
Default:  transition-all duration-200
Slow:     transition-all duration-300
```

### Hover States

```tsx
// Buttons
hover:bg-foreground/90

// Cards
hover:shadow-md

// Links
hover:underline

// Scale
hover:scale-105

// Opacity
hover:opacity-80
```

### Animation Rules

- Keep transitions fast (150-200ms)
- Use `ease-in-out` or default easing
- Animate only transform, opacity, colors
- No complex keyframe animations unless necessary

---

## Accessibility

### Color Contrast

- Text: Minimum 4.5:1 (WCAG AA)
- Large text: Minimum 3:1
- Target: 7:1 (WCAG AAA)

### Focus States

```tsx
focus:outline-none 
focus:ring-2 
focus:ring-ring 
focus:ring-offset-2
```

### Screen Reader Text

```tsx
<span className="sr-only">Description for screen readers</span>
```

### Semantic HTML

- Use `<button>` for buttons
- Use `<a>` for links
- Use `<nav>` for navigation
- Use `<main>` for main content
- Use `<header>` and `<footer>` appropriately

---

## Component Patterns

### Hero Section

```
Full viewport height: min-h-screen
Center content: flex items-center justify-center
Large heading: text-5xl md:text-7xl font-bold
Subheading: text-xl md:text-2xl text-muted-foreground
CTA buttons: Primary + Secondary side by side
```

### Feature Grid

```
Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
Gap: gap-8
Cards: p-6 border rounded-lg
Icon: w-12 h-12 mb-4
Heading: text-xl font-semibold mb-2
Description: text-muted-foreground
```

### Bento Grid

```
Grid: grid-cols-1 md:grid-cols-4 lg:grid-cols-6
Auto rows: auto-rows-[200px]
Varying spans: col-span-2, col-span-3, row-span-2
Gaps: gap-4
```

---

## Design Principles

### Minimalism

- Reduce until only essential remains
- Whitespace is a design element
- One focal point per section

### Hierarchy

- Size creates importance
- Weight creates emphasis
- Spacing creates grouping

### Consistency

- Same components look the same everywhere
- Spacing follows system
- Colors follow palette

### Performance

- Optimize images
- Lazy load below fold
- Minimize animations
- Fast page loads

---

## File Structure

### Public Assets

```
/public
  /images           (Product screenshots, hero images)
  /icons            (Favicon, app icons)
  og-image.jpg      (Social sharing image)
  favicon.ico
  site.webmanifest
```

### Component Organization

```
/components
  /ui               (Primitive components)
  site-header.tsx   (Global header)
  site-footer.tsx   (Global footer)
```

---

## Dark Mode

### Color Tokens

```css
/* Light mode */
--background: #FAFAFA
--foreground: #171717

/* Dark mode */
--background: #0A0A0A
--foreground: #EDEDED
```

### Dark Mode Rules

- All backgrounds use `bg-background`
- All text uses `text-foreground`
- Borders: `border-border`
- Hover states adjust opacity
- Test both modes always

---

## Grid Systems

### 12-Column Grid

```
grid-cols-12
col-span-6 (50%)
col-span-4 (33%)
col-span-3 (25%)
```

### Asymmetric Layouts

```
grid-cols-3 (Left sidebar)
grid-cols-[1fr_2fr] (2:1 ratio)
grid-cols-[2fr_1fr] (1:2 ratio)
```

---

## Responsive Design

### Mobile First Approach

```tsx
// Base (mobile)
<div className="text-base p-4">

// Tablet
<div className="text-base md:text-lg p-4 md:p-6">

// Desktop
<div className="text-base md:text-lg lg:text-xl p-4 md:p-6 lg:p-8">
```

### Breakpoint Usage

- sm: Minor adjustments
- md: Layout shifts (single to multi-column)
- lg: Max content width, more columns
- xl: Extra spacing
- 2xl: Rare, only for very large screens

---

## Print Styles

### Hidden Elements

```tsx
<nav className="print:hidden">
<footer className="print:hidden">
```

### Print Optimization

```tsx
<article className="print:text-black print:bg-white">
```

---

**Last updated:** December 2024

*Where people and products meet.*
