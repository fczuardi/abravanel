import express from 'express';
import bodyParser from 'body-parser';
import { apiEndpoint as fbWebhookGet } from 'calamarble-fb-webhook-verify';
import { apiEndpoint as postWebhook } from 'calamarble-xhub';
import { debuglog } from 'util';
import config from '../config';

const log = debuglog('dev');
const app = express();
const getEndPoint = fbWebhookGet(config);
const postEndPoint = postWebhook(config);
app.use(bodyParser.raw({ type: 'application/json' }));
app.get(config.getPath, getEndPoint);
app.post(config.postPath, postEndPoint);
app.listen(config.port, () => log(config.messages.serverRunning(config.port)));
