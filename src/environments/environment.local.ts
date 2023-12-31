
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    appVersion: require('../../package.json').version + '-local',
    serverVersion: '',
    production: false,
    // apiUrl: 'https://ws.seidoit.pl',
    apiUrl: 'http://localhost:5000',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
