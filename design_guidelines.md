# Pikando Digital Website Design Guidelines

## Design Approach
**Selected Approach:** Reference-based design inspired by Airbnb's clarity and Notion's minimal professionalism, adapted for a task marketplace platform. The design emphasizes trust, simplicity, and accessibility while matching the established Flutter app's visual language.

## Core Design Principles
- **Professional Minimalism:** Clean, breathable layouts with purposeful whitespace
- **Trust-First:** Clear information hierarchy that establishes credibility
- **Consistency:** Seamless visual alignment with existing Flutter mobile app

---

## Typography System

**Primary Font:** Montserrat (Google Fonts)

**Hierarchy:**
- **Hero Headline:** 56px / Bold / -0.02em tracking / primaryBlack
- **Section Headings:** 36px / SemiBold / -0.01em tracking / primaryBlack  
- **Subsection Titles:** 24px / SemiBold / primaryBlack
- **Body Large:** 18px / Regular / 1.6 line-height / neutral800
- **Body Standard:** 16px / Regular / 1.5 line-height / neutral700
- **Small Text:** 14px / Medium / neutral600
- **Button Text:** 16px / SemiBold / uppercase tracking 0.05em

---

## Layout System

**Spacing Units:** Use consistent spacing of 8, 16, 24, 32, 48, 64, 96px

**Container Widths:**
- Maximum content width: 1200px centered
- Standard horizontal padding: 32px desktop / 24px tablet / 16px mobile
- Section vertical spacing: 96px desktop / 64px tablet / 48px mobile

**Grid System:**
- Value Cards: 3-column grid on desktop → 1-column mobile
- How It Works Steps: 3-column grid with visual flow indicators
- Form layouts: Single column, max-width 480px

---

## Color Application

**From app_colors.dart:**

