import { 
    addNewUser,
    getUsers,
    getUserWithID,
    updateUser,
    deleteUserByID
} from '../controllers/userControllers';

const routes = (app) => {
    app.route('/users')
    // GET endpoint
        .get(getUsers)
    // POST endpoint
        .post(addNewUser);

    app.route('/user/:UserId')
        // Get specific user based on ID
        .get(getUserWithID)
        // Update specific user based on ID
        .put(updateUser)
        // Delete specific user based on ID
        .delete(deleteUserByID);
}

export default routes;