class ApiPage {
    get apiButton () { return $('[class*="navbar"][href="/docs/api"]') }
    get contributeButton () { return $('h2 [href="#contribute"] ') }

    async clickedApiButton () {
            await this.apiButton.click()
        }
        
    async clickedContrButton () {
            await this.contributeButton.click()
        }
    }
    module.exports = new ApiPage()