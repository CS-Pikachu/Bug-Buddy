const userController = require('./db-controllers/userController');
const bugController = require('./db-controllers/bugController');
const teamController = require('./db-controllers/teamController');
const commentController = require('./db-controllers/commentController');

const Router = require('express-promise-router');
const { useRouteMatch } = require('react-router-dom');

const router = new Router()

// POST an user
router.post('/user', 
    userController.createUser, 
    (req, res) => res.status(200).json(res.locals.createdUser)
);

// GET all users
router.get('/users', 
    userController.getAllUsers,
    (req, res) => res.status(200).json(res.locals.getUsers)
);

// UPDATE a user
router.post('/updateUser/:id', 
    userController.updateUser,
    (req, res) => res.status(200).json(res.locals.updatedUser)
);

// DELETE a user
router.get('/deleteUser/:id', 
    userController.deleteUser,
    (req, res) => res.status(200).json(res.locals.deletedUser)
);

// GET all bugs
router.get('/bugs', 
    bugController.getAllBugs,
    (req, res) => res.status(200).json(res.locals.getBugs)
);

// POST a new bug
router.post('/newBug', 
    bugController.createBug,
    (req, res) => res.status(200).json(res.locals.newBug)
);

// DELETE a bug
router.post('/deleteBug/:id', 
    bugController.deleteBug,
    (req, res) => res.status(200).json(res.locals.deletedBug)
);

// UPDATE a bug
router.post('/updateBug/:id', 
    bugController.updateBug,
    (req, res) => res.status(200).json(res.locals.updatedBug)
);

// GET all teams
router.get('/teams', 
    teamController.getAllTeams,
    (req, res) => res.status(200).json(res.locals.getTeams)
);

// POST a new Team
router.post('/newTeam', 
    teamController.createTeam, 
    (req, res) => res.status(200).json(res.locals.createdTeam)
);

// UPDATE a Team - 
router.post('/updateTeam/:id',
    teamController.updateTeam, 
    (req, res) => res.status(200).json(res.locals.updatedTeam)
);

// GET all comments
router.get('/comments', 
    commentController.getAllComments,
    (req, res) => res.status(200).json(res.locals.getComments)
);

// POST a new Comment
router.post('/newComment', 
    commentController.createComment,
    (req, res) => res.status(200).json(res.locals.newComment)
);

// UPDATE a Comment - 
router.post('/updateCom/:id', 
    commentController.updateComment,
    (req, res) => res.status(200).json(res.locals.updatedComment)
);


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
