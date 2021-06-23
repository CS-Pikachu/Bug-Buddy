const Router = require('express-promise-router');
const { Sequelize, DataTypes } = require('sequelize');
// const { User, Team, Bug, Comment } = require('../db/indexDB')
const sequelize = require('../db/indexDB')

const user = require('../db/models/User');
const team = require('../db/models/Team');
const bug = require('../db/models/Bug');
const comment = require('../db/models/Comment');

const User = user(sequelize, DataTypes)
const Team = team(sequelize, DataTypes)
const Bug = bug(sequelize, DataTypes)
const Comment = comment(sequelize, DataTypes)

const router = new Router()
// export our router to be mounted by the parent application
// POST an user
router.post('/user', async (req, res) => {
    try {
    const user = await User.create({ username: req.body.username, password: req.body.password, isAdmin: req.body.isAdmin });
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
        res.status(400).json('We had some trouble finding users');
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
    try {
        const newBug = await Bug.create({ description: "SQL is not fun!!", priority: "low", status: "In review",  });
            console.log("Bug's auto-generated ID:", newBug.id);
            console.log("Bug logged in, ", newBug);
    
            res.locals.newBug = newBug;
            res.status(200).json(newBug);    
            
        } catch (error) {
            res.status(400).json('We could not log this Bug, sorry!');
        }
});

// TODO UPDATE method
router.put('/api/update/:id', async (req, res) => {

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
        const newTeam = await Team.create({ name: "Yankees" });
            console.log("Team's auto-generated ID:", newTeam.id);
            console.log("Team logged in, ", newTeam);
    
            res.locals.newTeam = newTeam;
            res.status(200).json(newTeam);    
            
        } catch (error) {
            res.status(400).json('We could not create this Team, sorry!');
        }
});

// GET all comments
router.get('/comments', async (req, res) => {
    try {
        const comments = await Comment.findAll();
            console.log(comments.every(comments => comments instanceof Comment)); // true
            console.log("All Teams:", JSON.stringify(comment, null, 2));
        res.locals.getComments = comments;
        res.status(200).json(comments);
          } catch (error) {
            res.status(400).json('We had some trouble finding those comments: ', error);
          }
});

// POST a new Comment
router.post('/newComment', async (req, res) => {
    try {
        const newComment = await Comment.create({ text: "Unless I'm losing my mind" });
            console.log("Comment's auto-generated ID:", newComment.id);
            console.log("Comment logged in, ", newComment);
    
            res.locals.newComment = newComment;
            res.status(200).json(newComment);    
            
        } catch (error) {
            res.status(400).json('We could not create this Comment, sorry!');
        }
});


module.exports = router
