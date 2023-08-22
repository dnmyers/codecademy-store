const searchTermReducer = (state = '', action) => {
    switch(action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload;
        case 'searchTerm/clearSearchTerm':
            return '';
        default:
            return state;
    }
};

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