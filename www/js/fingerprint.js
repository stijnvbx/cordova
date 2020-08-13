document.addEventListener("deviceready",function () {


    /**
     * @return {
     *      isAvailable:boolean,
     *      isHardwareDetected:boolean,
     *      hasEnrolledFingerprints:boolean
     *   }
     */
    FingerprintAuth.isAvailable(function (result) {

        console.log("FingerprintAuth available: " + JSON.stringify(result));

        // If has fingerprint device and has fingerprints registered
        if (result.isAvailable == true && result.hasEnrolledFingerprints == true) {

            // Check the docs to know more about the encryptConfig object :)
            var encryptConfig = {
                clientId: "securenotepad",
                username: "currentUser",
                password: "currentUserPassword",
                maxAttempts: 5,
                locale: "en_US",
                dialogTitle: "Put your finger on the reader",
                dialogMessage: "Put your finger on the device",
                dialogHint: "No one will steal your identity, promised"
            }; // See config object for required parameters

            // Set config and success callback
            FingerprintAuth.encrypt(encryptConfig, function(_fingerResult){
                console.log("successCallback(): " + JSON.stringify(_fingerResult));
                if (_fingerResult.withFingerprint) {
                    console.log("Successfully encrypted credentials.");
                    console.log("Encrypted credentials: " + result.token);
                } else if (_fingerResult.withBackup) {
                    console.log("Authenticated with backup password");
                }
                // Error callback
            }, function(err){
                if (err === FingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                    console.log("FingerprintAuth Dialog Cancelled!");
                    $('html').style('display', 'hide');
                } else {
                    console.log("FingerprintAuth Error: " + err);
                }
            });
        }

    }, function (message) {
        console.log("isAvailableError(): " + message);
    });
}, false);