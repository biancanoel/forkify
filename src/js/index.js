import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

// Global state of the app
//Search object
//Current recipe object
//Shopping List object
//Liked recipes
const state = {}

const controlSearch = async () => {
    console.log('controlsearch triggered')
    //1. Get query from VIEW
    const query = searchView.getInput();
    console.log(query);

    if (query) {
        //2 New search object added to state to get data from api. MODEL
        state.search = new Search(query);

        //3 Prep UI for results VIEW
        searchView.clearInput();
        searchView.clearResults();

        //4 Search for recipes by making ajax call
        await state.search.getResults();

        //5 Render results on UI to VIEW
        console.log(state.search.result);
        searchView.renderResults(state.search.result);
    }

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


