import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper';
import { User } from '../models/user';

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUSer = async( userLike ) => {
    const user = new User( userLike );

    if ( !user.firstName || !user.lastName ) throw 'First & last name are required.';

    const userToSave = userModelToLocalhost( user );

    if ( user.id ) {
        throw 'Not implemented.';
    }

    const updatedUser = await createUser( userToSave );
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
