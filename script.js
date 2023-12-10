import { fetchRandomCocktail } from './fetchCocktail';
import { refreshButtonClicked } from './button';

// Fetch random cocktail recipe when the page loads
window.onload = fetchRandomCocktail;

refreshButtonClicked();


