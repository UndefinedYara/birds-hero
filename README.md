# Birds Hero

This project is a React-based hero section implementation featuring animated birds, built with TypeScript and Vite.

## Implementation Details

The project is structured with a main `App.tsx` that renders several UI components. The components are organized in `src/components/ui` and include:

- `header.tsx`: The header of the page.
- `hero.tsx`: The main hero section.
- `clouds.tsx`: Animated clouds in the background.
- `criss-cross-birds.tsx`: Animated birds flying across the screen.
- `scroll-down.tsx`: A scroll down indicator.

The animation is powered by `motion` and the styling is done with `tailwindcss`.

### Asset Notes

The criss-cross flying birds are reused assets. The original Figma file did not provide a usable export for these specific birds. The exported PNG was empty as it seems it was a transparent vector drawing with no actual details.

### Responsive Design

A mobile prototype was not provided. Therefore, design decisions for mobile and smaller screen sizes were made to ensure the application is responsive and provides a good user experience across devices.

## Screenshots

### Full Screen View

<img src="public/images/demo/desktop.png" alt="desktop" width="600"/>

### Mobile View

<img src="public/images/demo/mobile.png" alt="mobile" width="200"/>



## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/UndefinedYara/birds-hero.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Lints the project files using ESLint.

### `npm run preview`

Serves the production build locally to preview it.
