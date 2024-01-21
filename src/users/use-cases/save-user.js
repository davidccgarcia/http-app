import { User } from '../models/user';

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUSer = async( userLike ) => {
    const user = new User( userLike );

    // TODO: aquí falta un mapper
    if ( user.id ) {
        throw 'Not implemented.';
    }

    const updatedUser = await createUser( user );
}

/**
 * @param {Like<User>} user
 */
const createUser = async( user ) => {
    const url = `${ import.meta.env.VITE_PAGE_URL }/users`;
    const res = await fetch( url, {
        method: 'POST', 
        body: JSON.stringify(user), 
        headers: {
            'COntent-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    console.log({ newUser });
    return newUser;
}
