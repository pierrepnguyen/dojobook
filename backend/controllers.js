const { User } = require('./models');

module.exports = {
  allPosts: (req, res) => {
    User.find()
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  newUser: (req, res) => {
    User.findOne()
      .then(User.create()
        .then(data => res.json(data))
        .catch(err => res.json(err)))
      .catch(err => res.json('That username already exists'))
  },
  findUser: (req, res) => {
    const ID = req.params.id;
    User.findById({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },

}