import Foundation
import NaturalLanguage

@objc public class MLKitLanguage: NSObject {
    @objc func identifyLanguage(for text: String) -> String? {
        let recognizer = NLLanguageRecognizer()
        recognizer.processString(text)
        return recognizer.dominantLanguage?.rawValue
    }
}

