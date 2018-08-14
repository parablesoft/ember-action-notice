'use strict';

module.exports = {
  name: 'action-notice',
  isDevelopingAddon: function () {
    return true;
  },
  included: function (app, parentAddon) {
    this._super.included.apply(this, arguments);
    var target = (parentAddon || app);
    app.import("vendor/assets/css/action-notice.css");
  }
};