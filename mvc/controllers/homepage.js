module.exports = function(app) {
  app.route('/').get(function(req, res) {
    var model = require('models/global')(req, res);
    model.content.pageTitle = '{content.appTitle} - Homepage';

    res.render('homepage', model);
  });
};