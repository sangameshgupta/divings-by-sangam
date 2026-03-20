---
title: "feat: Build Divings by Sangam Personal Brand Website"
type: feat
date: 2026-03-20
---

# Build "Divings by Sangam" Personal Brand Website

## Overview

Build a personal brand website for Sangam Gellagupta — an indie builder, writer, and Salesforce/AI consultant. The site follows the "Architectural Monolith" design philosophy: a dark, premium, editorial aesthetic inspired by linear.app and every.to. The design was prototyped in Google Stitch with pixel-perfect HTML exports and a comprehensive design system spec.

**Stack:** Next.js 15 (App Router) + Tailwind CSS v4 + Vercel + Cloudflare DNS

## Problem Statement / Motivation

Sangam operates as a one-person company spanning building, writing, and consulting. He needs a unified digital presence that:
- Communicates his identity and expertise at a glance
- Showcases his projects (Nexus, Lumi, Claude Code Salesforce Plugin, Hidden Automation Detector)
- Surfaces his Substack writing via RSS integration
- Provides a professional contact point for collaborations and consulting
- Reflects a premium, intentional aesthetic that differentiates from generic portfolio templates

## Proposed Solution

A 5-page Next.js App Router site with a shared layout (header + footer), fully responsive, deployed on Vercel. All styling via Tailwind CSS with a custom design token system extracted from the Stitch prototype.

---

## Technical Approach

### Architecture

```
app/
├── layout.tsx              # Root layout: fonts, header, footer, mobile nav
├── page.tsx                # Home page
├── globals.css             # Tailwind imports, custom utilities
├── projects/
│   └── page.tsx            # Projects grid
├── writing/
│   └── page.tsx            # Substack RSS feed
├── about/
│   └── page.tsx            # The Story
├── collaborate/
│   └── page.tsx            # Contact form + partnerships
└── api/
    └── contact/
        └── route.ts        # Contact form handler (POST)

components/
├── Header.tsx              # Fixed glassmorphic nav bar
├── MobileNav.tsx           # Bottom navigation bar (mobile only)
├── Footer.tsx              # Desktop footer
├── ProjectCard.tsx         # Reusable project card
├── ArticleCard.tsx         # Reusable article/writing card
├── ConsultantInsight.tsx   # The signature quote chip (green left border)
├── NewsletterSignup.tsx    # Email signup form
└── ContactForm.tsx         # Collaborate page form

lib/
├── rss.ts                  # Substack RSS fetching + parsing
└── projects.ts             # Static project data

public/
├── images/                 # Project images, portrait, workspace
└── fonts/                  # (If self-hosting Inter/Space Grotesk)

tailwind.config.ts          # Full design system tokens
```

### Design System Configuration (`tailwind.config.ts`)

