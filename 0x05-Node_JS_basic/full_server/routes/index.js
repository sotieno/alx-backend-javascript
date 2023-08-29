import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 *  Links the routes 
 *    a) / to AppController
 *    b) /students to StudentsController
 *    c) /students/:major to StudentsController
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
