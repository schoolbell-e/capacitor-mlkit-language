import XCTest
@testable import Plugin

class MLKitLanguageTests: XCTestCase {
    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }

    func testDetectLanguage() {

        let implementation = MLKitLanguage()
        let value = "Hello, World!"
        let lang = "en"
        let result = implementation.identifyLanguage(for:value)

        XCTAssertEqual(lang, result)
    }
}
