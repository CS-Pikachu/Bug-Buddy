export default (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN,
    });
    User.associate = (models) => {
        User.belongsToMany(models.Team, {
            through: 'member',
            foreighKey: 'userId',
        })
    };
    console.log('userjs')
    return User;
};
