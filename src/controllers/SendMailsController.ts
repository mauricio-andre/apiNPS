import { Request, Response } from 'express';
import { resolve } from 'path';
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { SurveysRepository } from '../repositories/SurveysRepository';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import MailServices from '../services/MailServices';

class SendMailsController {
  async execute(request: Request, response: Response) {
    const { email, surveyId } = request.body;

    const usersRepository = getCustomRepository(UsersRepository)
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const user = await usersRepository.findOne({ email });
    if (!user) {
      throw new AppError('User does not exists');
    }

    const survey = await surveysRepository.findOne({ id: surveyId });
    if (!survey) {
      throw new AppError('Survey does not exists');
    }

    const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs');
    const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
      where: { userId: user.id, value: null },
      relations: ['user', 'survey']
    });

    const variables = {
      id: '',
      name: user.name,
      title: survey.title,
      description: survey.description,
      link: process.env.MAIL_URL,
    };

    if (surveyUserAlreadyExists) {
      variables.id = surveyUserAlreadyExists.id;
      await MailServices.execute(email, survey.title, variables, npsPath);
      return response.json(surveyUserAlreadyExists);
    }

    const surveyUser = surveysUsersRepository.create({
      userId: user.id,
      surveyId,
    });

    await surveysUsersRepository.save(surveyUser);

    variables.id = surveyUser.id;
    await MailServices.execute(email, survey.title, variables, npsPath);

    return response.json(surveyUser);
  }
}

export { SendMailsController };
