export const environment = {
    appVersion: require('../../package.json').version + '-dev',
    serverVersion: '',
    production: false,
    apiUrl: 'https://ws-test.seidoit.pl',
    crypt: {
        key: "72E93D2A56DB44C3914C811983C6C08E",
        iv: "7061737323313233"
    }
};
