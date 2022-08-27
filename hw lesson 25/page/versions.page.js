class VersionsPage {
    get versionsButton () { return $('[href="/versions"]') }
    get v6documentLink () { return $('[href="https://v6.webdriver.io"]') }
    async clickedversionButton () {
            await this.versionsButton.click()
        }
    async v6documentClick() {
        await this.v6documentLink.click()
    }
    }
    module.exports = new VersionsPage()