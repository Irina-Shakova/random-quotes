import {
  hideFavoriteBtn,
  showFavoriteCard,
  toggleFavoriteCard,
  showFavoriteBtn,
  removeFavoriteCard,
} from "./src/handlers/favorites.js";
import { displayCurrentQuote } from "./src/handlers/currentQuote.js";
import {
  localStorageSetItem,
  localStorageGetItem,
} from "./src/utils/localStorage.js";
import { getRandomQuote } from "./src/handlers/randomQuotes.js";
import { removeObjectFromArrayById } from "./src/utils/array.js";

const CURRENT_QUOTE_KEY = "currentQuote";
const FAVORITE_QUOTES_KEY = "favoriteQuotes";

const randomQuoteBtn = document.getElementById("random-quote-btn");
const favoritesContainer = document.getElementById("favorites-container");
const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");

let currentQuote = null;
const favoriteQuotes = [];

function removeFavoriteQuote(id) {
  //REMOVE FAVORITE QUOTE
  if (id === currentQuote.id) {
    //Removing from favorites current quote by clicking on the card Remove from favorites button
    toggleCurrentQuote();
  } else {
    //Removing from favorites quote which is not current quote
    //sync app state by removing favorite quote from the favorite quotes array
    removeObjectFromArrayById(favoriteQuotes, id);
    //Remove favorite card from UI
    removeFavoriteCard(id);
    // Save favorite quotes in the local storage
    localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
  }
  // // The way to find current quote in the HTML in the other module
  // const currentQuote = document.querySelector("[data-current-quote-id]");
  // const currentQuoteId = currentQuote.dataset.currentQuoteId;
}

function toggleCurrentQuote() {
  currentQuote.isFavorite = !currentQuote.isFavorite;

  showFavoriteBtn(currentQuote.isFavorite);
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);

  if (currentQuote.isFavorite) {
    favoriteQuotes.push({ ...currentQuote });
  } else {
    removeObjectFromArrayById(favoriteQuotes, currentQuote.id);
  }

  toggleFavoriteCard(currentQuote, favoritesContainer);
  localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
}

function setCurrentQuote(quote) {
  currentQuote = { ...quote };
  currentQuote.isFavorite = !!favoriteQuotes.find(
    (favoriteQuote) => favoriteQuote.id === currentQuote.id,
  );

  displayCurrentQuote(currentQuote);
  showFavoriteBtn(currentQuote.isFavorite);
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
}

hideFavoriteBtn();
quoteFavoriteBtn.addEventListener("click", toggleCurrentQuote);

randomQuoteBtn.addEventListener("click", () =>
  setCurrentQuote(getRandomQuote()),
);

function init() {
  const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTES_KEY);
  if (favoriteQuotesFromStorage) {
    favoriteQuotesFromStorage.forEach((quote) => {
      favoriteQuotes.push(quote);
      showFavoriteCard(quote, favoritesContainer);
    });
  }

  const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
  if (currentQuoteFromStorage) {
    setCurrentQuote(currentQuoteFromStorage);
  }
}
window.addEventListener("load", init);

export { quoteFavoriteBtn, removeFavoriteQuote };
