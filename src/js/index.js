import Search from './models/Search';
import Recipe from './models/Recipe'
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/** Global state of the app
 * - Search oject
 * - Current recipe object
 * - Shopping list object
 * - Like recipes
 */
const state = {}

/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput();
    console.log(query);

    if (query) {
        // 2. Create new search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for the results i.e spinner
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on the UI
        clearLoader();
        searchView.renderResults(state.search.recipes);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    //console.log(btn);
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.recipes, goToPage);
        //console.log(goToPage);
    }
});


/**
 * RECIPE CONTROLLER
 */

const r = new Recipe(46956);
r.getRecipe();
console.log(r);

