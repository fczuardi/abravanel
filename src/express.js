import express from 'express';
import bodyParser from 'body-parser';
import { apiEndpoint as fbWebhookGet } from 'calamarble-fb-webhook-verify';
import { apiEndpoint as postWebhook } from 'calamarble-xhub';
import { debuglog } from 'util';
import config from '../config';

const log = debuglog('dev');
const app = express();
const getEndPoint = fbWebhookGet(config.fbWebhookVerify);

const postCallBack = (req, res) => {
    // console.log('---postCallBack---', req.body.toString());
    const result = { success: true };
    return res ? res.send(result) : result;
};
const postEndPoint = postWebhook({
    ...config.xhub,
    next: postCallBack
});
app.use(bodyParser.raw({ type: 'application/json' }));
app.get(config.main.webhookPath, getEndPoint);
app.post(config.main.webhookPath, postEndPoint);
app.listen(config.main.port, () => log(config.main.messages.serverRunning(config.main.port)));
