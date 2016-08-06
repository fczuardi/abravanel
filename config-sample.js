export default {
    port: 8088,
    webhookPath: '/',
    verifyToken: 'FB_VERIFY_TOKEN',
    xHubSecret: 'FB_APP_SECRET',
    xHubAlgo: 'sha1',
    messages: {
        serverRunning: port => `Server running on port ${port}`,
        validationFailed: 'Failed validation.',
        wrongSignature: 'Content signature don\'t match'
    }
};
