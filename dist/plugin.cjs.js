'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const MLKitLanguage = core.registerPlugin('MLKitLanguage', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.MLKitLanguageWeb()),
});

class MLKitLanguageWeb extends core.WebPlugin {
    async identifyLanguage(_) {
        throw new Error('identifyLanguage() not implemented for web');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MLKitLanguageWeb: MLKitLanguageWeb
});

exports.MLKitLanguage = MLKitLanguage;
//# sourceMappingURL=plugin.cjs.js.map
