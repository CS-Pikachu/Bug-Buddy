const userController = require('./db-controllers/userController');
const bugController = require('./db-controllers/bugController');
const teamController = require('./db-controllers/teamController');
const commentController = require('./db-controllers/commentController');

const Router = require('express-promise-router');

const router = new Router()

// POST an user
router.post('/users',
    userController.createUser,
    (req, res) => res.status(201).json(res.locals.createdUser)
);

// GET all users
router.get('/users',
    userController.getAllUsers,
    (req, res) => res.status(200).json(res.locals.getUsers)
);

// UPDATE a user
router.patch('/users/:id',
    userController.updateUser,
    (req, res) => res.status(201).json(res.locals.updatedUser)
);

// DELETE a user
router.delete('/users/:id',
    userController.deleteUser,
    (req, res) => res.status(204).json(res.locals.deletedUser)
);

// GET all bugs
router.get('/bugs',
    bugController.getAllBugs,
    (req, res) => res.status(200).json(res.locals.getBugs)
);

// POST a new bug
router.post('/bugs',
    bugController.createBug,
    (req, res) => res.status(201).json(res.locals.newBug)
);

// DELETE a bug
router.delete('/bugs/:id',
    bugController.deleteBug,
    (req, res) => res.status(204).json(res.locals.deletedBug)
);

// UPDATE a bug
router.patch('/bugs/:id',
    bugController.updateBug,
    (req, res) => res.status(201).json(res.locals.updatedBug)
);

// GET all teams
router.get('/teams',
    teamController.getAllTeams,
    (req, res) => res.status(200).json(res.locals.getTeams)
);

// POST a new Team
router.post('/teams',
    teamController.createTeam,
    (req, res) => res.status(201).json(res.locals.createdTeam)
);

// UPDATE a Team - 
router.patch('/teams/:id',
    teamController.updateTeam,
    (req, res) => res.status(201).json(res.locals.updatedTeam)
);

// GET all comments
router.get('/comments',
    commentController.getAllComments,
    (req, res) => res.status(200).json(res.locals.getComments)
);

// POST a new Comment
router.post('/comments',
    commentController.createComment,
    (req, res) => res.status(201).json(res.locals.newComment)
);

// UPDATE a Comment - 
router.patch('/comments/:id',
    commentController.updateComment,
    (req, res) => res.status(201).json(res.locals.updatedComment)
);


module.exports = router
