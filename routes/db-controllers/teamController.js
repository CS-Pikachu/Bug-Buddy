const sequelize = require('../../db/indexDB');
const Team = sequelize.models.team;

const teamControllers = {

  // GET all teams
  async getAllTeams(req, res, next) {
    try {
      const teams = await Team.findAll();
      res.locals.getTeams = teams;
      return next();
    } catch (error) {
      return next(error);
    }
  },

  // POST a new Team
  async createTeam(req, res, next) {

    try {
      const team = await Team.create({
        name: req.body.name
      });

      res.locals.createdTeam = team;
      return next();

    } catch (error) {
      return next(error);
    }
  },

  // UPDATE a Team - 
  async updateTeam(req, res, next) {
    const teamId = req.params.id;
    try {
      const updatedTeam = await Team.findOne({ where: { id: teamId } });

      if (req.body.name) updatedTeam.name = req.body.name;
      if (req.body.userId) updatedTeam.userId = req.body.userId;

      await updatedTeam.save();
      res.locals.updatedTeam = updatedTeam;
      return next()

    } catch (error) {
      return next(error);
    }
  },

}

module.exports = teamControllers;