class HelpPage {
    get helpButton() { return $('li [href="/community/support"]') }
    get stackOverflowText() {return $('#stack-overflow')}

    async clickedHelpButton () {
            await this.helpButton.click()
        }
    async stackOverflowisDisplayed(){
        await this.stackOverflowText.isDisplayed()
    }    
    }
    module.exports = new HelpPage ()