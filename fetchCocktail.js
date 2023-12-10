import { displayCocktailDetails} from './displayCocktailDetails';

// Function to fetch a random cocktail recipe
async function fetchRandomCocktail() {
    // try catch used for error handling in an async function
    // get random recipe from api -- if recipe is not received, alert the used that there has been an error
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();

        // if data is received, display it on the page
        displayCocktailDetails(data.drinks[0]);
    } catch (error) {
        alert('Error fetching random cocktail recipe:', error);
    }
}

export {fetchRandomCocktail};