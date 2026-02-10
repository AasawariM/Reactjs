# React Props and Children Demo

This project demonstrates three important React concepts: passing values as props, passing functions as props, and using the children prop.

## Project Overview

The App component holds a counter state using useState. It passes the counter value and a click handler function to the Counter component as props. The Counter component displays the value and calls the function when the button is clicked. Additional JSX content is passed between Counter tags and rendered using the children prop.

## Concepts Demonstrated

### Passing value as a prop

- The count state is created in App
- Passed to Counter as a prop
- Child displays parent data

### Passing function as a prop

- handleClick is defined in App
- Passed to Counter
- Child calls it to update parent state

### Children prop

- JSX inside <Counter>...</Counter> becomes children
- Makes component reusable and flexible

## Flow of Data

State is created in App
App passes value and function to Counter
Counter displays value
Counter button calls parent function
Parent updates state
Updated value flows back to Counter

## Why This Pattern Is Important

This pattern keeps state in the parent component and makes child components reusable and simple. It also follows React’s one way data flow model.

## Files

App.jsx manages state and passes props
Counter.jsx receives props and renders UI
Props are destructured in Counter.jsx for cleaner and more readable code.

## How to Run

1. Install dependencies: npm install

2. Start development server: npm run dev
