import authService from '../services/auth/auth.service.js';

class AuthController {
  async registration(req, res, next) {
    try {
      const {email, password} = req.body;
      const userData = await authService.registration(email, password);

      res.cookie(
        'refreshToken',
        userData.refreshToken,
        {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true}
        )
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const {email, password} = req.body;
      const userData = await authService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
        const {refreshToken} = req.body;
        const token = await authService.logout(refreshToken);

        return res.json(token);
    } catch (e) {
        next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const {refreshToken} = req.cookies;
      const userData = await authService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

export default new AuthController();
