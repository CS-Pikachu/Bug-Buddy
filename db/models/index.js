import Sequelize from 'sequelize';

// const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'postgres://fkhcjcfy:4muOB1ZJlD9JQ8KKa9scGtwCdw8H_v_S@tai.db.elephantsql.com/fkhcjcfy', {
    logging: true,
})


const models = {
    User: require('./user'),
    Bug: require('./bug'),
    Team: require('./team'),
    Comment: require('./comment'),
}

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        console.log('here')
        models[modelName].associate(models);
    }
})

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;

// const connect = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// connect()



// async function getOnePerson() {
//     let person = await Person.findOne()
//     console.log(person.get('name'))
// }

// getOnePerson()

// async function createUser() {
//     await User.sync({ force: true })
//     const jane = await User.create({ name: "Jane" });
//     console.log("Jane's auto-generated ID:", jane.id);

// }
// createUser()
