/* jshint node: true */
var nodeNotifier = require('node-notifier');
var path = require('path');

module.exports = {
  name: 'notifier',

  error: function(error, options) {
    var notifier = (options && options.notifier) || nodeNotifier;

    return notifier.notify({
      title: 'Build Failed',
      subtitle: error.file,
      message: error.toString(),
      appIcon: path.resolve(__dirname, '..', 'ember-logo.png')
    });
  },

  success: function(message, options) {
    var notifier = (options && options.notifier) || nodeNotifier;
    var timeout = (options && options.timeout) || 2000;

    return notifier.notify({
      title: 'Build success',
      message: message,
      appIcon: path.resolve(__dirname, '..', 'ember-logo.png'),
      'expire-time': timeout
    });
  }
};
