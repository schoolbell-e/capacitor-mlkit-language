import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(MLKitLanguagePlugin)
public class MLKitLanguagePlugin: CAPPlugin {
    private let implementation = MLKitLanguage()

    @objc func identifyLanguage(_ call: CAPPluginCall) {
        let value = call.getString("text") ?? ""
        if value.isEmpty {
            call.reject("empty string given")
            return
        }
        
        let lang = implementation.identifyLanguage(for:value)
        call.resolve([
            "languageCode": lang
        ])
    }
}
