# Random Quotes — Functional Approach

A web app for displaying random quotes and managing favorites, built with HTML, CSS, and Vanilla JavaScript.

## About the Project

This is an educational project developed as part of the Udemy course JavaScript — Мастер-класс по Веб Разработке, React и Node.js by Bogdan Stashchuk.

The project focuses on organizing client-side JavaScript using a function-based approach and ES modules, manipulating the DOM, handling user interactions, and persisting application state with the browser's `localStorage` API.

## Features

1. Display a randomly selected quote from a local dataset.
2. Add quotes to favorites, display them as cards, and remove quotes from favorites.
3. Persist the current quote and favorite quotes using `localStorage`.
4. Restore the current quote and favorite quotes after a page reload.

## Technologies Used

1. HTML5 — application structure.
2. CSS3 — styling and layout.
3. Vanilla JavaScript (ES Modules) — application logic and modular code organization.
4. DOM API — updating the interface and handling user interactions.
5. Web Storage API (`localStorage`) — persisting application data in the browser.
6. Font Awesome 6.5.2 — icons.

## Project Structure

```text
random-quotes/
├── src/
│   ├── data/
│   │   └── quotes.js
│   ├── handlers/
│   │   ├── currentQuote.js
│   │   ├── favorites.js
│   │   └── randomQuotes.js
│   └── utils/
│       ├── array.js
│       ├── localStorage.js
│       └── math.js
├── favicon.svg
├── index.html
├── index.js
├── README.md
└── styles.css
```

1. `src/data/` — contains the local dataset of quotes.
2. `src/handlers/` — contains functions for displaying the current quote, generating random quotes, and managing favorite quotes.
3. `src/utils/` — contains reusable utility functions for array operations, random number generation, and `localStorage` operations.
4. `index.js` — initializes the application, manages its state, and registers event listeners.
5. `index.html` — defines the application markup and loads the required resources.
6. `styles.css` — defines the application styles.
7. `favicon.svg` — provides the application favicon.

## Getting Started

### Prerequisites

1. [Visual Studio Code](https://code.visualstudio.com/)
2. The [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for Visual Studio Code.

### Run Locally

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in the editor.
4. Right-click the file and select Open with Live Server.
5. The application will open in your default browser.

Note: Run the application through Live Server because it uses JavaScript ES modules.

## Usage

1. Click **Get random quote** to display a randomly selected quote.
2. Click the star icon to add the current quote to favorites. The quote will appear as a card in the favorites section.
3. Click **Remove from favorites** on a favorite quote card to remove it from the favorites list.
4. Reload the page to see the saved current quote and favorite quotes restored.
