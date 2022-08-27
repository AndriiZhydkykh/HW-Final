class mainPage {

get docsButton () { return $('[class*="navbar"] [href="/docs/gettingstarted"]') }

    async clickButton () {
        await this.docsButton.click()
    }

}
module.exports = new mainPage()