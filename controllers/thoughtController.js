const { User, Thought } = require('../models');

module.exports = {
    //get all thoughts
    async getThought(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    //get a single thought
    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    //create a thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch(err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID' });
            }

            const user = await User.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } },
                { new: true }
            );
        } catch (err) {
            
        }
    },
    //update a user
    async updateThought(req, res) {
        try {
            
        } catch(err) {
           
        }
    },
    //add friend
    async createReaction(req, res) {
        try {
            
        } catch(err) {
            
        }
    },
    //delete a friend
    async deleteReaction(req, res) {
        try {
            
        } catch(err) {
            
        }
    }
};