const sequelize = require('../../db/indexDB')
const User = sequelize.models.user

const userControllers = {

// POST an user
  async createUser (req, res,  next) {
    try {
        const user = await User.create({ 
            username: req.body.username, 
            password: req.body.password, 
            isAdmin: req.body.isAdmin 
        });

        console.log("User's auto-generated ID:", user.id);
        console.log("complete user", user);

        res.locals.createdUser = user;
        return next()

    } catch (error) {
      console.log(err);
      return next(err);
    }
  },

  // GET all users
  async getAllUsers (req, res, next) {
    try {
        const users = await User.findAll();
        console.log(users.every(user => user instanceof User)); // true
        console.log("All users:", JSON.stringify(users, null, 2));
        res.locals.getUsers = users;
        return next()
    } catch (error) {
      console.log(err);
      return next(err);
    }
  },

  // UPDATE a user
  async updateUser (req, res, next) {
    const userId = req.params.id;
    try {
        const updatedUser = await User.findOne({ where: { id: userId } });
        console.log("User has been found, ", updatedUser);

        if (req.body.username) updatedUser.username = req.body.username;
        if (req.body.password) updatedUser.password = req.body.password;
        if (req.body.isAdmin) updatedUser.isAdmin = req.body.isAdmin;
        updatedUser.updatedAt = Date.now();

        await updatedUser.save();
        res.locals.updatedUser = updatedUser;
        return next()

    } catch (error) {
      console.log(err);
      return next(err);
    }
  },

  // DELETE a user
  async deleteUser (req, res, next) {
    const userId = req.params.id;
    console.log(userId);
    try {
        const deletedUser = await User.destroy({
            where: {
                id: userId
            }
        });
        console.log("Bug deleted, ", deletedUser);

        res.locals.deletedUser = deletedUser;
        return next()

    } catch (error) {
      console.log(err);
      return next(err);
    }
  },

}

module.exports = userControllers;