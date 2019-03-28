const controllers = require('./controllers');

module.exports = app => {
  app
    .get('/users', controllers.allPosts)
    .get('/users/:id', controllers.findUser)
    .post('/users/new', controllers.newUser)
    // .put('/api/posts/:id', controllers.createPost)
}