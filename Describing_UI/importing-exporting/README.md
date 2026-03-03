# Importing and Exporting Components

## default root component file is App.js

- Depending on your setup, your root component could be in another file, though. If you use a framework with file-based routing, such as Next.js, your root component will be different for every page.
- making components sperates the logic ,more modular and reusable in other files or components

## this example is broken down into two component files now:

1. Gallery.js:
   -Defines the Profile component which is only used within the same file and is not exported,and it is changed later below.
   -Exports the Gallery component as a default export.
2. App.js:
   -Imports Gallery as a default import from Gallery.js.
   -Exports the root App component as a default export.

- check image in public folder image.png

## Exporting and importing multiple components from the same file

- A file can only have one default export, but it can have numerous named exports!
- export Profile from Gallery.js using a named export (no default keyword):
- using a mix of default and named exports:
  - Gallery.js:
    Exports the Profile component as a named export called Profile.
    Exports the Gallery component as a default export.
  - App.js:
    Imports Profile as a named import called Profile from Gallery.js.
    Imports Gallery as a default import from Gallery.js.
    Exports the root App component as a default export.
- to avoid confusion stick to only one modular system/style
