# use-case-daisy 🌸

> **Daisy Pro:** Presence and Check-in feature.
A mobile-first Next.js application designed for daily workshop management.

**Live Demo:** https://use-case-daisy.vercel.app/

---

## Tech stack

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

---

## Getting started

### Requirements

- Node.js (v18+)
- npm

### Installation

```bash
git clone git@github.com:faustoche/use-case-daisy.git
cd daisy-pro
npm install
npm run dev
```

▶ App is running at **http://localhost:3000**

---

## The feature: Presence & Check-in (Option A)

The goal of this feature is to allow an artist to take attendance for their daily workshop in under 30 seconds, directly from their smartphone. 

### User flow
1. **Dashboard (Home)**
	• Overview of daily workshop
	• Dynamic participant counters
	• List of scheduled sessions with name, date, place and number of participants

2. **Workshop details**
	• List of registered participants
	• Toggle check-in
	• Immediate UI feedback (no need to wait for server)

---

## Architecture & Component

• ``` WorkshopList.tsx```
- Renders workshop data as cards
- **Why:** separate from detail view to keep component displaying daily overview

• ``` WorkshopDetail.tsx```
- Manages participants with local state (no server delay)
- **Why:** optimize ofr instant responsiveness. Hangle toggle state locally for immediate UI for user

• ``` StatusViews.tsx```
- Centralized UI states (loading, empty, error)
**Why:** prevent code duplication and ensure visual consistency

• ``` actions.ts```
- Server-side logic and API simulation
**Why:** keep React components clean

---

## Data management & Shortcuts

• **Mocked data:** application currently relies on local mocked data
• **Production Implementation:** In a real-production environment, I would replace with a database integration (using Supabase) to manage data fetching and data persistence

---

## UI and UX decisions

• **Design system:**
- Primary: Purple #800080
- Accent: Coral #F24E3E
- Background: Cream #FCF8E8

• **User feedback:**
- Click on the row: visual highlight
- Check icon: validation confirmation
- Real-time progress bar: immediat feedback

• **Application states:**
- Success: normal data rendering
- Loading: spinner displayed
- Empty: custom empty state when no workshop is found
- Error: error UI for failures

---

## Goal

Deliver a fast, intuitive, mobile-first experience for workshop attendance tracking.

---

## What I learned

• **React & Next.js (app router):** I discovered component-oriented logic, state management and Next.js routing system. It helped me understand the importance of building components with clear responsibilities.
• **UI Integration:** I learned how to use pre-build components to build rapidly
• **Deployment:** I experienced intuitive deployment through Vercel 