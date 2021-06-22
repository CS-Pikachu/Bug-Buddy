export default (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment', {
        text: DataTypes.STRING,
    });
    Comment.associate = (models) => {
        Comment.belongsTo(models.Bug, {
            foreignKey: 'bugId',
        })
        Comment.belongsTo(models.User, {
            foreignKey: 'userId',
        })
    };
    return Comment;
};
