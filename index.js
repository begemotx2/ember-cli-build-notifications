/* jshint node: true */
'use strict';

var notifier = require('./lib/notifier');
var Config = require('./lib/config');

module.exports = {
  name: 'ember-cli-build-notifications',

  postBuild: function(result){
    var config = Config.load(this.project.root);
    if (config.postBuild.notify) {
      var seconds = result.totalTime / 1000000000;
      var message = 'Build time: ' + (Math.round(seconds * 100) / 100) + ' seconds';
      notifier.success(message, {timeout: config.postBuild.timeout});
    }
  },

  buildError: function(error) {
    var config = Config.load(this.project.root);

    if (config.buildError.notify) {
      notifier.error(error);
    }
  }
};
