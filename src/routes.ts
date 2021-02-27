import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UsersController } from './controllers/UsersController';
import { SendMailsController } from './controllers/SendMailsController';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';

const router = Router();

const usersController = new UsersController();
const surveysController = new SurveysController();
const sendMailsController = new SendMailsController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post('/users', usersController.create);

router.get('/surveys', surveysController.show);
router.post('/surveys', surveysController.create);

router.post('/sendMails', sendMailsController.execute);

router.get('/answers/:value', answerController.execute);

router.get('/nps/:surveyId', npsController.execute);

export { router };
