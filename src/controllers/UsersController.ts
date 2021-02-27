import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as Yup from 'yup';
import { AppError } from '../errors/AppError';
import { UsersRepository } from '../repositories/UsersRepository';

class UsersController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required()
    });

    try {
      await schema.validate(request.body);
    } catch (error) {
      return response.status(400).json({ error });
    }

    const userRepository = getCustomRepository(UsersRepository);
    const userAlreadyExists = await userRepository.findOne({email});

    if (userAlreadyExists) {
      throw new AppError('User already exists!');
    }

    const user = userRepository.create({
      name,
      email,
    });

    await userRepository.save(user);

    return response.status(201).json(user);
  }
}

export { UsersController };
