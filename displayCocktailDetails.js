// Function to display ingredients and measurements
function displayIngredientsAndMeasurements(cocktail) {
    let ingredientsList = '';

    // Loop through ingredients and measurements
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measurement = cocktail[`strMeasure${i}`];

        // Check if ingredient and measurement are present
        if (ingredient && measurement) {
            ingredientsList += `<li>${measurement} ${ingredient}</li>`;
        } else if (ingredient) {
            ingredientsList += `<li>${ingredient}</li>`;
        }
    }

    return ingredientsList;
}

// Function to display cocktail details
function displayCocktailDetails(cocktail) {
    // data from api will be displayed in html div called cocktailDetails
    const cocktailDetailsElement = document.getElementById('cocktailDetails');

    // within cocktailDetails, a new div will be made with the data fetched from the api
    const cocktailItem = document.createElement('div');
    // define new data in the div we just made
    // find properties used in the api for each cocktail
    cocktailItem.innerHTML = `
        <p id = "drinkName">${cocktail.strDrink}</p>
        <img id = "cocktailImage" src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" style="max-width: 200px;">
        <p>Category: ${cocktail.strCategory}</p>
        <p>Alcohol Content: ${cocktail.strAlcoholic}</p>
        <p>Glass Type: ${cocktail.strGlass}</p>
        <p>Instructions: ${cocktail.strInstructions}</p>
        <p>Ingredients:</p>
        <ul>
            ${displayIngredientsAndMeasurements(cocktail)}
        </ul>
    `;
    cocktailDetailsElement.innerHTML = ''; // Clear previous content
    cocktailDetailsElement.appendChild(cocktailItem); // add new data to the div
}

export {displayCocktailDetails};