import { fetchRandomCocktail } from "./fetchCocktail";

// Function to refresh when the button is clicked
function refreshButtonClicked() {
    fetchRandomCocktail();
}
// Add event listener to the refresh button
document.getElementById('refreshButton').addEventListener('click', refreshButtonClicked);

export {refreshButtonClicked};