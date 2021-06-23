const Router = require('express-promise-router');
const { useRouteMatch } = require('react-router-dom');
const sequelize = require('../db/indexDB')
const User = sequelize.models.user
const Team = sequelize.models.team
const Bug = sequelize.models.bug
const Comment = sequelize.models.comment
const router = new Router()
// POST an user
router.post('/user', async (req, res) => {
    try {
        const user = await User.create({ 
            username: req.body.username, 
            password: req.body.password, 
            isAdmin: req.body.isAdmin 
        });
        console.log("User's auto-generated ID:", user.id);
        console.log("complete user", user);
        res.locals.createdUser = user;
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json('We could not create this user');
    }
});
// GET all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        console.log(users.every(user => user instanceof User)); // true
        console.log("All users:", JSON.stringify(users, null, 2));
        res.locals.getUsers = users;
        res.status(200).json(users);
    } catch (error) {
        console.log(error)
        res.status(400).json('We had some trouble finding users');
    }
});
// UPDATE a user
router.post('/updateUser/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const updatedUser = await User.findOne({ where: { id: userId } });
        console.log("User has been found, ", updatedUser);
        if (req.body.username) updatedUser.username = req.body.username;
        if (req.body.password) updatedUser.password = req.body.password;
        if (req.body.isAdmin) updatedUser.text = req.body.isAdmin;
        updatedUser.updatedAt = Date.now();
        await updatedUser.save();
        res.locals.updatedUser = updatedUser;
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json('We could not update this Bug, sorry!', error);
    }
});
// GET all bugs
router.get('/bugs', async (req, res) => {
    try {
        const bugs = await Bug.findAll();
        console.log(bugs.every(bugs => bugs instanceof Bug)); // true
        console.log("All bugs:", JSON.stringify(bugs, null, 2));
        res.locals.getBugs = bugs;
        res.status(200).json(bugs);
    } catch (error) {
        res.status(400).json('We had some trouble finding those bugs: ', error);
    }
});
// POST a new bug
router.post('/newBug', async (req, res) => {
    const fortnightAway = new Date(Date.now() + 12096e5)
    try {
        const newBug = await Bug.create({
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            status: req.body.status,
            dueDate: fortnightAway
        });
        console.log("Bug's auto-generated ID:", newBug.id);
        console.log("Bug logged in, ", newBug);
        res.locals.newBug = newBug;
        res.status(200).json(newBug);
    } catch (error) {
        res.status(400).json('We could not log this Bug, sorry!', error);
    }
});
// DELETE a bug
router.get('/deleteBug/:id', async (req, res) => {
    const bugId = req.params.id;
    console.log(bugId);
    try {
        const deletedBug = await Bug.destroy({
            where: {
                id: bugId
            }
        });
        console.log("Bug deleted, ", deletedBug);
        res.locals.deletedBug = deletedBug;
        res.status(200).json(deletedBug);
    } catch (error) {
        res.status(400).json('We could not delete this Bug, sorry!', error);
    }
});
// UPDATE a bug
router.post('/updateBug/:id', async (req, res) => {
    const bugId = req.params.id;
    try {
        const updatedBug = await Bug.findOne({ where: { id: bugId } });
        console.log("Bug has been found, ", updatedBug);
        if (req.body.title) updatedBug.title = req.body.title;
        if (req.body.description) updatedBug.description = req.body.description;
        if (req.body.priority) updatedBug.priority = req.body.priority;
        if (req.body.status) updatedBug.status = req.body.status;
        updatedBug.teamId = req.body.teamId;
        updatedBug.userId = req.body.userId;
        updatedBug.updatedAt = Date.now();
        await updatedBug.save();
        res.locals.updatedBug = updatedBug;
        res.status(200).json(updatedBug);
    } catch (error) {
        res.status(400).json('We could not update this Bug, sorry!', error);
    }
});
// GET all teams
router.get('/teams', async (req, res) => {
    try {
        const teams = await Team.findAll();
        console.log(teams.every(teams => teams instanceof Team)); // true
        console.log("All Teams:", JSON.stringify(teams, null, 2));
        res.locals.getTeams = teams;
        res.status(200).json(teams);
    } catch (error) {
        res.status(400).json('We had some trouble finding those teams: ', error);
    }
});
// POST a new Team
router.post('/newTeam', async (req, res) => {
    try {
        const newTeam = await Team.create({ name: req.body.name, owner: req.body.owner });
        console.log("Team's auto-generated ID:", newTeam.id);
        console.log("Team logged in, ", newTeam);
        res.locals.newTeam = newTeam;
        res.status(200).json(newTeam);
    } catch (error) {
        res.status(400).json('We could not create this Team, sorry!');
    }
});
// UPDATE a Team - 
router.post('/updateTeam/:id', async (req, res) => {
    const teamId = req.params.id;
    try {
        const updatedTeam = await Team.findOne({ where: { id: teamId } });
        console.log("Found the Team, ", updatedTeam);
        if (req.body.name) updatedTeam.text = req.body.name;
        updatedTeam.owner = req.body.owner;
        await updatedTeam.save();
        res.locals.updatedTeam = updatedTeam;
        res.status(200).json(updatedTeam);
    } catch (error) {
        res.status(400).json('We could not update this Team, sorry!', error);
    }
});
// GET all comments
router.get('/comments', async (req, res) => {
    try {
        const comments = await Comment.findAll();
        console.log(comments.every(comments => comments instanceof Comment)); // true
        console.log("All Teams:", JSON.stringify(comments, null, 2));
        res.locals.getComments = comments;
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json('We had some trouble finding those comments: ', error);
    }
});
// POST a new Comment
router.post('/newComment', async (req, res) => {
    try {
        const newComment = await Comment.create({ text: req.body.text, bugId: req.body.bugId, userId: req.body.userId });
        console.log("Comment's auto-generated ID:", newComment.id);
        console.log("Comment logged in, ", newComment);
        res.locals.newComment = newComment;
        res.status(200).json(newComment);
    } catch (error) {
        res.status(400).json('We could not create this Comment, sorry!');
    }
});
// UPDATE a Comment - 
router.post('/updateCom/:id', async (req, res) => {
    const ComId = req.params.id;
    try {
        const updatedComment = await Comment.findOne({ where: { id: ComId } });
        console.log("Found the comment, ", updatedComment);
        if (req.body.text) updatedComment.text = req.body.text;
        updatedComment.bugId = req.body.bugId;
        updatedComment.userId = req.body.userId;
        updatedComment.updatedAt = Date.now();
        await updatedComment.save();
        res.locals.updatedComment = updatedComment;
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(400).json('We could not update this Comment, sorry!', error);
    }
});
// const john = {
//     username: "joan",
//     password: "secret",
//     isAdmin: true,
// }
// // testing
// router.get('/testing', async (req, res) => {
//     const user = await User.create(john)
//     const userId = user.id
//     const comment = await user.createComment({ userId, text: "a comment" })
//     const us = await User.findAll()
//     const message = await user.getComments()
//     console.log(us)
//     console.log(comment)
//     console.log(message)
//     // console.log(Team)
// });
module.exports = router
