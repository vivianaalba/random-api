import { displayCocktailDetails} from './displayCocktailDetails';

// Function to fetch a random cocktail recipe
// fetch returns a promise, so the async keyword ensures that our code can work with promises in a quick, seemless manner
async function fetchRandomCocktail() {
    // try catch used for error handling in an async function
    // get random recipe from api -- if recipe is not received, alert the used that there has been an error
    try {
        // server will communicate with API to retreive drink data
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();

        // if data is received from the API, call function that displays it on the page
        displayCocktailDetails(data.drinks[0]);
    } catch (error) {
        // if API did not return data for any reason, alert the user that there has been an error
        alert('Error fetching cocktail recipe:', error);
    }
}

export {fetchRandomCocktail};