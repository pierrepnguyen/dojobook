const { User } = require('./models');

module.exports = {
  getUserByUsername: (req, res) => {
    console.log(req.body)
    User.find({username: req.body.username, password: req.body.password})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  allPosts: (req, res) => {
    User.find()
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },

  newUser: (req, res) => {
    User.findOne({ name: req.body.username }, (err, user) => {
			if (err) {
        res.json({ dupError: 'That username already exists' });
			} else {
        if (user) {
          res.json({ dupError: 'That username already exists' });
        } else {
            User.create(req.body, err => {
              if (err) {
                res.json(err);
                } else {
                  res.json({ success: true });
                }
            });
					}
			}
    });
  },

  findUser: (req, res) => {
    const ID = req.params.id;
    User.findById({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },

  createPost: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    User.updateOne({_id: ID}, {$push: {posts: DATA}}, {runValidators: true, new: true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
}