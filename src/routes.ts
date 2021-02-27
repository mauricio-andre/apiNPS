import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UsersController } from './controllers/UsersController';
import { SendMailsController } from './controllers/SendMailsController';

const router = Router();

const usersController = new UsersController();
const surveysController = new SurveysController();
const sendMailsController = new SendMailsController();

router.post('/users', usersController.create);

router.get('/surveys', surveysController.show);
router.post('/surveys', surveysController.create);

router.post('/sendMails', sendMailsController.execute);

export { router };
