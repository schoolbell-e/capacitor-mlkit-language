import Foundation

@objc public class MLKitLanguage: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
