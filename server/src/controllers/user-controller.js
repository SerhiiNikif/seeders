import userService from '../services/user.service.js';

class UserController {
  async getUsers(req, res, next) {
    try {
      const getUsersService = await userService.getUsers(
        req.query?.page,
        req.query?.limit
      );
      res.status(200).json(getUsersService);
    } catch (e) {
      next(e);
    }
  }

  async addUser(req, res, next) {
    try {
      const addUserService = await userService.addUser(
        req.body.name,
        req.body.password,
        req.body?.email,
        req.file?.buffer,
      );
      res.status(201).json(addUserService);
    } catch (e) {
      next(e);
    }
  }

  async deleteUsers(req, res, next) {
    try {
      const deleteUsersService = await userService.deleteUsers(req.body?.email);
      res.status(200).json(deleteUsersService);
    } catch (e) {
      next(e);
    }
  }
}

export default new UserController();
