import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {String|Number} id 
 * @returns {Promise<User>}
 */
export const getUserById = async( id ) => {

    const url = `${ import.meta.env.VITE_PAGE_URL }/users?id=${ id }`;
    console.log( url );
    const response = await fetch( url );
    const data = await response.json();    

    const user = localhostUserToModel(data[0]);

    return user;
}