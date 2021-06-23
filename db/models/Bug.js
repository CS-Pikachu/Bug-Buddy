module.exports = function (sequelize, DataTypes) {
    const Bug = sequelize.define('bug', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        priority: DataTypes.STRING,
        status: DataTypes.STRING,
        dueDate: DataTypes.DATE,
    });
    Bug.associate = function (models) {
        Bug.belongsTo(models.Team)
        Bug.belongsTo(models.User)
        Bug.hasMany(models.Comment)
    }
    return Bug;
}