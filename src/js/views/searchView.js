import { elements } from './base';

//this function will get whatever was inputed into searchview. 1 line arrow functions are implicitly returned
export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
}

//Function to print a recipe to 
const renderRecipe = (recipe) => {
    const markup = `
    <li>
    <a class="results__link results__link--active" href="${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${recipe.title}</h4>
            <p class="results__author">${recipe.publisher}</p>
        </div>
    </a>
</li>
`;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = (recipes) => {
    recipes.forEach(renderRecipe)
}