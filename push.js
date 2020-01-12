var push = require('web-push')

let vapidKeys = {
    publicKey: 'BJTaedW3qceyp2IOfObkMYngNMVkxzjlCOIZanMtLDsHyPbe5mVizcCEx8THfVW2RNFuQcAa5E0WPjMkKpZITpw',
    privateKey: '_7jQF-RzY2z-sGgB8ZASn-Fsrryh0Z2FiLxo6p6GnrA'
}


push.setVapidDetails('mailto:test@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/f-Tv9J75JCQ:APA91bGsGaNmaXNGcunhPi9ISS19P8VACdu_UVB6zShXN8-Q5nY-wp11-TW7vccH-uFLP5fyluwYKLL52tlvNsMtyatN_E3Ef6tN2ySeFCqHuqFMSSDQJgyZPcAeRb1j2LznfC9A0gEW",
    "expirationTime": null,
    "keys": {
        "p256dh": "BFfYFACY8cUHPWcNDDMIsA6UCpnGLshbc3EPTkcSoDqgpFiiA1uDFCwHQRmDCm8YywJMkU45w74Zm2o6rAJRjqU",
        "auth": "XIQv8IjRVL-lX_Mp7up2kg"
    }
}
push.sendNotification(sub, 'text message')