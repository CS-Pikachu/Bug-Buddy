module.exports = function (sequelize, DataTypes) {
    const Team = sequelize.define('team', {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
    });
    Team.associate = function (models) {
        Team.belongsToMany(models.User, {
            through: 'member',
            foreignKey: 'teamId',
        })
        Team.belongsTo(models.User)
    }
    return Team;
}
