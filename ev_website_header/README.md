# EV-olution – React Dynamic Hero Section

## Project Overview

EV-olution is a React-based landing page project that demonstrates dynamic background switching using images and video. The project uses React functional components, props, and the useState hook to control content and background behavior.

This project focuses on clean UI design, component-based structure, and interactive features.

---

## Technologies Used

- React JS
- JavaScript (ES6)
- CSS3
- HTML5

---

## Features

- Dynamic background (video or images)
- Background changes based on selected hero section
- Play and pause video functionality
- Interactive navigation dots
- Reusable components
- Smooth fade-in animation
- Simple and clean navigation bar

---

## Components Explanation

### Background Component

The Background component renders either a video or an image.

- If `playStatus` is true, a looping background video is displayed.
- If `playStatus` is false, an image is displayed based on the value of `heroCount`.
- Fade-in animation is applied when background changes.

---

### Hero Component

The Hero component displays dynamic text and controls interaction.

- Text content changes based on `heroCount`.
- Clicking on dots updates `heroCount`, which changes both text and background.
- Play and pause button toggles the `playStatus` state.
- The icon changes depending on video state.

---

### Navbar Component

The Navbar component contains:

- Logo text
- Menu items (Home, Explore, About, Contact)
- Styled contact button

It is mounted inside `App.jsx`.

---

## State Management

Two states are managed inside `App.jsx`:

```
const [heroCount, setHeroCount] = useState(0);
const [playStatus, setPlayStatus] = useState(false);
```

heroCount:

- Controls which hero text is displayed
- Controls which background image appears
- Controls which dot is active

playStatus:

- Controls whether the video plays
- Switches between video and images
- Changes play/pause icon

---

## How to Run the Project

1. Install dependencies
   npm install

2. Start the development server
   npm run dev

---

## Learning Outcomes

- Understanding React functional components
- Passing props between components
- Using the useState hook
- Conditional rendering
- Managing UI updates with state
- CSS animations
- Component-based architecture

---