**Backgrounds:**
- Primary surface: primaryWhite (#F5F3F0)
- Card backgrounds: offWhite50 (#F5F3F0) with subtle neutral100 borders
- Footer: neutral50 (#F8F7F8)

**Text:**
- Primary: primaryBlack (#1B1A1B)
- Secondary: neutral700 (#535054)
- Subtle: neutral500 (#7E797E)

**Interactive Elements:**
- Primary CTA buttons: secondary yellow (#FBFF2C) with primaryBlack text
- Secondary buttons: primaryBlack background with primaryWhite text
- Links: neutral800 with underline on hover
- Focus states: 2px solid secondary yellow outline with 4px offset

**Feedback:**
- Error messages: error500 (#FF2359)
- Success indicators: neutral800
- Warning badges: warning300 (#FBFF2C)

---

## Component Library

### Navigation Header
- Fixed/sticky top positioning
- Height: 80px
- Logo: Montserrat Bold, 24px, "PIKANDO" in primaryBlack
- Links: 16px Medium, neutral800, 24px spacing between items
- Background: primaryWhite with subtle neutral100 bottom border (1px)
- Mobile: Hamburger menu (neutral800) → full-screen overlay navigation

### Hero Section
- **Layout:** Two-column split (60/40) on desktop, single column mobile
- **Left Column:** Headline, subtext, email capture form
- **Right Column:** Hero illustration/image (abstract task completion visual)
- **Padding:** 128px top / 96px bottom on desktop
- **Background:** primaryWhite with subtle neutral50 gradient from bottom
- **Image:** Modern illustration showing task completion/connection (colorful but complementing palette)

### Value Cards
- **Cards:** offWhite50 background, 1px neutral200 border
- **Border-radius:** 8px
- **Padding:** 32px all sides
- **Icon Space:** 48px × 48px circular container with neutral100 background
- **Card Spacing:** 24px gap in grid
- **Hover:** Subtle lift (4px translateY) with soft shadow (0 8px 24px rgba(27,26,27,0.08))

### How It Works Steps
- **Step Numbers:** 56px circle, secondary yellow background, primaryBlack text (Bold)
- **Connector Lines:** 2px dashed neutral300 between steps (desktop only)
- **Step Cards:** Minimal, no background, left-aligned content
- **Icons/Numbers:** Positioned above titles with 16px spacing

### Waitlist Forms
- **Input Fields:** 
  - Height: 56px
  - Border: 2px solid neutral300
  - Border-radius: 8px
  - Padding: 0 20px
  - Font: 16px Regular
  - Focus: 2px solid secondary yellow, neutral300 border removed
  - Background: white (#FFFFFF)
- **Submit Button:**
  - Height: 56px
  - Background: secondary yellow
  - Text: primaryBlack, 16px SemiBold
  - Border-radius: 8px
  - Padding: 0 40px
  - No hover color change (maintain yellow), subtle scale (1.02) on hover

### Support Contact Form
- **Field Layout:** Full-width stacked fields with 16px vertical spacing
- **Labels:** 14px Medium, neutral700, 8px bottom margin
- **Textarea:** Minimum height 120px for message field
- **Success Message:** neutral800 text with checkmark icon

### Footer
- **Background:** neutral50
- **Padding:** 64px vertical
- **Layout:** 
  - Desktop: 3-column grid (Company Info / Links / Contact)
  - Mobile: Stacked single column
- **Text:** 14px Regular, neutral600
- **Copyright:** 14px Regular, neutral500
- **Divider:** 1px solid neutral200 above copyright

### FAQ Section (Support Page)
- **Question Buttons:** Full-width, left-aligned, 20px Medium, neutral900
- **Answer Text:** 16px Regular, neutral700, 24px top padding when expanded
- **Accordion Style:** Minimal with chevron indicator (neutral600)
- **Background:** Alternating neutral50/transparent for visual separation

---

## Responsive Breakpoints

- **Mobile:** < 768px (single column layouts, full-width CTAs)
- **Tablet:** 768px - 1024px (2-column grids where appropriate)
- **Desktop:** > 1024px (full multi-column layouts)

---

## Images & Visual Assets

**Hero Section Image:**
- **Type:** Custom illustration or abstract visual
- **Placement:** Right column (40% width) on desktop, above content on mobile
- **Description:** Modern, clean illustration depicting task completion or person-to-person connection. Use complementary colors (soft blues, greens, warm neutrals) that don't clash with secondary yellow. Style: Minimal, geometric shapes, friendly character illustrations
- **Treatment:** Image should have subtle shadow or float effect

**Value Card Icons:**
- Use simple line icons (2px stroke weight) in neutral800
- Size: 32px × 32px
- Icons: Briefcase (versatile tasks), Shield-check (verified), Lock (secure)

**No additional large images required** - maintain minimal, content-focused design throughout

---

## Interaction & Animation

**Minimize animations** - use only subtle, purposeful micro-interactions:
- Button hover: Subtle scale (1.02 transform) in 150ms
- Card hover: 4px lift with shadow transition in 200ms
- Page transitions: None (instant route changes)
- Form focus: 150ms border color transition
- FAQ accordion: 250ms smooth height expand/collapse

**No loading animations, no scroll effects, no parallax**

---

## Accessibility Standards

- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text
- Focus indicators: 2px solid secondary yellow outline with 4px offset
- Touch targets: Minimum 44px × 44px for all interactive elements
- Form labels: Always visible, associated with inputs
- Semantic HTML: Proper heading hierarchy, meaningful link text

---

## Legal Pages (Privacy/Terms)

- **Max width:** 800px centered
- **Headings:** 32px SemiBold for H1, 24px SemiBold for H2
- **Body:** 16px Regular, 1.7 line-height
- **Sections:** 48px vertical spacing between major sections
- **Lists:** 24px left padding, 8px vertical spacing between items
- **Background:** primaryWhite
- **Timestamps:** 14px Medium, neutral600 at top of document

This design system creates a professional, trustworthy platform that aligns perfectly with your Flutter app while meeting Apple Developer Program standards for organizational submissions.