const { Sequelize, DataTypes } = require('sequelize');
const keys = require('../config/keys');

const sequelize = new Sequelize(
    keys.POSTGRESS_KEY, {
    // logging: true,
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


module.exports = sequelize;



















// async function getOnePerson() {
//     let person = await Person.findOne()
//     console.log(person.get('name'))
// }

// getOnePerson()

// async function createUser() {
    // await User.sync({ force: true })
//     const jane = await User.create({ name: "Jane" });
//     console.log("Jane's auto-generated ID:", jane.id);

// }
// createUser()
