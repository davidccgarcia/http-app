import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    
    const { users, pages } = await loadUsersByPage( state.currentPage + 1 );

    if ( state.currentPage !== pages ) {
        state.currentPage += 1;
        state.users = users;
    }
}

const loadPreviousPage = async() => {

    if ( state.currentPage === 1 ) return;

    const { users } = await loadUsersByPage( state.currentPage - 1 );

    state.users = users;
    state.currentPage -= 1;
}

const onUserChanged = () => {
    throw new Error('Not implemented');
}

const reloadPage = () => {
    throw new Error('Not implemented');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {Users[]}
     */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}