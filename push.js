var push = require('web-push')

let vapidKeys = {
    publicKey: 'BJTaedW3qceyp2IOfObkMYngNMVkxzjlCOIZanMtLDsHyPbe5mVizcCEx8THfVW2RNFuQcAa5E0WPjMkKpZITpw',
    privateKey: '_7jQF-RzY2z-sGgB8ZASn-Fsrryh0Z2FiLxo6p6GnrA'
}


push.setVapidDetails('mailto:test@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {}
push.sendNotification(sub, 'text message')