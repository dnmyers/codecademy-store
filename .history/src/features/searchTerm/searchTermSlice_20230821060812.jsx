const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
};

const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm'
    }
};

// Path: src\features\searchTerm\searchTermSlice.jsx
// Compare this snippet from src\features\searchTerm\SearchTerm.jsx
// import { setSearchTerm, clearSearchTerm } from './searchTermSlice';
//
// const onSearchTermChangeHandler = (e) => {
//     const userInput = e.target.value;
//
//     dispatch(setSearchTerm(userInput));
// };

// Path: src\features\searchTerm\searchTermSlice.jsx
// Compare this snippet from src\features\searchTerm\SearchTerm.jsx
// import { setSearchTerm, clearSearchTerm } from './searchTermSlice';
//
// const onClearSearchTermHandler = () => {
//     dispatch(clearSearchTerm());
// };

// Path: src\features\searchTerm\searchTermSlice.jsx
// Compare this snippet from src\features\searchTerm\SearchTerm.jsx
// import { setSearchTerm, clearSearchTerm } from './searchTermSlice';
//
// <input
//     id="search"
//     type="text"
//     value={searchTerm}
//     onChange={onSearchTermChangeHandler}
//     placeholder="Search products"
// />
// {
//     searchTerm.length > 0 && (
//         <button
//             onClick={onClearSearchTermHandler}
//             type="button"
//             id="search-clear-button"
//         >
//             <img src={clearIconUrl} alt="clear button icon" />
//         </button>
//     )
// }

// Path: src\features\searchTerm\searchTermSlice.jsx
// Compare this snippet from src\features\searchTerm\SearchTerm.jsx
// import { setSearchTerm, clearSearchTerm } from './searchTermSlice';
//
// <button
//     onClick={onClearSearchTermHandler}
//     type="button"
//     id="search-clear-button"
// >
//     <img src={clearIconUrl} alt="clear button icon" />
// </button>

// Path: src\features\searchTerm\searchTermSlice.jsx