Extracted directly from the Stitch HTML exports:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surface hierarchy (depth through tonal variation)
        surface: {
          DEFAULT: "#121315",         // Base layer
          dim: "#121315",
          "container-lowest": "#0d0e0f",  // Recessed elements
          "container-low": "#1b1c1d",     // Secondary sections
          "container": "#1f2021",
          "container-high": "#292a2b",    // Floating cards
          "container-highest": "#343536", // Active overlays
          bright: "#38393a",
          variant: "#343536",
          tint: "#c0c1ff",
        },
        // Primary: purple accent
        primary: {
          DEFAULT: "#c0c1ff",
          container: "#8083ff",
          fixed: "#e1e0ff",
          "fixed-dim": "#c0c1ff",
        },
        // Secondary: mint green (AI/creative accent)
        secondary: {
          DEFAULT: "#4edea3",
          container: "#00a572",
          fixed: "#6ffbbe",
          "fixed-dim": "#4edea3",
        },
        // On-surface text colors
        "on-surface": {
          DEFAULT: "#e3e2e3",
          variant: "#c7c4d7",
        },
        "on-primary": {
          DEFAULT: "#1000a9",
          container: "#0d0096",
        },
        "on-primary-container": "#0d0096",
        "on-background": "#e3e2e3",
        background: "#121315",
        outline: {
          DEFAULT: "#908fa0",
          variant: "#464554",
        },
        // Tertiary (muted)
        tertiary: {
          DEFAULT: "#c4c5d5",
          container: "#8e909e",
        },
        error: {
          DEFAULT: "#ffb4ab",
          container: "#93000a",
        },
      },
      fontFamily: {
        headline: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Space Grotesk", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      letterSpacing: {
        editorial: "-0.04em",
        label: "0.2em",
        widest: "0.3em",
      },
    },
  },
  plugins: [],
};
```

### Font Strategy

Use `next/font/google` for optimized loading:

```typescript
// app/layout.tsx
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "500", "700"],
});
```

### Custom CSS Utilities (`globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .text-glow {
    text-shadow: 0 0 30px rgba(192, 193, 255, 0.15);
  }
  .monolith-gradient {
    background: linear-gradient(135deg, #c0c1ff 0%, #8083ff 100%);
  }
  .ghost-border {
    border: 1px solid rgba(70, 69, 84, 0.2);
  }
}
```

---

## Implementation Phases

### Phase 1: Foundation (Scaffold + Design System + Layout)

**Goal:** Working Next.js app with design tokens, fonts, header, footer, and mobile nav.

**Tasks:**
- [ ] Initialize Next.js 15 project with App Router (`npx create-next-app@latest`)
- [ ] Configure Tailwind CSS with full design token system from Stitch exports
- [ ] Set up `next/font/google` for Inter + Space Grotesk
- [ ] Create `globals.css` with custom utilities (text-glow, monolith-gradient, ghost-border)
- [ ] Build `Header.tsx` — fixed, glassmorphic (`bg-surface/60 backdrop-blur-xl`), with DIVINGS logo, nav links (Home, Projects, Writing, About, Collaborate), search icon, hamburger menu
- [ ] Build `Footer.tsx` — DIVINGS branding, copyright, social links (Twitter/X, YouTube, LinkedIn, Substack, Linktree)
- [ ] Build `MobileNav.tsx` — fixed bottom bar with 5 icon tabs, backdrop-blur, active state highlighting
- [ ] Create `app/layout.tsx` wrapping header + footer + mobile nav
- [ ] Verify responsive behavior at mobile/tablet/desktop breakpoints

**Files to create:**
- `tailwind.config.ts`
- `app/layout.tsx`
- `app/globals.css`
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/MobileNav.tsx`

**Success criteria:** Navigable shell with consistent header/footer, correct fonts and colors, no layout shift.

### Phase 2: Home Page

**Goal:** Complete home page matching the Stitch design.

**Sections (in order):**
1. **Hero** — Display-size heading "Divings by Sangam", mint-green consultant chip (`BUILDER + WRITER + SALESFORCE/AI CONSULTANT`), subtitle paragraph, two CTAs (purple "Read my Newsletter" → Substack, ghost-border "View Projects" → /projects)
2. **Bento Grid** — 12-column grid with:
   - Featured article card (8-col) with avatar, date, read time
   - Consultant Insight quote card (4-col) with deployed_code icon
   - Toolkit list card (4-col) with bullet points
   - Workspace image card (8-col) with overlay gradient
3. **Newsletter CTA** — "Stay in the Flow" section with email input, subscribe button, blurred gradient orb decoration

**Tasks:**
- [ ] Build hero section with editorial typography (text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.04em])
- [ ] Build consultant chip with green left border
- [ ] Build CTA buttons (primary with hover overlay animation, secondary with ghost border)
- [ ] Build bento grid with featured article, insight quote, toolkit, workspace image
- [ ] Build `NewsletterSignup.tsx` component with email form
- [ ] Add monolith-gradient blur orb decoration behind newsletter section

**Files to create/modify:**
- `app/page.tsx`
- `components/NewsletterSignup.tsx`
- `components/ConsultantInsight.tsx`

### Phase 3: Projects Page

**Goal:** Project grid matching the Stitch design.

