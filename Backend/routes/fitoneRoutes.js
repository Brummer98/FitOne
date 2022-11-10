import { addNewUser } from '../controllers/userControllers';

const routes = (app) => {
    app.route('/users')
    // Post endpoint
        .post(addNewUser);
}

export default routes;