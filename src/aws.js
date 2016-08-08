import ApiBuilder from 'claudia-api-builder';
import { apiEndpoint as fbWebhookGet } from 'calamarble-fb-webhook-verify';
import { apiEndpoint as postWebhook } from 'calamarble-xhub';
import config from '../config';

const api = new ApiBuilder();
api.get(config.main.webhookPath, fbWebhookGet(config.fbWebhookVerify));
api.post(config.main.webhookPath, postWebhook(config.xhub));

export default api;
