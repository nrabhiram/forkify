import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/** Global state of the app
 * - Search oject
 * - Current recipe object
 * - Shopping list object
 * - Like recipes
 */
const state = {}

const controlSearch = async () => {
    // 1. Get query from view
    const query = 'pizza';//TODO

    if (query) {
        // 2. Create new search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for the results i.e spinner

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on the UI
        console.log(state.search.recipes);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

