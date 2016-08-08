import ApiBuilder from 'claudia-api-builder';
import { apiEndpoint as fbWebhookGet } from 'calamarble-fb-webhook-verify';
import { apiEndpoint as postWebhook } from 'calamarble-xhub';
import config from '../config';

const api = new ApiBuilder();
api.get(config.webhookPath, fbWebhookGet(config));
api.post(config.webhookPath, postWebhook(config));

export default api;