**Sections:**
1. **Editorial Header** — "Selected Works" label, "The Architectural Monolith of Digital Tools." heading with "Monolith" in primary color
2. **Project Grid** — 2-column grid (1-col mobile) with 4 project cards
3. **CTA Footer** — "Have a project in mind?" with "Start a Conversation" button → /collaborate

**Each ProjectCard includes:**
- Aspect-video image area with monolith-gradient overlay
- Category tag (Automation, Visualization, Engineering, Discovery) — positioned top-left
- Grayscale image → color on hover
- Title, description, "View Project" link with arrow animation
- Technology icons (Material Symbols)
- Hover: ring-1 ring-primary/20

**Tasks:**
- [ ] Create `lib/projects.ts` with static project data (title, description, category, image placeholder, tech icons, slug)
- [ ] Build `ProjectCard.tsx` with image overlay, hover effects, grayscale transition
- [ ] Build projects page with editorial header and 2-col grid
- [ ] Add "Have a project in mind?" CTA section at bottom

**Files to create/modify:**
- `app/projects/page.tsx`
- `components/ProjectCard.tsx`
- `lib/projects.ts`

**Project data:**

| Project | Category | Description |
|---|---|---|
| Nexus | Automation | Personal data automation, monolithic architecture for synchronizing digital lives |
| Lumi | Visualization | Workflow pattern visualization, operational heat-maps |
| Claude Code Salesforce Plugin | Engineering | AI-powered developer productivity, LLM + Salesforce metadata |
| Hidden Automation Detector | Discovery | Forensic tool for legacy scripts and forgotten cloud triggers |

### Phase 4: About Page

**Goal:** The Story page matching Stitch design.

**Sections:**
1. **Hero** — "ONE PERSON COMPANY" label, "The Story" heading, subtitle, portrait image (grayscale → color hover)
2. **Triple Persona Grid** — 3-column section with border separators:
   - The Builder: terminal icon, "Precision in Infrastructure", Salesforce Architect + Systems Design tags
   - The Writer: edit_note icon, "Clarity in Complexity", Editorial Strategy + Tech Philosophy tags
   - The Consultant: query_stats icon, "Strategic Intelligence", AI Integration + Strategic Advisory tags
3. **Philosophy Section** — Sticky sidebar "One person. Infinite scale." with scrolling content:
   - Quote block with gradient blur orb
   - 2-col grid: Salesforce Expertise + AI Integration cards
4. **Closing CTA** — Monolith-gradient border card, "Let's build something intentional", "Secure an Insight Session" button

**Tasks:**
- [ ] Build hero with portrait image and editorial layout
- [ ] Build triple persona grid with hover background transitions, skill tags with green left border
- [ ] Build philosophy section with sticky sidebar layout
- [ ] Build quote block with gradient decoration
- [ ] Build closing CTA with gradient border wrapper

**Files to create/modify:**
- `app/about/page.tsx`

### Phase 5: Writing Page (Substack RSS)

**Goal:** Writing page with live Substack articles from RSS feed.

**Sections:**
1. **Hero** — "Archive & Insights" label, "Writing & Thoughts" heading, "Subscribe to my Substack" CTA
2. **Article Grid** — Bento-style 12-column grid:
   - Featured article (8-col) with "Featured" badge, consultant insight chip
   - Secondary articles (4-col each) with date, title, description, "Read Article" link
   - Newsletter CTA card (4-col) with subscription count, "Join the Newsletter" link
3. **Newsletter Footer** — "Stay in the flow" section (reuse NewsletterSignup component)

**RSS Integration:**

```typescript
// lib/rss.ts
export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content?: string;
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  const res = await fetch("https://sangameshgellagupta.substack.com/feed", {
    next: { revalidate: 3600 }, // ISR: revalidate every hour
  });
  const xml = await res.text();
  // Parse XML using DOMParser or a lightweight XML parser
  // Return array of posts
}
```

