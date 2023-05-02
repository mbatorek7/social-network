const router = require('express').Router();

const {
    getUser,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId')
.get(getOneUser)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userId/friends/:friendId 
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;