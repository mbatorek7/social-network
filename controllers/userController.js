const { User, Thought } = require('../models');

module.exports = {
    //get all users
    async getUser(req, res) {
        try {
            const users = await User.find()
            .populate('friends')
            .populate('thoughts');

            res.json(users);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    //get a single user
    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .populate('friends')
            .populate('thoughts')
            .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    //create a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch(err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //delete a user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                res.status(404).json({ message: 'No user with that ID' });
            }

            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'Users and Thoughts deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //update a user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    //add friend
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    //delete a friend
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    }
};