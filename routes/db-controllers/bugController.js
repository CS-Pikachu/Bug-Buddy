const sequelize = require('../../db/indexDB');
const Bug = sequelize.models.bug;

const bugControllers = {

  // GET all bugs
  async getAllBugs(req, res, next) {
    try {
      const bugs = await Bug.findAll();
      res.locals.getBugs = bugs;
      return next();
    } catch (error) {
      return next(error);
    }
  },

  // POST a new bug
  async createBug(req, res, next) {
    const fortnightAway = new Date(Date.now() + 12096e5)
    try {
      const newBug = await Bug.create({
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        status: req.body.status,
        dueDate: fortnightAway
      });

      res.locals.newBug = newBug;
      return next();

    } catch (error) {
      return next(error);
    }
  },

  // DELETE a bug
  async deleteBug(req, res, next) {
    const bugId = req.params.id;
    try {
      const deletedBug = await Bug.destroy({
        where: {
          id: bugId
        }
      });

      res.locals.deletedBug = deletedBug;
      return next();

    } catch (error) {
      return next(error);
    }
  },

  // UPDATE a bug
  async updateBug(req, res, next) {
    const bugId = req.params.id;
    try {
      const updatedBug = await Bug.findOne({ where: { id: bugId } });
      if (req.body.title) updatedBug.title = req.body.title;
      if (req.body.description) updatedBug.description = req.body.description;
      if (req.body.priority) updatedBug.priority = req.body.priority;
      if (req.body.status) updatedBug.status = req.body.status;
      if (req.body.teamId) updatedBug.teamId = req.body.teamId;
      if (req.body.userId) updatedBug.userId = req.body.userId;
      updatedBug.updatedAt = Date.now();

      await updatedBug.save();
      res.locals.updatedBug = updatedBug;
      return next()

    } catch (error) {
      return next(error);
    }
  },

}

module.exports = bugControllers;