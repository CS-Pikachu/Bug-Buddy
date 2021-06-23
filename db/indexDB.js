const { Sequelize, DataTypes } = require('sequelize');
const keys = require('../config/keys');

const sequelize = new Sequelize(
    keys.POSTGRESS_KEY, {
    logging: false,
})

const user = require('./models/User');
const team = require('./models/Team');
const bug = require('./models/Bug');
const comment = require('./models/Comment');

const User = user(sequelize, DataTypes)
const Team = team(sequelize, DataTypes)
const Bug = bug(sequelize, DataTypes)
const Comment = comment(sequelize, DataTypes)

const models = {
    User,
    Team,
    Bug,
    Comment,
}

Object.keys(models).forEach(key => {
    if (models[key].associate) {
        models[key].associate(models)
    }
})

module.exports = sequelize, User, Team, Bug, Comment;