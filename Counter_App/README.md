## Counter: Vanilla JavaScript vs React

This project includes a simple counter implemented in both Vanilla JavaScript and React to understand why React is useful for building UI.

### Vanilla JavaScript Approach

In plain JavaScript, we need to:

- Manually select DOM elements
- Attach event listeners
- Update the UI by changing the DOM

Flow:

1. Fetch button and text elements
2. Add click listener
3. Increment count variable
4. Update text in the DOM

This works well for small examples, but becomes harder to manage as the UI grows.

### React Approach (useState Hook)

In React, we use the useState hook to manage state:

- Create a state variable using useState
- Update state using a setter function
- React automatically updates the UI when state changes

Flow:

1. Initialize state using useState
2. Update state on button click
3. React re-renders the component and updates the UI automatically

No manual DOM manipulation is required.

### Why React

Vanilla JavaScript

- Manual DOM manipulation
- Need to attach event listeners
- UI updates handled manually
- Harder to scale for large applications

React

- Declarative UI
- Built-in event handling
- Automatic UI updates on state change
- Easier to manage complex user interfaces

Key Idea:  
In React, you describe what the UI should look like for a given state, and React takes care of updating the DOM.
