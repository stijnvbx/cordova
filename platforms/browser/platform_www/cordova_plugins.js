cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-android-fingerprint-auth/www/FingerprintAuth.js",
        "id": "cordova-plugin-android-fingerprint-auth.FingerprintAuth",
        "pluginId": "cordova-plugin-android-fingerprint-auth",
        "clobbers": [
            "FingerprintAuth"
        ]
    },
    {
        "file": "plugins/org.frd49.cordova.exitapp/www/exitApp.js",
        "id": "org.frd49.cordova.exitapp.CDVExitApp",
        "pluginId": "org.frd49.cordova.exitapp",
        "clobbers": [
            "navigator.app"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-android-fingerprint-auth": "1.5.0",
    "org.frd49.cordova.exitapp": "1.0.0"
}
// BOTTOM OF METADATA
});