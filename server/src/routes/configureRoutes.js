import authRouter from './auth.js';
import seederRouter from './seeder.js';
import userRouter from './user.js';

export default function configureRoutes(app) {
  app.use('/auth', authRouter);
  app.use('/default', seederRouter);
  app.use('/users', userRouter);
}