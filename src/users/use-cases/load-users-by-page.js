import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async( page = 1 ) => {
    const url = `${ import.meta.env.VITE_PAGE_URL }users?_page=${ page }`;
    const response = await fetch( url );
    const resolve = await response.json();

    const users = resolve.data.map( localhostUserToModel );

    return users;
}