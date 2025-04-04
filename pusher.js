const Pusher = require('pusher');
require('dotenv').config();

const evaluationPusherConfig = {
    appId: process.env.PUSHER_EVALUATION_ID,
    key: process.env.PUSHER_EVALUATION_KEY,
    secret: process.env.PUSHER_EVALUATION_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    useTLS: true,
};

const evaluationPusher = new Pusher({
    appId: evaluationPusherConfig.appId,
    key: evaluationPusherConfig.key,
    secret: evaluationPusherConfig.secret,
    cluster: evaluationPusherConfig.cluster,
    useTLS: evaluationPusherConfig.useTLS,
});

module.exports = { trackingPusher,evaluationPusher };