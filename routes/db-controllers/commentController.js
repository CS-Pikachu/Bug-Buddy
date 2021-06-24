const sequelize = require('../../db/indexDB');
const Comment = sequelize.models.comment;

const commentControllers = {

  // GET all comments
  async getAllComments(req, res, next) {
    try {
      const comments = await Comment.findAll();
      res.locals.getComments = comments;
      return next();
    } catch (error) {
      return next(error);
    }
  },

  // POST a new Comment
  async createComment(req, res, next) {
    try {
      const newComment = await Comment.create({ text: req.body.text });

      res.locals.newComment = newComment;
      return next()

    } catch (error) {
      return next(error);
    }
  },

  // UPDATE a Comment - 
  async updateComment(req, res, next) {
    const ComId = req.params.id;
    try {
      const updatedComment = await Comment.findOne({ where: { id: ComId } });

      if (req.body.text) updatedComment.text = req.body.text;
      if (req.body.bugId) updatedComment.bugId = req.body.bugId;
      if (req.body.userId) updatedComment.userId = req.body.userId;
      updatedComment.updatedAt = Date.now();

      await updatedComment.save();
      res.locals.updatedComment = updatedComment;
      return next()

    } catch (error) {
      return next(error);
    }
  },

}

module.exports = commentControllers;