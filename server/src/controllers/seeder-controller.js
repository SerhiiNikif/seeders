import seederService from '../services/seeder.service.js';

class SeederController {
  async insertData(req, res, next) {
    try {
      const insertDataService = await seederService.insertData();
      res.status(201).json(insertDataService);
    } catch (e) {
      next(e);
    }
  }
}

export default new SeederController();