**Tasks:**
- [ ] Create `lib/rss.ts` with Substack RSS fetching + XML parsing (use ISR with 1-hour revalidation)
- [ ] Build `ArticleCard.tsx` component for writing entries
- [ ] Build writing page with bento grid layout
- [ ] Handle empty/error states (RSS feed unavailable → fallback message with direct Substack link)
- [ ] Featured article gets the first RSS item; secondary articles get items 2-5

**Files to create/modify:**
- `app/writing/page.tsx`
- `components/ArticleCard.tsx`
- `lib/rss.ts`

### Phase 6: Collaborate Page

**Goal:** Contact/partnership page matching Stitch design.

**Sections:**
1. **Hero** — "Strategic Partnerships" label, "Let's Build Something Together." heading, description
2. **Left column (7-col):**
   - 2-col grid: Joint Builds card + Guest Posts card (each with icon, title, description, hover border effects)
   - Featured collaboration image with consultant insight overlay (glassmorphic)
3. **Right column (5-col):**
   - Sticky contact form ("Initiate Connection"):
     - "Identify Yourself" text input
     - "Your Intent" select dropdown (General Inquiry, Joint Build/Project, Guest Posting, Strategic Partnership)
     - "Brief Context" textarea
     - "Send Signal" submit button (primary-container)
   - Social links grid (Twitter, LinkedIn) below form

**Contact Form Handler:**

```typescript
// app/api/contact/route.ts
// Option A: Web3Forms (free, no backend needed)
// Option B: Formspree
// Option C: Email via Resend API
export async function POST(request: Request) {
  const data = await request.json();
  // Validate and forward to email service
  // Return success/error response
}
```

**Tasks:**
- [ ] Build collaboration cards (Joint Builds, Guest Posts) with icon hover scaling
- [ ] Build featured image section with glassmorphic consultant insight overlay
- [ ] Build `ContactForm.tsx` with form fields, validation, and submit handler
- [ ] Create `app/api/contact/route.ts` API route (decide on email service: Web3Forms recommended for simplicity)
- [ ] Add social links grid (Twitter/X, LinkedIn) with brand color hovers
- [ ] Form submission: client-side validation, loading state, success/error feedback

**Files to create/modify:**
- `app/collaborate/page.tsx`
- `components/ContactForm.tsx`
- `app/api/contact/route.ts`

### Phase 7: Polish & Deployment

**Goal:** Responsive refinement, SEO, performance, and deployment.

**Tasks:**
- [ ] Add metadata to each page via Next.js Metadata API (title, description, Open Graph images)
- [ ] Create `app/not-found.tsx` — custom 404 page matching design system
- [ ] Add `app/loading.tsx` — subtle loading skeleton for page transitions
- [ ] Test all breakpoints: mobile (375px), tablet (768px), desktop (1280px+)
- [ ] Verify mobile bottom nav shows/hides correctly at md breakpoint
- [ ] Optimize images: use `next/image` with proper sizing and placeholder blur
- [ ] Add subtle animations: fade-in on scroll (CSS `@keyframes` or intersection observer), 200ms hover transitions per design spec
- [ ] Add `robots.txt` and `sitemap.xml` via Next.js conventions
- [ ] Deploy to Vercel (connect GitHub repo)
- [ ] Configure Cloudflare DNS to point domain to Vercel
- [ ] Test Lighthouse score (target: 90+ across all categories)

**Files to create/modify:**
- `app/not-found.tsx`
- `app/loading.tsx`
- `app/robots.ts`
- `app/sitemap.ts`

---

## Design Principles (from DESIGN.md)

These rules must be followed throughout implementation:

### Do:
- **Embrace the Void:** Use generous spacing (spacing-20/24) between major sections
- **Tonal Transitions:** Shift between surface colors to guide the eye
- **Subtle Motion:** 200ms ease-in-out for all hover states
- **Ghost Borders:** When borders are needed, use `outline-variant` at 15-20% opacity
- **Glassmorphism:** Backdrop-blur on floating nav and overlay elements

