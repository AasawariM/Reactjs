# React lifting state up example project

This is a simple React application built with Vite to demonstrate the lifting state up concept. The project shows how a parent component manages shared state and keeps multiple child components synchronized.

## Project idea

The parent component creates and manages a state variable called name. This state and its update function are passed to multiple Card child components. Each child can update the same state through an input field. Because the state lives in the parent, both child components stay in sync and display the same value.

## What this project demonstrates

Creating functional components in React
Using useState hook
Passing data using props
Passing functions as props
Controlled input fields
Sharing state between sibling components
Lifting state up to parent component

## How it works

The App component creates a name state using useState.
App passes name and setName to both Card components as props.
Each Card renders an input field bound to the name value.
When the input changes, setName updates the parent state.
React re-renders and both Card components receive the updated value.
The updated value is also shown in the parent component.

## Main files

App.jsx manages the shared state and renders two Card components
Card.jsx renders an input field and updates parent state through props

## How to run

Install dependencies with npm install
Start development server with npm run dev

## Purpose

Understand how lifting state up keeps multiple components synchronized using shared parent state.
