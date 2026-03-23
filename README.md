# use-case-daisy 🌸

> **Daisy Pro:** Presence and Check-in feature. A mobile-first Next.js application designed for daily workshop management.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

---

## Getting started

**Requirements:** Node.js (v18+ & npm)

```bash
git clone git@github.com:faustoche/use-case-daisy.git
cd daisy-pro
npm install
npm run dev
```

App is running at **http://localhost:3000**

---

## The feature: Presence & Check-in (Option A)

The goal of this feature is to allow an artist to take attendance for their daily workshop in under 30 seconds, directly from their smartphone. 

The flow is divided into two views:
• **Dashboard (home):** Overview of today's workshop with dynamic participant counters and a list of scheduled sessions.
• **Workshop details:** List of registered participants with a check-in in a single tap.

---

# Architecture & Component

• **WorkshipList.tsx:** Receives workshop data and handles rendering as a card

• **WorkshopDetail.tsx:** Participants are managed with a local state for immediate responsiveness for the user. Avoid waiting for server confirmation.

• **StatusViews.tsx:** Central logic for application states (loading, empty, error). Ensure consistency across this app.

• **actions.ts:** Server logic. Simulates a network request with setTimeout

• **WorkshipList.tsx:** Receives workshop data and handles rendering as a card

---

# UI and UX decisions

• **Brand guidelines:** Implementation of the requested color palette. Purple (#800080) for the main action, Coral (#F24E3E) for details and Cream (#FCF8E8) for a soft background.

• **Visual feedback for user:** Clicking on a row changes background color, and check icon to insure validation. A progress bar is visible and updated in real-time to confirm the user it was registered.

• **Handling 4 states:**
	- success: standard data rendering
	- loading: a spinning wheel is displayed while waiting for data
	- empty: a specific page is displayed if a URL points to non-existent workshop
	- error: component ready to appear for any failures

