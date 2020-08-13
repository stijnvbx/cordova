cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-android-fingerprint-auth.FingerprintAuth",
      "file": "plugins/cordova-plugin-android-fingerprint-auth/www/FingerprintAuth.js",
      "pluginId": "cordova-plugin-android-fingerprint-auth",
      "clobbers": [
        "FingerprintAuth"
      ]
    },
    {
      "id": "org.frd49.cordova.exitapp.CDVExitApp",
      "file": "plugins/org.frd49.cordova.exitapp/www/exitApp.js",
      "pluginId": "org.frd49.cordova.exitapp",
      "clobbers": [
        "navigator.app"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-android-fingerprint-auth": "1.5.0",
    "org.frd49.cordova.exitapp": "1.0.0"
  };
});