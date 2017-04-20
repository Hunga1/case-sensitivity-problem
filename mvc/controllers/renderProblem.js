module.exports = function(app) {
  app.get('/case-sensitive', function(req, res) {
    var model = require('models/global')(req, res);
    model.content.pageTitle = '{content.appTitle} - Case Sensitive Template Reference';
    model.referenceType = 'Case Sensitive';

    res.render('testTemplate', model);
  });

  app.get('/case-insensitive', function(req, res) {
    var model = require('models/global')(req, res);
    model.content.pageTitle = '{content.appTitle} - Case Insensitive Template Reference';
    model.referenceType = 'Case Insensitive';

    res.render('testtemplate', model);
  });
};