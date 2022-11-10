import { addNewUser, getUsers } from '../controllers/userControllers';

const routes = (app) => {
    app.route('/users')
    // GET endpoint
        .get(getUsers)
    // POST endpoint
        .post(addNewUser);
}

export default routes;