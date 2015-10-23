/* jshint node: true */
'use strict';

var notifier = require('./lib/notifier');
var Config = require('./lib/config');

module.exports = {
  name: 'ember-cli-build-notifications',

  postBuild: function(result){
    var seconds = result.totalTime / 1000000000;
    notifier.notify({
      title: 'Build success',
      message: 'Build time: ' + (Math.round(seconds * 100) / 100) + ' seconds',
      appIcon: path.resolve(__dirname + '/ember-logo.png'),
      'expire-time': 1000
    });
  },

  buildError: function(error) {
    var config = Config.load(this.project.root);

    if (config.buildError.notify) {
      notifier.notify(error);
    }
  }
};
