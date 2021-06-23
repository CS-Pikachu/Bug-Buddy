module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN,
    });
    User.associate = function (models) {
        User.belongsToMany(models.Team, {
            through: 'member',
            foreignKey: 'userId',
        })
        User.hasMany(models.Comment)
        User.hasMany(models.Bug)
    }
    return User;
}