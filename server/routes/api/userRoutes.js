const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser,
    addJob
} = require('../../controllers/userController.js');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/focus
router
    .route('/focus')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/user/:email
router
    .route('/:email')
    .put(addJob)

module.exports = router;
