const messages = {
    main: {
        serverRunning: port => `Server running on port ${port}`
    },
    fbWebhookVerify: {
        missingQueryString: 'Missing querystring',
        validationFailed: 'Failed validation.'
    },
    xhubSns: {
        wrongSignature: 'Content signature don\'t match'
    }
};

export default {
    main: {
        port: 8088,
        webhookPath: '/',
        messages: messages.main
    },
    fbWebhookVerify: {
        token: 'FB_VERIFY_TOKEN',
        messages: messages.fbWebhookVerify
    },
    xhubSns: {
        secret: 'FB_APP_SECRET',
        algo: 'sha1',
        topicArn: 'AWS_SNS_TOPIC_ARN',
        awsConfig: {
            region: 'us-east-1'
        },
        messages: messages.xhubSns
    }
};
