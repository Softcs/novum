export const environment = {
    appVersion: require('../../package.json').version,
    serverVersion: '',
    production: true,
    apiUrl: 'https://ws.seidoit.pl',
    crypt: {
        key: "72E93D2A56DB44C3914C811983C6C08E",
        iv: "7061737323313233"
    },
    routingOverride : {
        "publicat.l-seidoit.pl": {
            "login": "login_pub"
        }
    }
};
