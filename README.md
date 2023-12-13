# Light It Challenge

This is a challenge for the start-up Light It created by Franco Martin Cagliolo.

## Características

- **React y TypeScript**: Development of the project using React and TypeScript for static typing and better code maintainability.
- **Vite**: Usage of Vite as a build tool for quick development and optimized production builds.
- **Material-UI**: Integration of Material-UI components for a consistent and simplified interface design.
- **React Query**: Integration of React Query for data management and optimization of server requests.
- **Formik**: Handling of forms and their state with Formik, simplifying form management in React.
- **Yup Validation**: Use of Yup schema validation alongside Formik for easy and robust form validation.

## Getting Started

### Prerequisites

Ensure you have Node.js `^v.18.0.0` and npm (or yarn) installed on your machine.

### Installation

Clone the GitHub repository and install dependencies:

```bash
git clone <https://github.com/francocgl/light-it-challenge.git>
cd light-it-challenge
npm install
npm start
```

## Folder Structure

```bash
/src
|-- /components
| |-- /atoms
| |-- /molecules
| |-- /organisms
| |-- /templates
|-- /config
|-- /helpers
|-- /hooks
|-- /types
|-- MainContext.tsx
|-- customTheme.ts
|-- main.tsx
```

- `./components` Contains reusable React components organized in the `Atomic Design` methodology for better scalability and maintenance.
- `./config` Holds the endpoints for the queries.
- `./helpers` Functions that can be reused throughout the project.
- `./hooks` Contains React Hooks for editing, adding, and listing patients using `React Query`.
- `./types` Folder for global typings.
- `.MainContext.tsx` The global context of the project to open or close the modal from any component.
- `.customTheme.tsx` The default theme for the Material UI interface.
- `.main.tsx` Project's index file.
