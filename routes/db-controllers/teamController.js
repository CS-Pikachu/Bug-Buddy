const sequelize = require('../../db/indexDB');
const Team = sequelize.models.team;

const teamControllers = {

  // GET all teams
  async getAllTeams (req, res, next) {
    try {
        const teams = await Team.findAll();
        console.log(teams.every(teams => teams instanceof Team)); // true
        console.log("All Teams:", JSON.stringify(teams, null, 2));
        res.locals.getTeams = teams;
        return next();
    } catch (error) {
      console.log(error);
      return next(error);
    }
  },

  // POST a new Team
  async createTeam (req, res, next) {

    try {
        const team = await Team.create({ 
            name: req.body.name
        });

        console.log("Team's auto-generated ID:", team.id);
        console.log("complete team", team);

        res.locals.createdTeam = team;
        return next();

    } catch (error) {
      console.log(error);
      return next(error);
    }
  },

  // UPDATE a Team - 
  async updateTeam (req, res, next) {
    const teamId = req.params.id;
    try {
        const updatedTeam = await Team.findOne({ where: { id: teamId } });
        console.log("Found the Team, ", updatedTeam);

        if (req.body.name) updatedTeam.name = req.body.name;
        if (req.body.userId) updatedTeam.userId = req.body.userId;

        await updatedTeam.save();
        res.locals.updatedTeam = updatedTeam;
        return next()

    } catch (error) {
      console.log(error);
      return next(error);
    }
  },

}

module.exports = teamControllers;