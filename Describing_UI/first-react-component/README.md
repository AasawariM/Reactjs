# Components

-In a React app, every piece of UI is a component.

- React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app.
- a React component is a JavaScript function that you can sprinkle with markup.

how to build a component:

- Step 1: Export the component
  The export default prefix is a standard JavaScript syntax (not specific to React). It lets you mark the main function in a file so that you can later import it from other files.
- Step 2: Define the function
- Step 3: Add markup

- pitfall => Without parentheses, any code on the lines after return will be ignored!
- React knows,
  - html tags => lowercase
  - components => Capitalize

- you can define a component once, and then use it in as many places and as many times as you like.
- define every component at the top level.
- When a child component needs some data from a parent, pass it by props instead of nesting definitions.
- React components are regular JavaScript functions except:
  Their names always begin with a capital letter.
  They return JSX markup.
