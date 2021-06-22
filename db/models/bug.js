export default (sequelize, DataTypes) => {
    const Bug = sequelize.define('bug', {
        description: DataTypes.STRING,
        priority: DataTypes.STRING,
        status: DataTypes.STRING,
        comment: DataTypes.STRING,
        priority: DataTypes.STRING,
    });
    Bug.associate = (models) => {
        Bug.belongsTo(models.Team, {
            foreignKey: 'teamId',
        })
        Bug.belongsTo(models.User, {
            foreignKey: 'userId',
        })
    };

    return Bug;
};
