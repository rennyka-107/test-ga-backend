'use strict';
module.exports = function (app) {
  let GATrackingController = require('./controllers/GATrackingController');
  app.route('/tracking')
    .post(GATrackingController.track)
};

