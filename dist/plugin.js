var capacitorMLKitLanguage = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
