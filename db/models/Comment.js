module.exports = function (sequelize, DataTypes) {
    const Comment = sequelize.define('comment', {
        text: DataTypes.STRING,
    });
    Comment.associate = function (models) {
        Comment.belongsTo(models.Bug)
        Comment.belongsTo(models.User)
    }
    return Comment;
}