### Don't:
- **No Pure White:** Never use #FFFFFF — use `on-surface` (#e3e2e3)
- **No Sharp Corners:** Even technical elements get minimum 0.125rem radius
- **No 1px Solid Borders for Sectioning:** Boundaries via background color shifts only
- **No Grid-Lock:** Occasionally break horizontal alignment for editorial feel

---

## Acceptance Criteria

### Functional Requirements
- [ ] All 5 pages render correctly (Home, Projects, Writing, About, Collaborate)
- [ ] Navigation between pages works via header links and CTAs
- [ ] Writing page fetches live articles from Substack RSS feed
- [ ] Contact form submits successfully and delivers to email
- [ ] Newsletter signup links to Substack
- [ ] All external links (YouTube, Substack, LinkedIn, X, Linktree) open in new tab
- [ ] Mobile bottom nav appears on screens < md breakpoint
- [ ] Desktop nav links appear on screens >= md breakpoint

### Non-Functional Requirements
- [ ] Lighthouse Performance score >= 90
- [ ] Lighthouse Accessibility score >= 90
- [ ] All text passes WCAG AA contrast ratios against dark backgrounds
- [ ] First Contentful Paint < 1.5s on Vercel deployment
- [ ] RSS feed gracefully degrades if Substack is unreachable

### Quality Gates
- [ ] Responsive at 375px, 768px, 1024px, 1280px, 1440px
- [ ] No layout shift (CLS < 0.1)
- [ ] Fonts load without FOUT (next/font handles this)
- [ ] All hover animations use 200ms ease-in-out per design spec
- [ ] Color tokens match Stitch export exactly

---

## Edge Cases & Error Handling

| Scenario | Handling |
|---|---|
| Substack RSS fetch fails | Show fallback: "Check out my latest writing on Substack" with direct link |
| RSS returns 0 articles | Show empty state with Substack CTA |
| Contact form submission fails | Show inline error message, retain form data |
| Image fails to load | Use dark placeholder matching surface-container-highest |
| JavaScript disabled | Pages render as server components (SSR by default) |
| Slow network | next/image lazy loading, font-display: swap via next/font |

---

## Dependencies & Prerequisites

| Dependency | Purpose | Decision |
|---|---|---|
| Next.js 15 | Framework | App Router for layouts, server components, metadata API |
| Tailwind CSS v4 | Styling | Custom design tokens, utility-first |
| `next/font` | Font optimization | Inter + Space Grotesk, zero CLS |
| Material Symbols | Icons | Via Google Fonts CDN or self-hosted SVGs |
| XML parser | RSS parsing | `fast-xml-parser` or native DOMParser |
| Form service | Contact form | Web3Forms (free tier) or Resend |
| Vercel | Hosting | Zero-config Next.js deployment |
| Cloudflare | DNS | Domain management |

---

## Social Links Reference

| Platform | URL |
|---|---|
| YouTube | https://www.youtube.com/@divingsbysangam |
| Substack | https://sangameshgellagupta.substack.com/ |
| LinkedIn | https://www.linkedin.com/in/gella-sangamesh-gupta-a35b5b1b8/ |
| Linktree | https://linktr.ee/sangameshgella |
| X/Twitter | https://x.com/SangamGella |

---

## Design Reference

All Stitch design exports (HTML + screenshots + design system) are located at:
`/Users/gellasangamesh/Downloads/stitch/`

Each page folder contains:
- `screen.png` — Visual reference screenshot
- `code.html` — Complete HTML with inline Tailwind classes (copy-paste reference for exact styling)

The design system specification: `/Users/gellasangamesh/Downloads/stitch/architect_dark/DESIGN.md`

---

## Future Considerations

- **Project Detail Pages** (`/projects/[slug]`) — Individual project pages with full descriptions, screenshots, tech stack, GitHub links
- **Blog/Writing Detail** — Render full Substack articles on-site (if desired vs. linking out)
- **Dark/Light Toggle** — Currently dark-only; could add light theme later
- **Analytics** — Vercel Analytics or PostHog for visitor tracking
- **Search** — Full-text search across writing and projects
- **RSS Feed Generation** — Expose own RSS feed for the site
